---
Category: "视频流处理"
---

## -speed speed

### 作用
(Comment:: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的视频流的编码速度")

```ad-info
title: -speed 参数仅在 VP8, VP9 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|speed|String|编码速度枚举值|[-16, 16]|1|

### 示例
```bash
ffmpeg -speed 10
```

#FFmpeg #FFmpeg/参数