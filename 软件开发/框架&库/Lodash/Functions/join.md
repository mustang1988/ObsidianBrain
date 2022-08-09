---
# 函数签名
Signature: "join(array, [separator=','])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定字符串作为分隔符, 将指定数组中的元素用分隔符连接为一个字符串"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要进行字符串连接的数组"
    Default: ""
  - Name: "separator"
    Type: "String"
    Required: false
    Comment: "字符串连接分隔符"
    Default: "\",\""
# 函数返回值
Return:
  Type: "String"
  Comment: "连接了数组元素后的字符串"
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
_.join(['a', 'b', 'c'], '~'); // => 'a~b~c'
```

#Lodash 