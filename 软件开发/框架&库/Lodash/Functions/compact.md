---
# 函数签名
Signature: "compact(array)"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "从给定的数组中创建新数组, 移除原始数组中的所有 ***假值*** "
# 函数额外说明
ExtraComment:
  - "***假值*** 包括 false, null, 0, \"\", undefined 和 NaN"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要移除 ***假*** 值的数组"
    Default: ""
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为原始数组移除 ***假*** 值后的所有元素"
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
_.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
```

#Lodash 