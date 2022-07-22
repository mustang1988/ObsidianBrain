---
Category: ["Array"]
---
## [[Lodash|_]].join(array, \[separator=','\])
### 作用
(Comment:: "使用指定字符串作为分隔符, 将指定数组中的元素用分隔符连接为一个字符串")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要进行字符串连接的数组 |  |
| separator | String | false | 字符串连接分隔符 | "," |

### 返回值
返回String类型结果, 内容为连接了数组元素后的字符串

### 示例
```javascript
const _ = require('lodash');
_.join(['a', 'b', 'c'], '~'); // => 'a~b~c'
```

#Lodash 