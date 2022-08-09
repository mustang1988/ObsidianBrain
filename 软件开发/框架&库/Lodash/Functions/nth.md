---
# 函数签名
Signature: "nth(array, [n=0])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "获取指定数组中指定索引位置的元素"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取元素的数组"
    Default: ""
  - Name: "n"
    Type: "Integer"
    Required: false
    Comment: "需要获取元素在数组中的索引, 可以是负数, 表示从后向前检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推"
    Default: "0"
# 函数返回值
Return:
  Type: "any | undefined"
  Comment:
    - "undefined, 当指定的索引在数组中越界时返回"
    - "当指定的索引在数组中未越界, 返回数组中该索引位置的元素"
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
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1);  // => 'b'
_.nth(array, -2); // => 'c';
```

#Lodash 