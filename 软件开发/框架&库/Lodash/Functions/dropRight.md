---
# 函数签名
Signature: "dropRight(array, [n=1])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "创建指定数组的片段, 片段中 ***不包含*** 原始数组中 ***后端*** 的n个元素"
# 函数额外说明
ExtraComment:
  - Type: "quote"
    Title: "关联"
    Content: "与 [[drop]] 类似, 区别在于, [[drop]] 会忽略原始数组 ***前端*** 指定数量的元素, 本函数则会忽略原始数组 ***后端*** 指定数量的元素"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取片段的原始数组"
    Default: ""
  - Name: "n"
    Type: "Integer"
    Required: false
    Comment: "需要从原始数组 ***后端*** 忽略的元素个数"
    Default: "1"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为原始数组的片段"
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
_.dropRight([1, 2, 3]);     // => [1, 2]
_.dropRight([1, 2, 3], 2);  // => [1]
_.dropRight([1, 2, 3], 5);  // => []
_.dropRight([1, 2, 3], 0);  // => [1, 2, 3]
```

#Lodash 