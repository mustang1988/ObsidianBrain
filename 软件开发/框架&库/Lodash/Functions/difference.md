---
# 函数签名
Signature: "difference(array, [values])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用SameValueZero进行相等比较, 创建其他给定数组中不包含的数组值的数组"
# 函数额外说明
ExtraComment:
  - "结果值的顺序和引用由第一个数组决定"
  - "不同于 [[pullAll]] 函数, 本函数会创建并返回新的数组引用, 不会影响原始数组的引用"
# 函数参数列表
Arguments:
  - Name: "array"
    Type: "Array"
    Required: true
    Comment: "需要进行检查的原数组"
    Default: ""
  - Name: "values"
    Type: "Array"
    Required: false
    Comment: "需要被排除的数组"
    Default: "undefined"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为检查过滤后的原始数组中的元素"
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
_.difference([2, 1], [2, 3]); // => [1]
```

#Lodash 