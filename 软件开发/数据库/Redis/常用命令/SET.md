## SET key value \[options\]

### 用途
(Comment:: "向 [[Redis]] 库中存入键值对")

```ad-warning
title: 注意
如果指定的键存在, 则 ***默认*** 会覆盖原有值, 不论原值类型是否时String, 默认操作可以通过 options 可选参数进行改变
```

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要存入值的键||
|value|String|需要存入的值||
|options|String|参考: [[SET可选参数]]|可选参数|

### 返回值
String类型返回值
- 存入成功时返回: "OK"
- 当使用了可选参数 NX / XX 导致不符合条件无法存入时返回, 或使用了可选参数GET但原始值并不存在时返回: nil
- 当使用了可选参数 GET 且原始值存在时返回存入前的原始值

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET k1 "v1"
"OK"
redis:6379> SET k2 "v2" XX
(nil)
redis:6379> SET k1 "v3" GET
"v1"
redis:6379> SET k2 "v2" EX 10
"OK"
```

#Redis #Redis/常用命令/String 