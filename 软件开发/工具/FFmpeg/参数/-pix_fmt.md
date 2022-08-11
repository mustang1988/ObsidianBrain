---
Name: "-pix_fmt"
Format: "-pix_fmt format"
Category:
  - "视频流处理"
Comment: "设置 [[FFmpeg]] 编码视频流时的视频流像素格式"
ExtraComment:
Arguments:
  - Name: "format"
    Type: "String"
    Comment: "目标视频流像素格式"
    Range: "不同编译参数得到的 [[FFmpeg]] 可执行文件支持的像素格式各不相同, 可以使用\"ffmpeg -pix_fmts\"命令查看其支持的像素格式列表"
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
ffmpeg -i input.mp4 -c:v libx264 -pix_fmt yuv420p
```

#FFmpeg #FFmpeg/参数