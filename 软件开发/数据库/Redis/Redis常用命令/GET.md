## GET key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应的值")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的键||

### 返回值
多数情况下会返回String类型的数据, 为指定键对应的字符串值

当指定的键不存在时返回 nil

### 示例
```ad-info
title: 正常
```bash
redis:6379> GET nonexisting
(nil)
redis:6379> SET mykey "Hello"
"OK"
redis:6379> GET mykey
"Hello"
```

```ad-danger
title: 异常
如果指定的键对应的值不是字符串格式的, 则返回异常
```bash
redis:6379> LPUSH listkey hello
(integer) 1
redis:6379> get listkey
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/String