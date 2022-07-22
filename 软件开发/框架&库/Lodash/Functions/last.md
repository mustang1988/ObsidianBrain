---
Category: ["Array"]
---
## [[Lodash|_]].last(array)
(Comment:: "获取指定数组从前向后数的 ***最后一个*** 元素")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要获取元素的数组 |  |

### 返回值
返回any \| undefined 类型数据
- undefined, 当指定的数组为空数组时返回
- 当给定的数组不是空数组时, 返回值为给定数组中的最后一个元素

### 示例
```javascript
const _ = require('lodash');
_.last([1, 2, 3]); // => 3
```

#Lodash 