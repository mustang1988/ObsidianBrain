---
Category: "视频流处理"
---

## -cpu-used value

### 作用
(Comment:: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的质量/速度比量化器, 该量化器值用于快速设置编码质量与编码速度的权衡关系")

```ad-info
title: -cpu-used 参数仅在 VP8, VP9 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|value|Number|质量/速度比量化值|[0, 8]|1|

### 示例
```bash
ffmpeg -cpu-used 5
```

#FFmpeg #FFmpeg/参数