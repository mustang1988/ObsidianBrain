## unref()
### 所属类
[[ChildProcess]]

### 方法说明
默认情况下, 主进程总是等待子进程退出后才可以退出, 此防范可以从主进程的事件循环中移除子进程的引用计数, 以允许主进程可以独立于子进程之外单独进行退出, 除非主进程和子进程之前存在IPC通道

### 方法参数
无

### 方法返回值
无

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
child_fork.unref();
```

#ChildProcess/Method