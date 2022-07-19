## spawnfile
### 所属类
[[ChildProcess]]

### 说明
该属性为子进程执行的可执行文件名称
- [[fork()]] 创建的子进程, 该属性值为: process.execPath
- [[spawn()]] 创建的子进程, 该属性值为: 可执行文件的名称
- [[exec()]] 创建的子进程, 该属性值为: 子进程启动的Shell的名称

### 属性类型
String

### 示例
```javascript
const { exec } = require('child_process');
const child_exec = exec('dir C:\\');
console.log(child_exec.spawnfile); // 'C:\Windows\system32\cmd.exe'
```

#ChildProcess/Property 