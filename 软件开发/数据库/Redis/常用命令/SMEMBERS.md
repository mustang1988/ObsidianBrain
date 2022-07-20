## SMEMBERS key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set的所有元素")

#### 时间复杂度
O(n), n为Set的长度

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取成员的键||

### 返回值
String[]类型返回结果, 内容为Set的所有成员

指定的键不存在时, 返回空数组

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "Hello"
(integer) 1
redis:6379> SADD myset "World"
(integer) 1
redis:6379> SMEMBERS myset
1) "Hello"
2) "World"
redis:6379> SMEMBERS notexisting
(empty array)
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SMEMBERS key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 