## SADD key member \[member ...\]

### 用途
(Comment:: "向 [[Redis]] 库中指定键的Set添加成员")

如果指定的成员已经在Set中, 则会被忽略

如果指定的键不存在, 会先创建该键后再存入成员

#### 时间复杂度
O(n), n为实际加入Set的成员数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要添加成员的键||
|member|String|需要加入Set的成员|可以同时提交多个|

### 返回值
Int类型返回结果, 值为成功添加的成员数量

```ad-warning
title: 注意
返回的数值是成功添加的成员的数量, 如果提交的多个成员中有已经在Set中存在的, 那么返回的结果是不等于提交的成员数量的
```

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "Hello"
(integer) 1
redis:6379> SADD myset "World"
(integer) 1
redis:6379> SADD myset "World"
(integer) 0
redis:6379> SMEMBERS myset
1) "Hello"
2) "World"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> SADD key "value2"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 