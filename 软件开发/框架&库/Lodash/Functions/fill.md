---
Category: ["Array"]
---
## [[Lodash|_]].fill(array, value, \[start=0\], \[end=array.length\])
### 作用
(Comment:: "使用指定元素在指定索引范围内填充数组")

```ad-warning
title: 注意
填充时, 填充起始位置会被填充, 但结束位置不会填充, 即实际填充范围为 [start, end), 原始数组中对应范围内的已存在元素会被填充元素覆盖
```

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明           | 默认值       |
|:------ |:-------- |:----- |:------------------ |:------------ |
| array  | any[]    | true  | 需要填充元素的数组 |              |
| value  | any      | true  | 用于填充的元素     |              |
| start  | Number   | false | 填充起始索引       | 0            |
| end    | Number   | false | 填充结束索引       | array.length | 

### 返回值
返回any[]类型结果, 内容为填充元素后的数组

### 示例
```javascript
const _ = require('lodash');
var array = [1, 2, 3];
_.fill(array, 'a');
console.log(array); // => ['a', 'a', 'a']
_.fill(Array(3), 2); // => [2, 2, 2]
_.fill([4, 6, 8, 10], '*', 1, 3); // => [4, '*', '*', 10]
```

#Lodash 