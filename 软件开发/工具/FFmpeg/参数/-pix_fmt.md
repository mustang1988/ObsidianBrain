---
Category: "视频流处理"
---

## -pix_fmt format

### 作用
(Comment:: "设置 [[FFmpeg]] 编码视频流时的视频流像素格式")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|format|String|目标视频流像素格式|PixelFormat枚举[^PixelFormat枚举]||

### 示例
```bash
ffmpeg -pix_fmt yuv420p
 ```

#FFmpeg #FFmpeg/参数

[^PixelFormat枚举]: 不同编译参数的 [[FFmpeg]] 对像素格式的支持不同, 可使用命令 "ffmpeg -pix_fmts" 查看当前当前支持的像素格式列表