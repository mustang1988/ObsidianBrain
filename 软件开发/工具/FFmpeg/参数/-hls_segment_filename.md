---
Name: "-hls_segment_filename"
Format: "-hls_segment_filename template"
Category:
  - "分片"
  - "HLS"
Comment: "设置 [[FFmpeg]] 进行HLS分片时的输出文件名模板"
ExtraComment:
Arguments:
  - Name: "template"
    Type: "String"
    Comment: "HLS分片片段文件名称模板"
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
ffmpeg -i input.mp4 -f hls -hls_segment_filename ./hls_part_%d.ts
```

#FFmpeg #FFmpeg/参数