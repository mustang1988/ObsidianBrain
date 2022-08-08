---
# 函数签名
Signature: "take(array, [n=1])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "获取指定数组前端的n个元素组成的片段"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取元素片段的原始数组"
    Default: ""
  - Name: "n"
    Type: "Integer"
    Required: false
    Comment: "需要获取的元素数量"
    Default: "1"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为指定获取数量的元素, 当指定的元素数量超过数组长度时, 返回整个原始数组"
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
_.take([1, 2, 3]);    // => [1]
_.take([1, 2, 3], 2); // => [1, 2]
_.take([1, 2, 3], 5); // => [1, 2, 3]
_.take([1, 2, 3], 0); // => []
```

#Lodash 