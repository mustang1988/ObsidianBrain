## SETEX key seconds value

### 用途
(Comment:: "向 [[Redis]] 库中存入键值对并同时设置其过期时间")

等价于 [[SET]] 操作中使用了EX可选参数

类似于先执行 [[SET]] 命令, 再执行 [[EXPIRE]] 命令, 但区别在于 SETEX 是一个原子操作不可拆分

```ad-warning
title: 注意
如果指定的键存在, 则会覆盖原有值, 不论原值类型是否时String
```

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要存入值的键||
|seconds|Number|过期时间, 单位为秒||
|value|String|需要存入的值||

### 返回值
总是返回String类型结果: "OK"

### 示例
```ad-info
title: 正常
```bash
redis:6379> SETEX mykey 10 "Hello"
"OK"
```

#Redis #Redis/常用命令/String 