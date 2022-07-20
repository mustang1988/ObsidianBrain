## SPOP key \[count\]

### 用途
(Comment:: "从 [[Redis]] 库中指定键的Set中随机取出并删除成员")

#### 时间复杂度
O(n), n为指定的元素个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|取出成员Set的键||
|count|Number|取出元素的个数|可选参数, 默认值: 1|

### 返回值
多数情况下返回String类型结果, 值为被取出的成员, 指定的键不存在时, 返回 nil

当制定了count参数, 且值不为1时, 返回String[]类型结果, 内容为被取出的成员

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "one"
(integer) 1
redis:6379> SADD myset "two"
(integer) 1
redis:6379> SADD myset "three"
(integer) 1
redis:6379> SPOP myset
"two"
redis:6379> SMEMBERS myset
1) "one"
2) "three"
redis:6379> SADD myset "four"
(integer) 1
redis:6379> SADD myset "five"
(integer) 1
redis:6379> SPOP myset 3
1) "four"
2) "one"
3) "three"
redis:6379> SMEMBERS myset
1) "five"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SPOP key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 