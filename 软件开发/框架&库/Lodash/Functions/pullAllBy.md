---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].pullAllBy(array, values, \[iteratee=[[Lodash|_]]_.[[identity]]\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 从指定数组中移除指定元素")

此函数为 [[pullAll]] 函数的扩展, 添加了可选参数 iteratee, 用于迭代给定的数组元素, 统一元素间 SameValueZero 相等比较的标准

> [!warning] 注意: pullAllBy 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要移除元素的原始数组 |  |
| values | any[] | true | 需要被移除元素组成的数组 |  |
| iteratee | Function | false | 比对值迭代函数, 其返回结果会用于 SameValueZero 相等比较 | [[identity]] |

### 返回值
返回any[]类型的结果, 为提交的原始数组的引用, 其中的指定元素已被移除

### 示例
```javascript
const _ = require('lodash');
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array); // => [{ 'x': 2 }]
```

#Lodash 