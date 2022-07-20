## SUNIONSTORE destination key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set的合集并存入新键中")

此为 [[SUNION]] 的扩展命令, 区别在于, 会将合集结果以Set类型存入新键中

```ad-warning
title: 注意
如果在 SUNIONSTORE 中指定的存储结果的键存在, 会直接覆盖原有的值, 不论原有值是否是Set类型
```

#### 时间复杂度
O(n), n为指定键对应Set中成员的总数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|destination|String|存储合集结果的键||
|key|String|参与合集操作Set的键|可以同时提交多个|

### 返回值
Int类型返回结果, 值为合集结果的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD key1 "a"
(integer) 1
redis:6379> SADD key1 "b"
(integer) 1
redis:6379> SADD key1 "c"
(integer) 1
redis:6379> SADD key2 "c"
(integer) 1
redis:6379> SADD key2 "d"
(integer) 1
redis:6379> SADD key2 "e"
(integer) 1
redis:6379> SUNIONSTORE key key1 key2
(integer) 5
redis:6379> SMEMBERS key
1) "a"
2) "c"
3) "b"
4) "d"
5) "e"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SUNIONSTORE k key1 key2 key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 