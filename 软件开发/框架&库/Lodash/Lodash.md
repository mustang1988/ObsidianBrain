---
Language: "[[ECMAScript]]"
Abstract: "一致性, 模块化, 高性能的实用工具库"
aliases: ["_"]
Icon: "![[lodash.svg|50]]"
---
# Lodash
```ad-abstract
title:
一致性, 模块化, 高性能的 [[ECMAScript|JavaScript]]  / [[ECMAScript|TypeScript]] 实用工具 [[框架&库|库]]
```

````ad-quote
title: 常用函数
collapse: open
~~~dataviewjs
const categoryOrder = ["Array","Collection","Date","Function","Lang","Math","Number","Object","Seq","String","Util"];
const groups = dv.pages('#Lodash and -"模板"').groupBy(p => p.Category);

for(const group of groups){
	const groupName = group.key[0];
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

/*
dv.table(
	["函数","说明","分类"],
	dv.pages('#Lodash and -"模板"')
	//.filter(page => page.Category.includes('Array'))
	.sort(page => [categoryOrder.indexOf(page.Category[0]), page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.category
				]
	})
);
*/
~~~
````

#库 #库/Lodash #ECMAScript 