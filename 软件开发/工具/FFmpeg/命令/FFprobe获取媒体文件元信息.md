## FFprobe获取媒体文件元信息

### 媒体文件的元信息
文件的元信息即文件内容的描述信息, 包含了文件内容的存储方式, 大小, 格式等, 它并不会反应文件的实际内容.

媒体文件的元信息以视频文件为例, 包括但不限于以下部分:
- 流信息
- 帧信息
- 包信息
- 格式信息

### 如何读取媒体文件的元信息
FFmpeg提供的FFprobe, 就是用于获取媒体文件元信息的探针工具

FFprobe基础获取文件元信息命令
```bash
ffprobe \
[-v, -loglevel <log_level>] \
[-of, -print_format <print_format>] \
[-show_streams] \
[-show_format] \
[-show_frames] \
[-show_entries <section_entries>] \
[-show_packets] \
-i <input>
```

#### 参数说明
|参数|必须参数|说明|值|默认值|
|:-|:-|:-|:-|:-|
|-v, -loglevel|false|设置输出信息的日志级别|参考: [[-v#日志输出级别]]|info \| 32|
|-of, -print_format|false|设置输出信息的格式|参考: [[-of#format枚举]]|default|
|-show_streams|false|设置输出流信息|参考: [[-show_frames]]|false|
|-show_format|false|设置输出格式信息|参考: [[-show_format]]|false|
|-show_frames|false|设置输出帧信息|参考: [[-show_frames]]|false|
|-show_entries|false|设置输出信息的字段|参考: [[-show_entries]]|无|
|-show_packets|false|设置输出打包信息|参考: [[-show_packets]]|false|
|-i|true|设置输入文件或流|参考: [[-i]]|无|

### 元信息解读
- [[媒体文件元信息解读]]

#FFprobe #FFprobe/命令 