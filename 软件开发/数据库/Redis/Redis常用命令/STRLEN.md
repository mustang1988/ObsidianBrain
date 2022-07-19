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

### 示例
```bash
redis:6379> SET mykey "Hello world"
"OK"
redis:6379> STRLEN mykey
(integer) 11
redis:6379> STRLEN nonexisting
(integer) 0
```

#Redis #Redis/常用命令/String