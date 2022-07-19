## C++

### 库
```dataviewjs
dv.table(
	["名称", "简介"],
	dv.pages('#CPP and -"软件开发/编程语言/C++" and #库')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Abstract])
);
```

### 框架
```dataviewjs
dv.table(
	["名称","简介"],
	dv.pages('#CPP and -"软件开发/编程语言/C++" and #框架')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Abstract])
);
```

### 相关文章
```dataviewjs
dv.table(
	["标题","标签"],
	dv.pages('#CPP and -"软件开发/编程语言/C++" and -#库 and -#框架')
	.sort(page => page.file.name, 'asc')
	.map(page => [
		page.file.link,
		Array.from(new Set(page.file.etags)).sort(tag => tag, 'asc')
	])
);
```

#CPP #编程语言/CPP