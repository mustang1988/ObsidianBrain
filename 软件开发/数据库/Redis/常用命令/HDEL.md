## HDEL key field \[field ...\]

### 用途
(Comment:: "移除 [[Redis]] 库中指定键对应Hash的字段")

如果指定的字段在Hash中不存在, 将会忽略

如果指定的键不存在, 则视为被操作的值为一个空Hash

#### 时间复杂度
O(n), n为被移除的字段数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要移除字段的Hash的键||
|field|String|需要移除的字段|可以同时提交多个|

### 返回值
Int类型返回结果, 值为被移除的字段数量

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "foo"
(integer) 1
redis:6379> HDEL myhash field1
(integer) 1
redis:6379> HDEL myhash field2
(integer) 0
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HDEL key "key"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 