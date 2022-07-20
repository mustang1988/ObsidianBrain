## PEXPIREAT key unix-time-milliseconds options

### 用途
(Comment:: "为 [[Redis]] 库中的键设置过期时间")

与 [[EXPIREAT]] 类似, 不同之处在于PEXPIREAT设置的过期时间点为***毫秒***时间戳

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要设置过期时间的键||
|unix-time-milliseconds|Number|过期时间点的毫秒时间戳||
|options||参考: [[EXPIRE可选参数]]|可选参数, ***Redis版本7.0及以上版本才支持此参数***|

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
redis:6379> PEXPIREAT mykey 1555555555005
(integer) 1
```

#Redis #Redis/常用命令/通用 