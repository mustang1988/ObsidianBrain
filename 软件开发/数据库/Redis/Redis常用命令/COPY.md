## COPY source destination \[DB destination-db\] \[REPLACE\]

### 用途
(Comment:: "复制 [[Redis]] 库中一个键的值到另一个键")

#### 时间复杂度
当复制字符串值时, 时间复杂度为 O(1)

当复制的值为集合类型时, 时间复杂度最差为 O(n), n为被复制集合的大小

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|source|String|被复制的键||
|destination|String|复制后的键||
|DB destination-db|Number|复制后存储的数据库索引号|可选参数, 默认为当前库|
|REPLACE||当目复制后的键已经存在时, 是否先删除已存在的值, 再执行复制|可选参数, 默认不覆盖|

### 返回值
Int类型返回结果
- 0, 复制不成功时返回
- 1, 成功复制时返回

### 示例
```ad-info
title: 正常
```bash
redis:6379> SET from "from"
OK
redis:6379> COPY from to
(integer) 1
redis:6379> GET to
"from"
redis:6379> COPY from to
(integer) 0
redis:6379> COPY notexist anothernotexist
(integer) 0
redis:6379> COPY from to REPLACE
(integer) 1
```

#Redis #Redis/常用命令/通用 