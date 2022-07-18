## Java
### 库
```dataviewjs
dv.list(
	dv.pages('#Java and -"软件开发/编程语言/Java" and #库')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 框架
```dataviewjs
dv.list(
	dv.pages('#Java and -"软件开发/编程语言/Java" and #框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 相关文章
```dataviewjs
dv.list(
	dv.pages('#Java and -"软件开发/编程语言/Java" and -#库 and -#框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```
#Java #编程语言/Java 