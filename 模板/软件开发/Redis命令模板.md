---
# 命令名称
Command: "{{title}}"
# 命令签名
Signature: ""
# 命令说明
Comment: ""
# 扩展命令说明
ExtraComment: |-
  
# 时间复杂度
TimeComplexity: ""
# 时间复杂度说明
TimeComplexityComment: ""
# 参数
Arguments:
    # 参数名
  - Name: ""
    # 参数类型
    Type: ""
    # 参数说明
    Comment: ""
    # 参数备注
    Remark: ""
# 返回值
Returns:
    # 返回值类型
  - Type: ""
    # 返回值说明
    Comment: ""
# 示例
Samples:
  # 正常示例
  Success:
    # 示例内容
    Sample: |-
      ```bash
      
      ```
      
  # 异常示例
  Error:
      # 异常原因
    - Reason: ""
      # 示例内容
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