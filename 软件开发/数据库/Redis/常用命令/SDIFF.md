## SDIFF key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set与其他键对应Set的差集")

#### 时间复杂度
O(n), n为所有参与差集比对的Set中成员的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要进行差集比对的基Set的键||
|key|String|需要进行差集比对的其他Set的键|可以同时提交多个|

### 返回值
String[]类型返回结果, 内容为仅在第一个参数对应Set中出现, 但未在其他任何给定键对应Set中出现的成员

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD key1 "a"
(integer) 1
redis:6379> SADD key1 "b"
(integer) 1
redis:6379> SADD key1 "c"
(integer) 1
redis:6379> SADD key2 "c"
(integer) 1
redis:6379> SADD key2 "d"
(integer) 1
redis:6379> SADD key2 "e"
(integer) 1
redis:6379> SDIFF key1 key2
1) "a"
2) "b"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SDIFF key1 key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
redis:6379> SDIFF key key2
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 