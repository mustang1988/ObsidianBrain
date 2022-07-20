## LSET key index element

### 用途
(Comment:: "修改 [[Redis]] 库中指定键对应的列表中指定位置的元素")

#### 时间复杂度
O(n), n为列表长度

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要修改元素的列表的键||
|index|Number|列表中需要修改元素值的索引|索引0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推|
|element|String|修改后的目标元素值||

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
redis:6379> LSET mylist 0 "four"
"OK"
redis:6379> LSET mylist -2 "five"
"OK"
redis:6379> LRANGE mylist 0 -1
1) "four"
2) "five"
3) "three"
```

```ad-danger
title: 异常
- 指定的键对应的值不是List类型时, 返回异常
	```bash
	redis:6379> SET key "value"
	"OK"
	redis:6379> LSET key 0 "hello"
	(error) WRONGTYPE Operation against a key holding the wrong kind of value
	```
- 指定的键不存在时, 返回异常
	```bash
	redis:6379> LSET notexistingkey 0 "hello"
	(error) no such key
	```
```

#Redis #Redis/常用命令/List