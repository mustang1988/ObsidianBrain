---
Category: ["Array"]
---
## [[Lodash|_]].findLastIndex(array, \[predicate=[[identity]]\], \[fromIndex=0\])
### 作用
(Comment:: " ***从后向前*** 检索指定数组, 获取数组中 ***首个*** 符合指定条件的元素在数组中的索引")

与 [[findIndex]] 类似, 区别在于 [[findIndex]] 对数组的检索方向是 ***从前向后***, 而 findIndex 的检索方向是 ***从后向前***

### 参数说明
| 参数名    | 参数类型 | 必填? | 参数说明       | 默认值       |
|:--------- |:-------- |:----- |:-------------- |:------------ |
| array     | any[]    | true  | 需要检索的数组 |              |
| predicate | Function | false |     [[findLastIndex#predicate回调函数]]           | [[identity]] |
| fromIndex | Number   | false | 检索起始索引   | 0            | 

#### predicate回调函数
##### 参数
| 参数名 | 参数类型 | 参数说明 |
|:--- |:--- |:--- |
| value | any | 每次迭代得到的需要检索数组中的元素 |

##### 返回值
返回Boolean类型结果
- true, 当当前迭代到的元素符合检索条件时返回, 同时会结束对数组的检索和迭代
- false, 当当前迭代到的元素不符合检索条件时返回

### 返回值
返回Int类型结果
- -1, 未检索到任何符合条件的元素时返回
- 检索到符合条件的元素时返回该元素在数组中的索引

### 示例
```javascript
const _ = require('lodash');
var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
  { user: 'mike', active: true },
];
_.findIndex(users, (user) => {
	return user.user == 'fred';
}); // => 1
_.findIndex(users, (user) => {
	return user.user == 'mike';
}); // => 3
```

#Lodash 