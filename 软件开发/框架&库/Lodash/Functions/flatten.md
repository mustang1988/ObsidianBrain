---
Category: ["Array"]
---
## [[Lodash|_]].flatten(array)
### 作用
(Comment:: "将指定数组的层级扁平化 ***一层*** ")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要进行扁平化的数组 |  |

### 返回值
返回any[]类型数组, 数组嵌套层级比原始数组低一级别

### 示例
```javascript
const _ = require('lodash');
_.flatten([1, [2, [3, [4]], 5]]); // => [1, 2, [3, [4]], 5]
```

#Lodash 