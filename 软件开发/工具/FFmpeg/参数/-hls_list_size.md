---
Category: "分片"
---

## -hls_list_size size

### 作用
(Comment:: "设置 [[FFmpeg]] 进行HLS分片时的分片数量")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|size|Number|HLS分片的片段数量|[0, MAX_INT]|5|

```ad-info
title: 参数值 0 表示不限制分片数量, 由编码器编码时自动分配
```

### 示例
```bash
ffmpeg -hls_list_size 10
```

#FFmpeg #FFmpeg/参数