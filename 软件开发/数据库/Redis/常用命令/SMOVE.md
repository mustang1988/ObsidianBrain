## SMOVE source destination member

### 用途
(Comment:: "将 [[Redis]] 库中指定成员从一个Set移动到另一个Set")

```ad-info
title: 这是一个原子操作
```

当源Set不存在或不包含指定元素时, 不会进行任何操作

反正, 指定元素将会从源Set中移除, 同时加入到目标Set中, 如果目标Set中已经包含该元素, 则仅将源Set中的指定元素移除

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|source|String|移出成员Set的键||
|destination|String|移入成员Set的剑||
|member|String|被移动的成员||

### 返回值
Int类型返回结果
- 0, 移出元素的键不存在时返回
- 1, 元素移成功时返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> SADD myset "one"
(integer) 1
redis:6379> SADD myset "two"
(integer) 1
redis:6379> SADD myotherset "three"
(integer) 1
redis:6379> SMOVE myset myotherset "two"
(integer) 1
redis:6379> SMEMBERS myset
1) "one"
redis:6379> SMEMBERS myotherset
1) "two"
2) "three"
```

```ad-danger
title: 异常
指定的键对应的值不是Set类型时, 返回异常
```bash
redis:6379> SET key value
"OK"
redis:6379> SMOVE key myset value
(error) WRONGTYPE Operation against a key holding the wrong kind of value
```

#Redis #Redis/常用命令/Set 