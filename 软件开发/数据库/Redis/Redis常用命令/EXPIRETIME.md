## EXPIRETIME key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键过期时间点的秒时间戳")

与 [[PEXPIRETIME]] 类似, 不同之处在于EXPIRETIME返回的是键过期时间点的 ***秒*** 时间戳

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取过期时间点的键||

### 返回值
Int类型返回结果
- -2, 当指定的键不存在时返回
- -1, 当指定的键存在, 但未设置过期时间时返回
- 键的过期时间点的秒时间戳, 当且仅当键存在且已设置过过期时间时返回


### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> EXPIREAT mykey 33177117420
(integer) 1
redis:6379> EXPIRETIME mykey
(integer) 33177117420
redis:6379> EXPIRETIME notexistingkey
(integer) -2
redis:6379> SET notexpirekey "World"
"OK"
redis:6379> EXPIRETIME notexpirekey
(integer) -1
```

#Redis #Redis/常用命令/通用 