# FFmpeg
```ad-tip
title: FFmpeg常用命令参数
collapse: open

~~~dataviewjs
const categories = ["通用","视频流处理","音频流处理","剪辑","分片","合成"];
const groups = dv.pages('#FFmpeg/参数 and "软件开发/工具/FFmpeg"')
				.groupBy(page => Array.isArray(page.Category) ? page.Category[0]: page.Category)
				.sort(group => [categories.indexOf(Array.isArray(group.key) ? group.key[0] : group.key)], 'asc');
for(const group of groups){
	const groupName = Array.isArray(group.key) ? group.key[0] : group.key;
	dv.header(2, groupName);
	dv.table(
		[],
		group.rows
		.sort(page => [page.file.name], 'asc')
		.map(page => [
			dv.fileLink(page.file.path, false, page.Format), 
			page.Comment,
			page.ExtraComment ? page.ExtraComment: ''
		])
	);
}



~~~


```

```ad-example
title: FFmpeg常用命令
collapse: open
~~~dataview
LIST
FROM
	#FFmpeg/命令 
SORT
	file.name ASC
~~~
```

```ad-quote
title: 其他
collapse: open
~~~dataviewjs
dv.list(
	dv.pages('#FFmpeg and -#FFmpeg/参数 and -#FFprobe/参数 and -#FFmpeg/命令 and -#FFprobe/命令')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
~~~
```

#工具 #工具/FFmpeg 