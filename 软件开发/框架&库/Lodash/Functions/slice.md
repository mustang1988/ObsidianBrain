---
Category: ["Array"]
MutateReference: false
---
## [[Lodash|_]].slice(array, \[start=0\], \[end=array.length\])
### 作用
(Comment:: "获取指定数组在指定索引范围内的片段")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要获取片段的原始数组 |  |
| start | Number | false | 片段起始索引, 可以是负数, 表示从后向前检索, -1 表示倒数第一个元素, -2表示倒数第二个元素, 以此类推 | 0 |
| end | Number | false | 片段结束索引, 可以是负数, 表示从后向前检索, -1 表示倒数第一个元素, -2表示倒数第二个元素, 以此类推 | 原始数组长度 |

### 返回值
返回any[]类型结果, 内容为[start, end)索引区间内的原始数组中的元素

### 示例
```javascript
const _ = require('lodash');
var array = [1, 2, 3];
const res = _.slice(array, 0, -2);
console.log(res); // => [ 1 ]
const res2 = _.slice(array, -3, -1);
console.log(res2); // => [ 1, 2 ]
const res3 = _.slice(array, -100, 100);
console.log(res3); // => [ 1, 2, 3 ]
```

#Lodash 