## MGET key \[key ...\]

### 用途
(Comment:: "获取 [[Redis]] 库中键对应的值")

#### 时间复杂度
O(n), n为指定键的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的键|可以同时提交多个键|

### 返回值
String[]类型返回结果, 指定键对应值的列表, 顺序与指定的多个键的顺序一致

当指定的多个键中有不存在的, 或者其值不是String类型的, 则对应位置的返回的值为 nil

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET key1 "Hello"
"OK"
redis:6379> SET key2 "World"
"OK"
redis:6379> MGET key1 key2 nonexisting
1) "Hello"
2) "World"
3) (nil)
```

#Redis #Redis/常用命令/String 