## channel.ref()
### 所属类
[[ChildProcess]]

### 方法说明
如果之前调用过 [[unref()]] 方法, 则此方法使IPC通道保持父进程的事件循环运行

### 方法参数
无

### 方法返回值
无

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
child_fork.channel.ref();
```

#ChildProcess/Method