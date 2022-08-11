---
Name: "{{title}}"
Format: "{{title}} "
Category:
  - ""
Comment: ""
ExtraComment:
  - ""
Arguments:
  - Name: ""
    Type: ""
    Comment: ""
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
ffmpeg {{title}}
```

#FFmpeg #FFmpeg/参数