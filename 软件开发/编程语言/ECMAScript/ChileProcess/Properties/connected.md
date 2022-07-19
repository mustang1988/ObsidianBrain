## connected
### 所属类
[[ChildProcess]]

### 说明
该属性标识子进程是否仍然可以和主线程进行通信, 如果值为false, 则子进程无法接收主线程发送的消息, 也无法向主线程发送消息

### 属性类型
Boolean

### 示例
```javascript
const { fork } = require('child_process');
const child_fork = fork('dir', ['C:\\']);
console.log(child_fork.connected); // true
child_fork.disconnect();
console.log(child_fork.connected); // false
```

#ChildProcess/Property 