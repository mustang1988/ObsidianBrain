---
# 函数签名
Signature: "head(array)"
Aliases: 
  - "_.first(array)"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "获取指定数组从前向后数的 ***第一个*** 元素"
# 函数额外说明
ExtraComment:
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要获取元素的数组"
    Default: ""
# 函数返回值
Return:
  Type: " any | undefined "
  Comment: 
    - "undefined, 当指定的数组为空数组时返回"
    - "当给定的数组不是空数组时, 返回值为给定数组中的第一个元素"
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
_.head([1, 2, 3]); // => 1
_.head([]); // => undefined
```

#Lodash 