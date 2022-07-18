## \_.delay(func, wait, \[args\])
### 作用
(Comment:: "延迟指定时间后调用指定函数")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|func|Function|true|需要被延迟调用的函数||
|wait|Number|true|延迟调用时间, 单位: 毫秒||
|args|any[]|false|传递给参数func的调用参数|undefined|

### 返回值
Number类型返回值, 值为timer计时器的id

### 示例
```javascript
const _ = require('lodash');
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
```

#库 #Lodash #Lodash/Function