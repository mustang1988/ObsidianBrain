---
Name: {{title}}
Comment: ""
Category: ""
ExtraComment: |-
  
Arguments:
  - Name: ""
    Type: ""
    Comment: ""
    Range: ""
    Default: ""
---

# `$=dv.current().Name;`

### 作用
`$=dv.current().Comment;`

`$=dv.current().ExtraComment;`

### 参数说明
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Comment, arg.Range, arg.Default])
dv.table(
	["参数名","参数类型","参数说明","取值范围","默认值"],
	data
);
```

### 示例
```bash
ffmpeg {{title}}
```

#FFmpeg #FFmpeg/参数