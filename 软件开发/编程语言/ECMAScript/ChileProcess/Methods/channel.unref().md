## channel.unref()
### 所属类
[[ChildProcess]]

### 方法说明
此方法使IPC通道不保持父进程的事件循环运行，并允许它在通道打开时完成

### 方法参数
无

### 方法返回值
无

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
child_fork.channel.unref();
```

#ChildProcess/Method