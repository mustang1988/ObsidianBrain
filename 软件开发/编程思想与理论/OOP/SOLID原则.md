---
Abstract: "SOLID原则是面向对象程序设计中的5大指导性原则的简称"
---
## SOLID原则
`$=dv.current().Abstract`

它们分别是
```dataviewjs
const order = ["S","O","L","I","D"]
dv.list(
	dv.pages('#SOLID')
	.sort(page => order.indexOf(page.EnName.substr(0,1)), 'asc')
	.map(page => dv.fileLink(page.file.path, false, `${page.Name} - ${page.EnName}`))
);
``` 

SOLOD原则是 [[编程思想与理论#面向对象编程|面向对象编程]] 中的指导性原则, 需要深刻理解

#OOP