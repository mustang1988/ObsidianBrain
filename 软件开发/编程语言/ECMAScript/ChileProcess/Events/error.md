## error
### 所属类
[[ChildProcess]]

### 事件触发条件
发生以下情况之一时, 触发该事件
- 无法派生进程
- 无法终中断进程
- 向子进程发送消息失败

### 事件回调函数
error事件回调函数包含以下参数
|参数名|参数类型|参数说明|
|:-|:-|:-|
|error|Error|异常错误对象|

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('error', (error) => {
    console.log('Child Process on error: ', error);
});
```

#ChildProcess/Event 