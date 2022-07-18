## \_.identity(value)
### 作用
(Comment:: "返回接收到的第一个参数")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|value|any|true|任意值||

### 返回值
返回调用方输入的第一个参数值

### 示例
```javascript
const _ = require('lodash');
var object = { 'a': 1 };
console.log(_.identity(object) === object);
// => true
```

#Lodash #Lodash/Util