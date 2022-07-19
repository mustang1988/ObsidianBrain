## close
### 所属类
[[ChildProcess]]

### 事件触发条件
当进程结束**且**子进程的stdio流被关闭后触发

### 事件回调函数
close事件回调函数中包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|code|Number \| null|子进程的退出状态码|
|signal|Node.Signal \| null|子进程中断信号|

```ad-info
title: code 与 signal 参数是互斥的, 总是有一个参数的值为null
```

```ad-warning
title: 注意
需要区别 close 事件和 [[exit]] 事件, 当 [[exit]] 事件触发时, stdio流可能并未关闭, 此时并不会触发 close 事件, 只有stdio流关闭后才会触发 close 事件, 即 [[exit]] 和 close 事件的触发可能并不是同时的, 但 close 事件的触发总是会在 [[exit]] 事件触发之后
```

```ad-note
title: 如果有需求需要在子进程运行结束后执行一些处理逻辑, 最好将这部分相关逻辑放到close事件的回调函数中, 不建议放到 [[exit]] 的事件回调中
```

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('close', (code, signal) => {
    console.log('Child Process on close: ', { code, signal });
});
```

#ChildProcess/Event 