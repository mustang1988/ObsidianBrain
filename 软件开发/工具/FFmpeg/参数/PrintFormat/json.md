## json
```ad-info
title: 此格式为 [[FFprobe]] 中 [[-of]] 参数输出的可选格式
```

### 默认输出示例
```bash
{
    "format": {
        "filename": "output.mp4",
        "nb_streams": 1,
        "nb_programs": 0,
        "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
        "format_long_name": "QuickTime / MOV",
        "start_time": "0.000000",
        "duration": "10.234000",
        "size": "15797948",
        "bit_rate": "12349382",
        "probe_score": 100,
        "tags": {
            "major_brand": "isom",
            "minor_version": "512",
            "compatible_brands": "isomiso2avc1mp41",
            "encoder": "Lavf59.10.100"
        }
    }
}
```

### 可选参数
json 输出格式拥有以下专属可选参数

#### compact, c
设置是否压缩json输出信息, 即将输出的json数据中的换行, 空格等空白字符进行压缩去除, 减小输出体积, 可选值: 0 \| 1, 默认值: 0, 0为**不压缩**输出信息, 1为**压缩**输出信息

使用示例
```bash
ffprobe -of json=c=1
# 或
ffprobe -of json=compact=1
```

输出示例
```bash
{
    "format": { "filename": "output.mp4", "nb_streams": 1, "nb_programs": 0, "format_name": "mov,mp4,m4a,3gp,3g2,mj2", "format_long_name": "QuickTime / MOV", "start_time": "0.000000", "duration": "10.234000", "size": "15797948", "bit_rate": "12349382", "probe_score": 100,
        "tags": { "major_brand": "isom", "minor_version": "512", "compatible_brands": "isomiso2avc1mp41", "encoder": "Lavf59.10.100" } }
}
```

#FFprobe #PrintFormat 