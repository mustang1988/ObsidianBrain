## send(message\[, sendHandle\[, options\]\]\[, callback\])

### 作用
此方法用于在主进程和子进程的IPC通道间进行进程间通信, 如果主进程和子进程间没有IPC通道, 即 [[channel]] 属性值为 undefined时, 无法调用

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|message|Object|true|需要发送的进程间通信消息|进程间通信消息会自动进行序列化与反序列化||
|sendHandle|Handle|false|进程间通信消息处理对象|||
|options|Object|false|传递给send函数的可选参数|[[send()#可选参数options]]|{}|
|callback|Function|false|进程间通信消息发送完成后的回调函数|||

#### 可选参数options
|参数名|参数类型|参数说明|默认值|
|:-|:-|:-|:-|
|keepOpen|Boolean|可以在传递net.Socket实例时使用的值, 当设置为true时, 套接字在发送过程中保持打开状态|false|

#### 回调函数callback
该回调函数没有参数

### 返回值
Boolean类型返回, true为进程间通信消息发送成功, false为发送失败

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('./child.js');
console.log(child_fork.send({ str: 'hello world' })); // true
```

#ECMAScript/ChildProcess模块/ChildProcess #Method 