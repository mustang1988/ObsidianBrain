---
Language: "[[ECMAScript]]"
Abstract: "下一代数据库ORM"
---
## Prisma

```dataviewjs
dv.list(
	dv.pages('#Prisma')
	.filter(page => page.file.path != dv.current().file.path)
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#库 #库/Prisma #ECMAScript #数据库 #ORM