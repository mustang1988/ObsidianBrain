## MSETNX key value \[ key value ...\]

### 用途
(Comment:: "批量存入多个键值对到 [[Redis]] 库中, 当且仅当所有给定的键都不存在时才执行入库")

与 [[MSET]] 类似, 但是加入了键存在性检查, 可以避免键值被覆盖的问题

#### 时间复杂度
O(n), n为指定键值对的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要存入值的键||
|value|String|需要存入的值||

### 返回值
Int类型返回结果
- 0, 至少有一个键已经存在, 所有键均没有执行存入时返回
- 1, 所有给定的键均不存在, 并全都存入成功时返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> MSETNX key1 "Hello" key2 "there"
(integer) 1
redis:6379> MSETNX key2 "new" key3 "world"
(integer) 0
redis:6379> MGET key1 key2 key3
1) "Hello"
2) "there"
3) (nil)
```

#Redis #Redis/常用命令/String 