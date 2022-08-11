---
Name: "-hls_time"
Format: "-hls_time time"
Category:
  - "分片"
  - "HLS"
Comment: "设置 [[FFmpeg]] 进行HLS分片时的每片的时长"
ExtraComment:
Arguments:
  - Name: "time"
    Type: "Number"
    Comment: "HLS分片片段时长, 单位: 秒"
    Range: "[0, FLOAT_MAX]"
    Default: 2
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
ffmpeg -i input.mp4 -f hls -hls_time 3.5
```

#FFmpeg #FFmpeg/参数