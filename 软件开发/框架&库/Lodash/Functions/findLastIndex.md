---
# 函数签名
Signature: "findLastIndex(array, [predicate=identity], [fromIndex=0])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "***从后向前*** 检索指定数组, 获取数组中 ***首个*** 符合指定条件的元素在数组中的索引"
# 函数额外说明
ExtraComment:
 - Type: "quote"
   Title: "关联"
   Content: "与 [[findIndex]] 类似, 区别在于 [[findIndex]] 对数组的检索方向是 ***从前向后***, 而 findIndex 的检索方向是 ***从后向前***"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要检索的数组"
    Default: ""
  - Name: "predicate"
    Type: "Function"
    Required: false
    Comment: "[[findLastIndex的predicate回调函数]]"
    Default: "[[identity]]"
  - Name: "fromIndex"
    Type: "Integer"
    Required: false
    Comment: "检索起始索引"
    Default: 0
# 函数返回值
Return:
  Type: "Integer"
  Comment:
    - "-1, 未检索到任何符合条件的元素时返回"
    - "检索到符合条件的元素时返回该元素在数组中的索引"
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
var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
  { user: 'mike', active: true },
];
_.findIndex(users, (user) => {
	return user.user == 'fred';
}); // => 1
_.findIndex(users, (user) => {
	return user.user == 'mike';
}); // => 3
```

#Lodash 