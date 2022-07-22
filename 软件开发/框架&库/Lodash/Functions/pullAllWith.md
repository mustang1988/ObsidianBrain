---
Category: ["Array"]
MutateReference: true
---
## [[Lodash|_]].pullAllWith(array, values, \[comparator\])
### 作用
(Comment:: "使用指定函数进行相等比较, 从指定数组中移除指定元素")

此函数为 [[pullAll]] 的扩展, 添加自定义比对函数的支持, 可自定义值"相等"的定义

> [!warning] 注意: pullAllWith 函数会修改原始数组的引用

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| array | any[] | true | 需要移除元素的原始数组 |  |
| values | any[] | true | 需要被移除元素组成的数组 |  |
| comparator | Function | false | [[pullAllWith#comparator回调函数]]     | undefined | 

#### comparator回调函数
##### 参数说明
| 参数名 | 参数类型 | 参数说明                           |
| :------ | :-------- | :---------------------------------- |
| arrVal | any      | 遍历自原始数组array中的元素        |
| othVal | any      | 遍历自需要排除的数组values中的元素 | 
##### 返回值
返回Boolean类型值
- true, 认为arrVal与othVal相等时返回
- false, 认为arrVal与othVal不相等时返回

### 返回值
返回any[]类型的结果, 为提交的原始数组的引用, 其中的指定元素已被移除

### 示例
```javascript
const _ = require('lodash');
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

#Lodash 