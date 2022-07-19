## stdio.data
### 所属类
[[ChildProcess]]

### 事件触发条件
```ad-info
title: 此为子进程stdio的事件, stdin, stdout, stderr 均支持
```

当流关闭时触发

### 事件回调函数
stdio.close事件回调函数没有参数

### 示例
```javascript
const { spawn } = require('child_process');
const command = 'ls';
const args = [ '-al', '/' ];
const child_p = spawn(command, args);
child_p.stdout.on('close', () => {
    console.log('Child Process stdout on close');
});
```

#ChildProcess/Event 