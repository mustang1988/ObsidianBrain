## LTRIM key start stop

### 用途
(Comment:: "裁剪 [[Redis]] 库中指定键对应的列表, 只保留指定索引范围内的元素")

#### 时间复杂度
O(n), n为列表中被移除元素的个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要裁剪元素的列表的键||
|start|Number|裁剪起始点索引|索引0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推|
|stop|Number|裁剪结束点索引|索引0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推|

### 返回值
总是返回String类型结果: "OK"

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "one"
(integer) 1
redis:6379> RPUSH mylist "two"
(integer) 2
redis:6379> RPUSH mylist "three"
(integer) 3
redis:6379> LTRIM mylist 1 -1
"OK"
redis:6379> LRANGE mylist 0 -1
1) "two"
2) "three"
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LTRIM key 0 -1
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List