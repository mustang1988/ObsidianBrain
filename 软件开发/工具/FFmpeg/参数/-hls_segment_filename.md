---
Category: "分片"
---

## -hls_segment_filename template

### 作用
(Comment:: "设置 [[FFmpeg]] 进行HLS分片时的输出文件名模板")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|template|String|HLS分片片段文件名称模板|||

### 示例
```bash
ffmpeg -hls_segment_filename segment_%d.ts
```

#FFmpeg #FFmpeg/参数