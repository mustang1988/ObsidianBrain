## xml
```ad-info
title: 此格式为 [[FFprobe]] 中 [[-of]] 参数输出的可选格式
```

### 输出示例
```bash
<?xml version="1.0" encoding="UTF-8"?>
<ffprobe>
    <format filename="output.mp4" nb_streams="1" nb_programs="0" format_name="mov,mp4,m4a,3gp,3g2,mj2" format_long_name="QuickTime / MOV" start_time="0.000000" duration="10.234000" size="15797948" bit_rate="12349382" probe_score="100">
        <tag key="major_brand" value="isom"/>
        <tag key="minor_version" value="512"/>
        <tag key="compatible_brands" value="isomiso2avc1mp41"/>
        <tag key="encoder" value="Lavf59.10.100"/>
    </format>
</ffprobe>
```

### 可选参数
#### fully_qualified, q
TODO

#### xsd_compliant, x
TODO

#FFprobe #PrintFormat 