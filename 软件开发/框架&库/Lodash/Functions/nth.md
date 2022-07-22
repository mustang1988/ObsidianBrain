---
Category: ["Array"]
---
## [[Lodash|_]].nth(array, \[n=0\])
### 作用
(Comment:: "获取指定数组中指定索引位置的元素")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要获取元素的数组 |  |
| n | Number | false | 需要获取元素在数组中的索引, 可以是负数, 表示从后向前检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推 | 0 |

### 返回值
返回 any \| undefined 类型的结果
- undefined, 当指定的索引在数组中越界时返回
- 当指定的索引在数组中未越界, 返回数组中该索引位置的元素

### 示例
```javascript
const _ = require('lodash');
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1); // => 'b'
_.nth(array, -2); // => 'c';
```

#Lodash 