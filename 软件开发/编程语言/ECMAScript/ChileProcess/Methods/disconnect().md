## disconnect()
### 所属类
[[ChildProcess]]

### 方法说明
用于关闭主进程和子进程之间的IPC通道, 允许子进程在没有其他连接保持活动状态时优雅地退出, 调用后主进程和子进程的 [[connected]] 属性值均会被设置为false

### 方法参数
无

### 方法返回值
无

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
console.log(child_fork.connected); // true
child_fork.disconnect();
console.log(child_fork.connected); // false
```

#ChildProcess/Method