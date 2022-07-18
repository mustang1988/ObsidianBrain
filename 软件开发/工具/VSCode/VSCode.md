## VSCode

![[Cover.png]]

```dataviewjs
console.log(dv.current())
dv.list(
	dv.pages('#工具/VSCode')
	.filter(page => page.file.path != dv.current().file.path)
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#工具