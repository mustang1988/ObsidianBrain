---
Category: ["Collection"]
---
## [[Lodash|_]].find(collection, \[predicate=[[Lodash|_]].[[identity]]\], \[fromIndex=0\])
### 作用
(Comment:: " ***从前向后*** 检索指定集合, 获取集合中 ***首个*** 符合指定条件的元素")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|collection|Collection|true|需要进行遍历查找的集合||
|predicate|Function|false|[[find#集合遍历回调函数predicate]]|[[identity]]|
|fromIndex|Number|false|遍历检索的起始索引|0|

#### 集合遍历回调函数predicate
##### 参数说明
|参数名|参数类型|参数说明|
|:-|:-|:-|
|value|any|当前遍历的集合元素|
|index \| key|Number \| String|当前元素的的索引或键|
|collection|Collection|当前遍历的集合|

##### 返回值
应返回一个Boolean类型值, 当返回值为true时, 会返回该集合元素, 反之则继续遍历集合中的下一个元素

### 返回值
any类型值返回, 值为集合中***第一个***使得predicate回调函数返回结果为true的集合元素, 若集合中不存在使得predicate回调函数返回结果为true的元素, 则返回undefined

### 示例
```javascript
const _ = require('lodash');

```

#Lodash