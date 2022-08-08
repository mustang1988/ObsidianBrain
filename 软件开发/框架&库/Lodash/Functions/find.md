---
# 函数签名
Signature: "find(collection, [predicate=_.identity], [fromIndex=0])"
# 函数分类
Category:
  - "Collection"
# 函数说明
Comment: "***从前向后*** 检索指定集合, 获取集合中 ***首个*** 符合指定条件的元素"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "collection"
    Type: "Collection"
    Required: true
    Comment: "需要进行遍历查找的集合"
    Default: ""
  - Name: "predicate"
    Type: "Function"
    Required: false
    Comment: "[[find的遍历回调函数predicate]]"
    Default: "[[identity]]"
# 函数返回值
Return:
  Type: "any"
  Comment: 
    - "值为集合中***第一个***使得predicate回调函数返回结果为true的集合元素"
    - "若集合中不存在使得predicate回调函数返回结果为true的元素, 则返回 undefined"
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
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
_.find(users, function(o) { return o.age < 40; }); // => { 'user': 'barney',  'age': 36, 'active': true }
// 隐式调用 _.matches 作为predicate回调函数
_.find(users, { 'age': 1, 'active': true });       // => { 'user': 'pebbles', 'age': 1,  'active': true }
// 隐式调用 _.matchesProperty 作为predicate回调函数
_.find(users, ['active', false]);                  // => { 'user': 'fred',    'age': 40, 'active': false }
// 隐式调用 _.property 作为predicate回调函数
_.find(users, 'active');                           // => { 'user': 'barney',  'age': 36, 'active': true }
```

#Lodash 