---
Category: ["Array"]
---
## [[Lodash|_]].difference(array, \[values\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 创建其他给定数组中不包含的数组值的数组")

结果值的顺序和引用由第一个数组决定

不同于 [[pullAll()]] 函数, \_.difference() 函数会创建并返回新的数组引用

### 参数说明
| 参数名 | 参数类型     | 必填? | 参数说明             | 默认值 |
|:------ |:------------ |:----- |:-------------------- |:------ |
| array  | any[]        | true  | 需要进行检查的原数组 |        |
| values | any[] | false | 需要被排除的数组| undefined       |

### 返回值
返回 any[] 类型结果, 内容为检查过滤后的原始数组中的元素

### 示例
```javascript
const _ = require('lodash');
_.difference([2, 1], [2, 3]); // => [1]
```

#Lodash 