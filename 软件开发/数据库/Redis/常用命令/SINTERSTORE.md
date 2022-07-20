## SINTERSTORE destination key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Set内容的交集并存储到新键中")

此为 [[SINTER]] 的扩展命令, 区别在于会将交集比对结果以Set类型存入新键中

```ad-warning
title: 注意
如果在 SINTERSTORE 中指定的存储交集结果的键存在, 会直接覆盖原有的值, 不论原有值是否是Set类型
```

#### 时间复杂度
O(n*m), n为所有指定集合中最小的集合长度, m为指定的集合数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|destination|String|存储交集比对结果的键||
|key|String|参与交集比对的集合的键|可以同时提交多个|

### 返回值
Int类型返回结果, 值为交集比对结果的长度


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
redis:6379> SINTERSTORE key key1 key2
(integer) 1
redis:6379> SMEMBERS key
1) "c"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SINTERSTORE k key key1 key2
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 