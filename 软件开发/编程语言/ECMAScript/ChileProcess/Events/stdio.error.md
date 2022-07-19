## stdio.error
### 所属类
[[ChildProcess]]

### 事件触发条件
```ad-info
title: 此为子进程stdio的事件, stdin, stdout, stderr 均支持
```

满足以下条件之一时触发
- 底层流由于内部异常/故障无法生成数据
- 流送入了无效数据块

### 事件回调函数
stdio.error事件回调包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|error|Error|异常错误对象|

### 示例
```javascript
const { spawn } = require('child_process');
const command = 'ls';
const args = [ '-al', '/' ];
const child_p = spawn(command, args);
child_p.stdout.on('error', (error) => {
    console.log('Child Process stdout on error: ', error);
});
```

#ChildProcess/Event 