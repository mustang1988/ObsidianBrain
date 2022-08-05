---
# 函数签名
Signature: "add(augend, addend)"
# 所属分类
Category:
  - "Math"
# 说明
Comment: "将两个数值相加, 作用等同于运算符 '+'"
# 额外说明
ExtraComment: |-
  
# 参数列表
Arguments:
    # 参数名
  - Name: "augend"
    # 参数类型
    Type: "Number"
    # 是否必填
    Required: true
    # 参数说明
    Comment: "参与相加的第一个数"
    # 非必填参数的默认值
    Default: ""
  - Name: "addend"
    Type: "Number"
    Required: true
    Comment: "参与相加的第二个数"
    Default: ""
# 返回值
Return:
  # 返回值类型
  Type: "Number"
  # 返回值说明
  Comment: "值为两数相加的结果"
---
# [[Lodash|_]].`$=dv.current().Signature;`
## 作用

`$=dv.current().Comment;`

`$=dv.current().ExtraComment;`

## 参数说明
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Required, arg.Comment, arg.Default])
dv.paragraph(
	dv.markdownTable(
		["参数名","参数类型","必填?","参数说明","默认值"],
		data
	)
);
```

## 返回值
```dataviewjs
const { Return:{ Type, Comment } } = dv.current();
dv.paragraph(`返回${Type}类型的结果: ${Comment}`);
```

## 示例
```javascript
const _ = require('lodash');
_.add(6, 4); // => 10
```

#Lodash 