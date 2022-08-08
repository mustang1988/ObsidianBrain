---
# 函数签名
Signature: "chain(value)"
# 函数别名
aliases: 
 - "_(value)"
# 函数分类
Category:
  - "Seq"
# 函数说明
Comment: "使用指定的值创建Lodash包装器实例, 用于链式调用"
# 函数额外说明
ExtraComment:
  - "包装器示例的结果需要使用 [[value]] 函数解包"
# 函数参数列表
Arguments:
  - Name: "value"
    Type: "any"
    Required: true
    Comment: "需要包装的值"
    Default: ""
# 函数返回值
Return:
  Type: "Object"
  Comment: "Lodash包装器实例"
---
# [[Lodash|_]].`$=dv.current().Signature;` `$=dv.current().Aliases ? ' / '+ dv.current().Aliases.join(' / ') : ''`
## 作用

`$=dv.current().Comment;`

```dataviewjs
if(dv.current().ExtraComment != null){
  dv.list(dv.current().ExtraComment);
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
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();  // => 'pebbles is 1'
```

#Lodash 