## LMOVE source destination from to

### 用途
(Comment:: "从 [[Redis]] 库中一个列表移动最前/后的1个元素到 [[Redis]] 库中另一个列表的最前/后的位置处")

当目标键不存在时, 先创建一个空列表再进行元素的移动

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|source|String|移出元素的列表键||
|destination|String|目标列表的键||
|from|String|从移除元素列表中移除元素的方向|可选值: LEFT \| RIGHT, 前者表示最前端, 后者表示最后端|
|to|String|将元素放入目标列表的方向|可选值: LEFT \| RIGHT, 前者表示最前端, 后者表示最后端|

### 返回值
多数情况下返回String类型的结果
- nil, 当移出元素的键不存在时返回
- 元素移动成功后, 返回被移动的元素

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "one"
(integer) 1
redis:6379> RPUSH mylist "two"
(integer) 2
redis:6379> RPUSH mylist "three"
(integer) 3
redis:6379> LMOVE mylist myotherlist RIGHT LEFT
"three"
redis:6379> LMOVE mylist myotherlist LEFT RIGHT
"one"
redis:6379> LRANGE mylist 0 -1
1) "two"
redis:6379> LRANGE myotherlist 0 -1
1) "three"
2) "one"
```

```ad-danger
title: 异常
当移除元素或移入元素的键对应的值类型不是List时, 返回异常
```bash
redis:6379> SET key1 "value1"
"OK"
redis:6379> LMOVE mylist key1 RIGHT LEFT
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List