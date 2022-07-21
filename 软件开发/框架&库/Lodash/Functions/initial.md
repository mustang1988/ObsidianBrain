---
Category: ["Array"]
---
## [[Lodash|_]].initial(array)
### 作用
(Comment:: "获取指定数组除 ***最后一个*** 元素外, 其他所有元素组成的片段")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要查询的数组 |  |

### 返回值
返回any[]类型结果, 结果中包含除原始数组最后一个元素外的所有其他元素

### 示例
```javascript
const _ = require('lodash');
_.initial([1, 2, 3]); // => [1, 2]
```

#Lodash 