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

#ECMAScript