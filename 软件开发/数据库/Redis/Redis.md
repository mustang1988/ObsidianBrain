## Redis

```ad-abstract
title: Redis是一个使用ANSI C编写的开源, 支持网络, 基于内存, 分布式, 可选持久性的键值对存储 [[数据库]]
```

`````ad-tip
title: 常用命令
collapse: open

~~~dataviewjs
const groups = dv.pages('#Redis/Command or #Redis and -"模板"').groupBy(p => p.Category);
for(const group of groups){
	const groupName = group.key ? group.key : '未分类';
	const datas = group.rows
					.sort(page => page.file.name, 'asc')
					.map(page => [page.file.link, page.Comment])
	dv.header(2, groupName);
	dv.table(
		["命令","说明"],
		datas
	);
}

~~~


`````

````ad-quote
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