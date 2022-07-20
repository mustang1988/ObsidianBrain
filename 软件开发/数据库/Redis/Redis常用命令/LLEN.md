## LLEN key

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应列表的长度")

如果指定键对应的值不存在或值为空列表, 返回 0

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取长度的列表对应的键||

### 返回值
Int类型返回值, 值为指定键对应列表的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> LPUSH mylist "World"
(integer) 1
redis:6379> LPUSH mylist "Hello"
(integer) 2
redis:6379> LLEN mylist
(integer) 2
```

```ad-danger
title: 异常
当指定键对应值类型不是List时, 返回异常
```bash
redis:6379> SET nolistkey "hello"
"OK"
redis:6379> LLEN nolistkey
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List