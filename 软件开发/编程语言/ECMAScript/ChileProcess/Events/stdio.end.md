## stdio.end
### 所属类
[[ChildProcess]]

### 事件触发条件
```ad-info
title: 此为子进程stdio的事件, stdin, stdout, stderr 均支持
```

当流关中没有可消费数据时触发

### 事件回调函数
stdio.end事件回调函数没有参数

### 示例
```javascript
const { spawn } = require('child_process');
const command = 'ls';
const args = [ '-al', '/' ];
const child_p = spawn(command, args);
child_p.stdout.on('end', () => {
    console.log('Child Process stdout on end');
});
```

#ChildProcess/Event 