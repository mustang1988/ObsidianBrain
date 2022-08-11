---
Name: "-preset"
Format: "-preset preset"
Category:
  - "视频流处理"
  - "libx264"
Comment: "设置 [[FFmpeg]] 使用H.264/H.265编码视频流时的编码预设"
ExtraComment:
  - "此参数仅在使用 H.264, H.265 编码器时生效"
Arguments:
  - Name: "preset"
    Type: "Enum"
    Comment: "H.264/H.265编码器编码预设"
    Range: |
      "ultrafast"
      "superfast"
      "veryfast"
      "faster"
      "medium"
      "slow"
      "slower"
      "veryslow"
      "placebo"
    Default: "\"medium\""
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
ffmpeg -i input.avi -c:v libx264 -preset faster
```

#FFmpeg #FFmpeg/参数