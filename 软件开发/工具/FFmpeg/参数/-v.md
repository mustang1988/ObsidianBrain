---
Category: "通用"
---

## -v log_level

### 作用
(Comment:: "设置 [[FFmpeg]] / [[FFprobe]] 的输出日志级别")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|log_level|Number \| String|日志级别枚举名/枚举值|日志级别枚举[^日志级别枚举]|"info" \| 32|


### 示例
```bash
ffmpeg -v trace
```

#FFmpeg #FFmpeg/参数 #FFmpeg/参数 

[^日志级别枚举]: 日志级别枚举及对应值: "quiet = -8", "panic = 0", "fatal = 8", "error = 16", "warning = 24", "info = 32", "verbose = 40", "debug = 48", "trace = 56", 值越大, 日志输出级别越低, 相同的命令参数, 输出的日志内容越多