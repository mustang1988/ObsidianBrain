---
Category: "视频流处理"
---

## -preset preset

### 作用
(Comment:: "设置 [[FFmpeg]] 使用H.264/H.265编码视频流时的编码预设")

```ad-info
title: -preset 参数仅在 H.264, H.265 编码器下生效
```

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|preset|String|H.264/H.265编码器编码预设|Preset枚举[^Preset枚举]|"medium"|

### 示例
```bash
ffmpeg -preset ultrafast
```

#FFmpeg #FFmpeg/参数

[^Preset枚举]: 可选值: "ultrafast", "superfast", "veryfast", "faster", "medium", "slow", "slower", "veryslow", "placebo", 编码速度依次递减, 编码质量依次提高, 采用相同编码参数的情况下, 最终编码得到的文件体积依次减小