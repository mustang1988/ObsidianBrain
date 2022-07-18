## SISMEMBER key member

### 用途
(Comment:: "判断指定的值是否是指定键对应Set的成员")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要进行成员检查Set的键||
|member|String|需要进行成员检查的值||

### 返回值
Int类型返回值
- 0, 表示指定的值不是指定键对应Set的成员或指定的键不存在
- 1, 表示指定的值是指定键对应Set中的成员

### 示例
```bash
redis:6379> SADD myset "one"
(integer) 1
redis:6379> SISMEMBER myset "one"
(integer) 1
redis:6379> SISMEMBER myset "two"
(integer) 0
```

#Redis #Redis/常用命令/Set