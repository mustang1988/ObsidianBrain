---
Title: "differenceWith的comparator回调函数"
Arguments:
  - Name: "arrVal"
    Type: "any"
    Comment: "遍历自原始数组array中的元素"
  - Name: "othVal"
    Type: "any"
    Comment: "遍历自需要排除的数组values中的元素"
Return:
  Type: "Boolean"
  Comment: 
    - "true, 认为arrVal与othVal相等时返回, 此时arrVal值被认为需要从原始数组array中排除, 不会出现在最终返回结果中"
    - "false, 认为arrVal与othVal不相等时返回, 此时arrVal值不会从原始数组array中排除, 会出现在最终返回结果中"
---
# differenceWith的comparator回调函数
## 参数说明
```dataviewjs
dv.table(
	["参数名", "参数类型", "参数说明"],
	dv.current().Arguments.map(arg => [
		arg.Name,
		arg.Type,
		arg.Comment,
	])
);
```

## 返回值
```dataviewjs
const { Return: { Type, Comment} } = dv.current();
dv.paragraph(`返回${Type}类型结果:`)
dv.list(Comment);
```
