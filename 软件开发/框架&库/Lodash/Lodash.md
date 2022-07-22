---
Language: "[[ECMAScript]]"
Abstract: "一致性, 模块化, 高性能的实用工具库"
aliases: ["_"]
---

## Lodash
一致性, 模块化, 高性能的 [[ECMAScript|JavaScript]]  / [[ECMAScript|TypeScript]] 实用工具 [[框架&库|库]]

### 常用函数
```dataviewjs
const categoryOrder = ["Array", "Collection", "Date", "Function", "Lang", "Math", "Number", "Object", "Seq", "String", "Util", "Properties", "Methods"];
dv.table(
	["函数", "作用", "分类", "改变输入引用?"],
	dv.pages('#Lodash and -"模板"')
	.sort(page => [categoryOrder.indexOf(page.Category[0]), page.file.name], 'asc')
	.map(page => [
		page.file.link, page.Comment,
		page.Category,
		page.MutateReference ? '<font color="red">是</font>' : undefined
	])
);
```

#库 #库/Lodash #ECMAScript 