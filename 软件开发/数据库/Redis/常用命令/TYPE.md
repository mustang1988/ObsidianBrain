## TYPE key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应值的类型")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值类型的键||

### 返回值
String类型返回结果
- none, 当指定的键不存在时返回
- 指定键对应值的类型
	- string
	- list
	- set
	- zset
	- hash
	- stream

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET key1 "value"
"OK"
redis:6379> LPUSH key2 "value"
(integer) 1
redis:6379> SADD key3 "value"
(integer) 1
redis:6379> TYPE key1
"string"
redis:6379> TYPE key2
"list"
redis:6379> TYPE key3
"set"
redis:6379> TYPE notexisting
"none"
```

#Redis #Redis/常用命令/通用 