## PERSIST key

### 用途
(Comment:: "清除 [[Redis]] 库中指定键上记录的过期时间, 将键变为永久有效")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要清除过期时间的键||

### 返回值
Int类型返回结果
- 0, 键不存在或键未设置过过期时间时返回
- 1, 键的过期时间被成功移除后返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> EXPIRE key 10000
(integer) 1
redis:6379> PERSIST key
(integer) 1
redis:6379> PERSIST key
(integer) 0
redis:6379> PERSIST notexistingkey
(integer) 0
```

#Redis #Redis/常用命令/通用 