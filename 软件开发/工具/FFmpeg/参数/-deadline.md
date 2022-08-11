---
Name: "-deadline"
Format: "-deadline deadline"
Category:
  - "视频流处理"
  - "libvpx"
Comment: "设置 [[FFmpeg]] 使用VP8/VP9编码器编码时的编码时长"
ExtraComment:
  - "此参数仅在使用 VP8, VP9 编码器时生效"
Arguments:
  - Name: "deadline"
    Type: "Enum"
    Comment: "编码时长枚举值"
    Range: |
      "best"
      "good"
      "realtime"
    Default: "\"good\""
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
ffmpeg -deadline best
```

#FFmpeg #FFmpeg/参数