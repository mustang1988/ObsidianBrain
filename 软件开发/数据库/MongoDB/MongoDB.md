## MongoDB
### 简介
MongoDB是一种面向文档的[[数据库]]管理系统, 用C++等语言撰写而成, 以解决应用程序开发社区中的大量现实问题

### 相关文章
```dataviewjs
dv.table(
	["标题","标签"],
	dv.pages('#MongoDB')
	.filter(page => page.file.path != dv.current().file.path)
	.sort(page => page.file.name)
	.map(page => [
		page.file.link,
		Array.from(new Set(page.file.etags)).sort(tag => tag, 'asc')
	])
);
```

#数据库 #数据库/非关系型数据库 #数据库/非关系型数据库/MongoDB