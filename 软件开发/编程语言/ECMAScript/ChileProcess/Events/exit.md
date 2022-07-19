## exit
### 所属类
[[ChildProcess]]

### 事件触发条件
子进程结束时触发, 不论正常结束还是异常结束亦或者是中断结束, 均会触发

### 事件回调函数
exit事件回调函数包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|code|Number \| null|子进程的退出状态码|
|signal|Node.Signal \| null|子进程中断信号|

```ad-warning
title: 注意
content: 当触发exit事件时, 子进程的stdio流是有 ***可能*** 仍然出于打开的状态, 此时是不会触发 [[close]] 事件的
```

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('exit', (code, signal) => {
    console.log('Child Process on exit: ', { code, signal });
});
```

#ChildProcess/Event 