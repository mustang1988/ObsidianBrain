---

---
# 核心依赖组件
[Piscina](https://github.com/piscinajs/piscina)

# 使用方式
下面以IO密集型磁盘操作为示例, 在EggJS项目中使用线程池优化制定磁盘目录下总文件数量和总文件大小统计功能

## 1. 创建自定义线程池Worker类
在app/worker目录下新建app/worker/disk_scan.js

其在构造函数中, 构造了一个大小在[CPU核心数/2, CPU核心数]区间内浮动的线程池, 在EggJS项目启动后自动初始化

线程池执行逻辑位于app/runner/disk_scan_runner.js文件中

```javascript
// #region NodeJS 内置模块引用
const { join } = require('path');
const { BroadcastChannel } = require('worker_threads');
const EventEmitter = require('events');
const { cpus } = require('os');
// #endregion
// #region 第三方依赖引用
const Piscina = require('piscina');
const { v4: uuidv4 } = require('uuid');
// #endregion

/**
 * 指定磁盘路径扫描Worker
 *
 * 通过config中配置的customLoader在服务启动时自动加载到app.worker上
 *
 * 调用方式
 *
 * app.worker.diskScan.run(path, [timout]);
 */
// #region 指定磁盘路径扫描Worker
class DiskScanWorker {
  /**
   * @param {Egg.Application} app Egg 应用实例
   */
  constructor(app) {
    this.app = app;
    // 指定磁盘路径扫描线程池配置
    this.pool = new Piscina({
      // runner脚本路径 app/runner/disk_scan_runner.js
      filename: join(app.baseDir, 'app', 'runner', 'disk_scan_runner.js'),
      useAtomics: false,
      minThreads: Math.ceil(cpus().length / 2),
      maxThreads: cpus().length,
      idleTimeout: 10000,
    });
    // 默认超时中断时间, 单位毫秒, 可由环境变量 DISK_SCAN_WORKER_TIMOUT 覆盖
    this.default_timeout = app.config.worker.disk_scan.timout;
    this.logger = app.getLogger('diskScanLogger');
  }

  /**
   * 通过预设线程池, 启动指定磁盘路径扫描线程任务
   * @param {String} path 需要执行扫描的磁盘路径
   * @param {Number} [timout=null] 扫描超时时间, 单位: 毫秒, 默认值: 当前类的 default_timeout 属性值
   * @return {Promise<{count: Number|null, size: Number|null, path: String, isDirectory: Boolean, error: Error|null, uuid: String}>} 路径扫描结果
   * - count: 路径下文件数量, 发生异常或超时中断时固定为null, 路径不存在时固定为0
   * - size: 路径下文件总大小, 发生异常或超时中断时固定为null, 路径不存在时固定为0
   * - path: 路径
   * - isDirectory: 是否为目录, 发生异常或超时中断时固定为false
   * - error: 错误信息, 为null表示无错误
   * - uuid: 任务uuid
   */
  async run(path, timout = null) {
    const uuid = uuidv4();
    const actual_timeout = timout || this.default_timeout;

    const channel = new BroadcastChannel(uuid); // 使用uuid作为runner和当前worker的通信通道
    const abort_emitter = new EventEmitter(); // 用于超时后发送runner中断信号

    // 任务执行定时器, runner超时未返回结果, 则向runner发送中断信号
    const timeout_handler = setTimeout(() => {
      abort_emitter.emit('abort');
      this.logger.error('[DiskScanWorker.run()] [%s] disk scan worker path = %s, timout = %s', uuid, path, actual_timeout);
    }, actual_timeout);

    // runner 发送的消息接收
    channel.onmessage = event => {
      const { data } = event;
      this.logger.info('[DiskScanWorker.run()] [%s] disk scan worker msg = %s', uuid, JSON.stringify(data));
    };

    try {
      this.logger.info('[DiskScanWorker.run()] [%s] start disk scan worker, path = %s', uuid, path);
      const runner_result = await this.pool.run({ path, uuid }, { signal: abort_emitter });
      this.logger.info('[DiskScanWorker.run()] [%s] end disk scan worker, runner_result = %s', uuid, JSON.stringify(runner_result));
      // runner在规定时间内完成, 关闭中断计时器, 关闭runner通信通道, 返回结果
      clearTimeout(timeout_handler);
      channel.close();
      return {
        uuid,
        ...runner_result,
        error: null,
      };
    } catch (error) {
      if (error.constructor.name === 'AbortError') {
        // 超时中断, 返回指定Error到调用方
        return {
          uuid,
          count: null,
          size: null,
          path,
          isDirectory: false,
          error: new Error('timout', { cause: path }),
        };
      }
      return {
        uuid,
        count: null,
        size: null,
        path,
        isDirectory: false,
        error,
      };
    }
  }
}
module.exports = DiskScanWorker;
// #endregion
```

## 2. 创建磁盘扫描Runner
在app/runner目录下创建disk_scan_runner.js

disk_scan_runner通过BroadcastChannel与上层的Worker类可以实时通信

```javascript
const { BroadcastChannel } = require('worker_threads');
const { existsSync, statSync, readdirSync } = require('fs');
const { join } = require('path');

/**
 * 执行指定路径的文件数量, 文件大小扫描任务
 * @param {{path: String, uuid: String}} runner_params 路径扫描任务参数
 * @return {{count: Number, size: Number, path: String, isDirectory: Boolean}} 路径扫描结果
 */
module.exports = runner_params => {
  const { path: path_will_scan, uuid } = runner_params;
  const channel = new BroadcastChannel(uuid);
  channel.postMessage({
    action: 'start',
    ...runner_params,
    message: 'runner start',
  });

  // 指定路径不存在
  if (!existsSync(path_will_scan)) {
    channel.postMessage({
      action: 'log',
      ...runner_params,
      message: 'path not exists',
    });
    channel.postMessage({
      action: 'end',
      ...runner_params,
      message: 'runner end',
    });
    channel.close();
    return {
      count: 0,
      size: 0,
      path: path_will_scan,
      isDirectory: false,
    };
  }

  const stat_of_input_path = statSync(path_will_scan);
  // 指定路径是文件
  if (stat_of_input_path.isFile()) {
    channel.postMessage({
      action: 'log',
      ...runner_params,
      message: 'path is a file',
    });
    channel.postMessage({
      action: 'end',
      ...runner_params,
      message: 'runner end',
    });
    channel.close();
    return {
      count: 1,
      size: stat_of_input_path.size,
      path: path_will_scan,
      isDirectory: false,
    };
  }

  // 指定路径是目录
  let total_count = 0;
  let total_size = 0;
  channel.postMessage({
    action: 'log',
    ...runner_params,
    message: 'path is a dir',
  });
  /**
   * 递归扫描指定目录
   * @param {String} dir 目录路径
   */
  function scanDir(dir) {
    let current_dir_count = 0;
    let current_dir_size = 0;
    const list = readdirSync(dir);
    for (const f of list) {
      const f_path = join(dir, f);
      const f_stat = statSync(f_path);
      if (f_stat.isDirectory()) {
        scanDir(f_path);
      } else {
        current_dir_count += 1;
        current_dir_size += f_stat.size;
        total_count += 1;
        total_size += f_stat.size;
      }
    }
    channel.postMessage({
      action: 'log',
      ...runner_params,
      message: 'running in: ' + dir + ', count: ' + current_dir_count + ', size: ' + current_dir_size,
    });
  }
  // 开始递归扫描
  scanDir(path_will_scan);

  channel.postMessage({
    action: 'end',
    ...runner_params,
    message: 'runner end',
  });
  channel.close();
  return {
    count: total_count,
    size: total_size,
    path: path_will_scan,
    isDirectory: true,
  };
};

```

## 3. 配置EggJS自定义Loader
在config/config.default.js中添加自定义Loader
```javascript
customLoader: {
	// 异步任务Worker加载配置
	worker: {
		directory: 'app/worker',
		inject: 'app',
	},
}
```

## 4. 在service逻辑中使用worker执行磁盘扫描
```javascript
// #region NodeJS 内置模块引用
const { join } = require('path');
// endregion
// #region 第三方依赖引用
const { Service } = require('egg');
const { isNil } = require('lodash');
// endregion

/**
 * 基于磁盘的资产文件管理服务
 */
class DiskAssetService extends Service {
  /**
   * 对指定路径进行文件大小和总文件数扫描
   *
   * 对指定磁盘路径进行文件大小和总文件数扫描使用了Worker线程池, 详见: app/worker/disk_scan.js
   *
   * @param {String[]} paths 提交扫描的路径列表
   * @return {Promise<{count: Number, size: Number, path: String, isDirectory: Boolean, error: Error|null, uuid: String}[]>} 扫描结果列表列表
   * - count: 路径下文件数量, 发生异常或超时中断时固定为null, 路径不存在时固定为0
   * - size: 路径下文件总大小, 发生异常或超时中断时固定为null, 路径不存在时固定为0
   * - path: 路径
   * - isDirectory: 是否为目录, 发生异常或超时中断时固定为false
   * - error: 错误信息, 为null表示无错误
   * - uuid: 任务uuid
   */
  // #region 对指定路径进行文件大小和总文件数扫描
  async scanPath(paths) {
    const { app, ctx, logger } = this;
    const { user } = ctx;

    const path_will_scan_array = paths.map(p => join(user?.storage_path, p));
    const scan_results = await Promise.all(path_will_scan_array.map(p => app.worker.diskScan.run(p)));
    logger.info('[DiskAssetService.scanPath()] request scan path: %o, scan result: %o', paths, scan_results);
    const return_result = scan_results.map(worker_return => {
      const { error, uuid } = worker_return;
      if (!isNil(error)) {
        return {
          count: null,
          size: null,
          path: error?.cause?.replace(user?.storage_path, '')
            .replace(/\\/g, '/'),
          isDirectory: null,
          error: ctx.__('error.disk_scan_timout'),
          uuid,
        };
      }
      return {
        count: worker_return.count,
        size: worker_return.size,
        path: worker_return.path
          .replace(user?.storage_path, '')
          .replace(/\\/g, '/'),
        isDirectory: worker_return.isDirectory,
        error: null,
        uuid,
      };
    });

    return return_result;
  }
  // #endregion
}
module.exports = DiskAssetService;
```