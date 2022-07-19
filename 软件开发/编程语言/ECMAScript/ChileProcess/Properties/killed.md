## killed
### 所属类
[[ChildProcess]]

### 说明
该属性标致子进程是否被中断, true为中断, false为未中断

### 属性类型
Boolean

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.killed); // false
```

#ChildProcess/Property 