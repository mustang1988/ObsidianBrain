## DECR key

### 用途
(Comment:: "对 [[Redis]] 库中指定键的值进行-1操作")

如果指定键的值不存在则会先新建该键, 设置值为0, 之后再进行-1操作

[[INCR]] 的反操作

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要对值进行-1操作的键||

### 返回值
Int类型返回值, 值为执行-1操作后的值

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "10"
"OK"
redis:6379> DECR mykey
(integer) 9
```

```ad-danger
title: 异常
- 如果指定键的值存在, 但其值不是String类型, 会返回异常
	```bash
	redis:6379> LPUSH listkey 1
	(integer) 1
	redis:6379> DECR listkey
	(error) WRONGTYPE Operation against a key holding the wrong kind of value
	```

- 如果指定键对应的值是字符串类型, 但值无法表示为一个 ***整数*** 时, 会返回异常
	```bash
	redis:6379> SET notnumberkey helloworld
	"OK"
	redis:6379> DECR notnumberkey
	(error) value is not an integer or out of range
	```

- 该操作对数值的范围有限制, 限制为64位带符号整数(-2^63, 2^63-1), 当被操作的值超出此范围时, 会返回异常
	```bash
	redis:6379> SET mykey "234293482390480948029348230948"
	"OK"
	redis:6379> DECR mykey
	(error) value is not an integer or out of range
	```
```

#Redis #Redis/常用命令/String