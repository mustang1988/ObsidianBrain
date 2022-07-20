## APPEND key value

### 用途
(Comment:: "向 [[Redis]] 库中, 指定键对应的字符串类型值后追加指定的字符串内容")

当指定的键不存在时, 会新建该键, 并设置其值为空字符串, 然后对其后追加内容

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要追加内容值对应的键||
|value|String|需要追加的字符串内容||

### 返回值
Int类型返回值, 值为追加内容后字符串值的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> EXISTS mykey
(integer) 0
redis:6379> APPEND mykey "Hello"
(integer) 5
redis:6379> APPEND mykey " World"
(integer) 11
redis:6379> GET mykey
"Hello World"
```

```ad-danger
title: 异常
指定的键对应的值不是String类型时, 返回异常
```bash
redis:6379> LPUSH key value
(integer) 1
redis:6379> APPEND key "hello"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/String