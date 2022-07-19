## GETEX key options

### 用途
(Comment:: "获取指定键对应的值, 获取的同时为键设置过期时间")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的键||
|options|String|参考: [[可选过期时间设置]]||

### 返回值
多数情况下返回String类型值, 为键对应的字符串值

当指定的键不存在时返回 nil

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> GETEX mykey
"Hello"
redis:6379> TTL mykey
(integer) -1
redis:6379> GETEX mykey EX 60
"Hello"
redis:6379> TTL mykey
(integer) 60
```

```ad-danger
title: 异常
与 [[GET]] 类似, 如果指定的键对应的值不是字符串格式的, 则抛出异常
```bash
redis:6379> LPUSH nostringkey "Hello"
(integer) 1
redis:6379> GETEX nostringkey EX 10
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/String 