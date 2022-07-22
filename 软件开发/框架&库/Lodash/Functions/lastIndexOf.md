---
Category: ["Array"]
---
## [[Lodash|_]].lastIndexOf(array, value, \[fromIndex=array.length-1\])
### 作用
(Comment:: " ***后前向前*** 检索指定数组中指定元素 ***首次*** 出现的索引")

与 [[indexOf]] 类似, 区别在于 [[indexOf]] 从前向后检索元素, lastIndexOf 为从后向前检索元素

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要检索的数组 |  |
| value | any | true | 需要检索的元素 |  |
| fromIndex | Number | false | 检索起始索引 | 数组长度-1 |

### 返回值
返回Int类型结果
- -1, 指定元素在指定数组中未检索到时返回
- 指定元素在指定数组中检索到时返回, 值为该元素在数组中的索引

### 示例
```javascript
const _ = require('lodash');
_.lastIndexOf([1, 2, 1, 2], 2); // => 3
_.lastIndexOf([1, 2, 1, 2], 2, 2); // => 1
```

#Lodash 