## FFmpeg
### FFmpeg常用参数
```dataviewjs
const categories = [];
dv.table(
	["名称","作用","分类"],
	dv.pages('#FFmpeg/参数 and "软件开发/工具/FFmpeg"')
	.sort(page => categories.indexOf(page.Category), 'asc')
	.map(page => [page.file.link, page.Comment, page.Category])
);
```

### FFmpeg常用命令
```dataview
LIST
FROM
	#FFmpeg/命令 
SORT
	file.name ASC
```

### FFprobe常用参数
```dataviewjs
const categories = [];
dv.table(
	["名称","作用","分类"],
	dv.pages('#FFprobe/参数 and "软件开发/工具/FFmpeg"')
	.sort(page => categories.indexOf(page.Category), 'asc')
	.map(page => [page.file.link, page.Comment, page.Category])
);
```

### FFprobe常用命令
```dataview
LIST
FROM
	#FFprobe/命令
SORT
	file.name ASC
```

## 其他
```dataviewjs
dv.list(
	dv.pages('#FFmpeg or #FFprobe and -#FFmpeg/参数 and -#FFprobe/参数 and -#FFmpeg/命令 and -#FFprobe/命令')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#工具 #工具/FFmpeg 