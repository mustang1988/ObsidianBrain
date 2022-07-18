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
### 相关文章
```dataviewjs
dv.list(
	dv.pages('#ECMAScript and -"软件开发/编程语言/ECMAScript"')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#ECMAScript