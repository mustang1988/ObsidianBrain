---
Name: "-ar"
Format: "-ar audio_sample_rate"
Category:
  - "音频流处理"
Comment: "设置 [[FFmpeg]] 编码音频流时使用的采样率"
ExtraComment:
  - ""
Arguments:
  - Name: "audio_sample_rate"
    Type: "Integer"
    Comment: "目标音频采样率, 单位: Hz"
    Range: ""
    Default: ""
---

# `$=dv.current().Format;`

### 作用
`$=dv.current().Comment;`

`$=dv.list(dv.current().ExtraComment);`

### 参数说明
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
ffmpeg -ar 44100
```

#FFmpeg #FFmpeg/参数