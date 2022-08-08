---
# 函数签名
Signature: "concat(array, [values])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "创建一个新的数组, 将数组与任何其他数组或值连接起来"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "concat"
    Type: "Array"
    Required: true
    Comment: "被连接的原始数组"
    Default: ""
  - Name: "values"
    Type: "any | Array"
    Required: false
    Comment: "参与连接的其他数组或值"
    Default: ""
# 函数返回值
Return:
  Type: "Array"
  Comment: "值为新创建的数组, 包含原始数组和所有参与连接的数组和值"
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
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
```

#Lodash 