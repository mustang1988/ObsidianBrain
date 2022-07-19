## pid
### 所属类
[[ChildProcess]]

### 说明
该属性为子进程的PID, 如果子进程派生失败或发生异常, 该属性值为undefined, 同时会触发 [[error]] 事件

### 属性类型
Number \| unrefined

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.pid);
```

#ChildProcess/Property 