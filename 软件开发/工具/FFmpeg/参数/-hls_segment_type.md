---
Category: "分片"
---

## -hls_segment_type type

### 作用
(Comment:: "设置 [[FFmpeg]] 进行HLS分片时的的片段格式")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|type|String|HLS分片片段类型|"fmp4" \| "mpegts"|"mpegts"|

### 示例
```bash
ffmpeg -hls_segment_type fmp4
```

#FFmpeg #FFmpeg/参数