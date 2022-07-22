---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].pullAll(array, values)
### 作用
(Comment:: "使用SameValueZero进行相等比较, 从指定数组中移除指定元素")

与 [[pull]] 类似, 区别在于 [[pull]] 接收需要移除的元素作为参数, pullAll 接收需要移除元素的数组作为参数

> [!warning] 注意: pullAll 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要移除元素的原始数组 |  |
| values | any[] | true | 需要被移除的元素组成的数组 |  | 

### 返回值
返回any[]类型的结果, 为提交的原始数组的引用, 其中的指定元素已被移除

### 示例
```javascript
const _ = require('lodash');
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pullAll(array, ['a', 'c']);
console.log(array); // => ['b', 'b']
```

#Lodash 