---
# 命令名称
Command: "EXPIRETIME"
# 分类
Category: "通用"
# 命令签名
Signature: "EXPIRETIME key"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键过期时间点的秒时间戳"
# 命令额外说明
ExtraComment:
  - "与 [[PEXPIRETIME]] 类似, 不同之处在于EXPIRETIME返回的是键过期时间点的 ***秒*** 时间戳"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要获取过期时间点的键"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment:
      - "-2, 当指定的键不存在时返回"
      - "-1, 当指定的键存在, 但未设置过期时间时返回"
      - "键的过期时间点的秒时间戳, 当且仅当键存在且已设置过过期时间时返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET mykey "Hello"
      "OK"
      redis:6379> EXPIREAT mykey 33177117420
      (integer) 1
      redis:6379> EXPIRETIME mykey
      (integer) 33177117420
      redis:6379> EXPIRETIME notexistingkey
      (integer) -2
      redis:6379> SET notexpirekey "World"
      "OK"
      redis:6379> EXPIRETIME notexpirekey
      (integer) -1
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