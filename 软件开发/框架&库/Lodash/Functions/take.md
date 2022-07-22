---
Category: ["Array"]
MutateReference: false
---
## [[Lodash|_]].take(array, \[n=1\])
### 作用
(Comment:: "获取指定数组前端的n个元素组成的片段")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要获取元素片段的原始数组 |  |
| n | Number | false | 需要获取的元素数量 | 1 |

### 返回值
返回any[]类型结果, 内容为指定获取数量的元素, 当指定的元素数量超过数组长度时, 返回整个原始数组

### 示例
```javascript
const _ = require('lodash');
_.take([1, 2, 3]); // => [1]
_.take([1, 2, 3], 2); // => [1, 2]
_.take([1, 2, 3], 5); // => [1, 2, 3]
_.take([1, 2, 3], 0); // => []
```

#Lodash 