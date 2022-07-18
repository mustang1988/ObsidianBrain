## HGET key field

### 用途
(Comment:: "获取指定键对应Hash值中指定字段的值")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取值数据对应的键||
|field|String|需要获取值的字段名||

### 返回值
大部分为String类型返回值, 值为指定键对应Hash中指定字段的值, 当指定的键不存在或指定的字段名在Hash中不存在时, 返回"nil"

### 示例
```bash
redis:6379> HSET myhash field1 "foo"
(integer) 1
redis:6379> HGET myhash field1
"foo"
redis:6379> HGET myhash field2
(nil)
```

#数据库 #数据库/非关系型数据库 #数据库/非关系型数据库/Redis #数据库/非关系型数据库/Redis/常用命令 #数据库/非关系型数据库/Redis/常用命令/Hash