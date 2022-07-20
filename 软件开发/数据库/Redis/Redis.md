## Redis
### 简介
Redis是一个使用ANSI C编写的开源, 支持网络, 基于内存, 分布式, 可选持久性的键值对存储 [[数据库]]

### 常用命令
#### 通用
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/通用 and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

#### List
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/List and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

#### Hash
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/Hash and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

#### Set
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/Set and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

#### Sorted Set
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/SortedSet and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

#### String
```dataviewjs
dv.table(
	["命令","说明"],
	dv.pages('#Redis/常用命令/String and -"模板"')
	.sort(page => page.file.name, 'asc')
	.map(page => [page.file.link, page.Comment])
);
```

### 常用业务场景
```dataviewjs
dv.list(
	dv.pages('#Redis/常用业务场景')
	.sort(page => page.file.name, 'asc')
	.map(page => page.file.link)
);
```

#数据库 #数据库/非关系型数据库 #数据库/非关系型数据库/Redis