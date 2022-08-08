---
# 函数签名
Signature: "camelCase([string=''])"
# 函数分类
Category:
  - "String"
# 函数说明
Comment: "将指定字符串转换为\"驼峰\"格式"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "string"
    Type: "String"
    Required: false
    Comment: "需要进行格式转换的原始字符串"
    Default: ""
# 函数返回值
Return:
  Type: "String"
  Comment: "转换为驼峰格式后的字符串"
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
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Required, arg.Comment, arg.Default])
dv.table(
	["参数名","参数类型","必填?","参数说明","默认值"],
	data
);
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
_.camelCase('Foo Bar');     // => 'fooBar'
_.camelCase('--foo-bar--'); // => 'fooBar'
_.camelCase('__FOO_BAR__'); // => 'fooBar'
```

#Lodash 