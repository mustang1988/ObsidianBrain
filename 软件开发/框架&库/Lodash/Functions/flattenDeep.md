---
Category: ["Array"]
---
## [[Lodash|_]].flattenDeep(array)
### 作用
(Comment:: "将指定数组的层级扁平化为 ***一维数组*** ")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | ang[] | true | 需要扁平化的原始数组 |  |

### 返回值
返回any[]类型的一维数组

### 示例
```javascript
const _ = require('lodash');
_.flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
```

#Lodash 