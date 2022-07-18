## \_.add(augend, addend)
### 作用
(Comment:: "将两个数值相加, 作用等同于运算符\'+\'")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|augend|Number|true|参与相加的第一个数||
|addend|Number|true|参与相加的第二个数||

### 返回值
Number类型返回值, 值为两数相加的结果

### 示例
```javascript
const _ = require('lodash');
_.add(6, 4); // => 10
```

#Lodash #Lodash/Math 