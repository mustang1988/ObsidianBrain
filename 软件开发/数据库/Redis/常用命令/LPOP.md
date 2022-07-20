## LPOP key \[count\]

### 用途
(Comment:: "从 [[Redis]] 库中指定键对应的列表 ***前端*** 移除元素")

类似 [[RPOP]] , 区别在于移除元素的方向, [[RPOP]] 是从列表 ***后端*** 移除元素, LPOP是从列表 ***前端*** 移除元素

#### 时间复杂度
O(n), n为移除的元素个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要移除元素的列表的键||
|count|Number|需要移除的元素个数|可选参数, 默认值: 1|

### 返回值
多数情况下返回String类型的结果
- nil, 当指定的键不存在时或指定键的列表为空时返回
- 当未指定count可选参数时, 且指定键的列表不为空, 元素成功移除后返回被移除的元素
- 当指定了count可选参数, 且指定的count值不为1时, 元素成功移除后返回被移除的元素组成数组

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "one" "two" "three" "four" "five"
(integer) 5
redis:6379> LPOP mylist
"one"
redis:6379> LPOP mylist 2
1) "two"
2) "three"
redis:6379> LRANGE mylist 0 -1
1) "four"
2) "five"
redis:6379> RPUSH list1 "1"
(integer) 1
redis:6379> LPOP list1
"1"
redis:6379> LPOP list1
(nil)
redis:6379> LPOP mylist 0
(empty array)
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LPOP key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List