## SREM key member \[member ...\]

### 用途
(Comment:: "从 [[Redis]] 库中指定键的Set中移除成员")

如果指定的成员不存在，则不做任何操作

如果指定的键不存在会被认为该键对应的是一个空Set, 并不会返回异常

#### 时间复杂度
O(n), n为被移除元素的个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|移除成员Set的键||
|member|String|需要移除的成员|可以同时提交多个|

### 返回值
Int类型返回结果
- 0, 指定的键不存在或指定的成员不存在时返回
- 实际被移除的成员数量

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "one"
(integer) 1
redis:6379> SADD myset "two"
(integer) 1
redis:6379> SADD myset "three"
(integer) 1
redis:6379> SREM myset "one"
(integer) 1
redis:6379> SREM myset "four"
(integer) 0
redis:6379> SMEMBERS myset
1) "three"
2) "two"
redis:6379> SREM notexistingkey any
(integer) 0
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SREM key any
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 