## stdio
### 所属类
[[ChildProcess]]

### 说明
该属性为包含了stdin, stdout, stderr信息的数组, 默认情况下
- stdio[0], 为 stdin
- stdio[1], 为 stdout
- stdio[2], 为 stderr

### 属性类型
Stream[]

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.stdio); // [Socket {...},Socket {...},Socket {...}]
```

#ChildProcess/Property 