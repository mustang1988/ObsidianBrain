## SOLID原则
```dataviewjs
const order = ["S","O","L","I","D"]
dv.list(
	dv.pages('#SOLID')
	.sort(page => order.indexOf(page.file.name.substr(0,1)), 'asc')
	.map(page => page.file.link)
);
``` 
#OOP