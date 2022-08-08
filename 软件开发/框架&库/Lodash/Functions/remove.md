---
# 函数签名
Signature: "remove(array, [predicate=identity])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定函数进行比较, 移除指定数组中符合函数比对结果的元素"
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "关联"
   Content: "与 [[filter]] 类似, 区别在于 [[filter]] 不会修改原始数组引用, 而 remove 会改变原始数组的引用"
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
  - Name: "predicate"
    Type: "Function"
    Required: false
    Comment: "[[remove的predicate回调函数]]"
    Default: "[[identity]]"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为被移除元素"
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

```

#Lodash 