---
Category: "视频流处理"
---

## -g gop

### 作用
(Comment:: "设置 [[FFmpeg]] 编码视频流时的GOP(Group Of Pictures)值, 即从前一个I帧到下一个I帧之间的帧数")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|gop|Number|目标视频流GOP|[INT_MIN, INT_MAX]|12|

### 示例
```bash
ffmpeg -g 20
```

#FFmpeg #FFmpeg/参数