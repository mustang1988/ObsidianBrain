---
Name: "-an"
Format: "-an"
Category:
  - "通用"
Comment: "关闭 [[FFmpeg]] 对音频流的输出"
ExtraComment:
Arguments:
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
		["参数名","参数类型","取值范围","默认值"],
		Arguments
		.map(arg => [
			arg.Name,
			arg.Type,
			arg.Range,
			arg.Default
		])
	);
}

```

### 示例
```bash
ffmpeg -an
```

#FFmpeg #FFmpeg/参数