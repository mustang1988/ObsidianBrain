## HINCRBY key field increment

### 用途
(Comment:: "为 [[Redis]] 库中指定键对应的Hash的指定字段值加进行+n操作")

如果指定键对应的hash中不包含指定的字段, 则先创建该字段, 并设置值为0, 再进行加进行+n操作

如果指定的键不存在时, 会先创建该键, 并设置指定字段值为0, 再进行加进行+n操作

与 [[INCRBY]] 操作类似

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要执行操作的Hash的键||
|field|String|需要执行+n操作的字段名||
|increment|Number|需要增加的数值|可以是负值, 表示-n操作|

### 返回值
Int类型返回结果, 值为执行+n操作后, 指定字段的值

### 示例
```ad-info
title: 正常
```bash
redis:6379> HSET myhash field 5
(integer) 1
redis:6379> HINCRBY myhash field 1
(integer) 6
redis:6379> HINCRBY myhash field -1
(integer) 5
redis:6379> HINCRBY myhash field -10
(integer) -5
```

```ad-danger
title: 异常
- 指定的键对应的值不是Hash类型时, 返回异常
	```bash
	redis:6379> SET key "value"
	"OK"
	redis:6379> HINCRBY key field 1
	(error) WRONGTYPE Operation against a key holding the wrong kind of value
	```
- 该操作对数值的范围有限制, 限制为64位带符号整数(-2^63, 2^63-1), 当被操作的值超出此范围时, 会返回异常
	```bash
	redis:6379> HSET hash field "9223372036854775807"
	(integer) 0
	redis:6379> HGET hash field
	"9223372036854775807"
	redis:6379> HINCRBY hash field 1
	(error) increment or decrement would overflow
	```
- 指定字段的值无法表示为一个 **整数** 时, 会返回异常
	```bash
	redis:6379> HSET hash field "helloworld"
	(integer) 0
	redis:6379> HINCRBY hash field 10
	(error) hash value is not an integer
	```
```

#Redis #Redis/常用命令/Hash 