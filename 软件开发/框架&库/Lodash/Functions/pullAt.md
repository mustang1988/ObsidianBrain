---
# 函数签名
Signature: "pullAt(array, [indexes])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "移除指定数组中指定索引位置的元素"
# 函数额外说明
ExtraComment:
 - Type: "warning"
   Title: "pullAt 函数会修改原始数组的引用"
   Content: ""
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要移除元素的原始数组"
    Default: ""
  - Name: "index"
    Type: "Integer[]"
    Required: false
    Comment: "需要移除的索引数组"
    Default: ""
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
const _ = require('lodash');
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
console.log(array);  // => ['a', 'c']
console.log(pulled); // => ['b', 'd']
```

#Lodash 