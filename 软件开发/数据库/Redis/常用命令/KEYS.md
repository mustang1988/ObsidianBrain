## KEYS pattern

### 用途
(Comment:: "查询 [[Redis]] 库中所有符合指定规则的键")

```ad-warning
title: 注意
非常不建议在生产环境等重要环境中使用该命令, 会导致性能问题, 该命令只应用于开发和调试, 如果在生产环境有在数据库中大量查询键的需求, 请使用 [[SCAN]] 命令或其他命令代替
```

#### 时间复杂度
O(n), n为数据库中符合给定规则的键的数量, 若未指定规则, n就是当前数据库中所有键的数量

### 参数
|参数名|参数类型|参数说明|备注|
|:-|:-|:-|:-|
|pattern|String|键匹配规则|键匹配规则支持通配符 \* 和 \?, 以及正则表达式|

### 返回值
String[]类型返回结果, 内容为库中查询到的符合给定规则的键

### 示例
```ad-info
title: 正常
```bash
redis:6379> MSET firstname Jack lastname Stuntman age 35
"OK"
redis:6379> KEYS *name*
1) "lastname"
2) "firstname"
redis:6379> KEYS a??
1) "age"
redis:6379> KEYS *
1) "lastname"
2) "age"
3) "firstname"
```

#Redis #Redis/常用命令/通用 