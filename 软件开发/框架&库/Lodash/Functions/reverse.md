---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].reverse(array)
### 作用
(Comment:: "反序数组的所有元素")

> [!warning] 注意: reverse 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要进行反序的数组 |  |

### 返回值
返回any[]类型结果, 内容为反序后的数组

### 示例
```javascript
const _ = require('lodash');
var array = [1, 2, 3];
_.reverse(array); // => [3, 2, 1]
console.log(array); // => [3, 2, 1]
```

#Lodash 