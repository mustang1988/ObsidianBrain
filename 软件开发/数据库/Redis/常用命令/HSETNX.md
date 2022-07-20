## HSETNX key field value

### 用途
(Comment:: "为 [[Redis]] 库中指定键对应的Hash设置字段和值")

与 [[HSET]] 作用相似, 不同之处在于, HSETNX会先检查指定的字段是否已经存在, 如果不存在, 才会向Hash中设置字段和值, 如果字段已经存在, 则不做任何处理

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要设置值的Hash的键||
|field|String|需要设置的Hash字段名||
|value|String|需要设置的Hash字段值||

### 返回值
Int类型返回结果
- 0, 指定的字段在Hash中已经存在, 未执行任何操作时返回
- 1, 指定的字段添加成功时返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSETNX myhash field "Hello"
(integer) 1
redis:6379> HSETNX myhash field "World"
(integer) 0
redis:6379> HGET myhash field
"Hello"
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HSETNX key field "value"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 