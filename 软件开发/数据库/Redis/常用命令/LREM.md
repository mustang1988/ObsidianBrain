## LREM key count element

### 用途
(Comment:: "从 [[Redis]] 库中指定键的列表中按指定方向移除指定数量的指定元素")

#### 时间复杂度
O(n+m), n 为列表长度, m为被移除元素的个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要移除元素的列表的键||
|count|Number|移除的元素个数与移除方向|count>0时, 列表从前往后检索指定元素, 移除count个; count<0时, 列表从后往前检索指定元素, 移除\|count\|个; count= 0时, 移除列表中所有指定元素|
|element|String|需要进行检索和移除的元素||

### 返回值
Int类型返回结果, 值为 ***实际*** 被移除元素的个数

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "hello"
(integer) 1
redis:6379> RPUSH mylist "hello"
(integer) 2
redis:6379> RPUSH mylist "foo"
(integer) 3
redis:6379> RPUSH mylist "hello"
(integer) 4
redis:6379> LREM mylist -2 "hello"
(integer) 2
redis:6379> LRANGE mylist 0 -1
1) "hello"
2) "foo"
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LREM key 0 "value"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List