---
# 函数签名
Signature: "get(object, path, [defaultValue])"
# 函数分类
Category:
  - "Object"
# 函数说明
Comment: "获取指定对象中指定属性路径下的属性值"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "object"
    Type: "Object"
    Required: true
    Comment: "需要获取属性值的对象"
    Default: ""
  - Name: "path"
    Type: "String"
    Required: true
    Comment: "需要获取值的属性路径"
    Default: ""
  - Name: "defaultValue"
    Type: "any"
    Required: false
    Comment: "未能获取到属性值时,返回的默认值"
    Default: "undefined"
# 函数返回值
Return:
  Type: "any | undefined"
  Comment:
    - "当指定的属性路径存在时, 返回该属性值"
    - "当指定的属性不存在时, 如果有指定默认返回值, 则返回默认值, 如果未指定默认返回值, 则返回 undefined"
---
# [[Lodash|_]].`$=dv.current().Signature;`
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
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(object, 'a[0].b.c'); // => 3
_.get(object, ['a', '0', 'b', 'c']); // => 3
_.get(object, 'a.b.c', 'default'); // => 'default'
```

#Lodash 