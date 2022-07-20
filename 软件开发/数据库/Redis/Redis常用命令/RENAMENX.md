## RENAMENX # key newkey

### 用途
(Comment:: "当新键不存在时, 重命名 [[Redis]] 库中的键")

与 [[RENAME]] 类似, 不同之处在于, 重命名前会先判断新的键是否存在, 只有在新键不存在时才执行重命名, 避免了 [[RENAME]] 时可能存在的删除已存在的新键导致的性能问题

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要重命名的键||
|newkey|String|重命名后的键||

### 返回值
Int类型返回结果
- 0, 当新键已存在, 跳过重命名操作时返回
- 1, 新建不存在, 完成重命名后返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> SET myotherkey "World"
"OK"
redis:6379> RENAMENX mykey myotherkey
(integer) 0
redis:6379> GET myotherkey
"World"
```

#Redis #Redis/常用命令/通用 