## HSTRLEN key field

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应Hash中指定字段值的长度")

类似 [[STRLEN]]

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值长度的Hash的键||
|field|String|需要获取值长度的Hash中的字段名||

### 返回值
Int类型结果返回
- 0, 当指定键或指定字段在Hash中不存在时返回
- 指定字段值的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> HMSET myhash f1 HelloWorld f2 99 f3 -256
"OK"
redis:6379> HSTRLEN myhash f1
(integer) 10
redis:6379> HSTRLEN myhash f2
(integer) 2
redis:6379> HSTRLEN myhash f3
(integer) 4
```

```ad-danger
title: 异常
指定的键对应的值不是Hash类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> HSTRLEN key field
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Hash 