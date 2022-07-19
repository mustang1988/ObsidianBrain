---
Category: "剪辑"
---

## -to time_stop

### 作用
(Comment:: "设置剪辑结束点")

### 参数说明
|参数名|参数类型|
|:-|:-|
|time_stop|剪辑结束点, 单位: 秒|

```ad-warning
title: 注意
与 [[-ss]] 参数类似, 如果 -to 参数指定的结束点处不是I帧, 则FFmpeg会在剪辑结束点后最近的I帧处结束
```

### 示例
```bash
ffmpeg -to 7
```

#FFmpeg #FFmpeg/参数