## HSET key field value \[ field value ...\]

### 用途
(Comment:: "为 [[Redis]] 库中指定键对应的Hash设置字段和值")

当指定的键不存在时会先创建一个该键的空Hash, 再设置字段值

当指定键对应的Hash中指定字段已经存在, 会使用新的值覆盖原有值

#### 时间复杂度
O(n), n为需要设置的字段的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要设置值的Hash的键||
|field|String|需要设置的Hash字段名|可以同时提交多个|
|value|String|需要设置的Hash字段值|可以同时提交多个|

### 返回值
Int类型结果返回, 值为Hash中新增字段的数量

```ad-warning
title: 注意
返回的是 ***新增*** 字段的数量, 如果Hash中已经存在指定字段, 此时该字段的值会被更新, 但是返回结果会是不包含的
```

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "Hello"
(integer) 1
redis:6379> HGET myhash field1
"Hello"
redis:6379> HSET myhash field1 "World"
(integer) 0
redis:6379> HGET myhash field1
"World"
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HSET key field "value"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 