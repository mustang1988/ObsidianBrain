---
# 命令名称
Command: "SET"
# 分类
Category: "String"
# 命令签名
Signature: "SET key value [options]"
# 命令说明
Comment: "向 [[Redis]] 库中存入键值对"
# 命令额外说明
ExtraComment:
  - "如果指定的键存在, 则 ***默认*** 会覆盖原有值, 不论原值类型是否时String, 默认操作可以通过 options 可选参数进行改变"
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
  - Name: "value"
    Type: "String"
    Required: true
    Comment: "需要存入的值"
    Default: ""
  - Name: "options"
    Type: "String"
    Required: false
    Comment: "[[SET的可选参数options]]"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment:
      - "\"OK\", 存入成功时返回"
      - "nil, 当使用了可选参数 NX / XX 导致不符合条件无法存入时, 或使用了可选参数GET但原始值并不存在时返回"
      - "存入前的原始值, 当使用了可选参数 GET 且原始值存在时返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET k1 "v1"
      "OK"
      redis:6379> SET k2 "v2" XX
      (nil)
      redis:6379> SET k1 "v3" GET
      "v1"
      redis:6379> SET k2 "v2" EX 10
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