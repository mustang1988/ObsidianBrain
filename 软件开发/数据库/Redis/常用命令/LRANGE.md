## LRANGE key start stop

### 用途
(Comment:: "获取 [[Redis]] 库中指定键的列表中指定索引范围内的的元素")

#### 时间复杂度
O(s+n), s为检索起始索引, n为需要返回的元素个数

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取元素的列表的键||
|start|Number|检索起始索引|索引起始值为0, 可以是负数, -1表示最后一个元素, -2表示倒数第二个元素, 以此类推|
|stop|Number|检索结束索引|索引起始值为0, 可以是负数, -1表示最后一个元素, -2表示倒数第二个元素, 以此类推|

### 返回值
返回String[]类型结果
- 当start索引越界, 返回空数组
- 当stop索引越界, 会返回列表的所有元素组成的数组
- 指定的键不存在时, 返回空数组
- 返回指定start到stop范围内的列表中的元素组成的数组

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
redis:6379> LRANGE mylist 0 0
1) "one"
redis:6379> LRANGE mylist -3 2
1) "one"
2) "two"
3) "three"
redis:6379> LRANGE mylist -100 100
1) "one"
2) "two"
3) "three"
redis:6379> LRANGE mylist 5 10
(empty array)
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LRANGE key 0 -1
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List