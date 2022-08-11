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
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Comment, arg.Range, arg.Default])
dv.table(
	["参数名","参数类型","参数说明","取值范围","默认值"],
	data
);
```

## 示例
```bash
ffprobe {{title}}
```

#FFprobe #FFprobe/参数