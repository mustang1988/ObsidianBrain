---
# 函数签名
Signature: "random([lower=0], [upper=1], [floating])"
# 函数分类
Category:
  - "Number"
# 函数说明
Comment: "在指定上下范围的区间内生成一个随机数"
# 函数额外说明
ExtraComment:
  - "默认返回整数随机数"
  - "当指定的上下限边界值中有浮点数, 或指定返回浮点数时, 才返回浮点型随机数"
# 函数参数列表
Arguments:
  - Name: "lower"
    Type: "Number"
    Required: false
    Comment: "下限边界"
    Default: "0"
  - Name: "upper"
    Type: "Number"
    Required: false
    Comment: "上限边界"
    Default: "1"
  - Name: "upper"
    Type: "Boolean"
    Required: false
    Comment: "是否返回浮点随机数"
    Default: false
# 函数返回值
Return:
  Type: "Number"
  Comment: "生成的随机数"
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
_.random(0, 5);     // => 0~5之间的整数随机数
_.random(5);        // => 0~5之间的整数随机数
_.random(5, true);  // => 0~5之间的浮点数随机数
_.random(1.2, 5.2); // => 1.2~5.2之间的浮点随机数
```

#Lodash 