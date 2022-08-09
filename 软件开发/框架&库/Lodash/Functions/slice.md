---
# 函数签名
Signature: "slice(array, [start=0], [end=array.length])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "获取指定数组在指定索引范围内的片段"
# 函数额外说明
ExtraComment:
  - Type: "warning"
    Title: "截取结果不包含指定索引的结尾索引处的元素"
    Content: ""
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取片段的原始数组"
    Default: ""
  - Name: "start"
    Type: "Integer"
    Required: false
    Comment: "片段起始索引, 可以是负数, 表示从后向前检索, -1 表示倒数第一个元素, -2表示倒数第二个元素, 以此类推"
    Default: "0"
  - Name: "end"
    Type: "Integer"
    Comment: "片段结束索引, 可以是负数, 表示从后向前检索, -1 表示倒数第一个元素, -2表示倒数第二个元素, 以此类推"
    Default: "数组长度"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为[start, end)索引区间内的原始数组中的元素"
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
var array = [1, 2, 3];
const res = _.slice(array, 0, -2);
console.log(res);                       // => [ 1 ]
const res2 = _.slice(array, -3, -1);
console.log(res2);                      // => [ 1, 2 ]
const res3 = _.slice(array, -100, 100);
console.log(res3);                      // => [ 1, 2, 3 ]
```

#Lodash 