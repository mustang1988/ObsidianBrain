---
# 函数签名
Signature: "flattenDepth(array, [depth=1])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "将指定数组扁平化指定层级"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要扁平化的原始数组"
    Default: ""
  - Name: "depth"
    Type: "Integer"
    Required: false
    Comment: "扁平化层级数"
    Default: 1
# 函数返回值
Return:
  Type: "Array"
  Comment: "原始数组扁平化后的数组"
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
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2); // => [1, 2, 3, [4], 5]
```

#Lodash 