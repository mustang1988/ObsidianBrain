---
Category: ["Lang"]
---
## [[Lodash|_]].gt(value, \[, other\])
### 作用
(Comment:: "检查指定值是否大于另一个值, 等同于运算符 \'>\'")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|value|any|true|参与比较的值||
|other|any|true|参与比较的另一个值||

### 返回值
Boolean返回值, 当参与比较的值较大时返回true, 反正返回false

### 示例
```javascript
const _ = require('lodash');
_.gt(3, 1); // => true
_.gt(3, 3); // => false
_.gt(1, 3); // => false
```

#Lodash 