---
# 函数签名
Signature: "differenceBy(array, [values], [iteratee=identity])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用SameValueZero进行相等比较, 创建其他给定数组中不包含的数组值的数组"
# 函数额外说明
ExtraComment: 
  - Type: "info"
    Title: "结果值的顺序和引用由第一个数组决定"
    Content: ""
  - Type: "quote"
    Title: "关联"
    Content: 
      - "此函数为 [[difference]] 的扩展, 添加了可选参数 iteratee, 用于迭代给定的数组元素, 统一元素间 SameValueZero 相等比较的标准"
      - "不同于 [[pullAllBy]] 函数, 本函数会创建并返回新的数组引用, 不会影响原始数组的引用"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要进行检查的原数组"
    Default: ""
  - Name: "values"
    Type: "Array"
    Required: false
    Comment: "需要被排除的数组"
    Default: "undefined"
  - Name: "Function"
    Type: "Array"
    Required: false
    Comment: "比对值迭代函数, 其返回结果会用于 SameValueZero 相等比较"
    Default: "[[identity|_.identity()]]"
# 函数返回值
Return:
  Type: ""
  Comment: ""
---
# [[Lodash|_]].`$=dv.current().Signature;`
## 作用

`$=dv.current().Comment;`

```dataviewjs
if(dv.current().ExtraComment != null){
  for(const ec of dv.current().ExtraComment){
	  const { Type, Title, Content } = ec;
	  const admonition = `
\`\`\`ad-${Type}
title: ${Title}
${dv.markdownList(Content)}
\`\`\`
`
      dv.paragraph(admonition);
  }
}
```

## 参数说明
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Required, arg.Comment, arg.Default])
dv.table(
	["参数名","参数类型","必填?","参数说明","默认值"],
	data
);
```

## 返回值
```dataviewjs
const { Return:{ Type, Comment } } = dv.current();
if(Array.isArray(Comment)){
  dv.paragraph(`返回${Type}类型的结果:`);
  dv.list(Comment);
} else {
  dv.paragraph(`返回${Type}类型的结果: ${Comment}`);
}
```

## 示例
```javascript
const _ = require('lodash');
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2]
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // => [{ 'x': 2 }], 此处的回调函数参数 'x' 为隐式调用了 [[property]]
_.differenceBy(
	[{ x: 2 }, { x: 1, y: 2 }],
	[{ x: 1 }, { x: 100 }],
	(v) => Object.keys(v).length // 数组元素中字段的数量, 以此数量用于 SameValueZero 的相等比较, 字段数量相同即认为相等
); // => [ { x: 1, y: 2 } ]
```

#Lodash 