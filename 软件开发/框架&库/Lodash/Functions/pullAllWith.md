---
# 函数签名
Signature: "pullAllWith(array, values, [comparator])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定函数进行相等比较, 从指定数组中移除指定元素"
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "此函数为 [[pullAll]] 的扩展, 添加自定义比对函数的支持, 可自定义值\"相等\"的定义"
   Content: "关联"
 - Type: "warning"
   Title: "本函数会修改原始数组的引用"
   Content: ""
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要移除元素的原始数组"
    Default: ""
  - Name: "values"
    Type: "Array"
    Required: true
    Comment: "需要被移除元素组成的数组"
    Default: ""
  - Name: "comparator"
    Type: "Function"
    Required: false
    Comment: "[[pullAllWith的comparator回调函数]]"
    Default: "undefined"
# 函数返回值
Return:
  Type: "Array"
  Comment: "所提交的原始数组的引用, 其中的指定元素已被移除"
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
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

#Lodash 