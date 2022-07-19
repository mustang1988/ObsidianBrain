## disconnect
### 所属类
[[ChildProcess]]

### 事件触发条件
当在主进程中调用子进程对象的 [[disconnect()]] 函数或在子进程中调用主进程对象的 [[disconnect()]] 函数时触发

```ad-warning
title: 注意
content: 当触发该事件后, 子进程和主进程将不再允许使用 [[send()]] 函数进行进程间通信, 此时子进程的 [[connected]] 属性将被设置为false
```

### 事件回调函数
disconnect事件回调函数无参数

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('disconnect', () => {
    console.log('Child Process on disconnect');
});
```

#ChildProcess/Event 