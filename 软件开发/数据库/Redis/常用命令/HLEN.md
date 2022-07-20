## HLEN key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Hash的长度")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取Hash长度的键||

### 返回值
Int类型返回结果
- 指定的键不存在时, 返回0
- 指定的键存在时, 返回对应Hash的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "Hello"
(integer) 1
redis:6379> HSET myhash field2 "World"
(integer) 1
redis:6379> HLEN myhash
(integer) 2
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HLEN key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 