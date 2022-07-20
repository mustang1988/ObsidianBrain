## LINSERT key options pivot element

### 用途
(Comment:: "向 [[Redis]] 库中指定键对应列表的指元素的前/后面插入新元素")

#### 时间复杂度
O(n), n为找到指定的元素需要经历的次数, 当指定的元素位于列表的起始或结尾时, n为1

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要插入元素的列表的键||
|options|String|插入元素的方向|可选值: BEFORE \| AFTER|
|pivot|String|需要检索的元素||
|element|String|需要插入的元素||

### 返回值
Int类型返回结果
- -1, 指定的检索元素在列表中未检索到时返回
- 插入成功后列表的长度

### 示例
```ad-info
title: 正常
```bash
redis:6379> RPUSH mylist "Hello"
(integer) 1
redis:6379> RPUSH mylist "World"
(integer) 2
redis:6379> LINSERT mylist BEFORE "World" "There"
(integer) 3
redis:6379> LRANGE mylist 0 -1
1) "Hello"
2) "There"
3) "World"
redis:6379> LINSERT mylist BEFORE "aaa" "bbb"
(integer) -1
```

```ad-danger
title: 异常
指定的键对应的值不是List类型时, 返回异常
```bash
redis:6379> SET key "value"
"OK"
redis:6379> LINSERT key AFTER "value" "hello"
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/List