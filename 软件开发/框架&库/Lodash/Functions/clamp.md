---
# 函数签名
Signature: "clamp(number, [lower], upper)"
# 函数分类
Category:
  - "Number"
# 函数说明
Comment: "将给定的数值限制在指定的上下限范围内取值"
# 函数额外说明
ExtraComment: |
  
# 函数参数列表
Arguments:
  - Name: "number"
    Type: "Number"
    Required: true
    Comment: "给定的数值"
    Default: ""
  - Name: "lower"
    Type: "Number"
    Required: false
    Comment: "取值 ***下限*** 边界"
    Default: ""
  - Name: "upper"
    Type: "Number"
    Required: true
    Comment: "取值 ***上限*** 边界"
    Default: ""
# 函数返回值
Return:
  Type: "Number"
  Comment: 
    - "当给定值<取值下限边界时, 返回取值下限边界值"
    - "当给定值>取值上限边界时, 返回取值上限边界值"
    - "当给定值位于区间[取值下限边界, 取值上限边界]内时, 返回给定的值本身"
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
_.clamp(-10, -5, 5); // => -5, -10小于下限边界-5, 返回下限边界值
_.clamp(10, -5, 5);  // => 5, 10大于上限边界5, 返回上限边界值
_.clamp(0, -5, 5);   // => 0, 0在区间[-5, 5]内, 返回其本身
```

#Lodash 