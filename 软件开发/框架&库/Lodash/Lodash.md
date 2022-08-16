---
banner: "![[图片/软件开发/框架&库/Lodash/Cover.jpg]]"
Language: "[[ECMAScript]]"
Abstract: "一致性, 模块化, 高性能的实用工具库"
aliases: 
  - "_"
---
# Lodash
```ad-abstract
title:
一致性, 模块化, 高性能的 [[ECMAScript|JavaScript]]  / [[ECMAScript|TypeScript]] 实用工具 [[框架&库|库]]
```

````ad-tip
title: 常用函数
collapse: open
~~~dataviewjs
const categoryOrder = ["Array","Collection","Date","Function","Lang","Math","Number","Object","Seq","String","Util"];
const groups = dv.pages('#Lodash and -#Lodash/Callback and -"模板"').groupBy(p => p.Category);

for(const group of groups){
	const groupName = Array.isArray(group.key) ? group.key[0] : group.key;
	dv.header(2, groupName);
	dv.table(
		["函数","说明"],
		group.rows
		.sort(page => [categoryOrder.indexOf(page.Category[0]), page.file.name], 'asc')
		.map(page => {
			const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
			return [
						dv.fileLink(page.file.path, false, display), 
						page.Comment,
					]
		})
	);
}
````

#库 #库/Lodash #ECMAScript 