## SMISMEMBER key member \[member ...\]

### 用途
(Comment:: "检查  [[Redis]] 库中指定的值是否是指定键对应Set的成员")

类似 [[SISMEMBER]] , 区别在于 SMISMEMBER 支持同时检查多个值

#### 时间复杂度
O(n), n为参与检查的元素个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要检索的Set的键||
|member|String|需要检查的元素|可以同时提交多个|

### 返回值
Int[]类型返回结果, 内容为每个成员的检查结果, 顺序与提交的参数顺序一致
- 0, 指定元素不是Set的成员
- 1, 指定元素是Set的成员

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "one"
(integer) 1
redis:6379> SADD myset "one"
(integer) 0
redis:6379> SMISMEMBER myset "one" "notamember"
1) (integer) 1
2) (integer) 0
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SMISMEMBER key value value
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 