## exitCode
### 所属类
[[ChildProcess]]

### 说明
该属性标识子进程的退出状态码, 如果子进程尚未退出, 该属性值为null

### 属性类型
Number \| null

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
child_exec.on('close', (code, signal) => {
  console.log(child_exec.exitCode); // 0
});
```

#ChildProcess/Property 