---
# 命令名称
Command: "{{title}}"
# 命令签名
Signature: ""
# 命令说明
Comment: ""
# 命令额外说明
ExtraComment:
  - 
# 命令时间复杂度
TimeComplexity: ""
# 命令时间复杂度额外说明
TimeComplexityComment: ""
# 命令参数列表
Arguments:
  - Name: ""
    Type: ""
    Comment: ""
    Remark: ""
  - Name: ""
    Type: ""
    Comment: ""
    Remark: ""
# 命令返回结果
Returns:
  - Type: ""
    Comment: ""
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      
      ```
  # 异常示例
  Error:
---

# `$=dv.current().Signature;`

## 用途
`$=dv.current().Comment;`

`$=dv.current().ExtraComment;`

## 时间复杂度
```dataviewjs
const TimeComplexity = dv.current().TimeComplexity;
let TimeComplexityString = TimeComplexity;
TimeComplexityString += TimeComplexity.includes("n") 
						? `: ${dv.current().TimeComplexityComment}`
						: "";
dv.paragraph(TimeComplexityString);
```

## 参数
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Comment, arg.Remark]);
dv.table(
	["参数名","参数类型","参数说明","备注"],
	data
);
```

## 返回值
```dataviewjs
const {Returns = []} = dv.current();
for(const ret of Returns){
	const {Type, Comment} = ret;
	let print = !Array.isArray(Comment) 
		? `返回${Type}类型结果: ${Comment}`
		: `返回${Type}类型结果: `
	dv.paragraph(print);
	Array.isArray(Comment) && dv.list(Comment);
}
```

## 示例
```ad-success
title: 正常
`$=dv.current().Samples.Success.Sample;`
```

```ad-danger
title: 异常

~~~dataviewjs
const {Error = []} = dv.current().Samples;
if(Array.isArray(Error)){
	for(const err of Error){
		const { Reason, Sample } = err;
		dv.paragraph(Reason);
		dv.paragraph(Sample);
	}
} else {
	dv.paragraph('无异常返回');
}
~~~

```

#Redis 