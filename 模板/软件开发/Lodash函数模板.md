---
Signature: ""
Category:
  - ""
Comment: ""
ExtraComment: |
  
Arguments:
  - Name: ""
    Type: ""
    Required: true
    Comment: ""
    Default: ""
Return:
  Type: ""
  Comment: ""
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
dv.paragraph(`返回${Type}类型的结果: ${Comment}`);
```

## 示例
```javascript
const _ = require('lodash');

```

#Lodash 