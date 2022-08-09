---
# 函数签名
Signature: "fromPairs(pairs)"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "将键值对格式的二位数组转换为对象"
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "关联"
   Content: "[[toPairs]] 的反操作"
# 函数参数列表
Arguments:
  - Name: "pairs"
    Type: "[String, any][]"
    Required: true
    Comment: "需要转换的键值对格式的二维数组"
    Default: ""
# 函数返回值
Return:
  Type: "Object"
  Comment: "对象属性名来自给定二维数组元素中的第一个元素, 属性值来自给定二维数组元素的第二个元素"
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
_.fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
```

#Lodash 