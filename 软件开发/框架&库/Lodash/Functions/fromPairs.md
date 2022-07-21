---
Category: ["Array"]
---
## [[Lodash|_]].fromPairs(pairs)
### 作用
(Comment:: "将键值对格式的二位数组转换为对象")

[[toPairs]] 的反操作

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| pairs | any[\[String, any\]] | true | 需要转换的键值对格式的二维数组 |  |

### 返回值
返回Object类型结果, 对象属性名来自给定二维数组元素中的第一个元素, 属性值来自给定二维数组元素的第二个元素

### 示例
```javascript
const _ = require('lodash');
_.fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
```

#Lodash 