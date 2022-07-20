## STRLEN

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应字符串值的长度")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取长度的字符串的键||

### 返回值
Int类型返回值, 值为指定键对应字符串的长度

当指定键不存在时返回 0

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello world"
"OK"
redis:6379> STRLEN mykey
(integer) 11
redis:6379> STRLEN nonexisting
(integer) 0
```

```ad-danger
title: 异常
指定的键对应的值不是String类型时, 返回异常
```bash
redis:6379> LPUSH key "1"
(integer) 1
redis:6379> STRLEN key
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/String