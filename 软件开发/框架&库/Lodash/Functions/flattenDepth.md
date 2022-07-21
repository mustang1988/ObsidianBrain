---
Category: ["Array"]
---
## [[Lodash|_]].flattenDepth(array, \[depth=1\])
### 作用
(Comment:: "将指定数组扁平化指定层级")

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要扁平化的原始数组 |  |
| depth | Number | false | 扁平化层级数 | 1 | 

### 返回值
返回any[]类型数组, 数组层级比原始数组低depth级

### 示例
```javascript
const _ = require('lodash');
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2); // => [1, 2, 3, [4], 5]
```

#Lodash 