---
Name: "-intra"
Format: "-intra"
Category:
  - "视频流处理"
Comment: "关闭 [[FFmpeg]] 视频流编码时的帧间编码压缩, 即每帧画面都是I帧"
ExtraComment:
  - "此参数, 等价于设置 [[-g]] 参数值为 1"
Arguments:
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
ffmpeg -intra
```

#FFmpeg #FFmpeg/参数 #FFprobe/参数  