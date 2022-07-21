---
Category: ["Array"]
---
## [[Lodash|_]].dropRightWhile(array, \[predicate=[[identity]]\])
### 作用
(Comment:: "创建指定数组的片段, 片段中 ***不包含*** 原始数组中 ***后端*** 的部分元素")

此函数为 [[dropRight]] 的扩展, 添加自定义条件回调函数, 不再忽略固定数量的元素, 而是根据回调函数的返回结果决定忽略/终止忽略元素

与 [[dropWhile]] 函数类似, 区别在于 [[dropWhile]] 函数会忽略原始数组 ***前端*** 部分元素, dropRightWhile() 函数则会忽略原始数组 ***后端*** 部分元素

当迭代函数 predicate ***首次*** 返回 false 时, 终止 predicate 函数的迭代和元素的忽略

### 参数说明
| 参数名    | 参数类型 | 必填? | 参数说明               | 默认值           |
|:--------- |:-------- |:----- |:---------------------- |:---------------- |
| array     | any[]    | true  | 需要获取片段的原始数组 |                  |
| predicate | Function | false | [[dropRightWhile#predicate回调函数]]                       | [[identity]] | 

#### predicate回调函数
##### 参数说明
| 参数名 | 参数类型 | 参数说明                               |
|:------ |:-------- |:-------------------------------------- |
| value  | any      | 当前迭代的原始数组中的元素             |
| index  | Number   | 当前迭代的原始数组中元素在数组中的索引 |
| array  | any[]   | 原始数组                               | 

##### 返回值
返回Boolean类型返回值
- true, 当前元素需要被忽略时返回
- false, 当需要终止元素忽略时返回

### 返回值
返回any[]类型结果, 内容为原始数组的片段

### 示例
```javascript
const _ = require('lodash');
var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
  { user: 'mike', active: true },
];
_.dropRightWhile(users, (value, index, array) => {
  return !value.active;
}); // => [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false }, { user: 'mike', active: true } ]

_.dropRightWhile(users, (value, index, array) => {
  return value.active;
}); // => [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
```

#Lodash 