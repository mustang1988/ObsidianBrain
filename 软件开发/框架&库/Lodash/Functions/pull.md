---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].pull(array, \[values\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 从指定数组中移除指定元素")

> [!warning] 注意: pull 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要进行移除元素操作的数组 |  |
| values | any | false | 需要被移除的元素, 可以同时提交多个 | undefined |

### 返回值
返回any[]类型的结果, 为提交的原始数组的引用, 其中的指定元素已被移除

### 示例
```javascript
const _ = require('lodash');
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array); // => ['b', 'b']
```

#Lodash 