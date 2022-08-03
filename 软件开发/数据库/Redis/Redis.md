## Redis

```ad-abstract
title: Redis是一个使用ANSI C编写的开源, 支持网络, 基于内存, 分布式, 可选持久性的键值对存储 [[数据库]]
```

`````ad-tip
title: 常用命令
collapse: open


````ad-quote
title: 通用
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/通用 and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````

````ad-quote
title: List
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/List and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````

````ad-quote
title: Hash
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/Hash and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````

````ad-quote
title: Set
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/Set and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````

````ad-quote
title: Sorted Set
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/SortedSet and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````

````ad-quote
title: String
collapse: close

```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/String and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

````



`````

````ad-info
title: 常用业务场景
collapse: open

```dataviewjs
dv.list(
	dv.pages('#Redis/常用业务场景')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

````

#数据库 #数据库/非关系型数据库 #数据库/非关系型数据库/Redis