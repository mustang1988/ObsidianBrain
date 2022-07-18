## \_.concat(array, \[values\])
### 作用
(Comment:: "创建一个新的数组，将数组与任何其他数组或值连接起来")

### 参数说明
|参数名|参数类型|必填?|参数说明|
|:-|:-|:-|:-|
|concat|Array|true|被连接的原始数组|
|values|Array \| any|false|参与连接的其他数组或值|

### 返回值
Array类型结果返回, 值为新创建的数组, 包含原始数组和所有参与连接的数组和值

### 示例
```javascript
const _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]
```

#Lodash #Lodash/Array