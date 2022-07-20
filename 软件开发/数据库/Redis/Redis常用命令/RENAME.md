## RENAME key newkey

### 用途
(Comment:: "重命名 [[Redis]] 库中的键")

```ad-warning
title: 注意
RENAME 执行时, 如果newkey已经存在, 则会 ***覆盖原有值*** , 此时会隐士的执行 [[DEL]] 操作, 如果被删除的原始值较大, 可能会出现性能问题, 需要注意
```

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要重命名的键||
|newkey|String|重命名后的键||

### 返回值
String类型返回结果: "OK"

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET mykey "Hello"
"OK"
redis:6379> RENAME mykey myotherkey
"OK"
redis:6379> GET myotherkey
"Hello"
```

```ad-danger
title: 异常
当指定的key不存在时, 返回异常
```bash
redis:6379> RENAME notexistingkey newkey
(error) no such key
```

#Redis #Redis/常用命令/通用 