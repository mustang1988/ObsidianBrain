---
# 函数签名
Signature: "lastIndexOf(array, value, [fromIndex=array.length-1])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "***后前向前*** 检索指定数组中指定元素 ***首次*** 出现的索引"
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "关联"
   Content: "与 [[indexOf]] 类似, 区别在于 [[indexOf]] 从前向后检索元素, 本函数为从后向前检索元素"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要检索的数组"
    Default: ""
  - Name: "value"
    Type: "any"
    Required: true
    Comment: "需要检索的元素"
    Default: ""
  - Name: "fromIndex"
    Type: "Integer"
    Required: false
    Comment: "检索起始索引"
    Default: "array参数数组长度-1"
# 函数返回值
Return:
  Type: "Integer"
  Comment:
    - "-1, 指定元素在指定数组中未检索到时返回"
    - "指定元素在指定数组中检索到时返回, 值为该元素在数组中的索引"
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
_.lastIndexOf([1, 2, 1, 2], 2);    // => 3
_.lastIndexOf([1, 2, 1, 2], 2, 2); // => 1
```

#Lodash 