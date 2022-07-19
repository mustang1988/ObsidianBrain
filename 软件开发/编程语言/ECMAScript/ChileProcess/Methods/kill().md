## kill(\[signal\])
### 所属类
[[ChildProcess]]

### 方法说明
用于向子进程发送中断信号, 如果有指定可选参数signal, 则子线程会在 [[close]] 事件的回调函数中得到该信号
如果未指定signal参数, 则会在 [[close]] 事件回调函数中返回, 子进程创建时指定的可选参数option中指定的信号或其默认值: 'SIGTERM'

### 方法参数
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|signal|Node.Signal \| String|子进程退出信号|'SIGTERM'|

### 方法返回值
Boolean类型返回值, 子进程中断成功时返回true, 中断失败时返回false

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
console.log(child_fork.kill('SIGTERM')); // true
```

#ChildProcess/Method