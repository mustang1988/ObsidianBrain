---
Category: "通用"
---

## -threads threads_count

### 作用
(Comment:: "指定 [[FFmpeg]] 使用的线程数")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|thread_count|Number|FFmpeg使用的线程数|[0, INT_MAX]|1|

### 示例
```bash
ffmpeg -threads 10
```

#FFmpeg #FFmpeg/参数