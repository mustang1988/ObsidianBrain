## JavaScript & TypeScript

### 内置模块
```dataviewjs
dv.list(
	dv.pages("#ECMAScript")
	.filter(page => page.file.name.includes('模块'))
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```
### 库
```dataviewjs
dv.list(
	dv.pages('#ECMAScript and -"软件开发/编程语言/ECMAScript" and #库')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 框架
```dataviewjs
dv.list(
	dv.pages('#ECMAScript and -"软件开发/编程语言/ECMAScript" and #框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

### 相关文章
```dataviewjs
dv.list(
	dv.pages('#ECMAScript and -"软件开发/编程语言/ECMAScript" and -#库 and -#框架')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#ECMAScript #编程语言/ECMAScript 