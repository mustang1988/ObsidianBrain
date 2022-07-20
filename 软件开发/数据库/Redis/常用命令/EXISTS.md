## EXISTS key \[key...\]

### 用途
(Comment:: "检查 [[Redis]] 库中指定的键在是否存在")

#### 时间复杂度
O(n), n为指定的键的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要进行检查的键|可以同时提交多个需要检查
的键|

### 返回值
Int类型返回结果, 值为指定键中存在的键的数量

```ad-warning
title: 注意
当指定参数中存在重复的键, 返回结果的数量并不会将重复的键做过滤处理
例如, 提交多次相同的键, 返回的结果并不是1
```bash
redis:6379> EXISTS key1 key1 key1
(integer) 3
```

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET key1 "Hello"
"OK"
redis:6379> EXISTS key1
(integer) 1
redis:6379> EXISTS nosuchkey
(integer) 0
redis:6379> SET key2 "World"
"OK"
redis:6379> EXISTS key1 key2 nosuchkey
(integer) 2
redis:6379> EXISTS key1 key1 key1
(integer) 3
```

#Redis #Redis/常用命令/通用 