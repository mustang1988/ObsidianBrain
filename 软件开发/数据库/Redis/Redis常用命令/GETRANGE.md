## GETRANGE key start end

### 用途
(Comment:: "获取 [[Redis]] 库中指定键对应的字符串值的子字符串")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值的键||
|start|Number|字符串值截取起始索引号, 可以是负数, 表示从字符串末尾向前计算索引号, -1表示倒数第一个字符, -2表示倒数第二个字符, 以此类推, start位置的字符 ***包含*** 在最终结果中||
|end|Number|字符串截取结束索引号, 可以是负数, 表示从字符串末尾向前计算索引号, -1表示倒数第一个字符, -2表示倒数第二个字符, 以此类推, end位置的字符 ***包含*** 在最终结果中||

### 返回值
通常情况会返回String类型值, 为截取后的子字符串

当指定的键不存在时返回空字符串

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "This is a string"
"OK"
redis:6379> GETRANGE mykey 0 3
"This"
redis:6379> GETRANGE mykey -3 -1
"ing"
redis:6379> GETRANGE mykey 0 -1
"This is a string"
redis:6379> GETRANGE mykey 10 100
"string"
```

```ad-danger
title: 异常
与 [[GET]] 类似, 如果指定的键对应的值不是字符串格式的, 则抛出异常
```bash
redis:6379> LPUSH notstringkey "Hello"
(integer) 1
redis:6379> GETRANGE notstringkey 0 1
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/通用