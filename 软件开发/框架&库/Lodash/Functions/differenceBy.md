---
Category: ["Array"]
---
## [[Lodash|_]].differenceBy(array, \[values\], \[iteratee=[[identity]]\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 创建其他给定数组中不包含的数组值的数组")

结果值的顺序和引用由第一个数组决定

此函数为 [[difference]] 的扩展, 添加了可选参数 iteratee, 用于迭代给定的数组元素, 统一元素间 SameValueZero 相等比较的标准

不同于 [[pullAllBy()]] 函数, \_.differenceBy() 函数会创建并返回新的数组引用

### 参数说明
| 参数名   | 参数类型     | 必填? | 参数说明             | 默认值           |
|:-------- |:------------ |:----- |:-------------------- |:---------------- |
| array    | any[]        | true  | 需要进行检查的原数组 |                  |
| values   | any[] | false | 需要被排除的数组 | undefined        |
| iteratee | Function     | false | 比对值迭代函数, 其返回结果会用于 SameValueZero 相等比较     | [[identity]] | 

### 返回值
返回 any[] 类型结果, 内容为检查过滤后的原始数组中的元素

### 示例
```javascript
const _ = require('lodash');
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2]
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // => [{ 'x': 2 }], 此处的回调函数参数 'x' 为隐式调用了 [[_.property()]]
_.differenceBy(
	[{ x: 2 }, { x: 1, y: 2 }],
	[{ x: 1 }, { x: 100 }],
	(v) => Object.keys(v).length // 数组元素中字段的数量, 以此数量用于 SameValueZero 的相等比较, 字段数量相同即认为相等
); // => [ { x: 1, y: 2 } ]
```

#Lodash 