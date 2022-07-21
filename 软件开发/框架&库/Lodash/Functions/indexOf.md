---
Category: ["Array"]
---
## [[Lodash|_]].indexOf(array, value, \[fromIndex=0\])
### 作用
(Comment:: " ***从前向后*** 检索指定数组中指定元素 ***首次*** 出现的索引")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要检索的数组 |  |
| value | any | true | 需要检索的元素 |  |
| fromIndex | Number | false | 检索起始索引 | 0 |

### 返回值
返回Int类型结果
- -1, 指定元素在指定数组中未检索到时返回
- 指定元素在指定数组中检索到时返回, 值为该元素在数组中的索引

### 示例
```javascript
const _ = require('lodash');
_.indexOf([1, 2, 1, 2], 2); // => 1
_.indexOf([1, 2, 1, 2], 2, 2); // => 3
```

#Lodash 