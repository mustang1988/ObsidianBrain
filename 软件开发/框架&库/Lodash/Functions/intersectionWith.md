---
Category: ["Array"]
---
## [[Lodash|_]].intersectionWith(\[arrays\], \[comparator\])
### 作用
(Comment:: "使用指定函数进行相等比较, 获取给定数组的 ***交集*** ")

此函数为 [[intersection]] 的扩展, 添加自定义比对函数的支持, 可自定义值"相等"的定义

### 参数说明
| 参数名 | 参数类型 | 必填? | 参数说明 | 默认值 |
|:--- |:--- |:--- |:--- |:--- |
| arrays | any[] | false | 需要获取交集的数组, 可以同时提交多个 | [] |
| comparator | Function | false | [[intersectionWith#comparator回调函数]] | undefined |

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
返回any[]类型结果, 内容为所有给定数组的交集, 结果中的顺序取决于给定的第一个参与比对的数组

### 示例
```javascript
const _ = require('lodash');
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.intersectionWith(objects, others, _.isEqual); // => [{ 'x': 1, 'y': 2 }]
```

#Lodash 