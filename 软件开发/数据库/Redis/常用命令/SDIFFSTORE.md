## SDIFFSTORE destination key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set与其他键对应Set的差集并存入 [[Redis]] 库中")

此为 [[SDIFF]] 的扩展命令, 区别在于, 会将差集比对结果以Set类型存入新的键中

```ad-warning
title: 注意
如果在 SDIFFSTORE 中指定的存储差集结果的键存在, 会直接覆盖原有的值, 即时原有值类型不是Set, 也会覆盖
```

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|destination|String|存储差集结果的键||
|key|String|需要进行差集比对的基Set的键||
|key|String|需要进行差集比对的其他Set的键|可以同时提交多个|

### 返回值
Int类型返回结果, 值为差集比对结果的长度

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
redis:6379> SDIFFSTORE key key1 key2
(integer) 2
redis:6379> SMEMBERS key
1) "a"
2) "b"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET k value
"OK"
redis:6379> SDIFFSTORE kk k key1 key2
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 