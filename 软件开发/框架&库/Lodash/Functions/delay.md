---
# 函数签名
Signature: "delay(func, wait, [args])"
# 函数分类
Category:
  - "Function"
# 函数说明
Comment: "在指定时间后调用指定函数"
# 函数额外说明
ExtraComment: |
  
# 函数参数列表
Arguments:
  - Name: "func"
    Type: "Function"
    Required: true
    Comment: "需要被延迟调用的函数"
    Default: ""
  - Name: "wait"
    Type: "Integer"
    Required: true
    Comment: "延迟调用时间, 单位: 毫秒"
    Default: ""
  - Name: "args"
    Type: "Array"
    Required: false
    Comment: "传递给参数func的调用参数"
    Default: "undefined"
# 函数返回值
Return:
  Type: "Number"
  Comment: "timer计时器的id"
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
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
```

#Lodash 