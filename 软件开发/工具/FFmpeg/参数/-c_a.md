---
Name: "-c:a"
Format: "-c:a audio_codec"
Category:
  - "音频流处理"
Comment: "设置 [[FFmpeg]] 编码音频流时使用的编码器"
ExtraComment:
Arguments:
  - Name: "audio_codec"
    Type: "String"
    Comment: "音频流编码器名称或\"copy\"; \"copy\"为拷贝编码, 即直接拷贝输入文件/流/源的音频编码, 不重新编码"
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
ffmpeg -c:a aac
# 或
ffmpeg -c:a libopus
```

#FFmpeg #FFmpeg/参数