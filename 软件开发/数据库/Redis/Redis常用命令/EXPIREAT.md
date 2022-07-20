## EXPIREAT key unix-time-seconds options

### 用途
(Comment:: "为 [[Redis]] 库中的键设置过期时间")

类似 [[EXPIRE]] 的作用, 区别在于EXPIREAT是将过期时间设置到某个指定的秒时间戳, 当系统时间到达此时间戳时, 会将键进行过期处理

与 [[PEXPIREAT]] 类似, 不同之处在于EXPIREAT设置的过期时间点为 ***秒*** 时间戳

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要设置过期时间的键||
|unix-time-seconds|Number|过期时间点的UTC秒时间戳||
|options||参考: [[EXPIRE可选参数]]|可选参数|

### 返回值
Int类型返回结果
- 0, 因为不符合给定的 [[EXPIRE可选参数]] 的条件, 未更新键的过期时间时返回
- 1, 过期时间成功设置后返回


### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> EXISTS mykey
(integer) 1
redis:6379> EXPIREAT mykey 1293840000
(integer) 1
redis:6379> EXISTS mykey
(integer) 0
```

#Redis #Redis/常用命令/通用 