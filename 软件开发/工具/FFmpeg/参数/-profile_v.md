---
Category: "视频流处理"
---

## -profile:v profile

### 作用
(Comment:: "设置 [[FFmpeg]] 使用H.264/H.265编码视频流时的编码器配置")

```ad-info
title: -profile:v 参数仅在 H.264, H.265 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|profile|String|编码器配置|Profile枚举[^Profile枚举]|"main"|

### 示例
```bash
ffmpeg -profile:v high
```

#FFmpeg #FFmpeg/参数

[^Profile枚举]: 可选值: "baseline", "main", "high", "high10", "high422", "high444", 支持的最大码率, 分辨率依次递增