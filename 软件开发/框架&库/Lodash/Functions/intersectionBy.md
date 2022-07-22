---
Category: ["Array"]
---
## [[Lodash|_]].intersectionBy(\[arrays\], \[iteratee=[[Lodash|_]]_.[[identity]]\])
### 作用
(Comment:: "使用SameValueZero进行相等比较, 获取给定数组的 ***交集*** ")

此函数为 [[intersection]] 的扩展, 添加了可选参数 iteratee, 用于迭代给定的数组元素, 统一元素间 SameValueZero 相等比较的标准

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| arrays | any[] | false | 需要获取交集的数组, 可以同时提交多个 | [] |
| iteratee | Function | false |比对值迭代函数, 其返回结果会用于 SameValueZero 相等比较     | [[identity]] | 

### 返回值
返回any[]类型结果, 内容为所有给定数组的交集, 结果中的顺序取决于给定的第一个参与比对的数组

### 示例
```javascript
const _ = require('lodash');
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [2.1]
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 1 }], 此处的回调函数参数 'x' 为隐式调用了 [[property]]
```

#Lodash 