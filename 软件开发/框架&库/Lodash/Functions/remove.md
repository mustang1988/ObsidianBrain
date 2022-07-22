---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].remove(array, \[predicate=[[Lodash|_]].[[identity]]\])
### 作用
(Comment:: "使用指定函数进行比较, 移除指定数组中符合函数比对结果的元素")

与 [[filter]] 类似, 区别在于 [[filter]] 不会修改原始数组引用, 而 remove 会改变原始数组的引用

> [!warning] 注意: remove 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要移除元素的原始数组 |  |
| predicate | Function | false | [[remove#predicate回调函数]] |[[identity]]  |

#### predicate回调函数
##### 参数说明
|参数名|参数类型|参数说明|
|:-|:-|:-|
|value|any|当前遍历的集合元素|
|index \| key|Number \| String|当前元素的的索引或键|
|collection|Collection|当前遍历的集合/数组|

##### 返回值
应返回一个Boolean类型值
- true, 当前遍历到的元素会被移除
- false, 当前遍历到的元素不会被移除

### 返回值
返回any[]类型结果, 内容为被移除元素

### 示例
```javascript
const _ = require('lodash');
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array); // => [1, 3]
console.log(evens); // => [2, 4]
```

#Lodash 