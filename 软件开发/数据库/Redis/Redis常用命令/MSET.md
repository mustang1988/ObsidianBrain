## MSET key value \[ key value ...\]

### 用途
(Comment:: "批量存入多个键值对到 [[Redis]] 库中")

```ad-info
title: MSET是原子操作, 所有给定的键值对是一起存入的
```

```ad-warning
title: 注意
当指定的键存在时, 会 ***覆盖*** 其原有值
```

#### 时间复杂度
O(n), n为指定键值对的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要存入值的键||
|value|String|需要存入的值||

### 返回值
***总是*** 返回String类型结果: "OK"

### 示例
```ad-info
title: 正常
```bash
redis:6379> MSET key1 "Hello" key2 "World"
"OK"
redis:6379> GET key1
"Hello"
redis:6379> GET key2
"World"
```

#Redis #Redis/常用命令/String 