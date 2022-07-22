---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].pullAt(array, \[indexes\])
### 作用
(Comment:: "移除指定数组中指定索引位置的元素")

> [!warning] 注意: pullAt 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要移除元素的原始数组 |  |
| index | Number[] | false | 需要移除的索引数组 | [] | 

### 返回值
返回any[]类型结果, 内容为被移除元素

### 示例
```javascript
const _ = require('lodash');
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
console.log(array); // => ['a', 'c']
console.log(pulled); // => ['b', 'd']
```

#Lodash 