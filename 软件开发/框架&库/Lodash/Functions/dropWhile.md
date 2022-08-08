---
# 函数签名
Signature: "dropWhile(array, [predicate=_.identity])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "创建指定数组的片段, 片段中 ***不包含*** 原始数组中 ***前端*** 的部分元素"
# 函数额外说明
ExtraComment:
  - Type: "quote"
    Title: "关联"
    Content: 
      - "此函数为 [[drop]] 的扩展, 添加自定义条件回调函数, 不再忽略固定数量的元素, 而是根据回调函数的返回结果决定忽略/终止忽略元素"
      - "与 [[dropRightWhile]] 函数类似, 区别在于 [[dropRightWhile]] 函数会忽略原始数组 ***后端*** 部分元素, 本函数则会忽略原始数组 ***前端*** 部分元素"
      - "当迭代函数 predicate ***首次*** 返回 false 时, 终止 predicate 函数的迭代和元素的忽略"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取片段的原始数组"
    Default: ""
  - Name: "predicate"
    Type: "Function"
    Required: false
    Comment: "[[dropWhile的predicate回调函数]]"
    Default: "[[identity]]"
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
${Array.isArray(Content) ? dv.markdownList(Content) : Content}
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
var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
  { user: 'mike', active: true },
];
_.dropWhile(users, (value, index, array) => {
  return value.active;
}); // => [ { user: 'fred', active: false }, { user: 'pebbles', active: false }, { user: 'mike', active: true } ]
_.dropWhile(users, (value, index, array) => {
  return !value.active;
}); // => [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false }, { user: 'mike', active: true } ]
```

#Lodash 