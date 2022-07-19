## EXPIRE key seconds options

### 用途
(Comment:: "设置 [[Redis]] 库中键的过期时间")

过期时间结束后, 键会被自动删除[^自动删除]

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要设置过期时间的键||
|seconds|Number|过期时间, 单位 秒||
|options||参考: [[EXPIRE可选参数]]|可选参数|

### 返回值
Int类型返回值
- 0, 因为不符合给定的 [[EXPIRE可选参数]] 的条件, 未更新键的过期时间时返回
- 1, 过期时间成功设置后返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> EXPIRE mykey 10
(integer) 1
redis:6379> TTL mykey
(integer) 10
redis:6379> SET mykey "Hello World"
"OK"
redis:6379> TTL mykey
(integer) -1
redis:6379> EXPIRE mykey 10 XX
(integer) 0
redis:6379> TTL mykey
(integer) -1
redis:6379> EXPIRE mykey 10 NX
(integer) 1
redis:6379> TTL mykey
(integer) 10
```

#Redis #Redis/常用命令/通用 

[^自动删除]: 键过期后不再可以被访问, 其值可能并未被删除, 真正的删除是由 [[Redis]] 控制的, 在内存不足时或周期性的释放内存时才会删除