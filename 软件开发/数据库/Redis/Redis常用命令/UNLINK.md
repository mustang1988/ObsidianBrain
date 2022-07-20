## UNLINK key \[key...\]

### 用途
(Comment:: "从 [[Redis]] 库中删除指定的键, 如果指定的键不存在, 则会将其忽略")

与 [[DEL]] 类似, 不同之处在于, UNKINK 会在不同线程执行内存回收, 是非阻塞的, 而 [[DEL]] 是阻塞的

#### 时间复杂度
O(n), n为删除的键数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要从库中删除的键|可以同时提交多个需要删除的键|

### 返回值
Int类型返回值, 值为实际被删除的键的数量

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET key1 "Hello"
"OK"
redis:6379> SET key2 "World"
"OK"
redis:6379> UNLINK key1 key2 key3
(integer) 2
```

#Redis #Redis/常用命令/通用 