## channel
### 所属类
[[ChildProcess]]

### 说明
该属性为子进程的IPC通道的引用, 如果没有IPC通道, 该属性值为undefined

### 属性类型
TODO

### 示例
```javascript
const { fork, exec } = require('child_process');
const child_exec = exec('ls -al /');
console.log(child_exec.channel);// undefined
// ============================================
const child_fork = fork('./sub_module.js');
console.log(child_fork.channel);
/**
Control {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    [Symbol(kCapture)]: false,
    [Symbol(kPendingMessages)]: []
}
 */
```

#ChildProcess/Property 