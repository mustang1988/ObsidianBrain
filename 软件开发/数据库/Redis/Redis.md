---
---
```ad-abstract
title: Redis
Redis是一个使用ANSI C编写的开源, 支持网络, 基于内存, 分布式, 可选持久性的键值对存储 [[数据库]]
```

`````ad-tip
title: 常用命令
collapse: open

~~~dataviewjs
const order = ["", "通用", "String", "List", "Hash", "Set", "SortedSet"];
const groups = dv.pages('#Redis/Command or #Redis and -"模板" and -#Redis/常用业务场景')
				.groupBy(p => p.Category)
				.sort(g => [order.indexOf(g.key)], 'asc');
for(const group of groups){
	const groupName = group.key ? group.key : '未分类';
	const datas = group.rows
					.sort(page => page.file.name, 'asc')
					.map(page => {
						const displayName = page.Command;
						const link = dv.fileLink(page.file.path, false, displayName);
						return [
									link,
									page.Comment,
									// renderAd("quote", "扩展&关联", page.ExtraComment),//dv.markdownList(page.ExtraComment),
									// dv.markdownList(page.Samples 
									//					? page.Samples.Error 
									//						? renderAd("error", "异常返回原因", page.Samples.Error.map(e => e.Reason))
									//						: []
									//					: [])
							   ];
					});
	// group name output
	dv.header(2, groupName);
	// group data output
	dv.table(
		[],
		datas
	);
}

function renderAd(type, title, content, collapse='close'){
	const ad =  `
\`\`\`ad-${type}
title: ${title}
collapse: ${collapse}
${Array.isArray(content) ? content.map(c => `- ${c}`).join('\n') : content}
\`\`\`
    `;
	return content ? ad: ''
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