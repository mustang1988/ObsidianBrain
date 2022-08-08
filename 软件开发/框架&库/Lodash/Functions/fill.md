---
# 函数签名
Signature: "fill(array, value, [start=0], [end=array.length])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定元素在指定索引范围内填充数组"
# 函数额外说明
ExtraComment:
  - Type: "warning"
    Title: "注意"
    Content: "填充时, 填充起始位置会被填充, 但结束位置不会填充, 即实际填充范围为 [start, end), 原始数组中对应范围内的已存在元素会被填充元素覆盖"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要填充元素的数组"
    Default: ""
  - Name: "value"
    Type: "any"
    Required: true
    Comment: "用于填充的元素"
    Default: ""
  - Name: "start"
    Type: "Integer"
    Required: false
    Comment: "填充起始索引"
    Default: 0
  - Name: "end"
    Type: "Integer"
    Required: false
    Comment: "填充结束索引"
    Default: "数组长度"
# 函数返回值
Return:
  Type: ""
  Comment: ""
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
${Content}
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
var array = [1, 2, 3];
_.fill(array, 'a');
console.log(array); // => ['a', 'a', 'a']
_.fill(Array(3), 2); // => [2, 2, 2]
_.fill([4, 6, 8, 10], '*', 1, 3); // => [4, '*', '*', 10]
```

#Lodash 