---
Title: "dropWhile的predicate回调函数"
Arguments:
  - Name: "value"
    Type: "any"
    Comment: "当前迭代的原始数组中的元素"
  - Name: "index"
    Type: "Integer"
    Comment: "当前迭代的原始数组中元素在数组中的索引"
  - Name: "array"
    Type: "Array"
    Comment: "原始数组"
Return:
  Type: "Boolean"
  Comment: 
    - "true, 当前元素需要被忽略时返回"
    - "false, 当需要终止元素忽略时返回"
LinkTo: "[[dropWhile]]"
Category:
  - "Callback"
---
# differenceWith的comparator回调函数

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