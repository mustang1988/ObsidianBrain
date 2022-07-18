## execFileSync(file\[, args\]\[, options\])
### 作用
execFileSync 函数为 [[execFile()]] 函数的同步版本, 执行时会阻塞进程, 直到命令执行结束(不论进程是正常/非正常退出), 若执行时长超过可选参数中设定的超时时长, 则会中断执行.

### 参数说明
|参数名|参数类型|必填?|参数说明|备注|默认值|
|:-|:-|:-|:-|:-|:-|
|command|String|true||||
|args|String[]|false|||[]|
|options|Object|false||[[execFile()#options可选参数]]||

### 返回值
Buffer \| String 类型的命令执行输出的stdout

### 示例
```javascript
const { execFileSync } = require('child_process');
const file = 'ffprobe';
const args = ['-v', '0', '-of', 'json', '-show_streams', '-i', 'test.mp4'];
const buffer = execFileSync(file, args);
console.log('execFileSync Return: ', buffer.toString());
```

#ECMAScript/ChildProcess模块 #多进程  #创建子进程