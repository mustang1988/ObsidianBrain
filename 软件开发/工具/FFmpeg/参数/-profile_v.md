---
Name: "-profile:v"
Format: "-profile:v profile"
Category:
  - "视频流处理"
Comment: "设置 [[FFmpeg]] 使用H.264/H.265编码视频流时的编码器配置"
ExtraComment:
  - "此参数仅在使用 H.264, H.265 编码器时生效"
Arguments:
  - Name: "profile"
    Type: "Enum"
    Comment: "编码器配置"
    Range: |
      "baseline"
      "main"
      "high"
      "high10"
      "high422"
      "high444"
    Default: "\"main\""
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
ffmpeg -i input.avi -c:v libx264 -profile:v high
```

#FFmpeg #FFmpeg/参数