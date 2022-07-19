## SET可选参数
Set可选参数格式
```bash
[ NX | XX] [GET] [ EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]
```

|参数名|参数值类型|参数说明|备注|
|:-|:-|:-|:-|
|NX||当且仅当键不存在时才执行存入||
|XX||当且仅当键已经存在时才执行存入||
|GET||返回覆盖前的值|如果存入前键不存在返回 nil|
|EX|Number|设置键过期时间, 单位为秒|同: [[可选过期时间设置#EX seconds]]|
|PX|Number|设置键过期时间, 单位为毫秒|同: [[可选过期时间设置#PX milliseconds]]|
|EXAT|Number|设置键过期时间, 值为秒时间戳|同: [[可选过期时间设置#EXAT unix-time-seconds]]|
|PXAT|Number|设置键过期时间, 值为毫秒时间戳|同: [[可选过期时间设置#PXAT unix-time-milliseconds]]|
|KEEPTTL||保留原始值的过期时间||
