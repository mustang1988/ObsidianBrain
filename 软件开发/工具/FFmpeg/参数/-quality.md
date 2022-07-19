---
Category: "视频流处理"
---

## -quality quality

### 作用
(Comment:: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的编码质量")

```ad-info
title: -quality 参数仅在 VP8, VP9 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|quality|String|编码质量枚举值|Quality枚举[^Quality枚举]|"good"|

### 示例
```bash
ffmpeg -quality realtime
```

#FFmpeg #FFmpeg/参数

[^Quality枚举]:可选值: "best", "good", "realtime"