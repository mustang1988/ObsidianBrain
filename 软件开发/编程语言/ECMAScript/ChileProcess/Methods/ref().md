## ref()
### 所属类
[[ChildProcess]]

### 方法说明
在调用 [[unref()]] 函数后调用此方法, 可以为子进程恢复被删除的在主进程事件循环中的引用计数, 以强制主进程在子进程退出后才可以退出

### 方法参数
无

### 方法返回值
无

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
child_fork.ref();
```

#ChildProcess/Method