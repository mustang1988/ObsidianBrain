---
Category: ["Array"]
---
## [[Lodash|_]].differenceWith(array, \[values\], \[comparator\])
### 作用
(Comment:: "使用指定函数进行相等比较, 创建其他给定数组中不包含的数组值的数组")

此函数为 [[difference]] 的扩展, 添加自定义比对函数的支持, 可自定义值"相等"的定义

不同于 [[pullAllWith]] 函数, differenceWith 函数会创建并返回建新的数组引用, 不会影响原始数组的引用

### 参数说明
| 参数名     | 参数类型 | 必填? | 参数说明             | 默认值    |
|:---------- |:-------- |:----- |:-------------------- |:--------- |
| array      | any[]    | true  | 需要进行检查的原数组 |           |
| values     | any[]    | false | 需要被排除的数组     | undefined |
| comparator | Function | false | [[differenceWith#comparator回调函数]]     | undefined | 

#### comparator回调函数
##### 参数说明
| 参数名 | 参数类型 | 参数说明                           |
| :------ | :-------- | :---------------------------------- |
| arrVal | any      | 遍历自原始数组array中的元素        |
| othVal | any      | 遍历自需要排除的数组values中的元素 | 
##### 返回值
返回Boolean类型值
- true, 认为arrVal与othVal相等时返回, 此时arrVal值被认为需要从原始数组array中排除, 不会出现在最终返回结果中
- false, 认为arrVal与othVal不相等时返回, 此时arrVal值不会从原始数组array中排除, 会出现在最终返回结果中

### 返回值
返回 any[] 类型结果, 内容为检查过滤后的原始数组中的元素

### 示例
```javascript
const _ = require('lodash');
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual); // => [{ 'x': 2, 'y': 1 }]
_.differenceWith(
  [
    { x: 2, y: 1 },
    { x: 1, y: 3 },
  ],
  [{ x: 3, y: 1 }],
  (arrVal, othVal) => {
    return arrVal.x + arrVal.y == othVal.x + othVal.y; // 自定义 数组元素的x字段值+y字段值相等, 认为两个对象相同, 应该被过滤掉
  }
); // => [ { x: 2, y: 1 } ]
```

#Lodash  