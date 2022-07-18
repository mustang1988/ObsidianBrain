## ZCARD key

### 用途
(Comment:: "获取指定键对应Sorted Set的长度")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取长度的Sorted Set的键||

### 返回值
Int类型返回值, 值为指定键对应Sorted Set的长度

### 示例
```bash
redis:6379> ZADD myzset 1 "one"
(integer) 1
redis:6379> ZADD myzset 2 "two"
(integer) 1
redis:6379> ZCARD myzset
(integer) 2
```

#数据库 #数据库/非关系型数据库 #数据库/非关系型数据库/Redis #数据库/非关系型数据库/Redis/常用命令 #数据库/非关系型数据库/Redis/常用命令/SortedSet