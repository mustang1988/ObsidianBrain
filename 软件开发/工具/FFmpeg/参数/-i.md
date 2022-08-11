---
Name: "-i"
Format: "-i input"
Category:
  - "通用"
Comment: "指定 [[FFmpeg]] / [[FFprobe]] 的输入"
ExtraComment:
  - "输入内容可以是文件, 流媒体URL, 源"
Arguments:
  - Name: "input"
    Type: "String"
    Comment: "输入的文件路径/流URL/源信息"
    Range: ""
    Default: ""
---

# `$=dv.current().Format;`

## 作用
`$=dv.current().Comment;`

`$=dv.list(dv.current().ExtraComment);`

## 参数说明
```dataviewjs
const { Arguments = null } = dv.current();
if(Arguments == null){
	dv.paragraph("标记型参数, 无参数值");
} else {
	dv.table(
		["参数名","参数类型","参数说明","取值范围","默认值"],
		Arguments
		.map(arg => [
			arg.Name,
			arg.Type,
			arg.Comment,
			arg.Range,
			arg.Default
		])
	);
}

```

## 示例
```bash
# 输入文件
ffmpeg -i input.mp4
# 输入流媒体
ffmpeg -i rtmp://xxx.com/live/livestream
# 输入源
ffmpeg -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100
```

#FFmpeg #FFmpeg/参数