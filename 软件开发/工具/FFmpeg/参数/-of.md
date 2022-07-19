---
Category: "通用"
---

## -of format

### 作用
(Comment:: "设置 [[FFprobe]] 输出信息的格式")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|format|String|输出的信息格式|PrintFormat枚举[^PrintFormat枚举]|[[default]]|

### 示例
```bash
ffprobe -of
```

#FFmpeg #FFprobe #FFprobe/参数

[^PrintFormat枚举]: 可选值: [[csv]], [[flat]], [[ini]], [[json]], [[xml]], [[default]]