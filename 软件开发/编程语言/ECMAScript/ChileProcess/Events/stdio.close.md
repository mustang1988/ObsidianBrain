## stdio.close
### 所属类
[[ChildProcess]]

### 事件触发条件
```ad-info
title: 此为子进程stdio的事件, stdin, stdout, stderr 均支持
```

当流释放数据片段所有权时触发

### 事件回调函数
stdio.data 事件回调函数包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|chunk|Buffer \| String|流释放的数据片段|

### 示例
```javascript
const { spawn } = require('child_process');
const command = 'ls';
const args = [ '-al', '/' ];
const child_p = spawn(command, args);
child_p.stdout.on('data', (chunk) => {
    console.log('Child Process stdout on data: ', { data: data.toString() });
});
```

#ChildProcess/Event 