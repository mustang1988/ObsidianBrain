## RPUSHX key element \[element ...\]

### 用途
(Comment:: "向 [[Redis]] 库中指定键的列表 ***前端*** 添加元素")

与 [[RPUSH]] 类似, 不同之处在于当指定的键 ***不存在*** 时, RPUSHX ***不会*** 创建一个空列表再把元素放入, 而是什么都不做

#### 时间复杂度
O(n), n为添加元素的个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要添加元素的列表的键||
|element|String|需要添加的元素|可以同时提交多个|

### 返回值
Int类型返回结果, 值为添加元素后列表的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "World"
(integer) 1
redis:6379> RPUSHX mylist "Hello"
(integer) 2
redis:6379> RPUSHX myotherlist "Hello"
(integer) 0
redis:6379> LRANGE mylist 0 -1
1) "Hello"
2) "World"
redis:6379> LRANGE myotherlist 0 -1
(empty array)
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> RPUSHX key "value2"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List