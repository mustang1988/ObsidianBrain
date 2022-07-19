## DEL key \[key ...\]

### 用途
(Comment:: "从 [[Redis]] 库中删除指定的键, 如果指定的键不存在, 则会将其忽略")

#### 时间复杂度
O(n), n为被删除的键的数量, 单个键被删除的时间复杂度为: O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要从库中删除的键|可以同时提交多个被需要删除的键|

### 返回值
Int类型返回值, 值为实际被删除的键的数量

### 示例
```bash
redis:6379> SET key1 "Hello"
"OK"
redis:6379> SET key2 "World"
"OK"
redis:6379> DEL key1 key2 key3
(integer) 2
```

#Redis #Redis/常用命令/通用