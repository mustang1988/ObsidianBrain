## execFile(file\[, args\]\[, options\]\[, callback\])
### 所属模块
[[ChildProcess模块]]

### 作用
execFile() 函数与 [[exec()]] 函数类似, 不同点在于:
- 默认情况下 ***不会*** 生成Shell, 而是将指定的可执行文件直接作为一个新进程生成, 这使得它比 [[exec()]] 略高效
- 因为不生成Shell, 所以不支持I/O重定向和文件通配符等行为

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|file|String|true|需要执行的文件|||
|args|String[]|false|提交给file文件的执行参数||[]|
|options|Object|false|提交给execFile函数的可选参数|||
|callback|Function|false|执行结束后的回调函数||||

#### 可选参数options
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|cwd|String \| URL|子进程执行的工作目录|父进程的process.cwd()|
|env|Object|环境变量键值对|父进程的processs.env|
|encoding|String|命令的编码字符集|'utf8'|
|timeout|Number|命令执行的超时时长, 单位: 毫秒, 0为不限制|0|
|maxBuffer|Number|stdout和stderror允许的最大数据字节数|1024\*1024|
|killSignal|String \| Integer|子进程被kill时发出的信号|'SIGTERM'|
|uid|Number|设置执行子进程的用户ID||
|gid|Number|设置执行子进程的用户组ID||
|windowsHide|Boolean|在Windows平台上隐藏子进程的控制台窗口|false|
|windowsVerbatimArguments|Boolean|在Windows下不需要引用或转义参数, 在Unix下该参数会被忽略|false|
|shell|Boolean \| String|如果设置为true, 则会使用默认Shell来执行文件, 默认Shell在Unix下为: '/bin/sh', 在Windows下为: process.env.ComSpec, 或使用指定的字符串值来指定所使用的Shell|false|
|signal|AbortSignal|允许用来中断子进程执行的信号||

#### callback回调函数
##### 参数说明
|参数名|参数类型|参数说明|
|:-|:-|:-|
|error|Error \| null|命令执行是产生的异常对象|
|stdout|Stream \| null|命令执行时的标准输出|
|stderror|Stream \| null|命令执行时的异常输出|

### 返回值
创建的子进程的 [[ChildProcess模块#ChildProcess对象]]

### 示例
```javascript
const { execFile } = require('child_process');
const file = 'ffprobe';
const args = ['-v', '0', '-of', 'json', '-show_streams', '-i', 'test.mp4'];
execFile(file, args, (error, stdout, stderr) => {
  console.log('Child Process execFile(): ', {error, stdout, stderr});
});
```

#ChildProcess/API 