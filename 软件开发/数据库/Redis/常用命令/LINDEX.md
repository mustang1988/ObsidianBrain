## LINDEX key index

### 用途
(Comment:: "获取 [[Redis]] 库中指定键的列表中指定索引位置的元素")

#### 时间复杂度
O(n), n为指定的索引与列表边缘的距离, 当指定的索引为列表的起始或结尾时, n为1

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|获取元素列表的键||
|index|Number|获取元素在列表中的索引, 从0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推||

### 返回值
多数情况下返回String类型结果
- nil, 指定的索引越界时返回
- 指定索引位置的元素

### 示例
```ad-info
title: 正常
```bash
redis:6379> LPUSH mylist "World"
(integer) 1
redis:6379> LPUSH mylist "Hello"
(integer) 2
redis:6379> LINDEX mylist 0
"Hello"
redis:6379> LINDEX mylist -1
"World"
redis:6379> LINDEX mylist 3
(nil)
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LINDEX key 0
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List