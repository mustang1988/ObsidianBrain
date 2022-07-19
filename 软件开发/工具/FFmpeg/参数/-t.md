---
Category: "剪辑"
---

## -t duration

### 作用
(Comment:: "设置 [[FFmpeg]] 的剪辑时长")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|duration|Number|剪辑时长, 单位: 秒|||

```ad-warning
title: 注意
与 [[-ss]] 参数类似, 如果指定的剪辑起始点后 -t 参数处的结束点不是I帧, 则FFmpeg会在剪辑结束点后最近的I帧处结束
```

### 示例
```bash
ffmpeg -t 1.4
```

#FFmpeg #FFmpeg/参数