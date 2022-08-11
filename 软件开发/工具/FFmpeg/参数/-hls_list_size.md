---
Name: "-hls_list_size"
Format: "-hls_list_size size"
Category:
  - "分片"
  - "HLS"
Comment: "设置 [[FFmpeg]] 进行HLS分片时的分片数量"
ExtraComment:
Arguments:
  - Name: "size"
    Type: "Integer"
    Comment: "HLS分片的片段数量"
    Range: "[0, MAX_INT], 0为不限制分片数量, 由编码器编码时自动分配"
    Default: 5
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
ffmpeg -i input.mp4 -f hls -hls_list_size 10
```

#FFmpeg #FFmpeg/参数