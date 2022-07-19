---
Category: "视频流处理"
---

## -r rate

### 作用
(Comment:: "设置 [[FFmpeg]] 输出的视频流的帧率")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|rate|Number \| String |目标视频流帧率|||

```ad-warning
title: 注意
-r 参数的值可以是数值,也可以是比值, 建议使用比值作为此参数的值, 具体原因见: [[NTSC制式帧率转换]]
```

### 示例
```bash
ffmpeg -r 24/1
```

#FFmpeg #FFmpeg/参数