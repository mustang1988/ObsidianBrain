---
Signature: "chunk(array, [size=1])"
Category:
  - "Array"
Comment: "将指定数组中的元素按指定长度切分为子数组存入一个新数组中"
ExtraComment:
  - "如果指定的数组不能被平均分割, 最后一个分组将包含剩余的元素"
Arguments:
  - Name: "array"
    Type: "any[]"
    Required: true
    Comment: "需要进行分片的数组"
    Default: ""
  - Name: "size"
    Type: "Integer"
    Required: false
    Comment: "分组长度"
    Default: 1
Return:
  Type: "any[]"
  Comment: "原始数组分组操作后得到的二维数组"
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
dv.paragraph(`返回${Type}类型的结果: ${Comment}`);
```

## 示例
```javascript
const _ = require('lodash');
_.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
```

#Lodash 