---
# 函数签名
Signature: ""
# 函数分类
Category:
  - ""
# 函数说明
Comment: ""
# 函数额外说明
ExtraComment:
 - ""
# 函数参数列表
Arguments:
  - Name: ""
    Type: ""
    Required: true
    Comment: ""
    Default: ""
  - Name: ""
    Type: ""
    Required: false
    Comment: ""
    Default: ""
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
  dv.list(dv.current().ExtraComment);
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

```

#Lodash 