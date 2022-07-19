---
Category: "音频流处理"
---

## -c:a codec 

### 作用
(Comment:: "设置 [[FFmpeg]] 编码音频流时使用的编码器")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|codec|String|音频流编码器名称 \| "copy"|||

```ad-info
title: 设置参数值为 "copy" 时为拷贝编码, 即直接拷贝输入文件/流/源的音频编码, 不重新编码
```

### 示例
```bash
ffmpeg -c:a aac
```

#FFmpeg #FFmpeg/参数