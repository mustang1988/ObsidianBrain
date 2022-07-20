## ZCARD key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应SortedSet的长度")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取长度的SortedSet的键||

### 返回值
Int类型返回值, 值为指定键对应SortedSet的长度

如果指定的键不存在, 返回 0

### 示例
```ad-info
title: 正常
```bash
redis:6379> ZADD myzset 1 "one"
(integer) 1
redis:6379> ZADD myzset 2 "two"
(integer) 1
redis:6379> ZCARD myzset
(integer) 2
```

```ad-danger
title: 异常
指定的键对应的值不是SortedSet类型时, 返回异常
```bash
redis:6379> SADD set "a"
(integer) 1
redis:6379> ZCARD set
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/SortedSet