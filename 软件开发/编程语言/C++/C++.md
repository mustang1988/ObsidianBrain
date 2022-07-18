## C++

### 库
```dataviewjs
dv.list(
	dv.pages('#CPP and -"软件开发/编程语言/C++" and #库')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 框架
```dataviewjs
dv.list(
	dv.pages('#CPP and -"软件开发/编程语言/C++" and #框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 相关文章
```dataviewjs
dv.list(
	dv.pages('#CPP and -"软件开发/编程语言/C++" and -#库 and -#框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#CPP #编程语言/CPP