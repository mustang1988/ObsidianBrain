---
# 函数签名
Signature: "gt(value, other)"
# 函数分类
Category:
  - "Lang"
# 函数说明
Comment: "检查指定值是否大于另一个值, 等同于运算符 \">\""
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "value"
    Type: "any"
    Required: true
    Comment: "参与比较的值"
    Default: ""
  - Name: "other"
    Type: "any"
    Required: true
    Comment: "参与比较的另一个值"
    Default: ""
# 函数返回值
Return:
  Type: "Boolean"
  Comment: "当参与比较的值较大时返回true, 反正返回false"
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
_.gt(3, 1); // => true
_.gt(3, 3); // => false
_.gt(1, 3); // => false
```

#Lodash 