## SUNION key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set的合集")

#### 时间复杂度
O(n), n为指定键对应Set中成员的总数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取合集Set的键|可以同时提交多个|

### 返回值
String[]类型返回结果, 内容为指定键Set的合集成员

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
redis:6379> SUNION key1 key2
1) "a"
2) "c"
3) "b"
4) "d"
5) "e"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SUNION key1 key2 key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 