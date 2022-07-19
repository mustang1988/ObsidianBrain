---
Category: "视频流处理"
---

## -tile-columns columns

### 作用
(Comment:: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的平铺列数")

```ad-info
title: -tile-columns 参数仅在 VP8, VP9 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|columns|Number|平铺列数|[-1, 6]|-1|

### 示例
```bash
ffmpeg -tile-columns 2
```

#FFmpeg #FFmpeg/参数