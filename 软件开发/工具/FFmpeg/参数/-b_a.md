---
Name: "-b:a"
Format: "-b:a audio_bitrate"
Category:
  - "音频流处理"
Comment: "设置 [[FFmpeg]] 编码音频流时使用的码率"
ExtraComment:
Arguments:
  - Name: "audio_bitrate"
    Type: "Integer | String"
    Comment: "目标音频流码率, 单位默认为: bps"
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
ffmpeg -b:a 320000
# 或
ffmpeg -b:a 320k
```

#FFmpeg #FFmpeg/参数