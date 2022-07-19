## stdin
### 所属类
[[ChildProcess]]

### 说明
该属性为包含子进程运行时stdin信息的可读的流对象

### 属性类型
Stream

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.stdin); // Socket {...}
```

#ChildProcess/Property 