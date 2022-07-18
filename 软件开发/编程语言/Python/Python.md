## Python
### 库
```dataviewjs
dv.list(
	dv.pages('#Python and -"软件开发/编程语言/Java" and #库')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 框架
```dataviewjs
dv.list(
	dv.pages('#Python and -"软件开发/编程语言/Java" and #框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 相关文章
```dataviewjs
dv.list(
	dv.pages('#Python and -#库 and -#框架')
	.filter(page => page.file.path != dv.current().file.path)
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#Python #编程语言/Python 