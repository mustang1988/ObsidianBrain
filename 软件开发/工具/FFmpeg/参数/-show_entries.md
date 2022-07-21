---
Category: "通用"
---

## -show_entries entry_list

### 作用
(Comment:: "设置 [[FFprobe]] 输出指定字段数据")

### 参数说明
|参数名|参数类型|参数说明|取值范围|默认值|
|:-|:-|:-|:-|:-|
|entry_list|String|属性,字段选择器|属性字段选择器[^属性字段选择器]||

### 示例
```bash
ffprobe -show_entries streams=index,duration,codec:format=duration,name
```

#FFprobe #FFprobe/参数

[^属性字段选择器]: 格式为: "<类型1>=<类型1字段名1>,<类型1字段名2>,...**:**<类型2>=<类型2字段名1>,<类型2字段名2>,..."