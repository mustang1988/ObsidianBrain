---
# 命令名称
Command: "SETEX"
# 分类
Category: "String"
# 命令签名
Signature: "SETEX key seconds value"
# 命令说明
Comment: "向 [[Redis]] 库中存入键值对并同时设置其过期时间"
# 命令额外说明
ExtraComment:
  - "等价于 [[SET]] 操作中使用了EX可选参数"
  - "类似于先执行 [[SET]] 命令, 再执行 [[EXPIRE]] 命令, 但区别在于此命令是一个原子操作不可拆分"
  - "如果指定的键存在, 则会覆盖原有值, 不论原值类型是否时String"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要存入值的键"
    Default: ""
  - Name: "seconds"
    Type: "Integer"
    Required: true
    Comment: "过期时间, 单位为秒"
    Default: ""
  - Name: "value"
    Type: "String"
    Required: true
    Comment: "需要存入的值"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment: "总是返回\"OK\""
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SETEX mykey 10 "Hello"
      "OK"
      ```
  # 异常示例
  Error:
---

# `$=dv.current().Signature;`

## 用途
`$=dv.current().Comment;`

```dataviewjs
const { ExtraComment=[] } = dv.current();
Array.isArray(ExtraComment) 
	? dv.list(ExtraComment) 
	: ExtraComment == null 
		? dv.paragraph('') 
		: dv.paragraph(ExtraComment);
```

## 时间复杂度
```dataviewjs
const { Value, Comment } = dv.current().TimeComplexity;
let display = `O(${Value})`
if(Value != "1"){
	display = `${display}: ${Comment}`
}
dv.paragraph(display);
```

## 参数说明
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Required, arg.Comment, arg.Default]);
dv.table(
	["参数名","参数类型", "必填?", "参数说明","默认值"],
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

#Redis/Command 