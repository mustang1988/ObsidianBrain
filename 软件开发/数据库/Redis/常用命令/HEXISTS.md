## HEXISTS key field

### 用途
(Comment:: "检查 [[Redis]] 库中指定键对应的Hash中是否包含指定字段")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要检查字段的Hash的键||
|field|String|需要检查的字段||

### 返回值
Int类型返回结果
- 0, 指定字段在指定键对应的Hash中不存在或指定键不存在时返回
- 1, 指定字段在指定键对应的Hash中存在时返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "foo"
(integer) 1
redis:6379> HEXISTS myhash field1
(integer) 1
redis:6379> HEXISTS myhash field2
(integer) 0
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HEXISTS key field
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 