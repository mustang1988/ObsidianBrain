---
Category: ["Array"]
---
## [[Lodash|_]].concat(array, \[values\])
### 作用
(Comment:: "创建一个新的数组，将数组与任何其他数组或值连接起来")

### 参数说明
|参数名|参数类型|必填?|参数说明|
|:-|:-|:-|:-|
|concat|any[]|true|被连接的原始数组|
|values|any[] \| any|false|参与连接的其他数组或值|

```ad-info
title: 个人理解
- 当values参数为数组时, _.concat() 函数相当于
	```typescript
	function MyConcat(arr1: any[], arr2: ang[]){
		return [...arr1, ...arr2];
	}
	```
- 当values参数为值时, _.concat() 函数相当于
	```typescript
	function MyConcat(arr1: any[], arr2: ang){
		return [...arr1, arr2];
	}
	```
```

### 返回值
返回 any[] 类型结果返回, 值为新创建的数组, 包含原始数组和所有参与连接的数组和值

### 示例
```javascript
const _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
```

#Lodash 