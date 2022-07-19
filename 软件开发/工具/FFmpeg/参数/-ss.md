---
Category: "剪辑"
---

## -ss time_off

### 作用
(Comment:: "设置 [[FFmpeg]] 进行剪辑时的起始点")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|time_off|Number|剪辑起始点, 单位: 秒||0|

```ad-warning
title: 注意
实际使用 -ss 参数进行剪辑时, 如果指定的起始点不是I帧, 则FFmpeg会在剪辑起始点后最近的I帧处开始
```

### 示例
```bash
ffmpeg -ss 5.0
```

#FFmpeg #FFmpeg/参数