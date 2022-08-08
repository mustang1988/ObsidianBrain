---
# 函数签名
Signature: "differenceWith(array, [values], [comparator])"
# 函数分类
Category:
  - "Array"
# 函数说明
Comment: "使用指定函数进行相等比较, 创建其他给定数组中不包含的数组值的数组"
# 函数额外说明
ExtraComment: |
  此函数为 [[difference]] 的扩展, 添加自定义比对函数的支持, 可自定义值"相等"的定义

  不同于 [[pullAllWith]] 函数, 本函数会创建并返回建新的数组引用, 不会影响原始数组的引用
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
  - Name: "comparator"
    Type: "Function"
    Required: false
    Comment: "[[differenceWith的comparator回调函数]]"
    Default: "undefined"
# 函数返回值
Return:
  Type: "Array"
  Comment: "内容为检查过滤后的原始数组中的元素"
---
# [[Lodash|_]].`$=dv.current().Signature;`
## 作用

`$=dv.current().Comment;`

`$=dv.current().ExtraComment;`

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
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual); // => [{ 'x': 2, 'y': 1 }]
_.differenceWith(
  [
    { x: 2, y: 1 },
    { x: 1, y: 3 },
  ],
  [{ x: 3, y: 1 }],
  (arrVal, othVal) => {
    return arrVal.x + arrVal.y == othVal.x + othVal.y; // 自定义 数组元素的x字段值+y字段值相等, 认为两个对象相同, 应该被过滤掉
  }
); // => [ { x: 2, y: 1 } ]
```

#Lodash 