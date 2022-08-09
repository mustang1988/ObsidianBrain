---
Title: "findLastIndex的predicate回调函数"
Arguments:
  - Name: "value"
    Type: "any"
    Comment: "当前迭代的原始数组中的元素"
Return:
  Type: "Boolean"
  Comment: 
    - "true, 当前迭代到的元素符合检索条件时返回, 同时会结束对数组的检索和迭代"
    - "false, 当前迭代到的元素不符合检索条件时返回"
LinkTo: "[[findLastIndex]]"
Category:
  - "Callback"
---
# findLastIndex的predicate回调函数

用于函数: `$=dv.current().LinkTo;`

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

#Lodash/Callback  