---
Name: "-frame-parallel"
Format: "-frame-parallel value"
Category:
  - "视频流处理"
Comment: "启用/禁用 [[FFmpeg]] 使用VP8, VP9编码器编码时的帧并行可解码特性"
ExtraComment:
  - "此参数仅在使用 VP8, VP9 编码器时生效"
Arguments:
  - Name: "value"
    Type: "Boolean"
    Comment: "启用/禁用帧并行可解码特性"
    Range: |
      0 (false)
      1 (true)
    Default: "0"
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
ffmpeg -frame-parallel 1
```

#FFmpeg #FFmpeg/参数