## exec(command\[, options\]\[, callback\])
### 作用
开启一个Shell子进程, 然后在该Shell中执行命令, 传递给exec函数的命令字符串由Shell直接处理

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|command|String|true|需要执行的命令|命令参数与提交给命令之间用空格隔开||
|options|Object|false|提交给exec函数的可选参数|[[exec()#option可选参数]]||
|callback|Function|false|执行结束后的回调函数|[[exec()#callback回调函数]]||

> 注意, 因为exec函数会先创建Shell, 然后将命令交由Shell执行, 因此命令及其参数中的诸如Shell通配符, I/O重定向等操作均会执行, 在调用exec前请务必对输出的命令参数进行严格的检查, 以防止出现恶意参数或脚本被注入和执行

#### 可选参数options
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|cwd|String \| URL|子进程执行的工作目录|父进程的process.cwd()|
|env|Object|环境变量键值对|父进程的processs.env|
|encoding|String|命令的编码字符集|'utf8'|
|shell|String|用来执行命令的Shell|Unix系统下为: '/bin/sh', Windows系统下为: process.env.ComSpec|
|signal|AbortSignal|允许用来中断子进程执行的信号||
|timeout|Number|命令执行的超时时长, 单位: 毫秒, 0为不限制|0|
|maxBuffer|Number|stdout和stderror允许的最大数据字节数|1024\*1024|
|killSignal|String \| Integer|子进程被kill时发出的信号|'SIGTERM'|
|uid|Number|设置执行子进程的用户ID||
|gid|Number|设置执行子进程的用户组ID||
|windowsHide|Boolean|在Windows平台上隐藏子进程的控制台窗口|false|

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
const { exec } = require('child_process');
const command = ['ls', '-al', '/'].join(' ');
exec(command, (error, stdout, stderr) => {
  console.log('Child Process exec(): ', { error, stdout: stdout.toString(), stderr: stderr.toString() });
});
```
---
#ECMAScript/ChildProcess模块 #多进程 #创建子进程