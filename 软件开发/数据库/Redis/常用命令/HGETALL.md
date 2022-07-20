## HGETALL key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Hash的所有字段值")

#### 时间复杂度
O(n), n为Hash的长度

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的Hash的键||

### 返回值
String[]类型结果返回
- 当指定的键不存在时, 返回空数组
- 指定的键存在时, 返回数组的内容为Hash的键值

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "Hello"
(integer) 1
redis:6379> HSET myhash field2 "World"
(integer) 1
redis:6379> HGETALL myhash
1) "field1"
2) "Hello"
3) "field2"
4) "World"
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HGETALL key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 