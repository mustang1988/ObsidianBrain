---
Name: "-g"
Format: "-g gop"
Category:
  - "视频流处理"
Comment: "设置 [[FFmpeg]] 编码视频流时的GOP值"
ExtraComment:
  - "GOP(Group Of Pictures)值为从前一个I帧到下一个I帧之间的帧数"
Arguments:
  - Name: "gop"
    Type: "Integer"
    Comment: "目标视频流GOP"
    Range: "[INT_MIN, INT_MAX]"
    Default: 12
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
ffmpeg -g 25
```

#FFmpeg #FFmpeg/参数