---
Command: "{{title}}"
Signature: ""
Comment: ""
ExtraComment: |-
  
TimeComplexity: ""
TimeComplexityComment: ""
Arguments:
  - Name: ""
    Type: ""
    Comment: ""
    Remark: ""
Returns:
  - Type: ""
    Comment: ""
Samples:
  Success:
    Sample: |-
      ```bash
      
      ```
  Error:
    - Reason: ""
      Sample: |-
        ```bash
        
        ```
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
	let print = `返回${Type}类型结果: ${Comment}`
	dv.paragraph(print);
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
for(const err of Error){
	const { Reason, Sample } = err;
	dv.paragraph(Reason);
	dv.paragraph(Sample);
}
~~~

```

#Redis #Redis/常用命令/SortedSet 