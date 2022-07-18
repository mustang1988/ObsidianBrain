## spawn(command\[, args\]\[, options\])
### 作用
使用指定的command命令和args参数, 创建子进程, 如果未指定args, 其值默认为空数组

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|command|String|true|需要执行的命令|||
|args|String[]|false|提交给命令的参数||[]|
|options|Object|false|提交给spawn函数的可选参数|[[spawn()#options可选参数]]||

#### 可选参数options
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|cwd|String \| URL|子进程执行的工作目录|父进程的process.cwd()|
|env|Object|环境变量键值对|父进程的processs.env|
|argv0|String|显式设置发送给子进程的argv[0]的值, 当未指定command时使用此参数来设置||
|stdio|Stream[] \| String|子进程的stdio配置||
|detached|Boolean|准备子进程独立于父进程运行, 具体行为取决于运行的操作系统平台||
|uid|Number|设置执行子进程的用户ID||
|gid|Number|设置执行子进程的用户组ID||
|serialization|String|消息序列化方式, 可选值: 'json', 'advance'|'json'|
|shell|Boolean \| String|如果设置为true, 则会使用默认Shell来执行文件, 默认Shell在Unix下为: '/bin/sh', 在Windows下为: process.env.ComSpec, 或使用指定的字符串值来指定所使用的Shell|false|
|windowsVerbatimArguments|Boolean|在Windows下不需要引用或转义参数, 在Unix下该参数会被忽略|false|
|windowsHide|Boolean|在Windows平台上隐藏子进程的控制台窗口|false|
|signal|AbortSignal|允许用来中断子进程执行的信号||
|timeout|Number|命令执行的超时时长, 单位: 毫秒, 0为不限制|0|
|killSignal|String \| Integer|子进程被kill时发出的信号|'SIGTERM'|

### 返回值
创建的子进程的 [[ChildProcess模块#ChildProcess对象]]

### 示例
```javascript
const { spawn } = require('child_process');
const command = 'ffprobe';
const args = ['-v', '0', '-of', 'json', '-show_streams', '-i', 'test.mp4']
const child_p = spawn(command, args);
child_p.on('close', (code, signal) => {
  console.log('Spawn on close: ', { code, signal });
});
```

#ECMAScript/ChildProcess模块 #多进程  #创建子进程