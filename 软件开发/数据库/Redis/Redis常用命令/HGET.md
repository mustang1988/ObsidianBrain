## HGET key field

### 用途
(Comment:: "从 [[Redis]] 库中获取指定键对应Hash值中指定字段的值")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值数据对应的键||
|field|String|需要获取值的字段名||

### 返回值
多数情况下返回String类型值, 为指定键对应Hash中指定字段的值

当指定的键不存在或指定的字段名在Hash中不存在时, 返回 nil

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field1 "foo"
(integer) 1
redis:6379> HGET myhash field1
"foo"
redis:6379> HGET myhash field2
(nil)
```

#Redis #Redis/常用命令/Hash