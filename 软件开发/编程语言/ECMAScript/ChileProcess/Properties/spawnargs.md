## spawnargs
### 所属类
[[ChildProcess]]

### 说明
该属性为子进程执行命令的完整参数列表

### 属性类型
String[]

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.spawnargs); // [ 'C:\Windows\system32\cmd.exe', '/d', '/s', '/c', '"dir C:\"' ]
```

#ChildProcess/Property 