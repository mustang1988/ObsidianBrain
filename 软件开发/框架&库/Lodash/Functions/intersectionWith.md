---
# 函数签名
Signature: "intersectionWith([arrays], [comparator])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定函数进行相等比较, 获取给定数组的 ***交集*** "
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "关联"
   Content: "此函数为 [[intersection]] 的扩展, 添加自定义比对函数的支持, 可自定义值\"相等\"的定义"
# 函数参数列表
Arguments:
  - Name: "arrays"
    Type: "Array"
    Required: false
    Comment: "需要获取交集的数组, 可以同时提交多个"
    Default: "[]"
  - Name: "comparator"
    Type: "Function"
    Required: false
    Comment: "[[intersectionWith的comparator回调函数]]"
    Default: "undefined"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为所有给定数组的交集, 结果中的顺序取决于给定的第一个参与比对的数组"
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
${Array.isArray(Content) ? dv.markdownList(Content) : Content}
\`\`\`
`
      dv.paragraph(admonition);
  }
}
```

## 参数说明
```dataviewjs
const { Arguments = null } = dv.current();
if(Arguments == null){
	dv.paragraph("无参数");
} else {
	dv.table(
		["参数名","参数类型","必填?","参数说明","默认值"],
		Arguments.map(arg => [arg.Name, arg.Type, arg.Required, arg.Comment, arg.Default])
	);
}
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
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.intersectionWith(objects, others, _.isEqual); // => [{ 'x': 1, 'y': 2 }]
```

#Lodash 