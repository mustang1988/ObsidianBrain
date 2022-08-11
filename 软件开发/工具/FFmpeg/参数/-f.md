---
Name: "-f"
Format: "-f format"
Category:
  - "通用"
Comment: "指定 [[FFmpeg]] 输入/输出的格式"
ExtraComment:
Arguments:
  - Name: "format"
    Type: "String"
    Comment: "输入/输出格式"
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
# -f 指定输入格式
ffmpeg -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100
# -f 指定输出格式
ffmpeg -i input.avi -c:v libx264 -c:a aac -f mp4 output.mp4
```

#FFmpeg #FFmpeg/参数