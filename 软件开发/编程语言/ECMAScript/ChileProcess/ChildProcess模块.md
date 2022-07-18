## ChildProcess模块

NodeJS的 [[ChildProcess模块]] 提供了"多进程"的支持, 使得可以通过新开进程来处理计算密集或IO密集型的长耗时任务, 这样可以充分利用CPU的计算资源, 以提高性能和硬件使用率.

ChildProcess模块提供了以下 **`$= dv.pages('#创建子进程 and #ECMAScript/ChildProcess模块').length`** 个API函数用来创建子进程
```dataviewjs
const order = ["spawn","fork","exec","execFile","execSync","execFileSync","spawnSync"];
dv.list(
	dv.pages('#创建子进程 and #ECMAScript/ChildProcess模块')
	.sort(page => order.indexOf(page.file.name), 'asc')
	.map(page => page.file.link)
);
```
其中函数名结尾 ***不带"Sync"*** 的函数会返回一个 [[ChildProcess模块#ChildProcess对象]] 的子进程对象, 模块为其提供了相应的一套API用于访问其内部封装的属性和方法, 同时还提供一系列事件用于Hook子进程在不同执行阶段时添加处理逻辑

## ChildProcess对象

### 属性
```dataview
LIST
FROM
	#ECMAScript/ChildProcess模块/ChildProcess 
	AND
	#Property  
SORT
	file.name ASC
```

### 方法
```dataview
LIST
FROM
	#ECMAScript/ChildProcess模块/ChildProcess 
	AND
	#Method 
SORT
	file.name ASC
```

### 事件
```dataview
LIST
FROM
	#ECMAScript/ChildProcess模块/ChildProcess 
	AND
	#Event  
SORT
	file.name ASC
```

#ECMAScript #ChildProcess模块 #多进程 #ECMAScript/ChildProcess模块 
