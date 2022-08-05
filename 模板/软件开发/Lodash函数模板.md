---
# 函数签名
Signature: ""
# 所属分类
Category:
  - ""
# 说明
Comment: ""
# 额外说明
ExtraComment: |-
  
# 参数列表
Arguments:
    # 参数名
  - Name: ""
    # 参数类型
    Type: ""
    # 是否必填
    Required: true
    # 参数说明
    Comment: ""
    # 非必填参数的默认值
    Default: ""
# 返回值
Return:
  # 返回值类型
  Type: ""
  # 返回值说明
  Comment: ""
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

```

#Lodash 