## message
### 所属类
[[ChildProcess]]

### 事件触发条件
主进程或子进程通过 [[send()]] 函数发送进程间通信消息时触发

### 事件回调函数
message事件回调函数包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|message|Object \| String \| any|自动反序列化后的进程间通信消息|
|sendHandle|Socket \| net.Socket \| net.Server \| undefined|消息处理对象|

```ad-warning
title: 注意
content: 进程间通信消息会经过自动的序列化和反序列化转换, 所以在回调函数中接收到的反序列化后的内容 ***可能*** 与消息发送方发送的原始内容存在不同, 尤其是设置了 [[send()#可选参数options]] { serialization: 'advanced' } 时, 该高级序列化格式因为不是JSON的超集, 存在可能的类型兼容问题, 会导致部分消息属性经过序列化处理后属性丢失或结构变化
```

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('message', (message, handle) => {
    console.log('Child Process on message: ', { message, handle });
});
```

#ChildProcess/Event 