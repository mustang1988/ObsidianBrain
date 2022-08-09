---
# 函数签名
Signature: "inRange(number, [start=0], end)"
# 函数分类
Category:
  - "Number"
# 函数说明
Comment: "检查指定的数值是否在指定的区间内"
# 函数额外说明
ExtraComment:
 - Type: "warning"
   Title: "注意"
   Content:
     - "取值范围区间包含下限值但不包含上限值, 即区间为 [下限值, 上限值)"
     - "如果给定的下限值大于上限值, 则自动交换该上下限制值"
# 函数参数列表
Arguments:
  - Name: "number"
    Type: "Number"
    Required: true
    Comment: "需要进行范围检查的数值"
    Default: ""
  - Name: "start"
    Type: "Number"
    Required: false
    Comment: "下限值(包含)"
    Default: "0"
  - Name: "end"
    Type: "Number"
    Required: true
    Comment: "上限值(不包含)"
    Default: ""
# 函数返回值
Return:
  Type: "Boolean"
  Comment: "指定的值在给定范围内时返回true, 反之返回false"
---
# [[Lodash|_]].`$=dv.current().Signature;`
## 作用

`$=dv.current().Comment;`

```dataviewjs
if(dv.current().ExtraComment != null){
  for(const ec of dv.current().ExtraComment){
	  const { Type, Title, Content } = ec;
	  const admonition = `
\`\`\`ad-${Type}
title: ${Title}
${Array.isArray(Content) ? dv.markdownList(Content) : Content}
\`\`\`
`
      dv.paragraph(admonition);
  }
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
_.inRange(3, 2, 4);     // => true
_.inRange(4, 8);        // => true
_.inRange(4, 2);        // => false
_.inRange(2, 2);        // => false
_.inRange(1.2, 2);      // => true
_.inRange(5.2, 4);      // => false
_.inRange(-3, -2, -6);  // => true
```

#Lodash 