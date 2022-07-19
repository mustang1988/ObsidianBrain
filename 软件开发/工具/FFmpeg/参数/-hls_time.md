---
Category: "分片"
---

## -hls_time time

### 作用
(Comment:: "设置 [[FFmpeg]] 进行HLS分片时的每片的时长")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|time|Number|HLS分片片段时长, 单位: 秒|[0, FLOAT_MAX]|2|

### 示例
```bash
ffmpeg -hls_time 10
```

#FFmpeg #FFmpeg/参数