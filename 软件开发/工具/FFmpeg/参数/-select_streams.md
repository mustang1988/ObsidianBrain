---
Category: "通用"
---

## -select_streams stream_specifier

### 作用
(Comment:: "设置 [[FFprobe]] 输出指定的流信息")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|stream_specifier|String|指定输出的流|流选择器[^流选择器]||

### 示例
```bash
ffprobe -select_streams a
```

#FFprobe #FFprobe/参数

[^流选择器]: 常见值: "v", "a", "s","d", 分辨表示视频流, 音频流, 字幕流和数据流