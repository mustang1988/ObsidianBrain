## fork(modulePath\[, args\]\[, options\])
### 作用
fork() 函数是 [[spawn()]] 函数的一个特例, 特殊之处在于返回的子进程将有一个额外的内置通信通道, 子进程允许通过该通信通道, 向父进程发送消息从而实现进程之间通信
进程间通信方法参考: [[send()]]

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|modulePath|String|true|子进程需要执行的js模块路径|||
|args|String[]|false|子进程启动时接收的参数列表||[]|
|options|Object|false|提交给fork函数的可选参数|[[fork()#可选参数options]]||

#### 可选参数options
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|cwd|String \| URL|子进程执行的工作目录|父进程的process.cwd()|
|detached|Boolean|准备子进程独立于父进程运行, 具体行为取决于运行的操作系统平台||
|env|Object|环境变量键值对|父进程的processs.env|
|execPath|String|用于创建子进程的可执行文件||
|execArgv|Strong[]|传递给可执行文件的字符串参数列表|process.execArgv|
|gid|Number|设置执行子进程的用户组ID||
|serialization|String|消息序列化方式, 可选值: 'json', 'advance'|'json'|
|signal|AbortSignal|允许用来中断子进程执行的信号||
|killSignal|String \| Integer|子进程被kill时发出的信号|'SIGTERM'|
|silent|Boolean|如果设置为true, 则子进程的stdin, stdout和stderr将通过管道传递给父进程，否则它们将从父进程继承|false|
|stdio|Stream[] \| String|子进程的stdio配置||
|uid|Number|设置执行子进程的用户ID||
|windowsVerbatimArguments|Boolean|在Windows下不需要引用或转义参数, 在Unix下该参数会被忽略|false|
|timeout|Number|命令执行的超时时长, 单位: 毫秒, 0为不限制|0|

### 返回值
创建的子进程的 [[ChildProcess模块#ChildProcess对象]]

### 示例
```javascript
// main.js 主进程脚本
const { fork } = require('child_process');
const sub_module = './sub_process.js'
const sub_process = fork(sub_module);
// 主进程通过IPC通道发送消息给子进程
sub_process.send({data:'data to sub module'});
// 主进程接收子进程通过IPC通道发送的消息
sub_process.on('message', (msg_from_sub_module) => {
  console.log('Message From sub module: ', msg_from_sub_module);// {data:'data to parent'}
})

// sub_process.js 子进程脚本
// 子进程接收主进程通过IPC通道发送的消息
process.on('message', (msg_from_parent_process) => {
  console.log('Message From parent process: ', msg_from_parent_process);// {data:'data to sub module'}
  // 子进程通过IPC通道发送消息给主进程
  process.send && process.send({data:'data to parent'});
});
```

#ECMAScript/ChildProcess模块 #多进程  #创建子进程