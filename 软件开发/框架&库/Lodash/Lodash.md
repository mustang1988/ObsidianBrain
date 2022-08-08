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
```ad-quote
title: Array
collapse: open
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Array'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Collection
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Collection'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Date
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Date'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Function
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Function'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Lang
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Lang'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Math
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Math'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Number
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Number'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		console.log('debug => ', page.ExtraComment);
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Object
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Object'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Seq
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Seq'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: String
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('String'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```

```ad-quote
title: Util
collapse: close
~~~dataviewjs
dv.table(
	[],
	dv.pages('#Lodash and -"模板"')
	.filter(page => page.Category.includes('Util'))
	.sort(page => [page.file.name], 'asc')
	.map(page => {
		const display = page.aliases == null ? `_.${page.Signature}` : `_.${page.Signature} / `+ page.aliases.join(' / ')
		return [
					dv.fileLink(page.file.path, false, display), 
					page.Comment,
					page.ExtraComment == null ? "无" : page.ExtraComment.map(ec => `\`\`\`ad-${ec.Type}\ntitle: ${ec.Title}\n${Array.isArray(ec.Content) ? dv.markdownList(ec.Content) : ec.Content}\n\`\`\``)
				]
	})
);
~~~
```
````

#库 #库/Lodash #ECMAScript 