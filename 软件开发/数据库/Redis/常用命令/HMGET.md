## HMGET key field \[field ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Hash的字段的值")

与 [[HGET]] 类似, 不同之处在于可以同时获取多个Hash字段的值

#### 时间复杂度
O(n), n为指定的字段名的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的Hash的键||
|field|String|需要获取的Hash字段名|可以同时提交多个|


### 返回值
多数情况下返回String[]类型的结果, 内容为值数组, 顺序按照给定的字段的顺序排列

指定的字段不存在或指定的键不存在时返回 nil

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "Hello"
(integer) 1
redis:6379> HSET myhash field2 "World"
(integer) 1
redis:6379> HMGET myhash field1 field2 nofield
1) "Hello"
2) "World"
3) (nil)
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HMGET key 0
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 