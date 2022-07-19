---
Category: "视频流处理"
---

## -row-mt value

### 作用
(Comment:: "启用/禁用 [[FFmpeg]] 使用VP8/VP9编码器编码时的基于行的多线程编码")

```ad-info
title: -row-mt 参数仅在 VP8, VP9 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|value|Boolean|启用/禁用基于行的多线程编码|0 \| 1|0|

### 示例
```bash
ffmpeg -row-mt 1
```

#FFmpeg #FFmpeg/参数