---
Category: ["Array"]
---
## [[Lodash|_]].intersection(\[arrays\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 获取给定数组的 ***交集*** ")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| arrays | any[] | false | 需要获取交集的数组, 可以同时提交多个 | [] |

### 返回值
返回any[]类型结果, 内容为所有给定数组的交集, 结果中的顺序取决于给定的第一个参与比对的数组

### 示例
```javascript
const _ = require('lodash');
_.intersection([2, 1], [2, 3]); // => [2]
```

#Lodash 