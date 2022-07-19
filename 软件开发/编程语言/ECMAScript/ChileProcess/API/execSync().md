## execSync(command\[, options\])
### 所属模块
[[ChildProcess模块]]

### 作用
execSync 函数是 [[exec()]] 函数的同步版本, 执行时会阻塞进程, 直到命令执行结束(不论进程是正常/非正常退出), 若执行时长超过可选参数中设定的超时时长, 则会中断执行

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|command|String|true|需要执行的命令|||
|options|Object|false|提交给exec函数的可选参数|[[exec()#options可选参数]]||

### 返回值
Buffer \| String 类型的命令执行输出的stdout

### 示例
```javascript
const { execSync } = require('child_process');
const command = ['ffprobe','-v', '0', '-of', 'json', '-show_streams', '-i', 'test.mp4'].join(' ');
const buffer = execSync(command);
console.log('execSync Return: ', buffer.toString());
```

#ChildProcess/API 