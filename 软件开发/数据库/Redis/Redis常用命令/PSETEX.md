## PSETEX key milliseconds value

### 用途
(Comment:: "向 [[Redis]] 库中存入字符串值, 同时为其设置过期时间")

与 [[SETEX]] 很类似, 区别在于设置的过期时间单位为毫秒

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要存入值的键||
|milliseconds|Number|过期时间, 单位: 毫秒||
|value|String|需要存入的值||

### 返回值
***总是*** 返回String类型值: "OK"

### 示例
```ad-info
title: 正常
```bash
redis:6379> PSETEX mykey 1000 "Hello"
"OK"
```

#Redis #Redis/常用命令/String 