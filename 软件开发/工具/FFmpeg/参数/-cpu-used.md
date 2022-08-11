---
Name: "-cpu-used"
Format: "-cpu-used value"
Category:
  - "视频流处理"
  - "libvpx"
Comment: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的质量/速度比量化器, 该量化器值用于快速设置编码质量与编码速度的权衡关系"
ExtraComment:
  - "此参数仅在使用 VP8, VP9 编码器时生效"
Arguments:
  - Name: "value"
    Type: "Integer"
    Comment: "质量/速度比量化值"
    Range: "[0, 8]"
    Default: 1
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
ffmpeg -cpu-used 4
```

#FFmpeg #FFmpeg/参数