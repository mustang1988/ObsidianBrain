## LLEN key

### 用途
(Comment:: "获取指定键对应列表的长度, 如果指定键对应的值不存在或值为空列表, 返回0, 当指定键对应值类型不是列表时, 返回错误")

#### 时间复杂度
O(1)

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|key|String|需要获取长度的列表对应的键||

### 返回值
Int类型返回值, 值为指定键对应列表的长度

### 示例
```bash
redis:6379> LPUSH mylist "World"
(integer) 1
redis:6379> LPUSH mylist "Hello"
(integer) 2
redis:6379> LLEN mylist
(integer) 2
```

#Redis #Redis/常用命令/List