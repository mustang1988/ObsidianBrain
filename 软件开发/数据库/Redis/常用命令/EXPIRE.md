---
# 命令名称
Command: "EXPIRE"
# 分类
Category: "通用"
# 命令签名
Signature: "EXPIRE key seconds [options]"
# 命令说明
Comment: "设置 [[Redis]] 库中键的过期时间"
# 命令额外说明
ExtraComment:
  - "过期时间结束后, 键会被自动删除"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要设置过期时间的键"
    Default: ""
  - Name: "seconds"
    Type: "Integer"
    Required: true
    Comment: "过期时间, 单位 秒"
    Default: ""
  - Name: "options"
    Type: "String"
    Required: false
    Comment: "[[EXIPRE的参数options]]"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment:
      - "0, 因为不符合给定的 [[EXIPRE的可选参数options]] 的条件, 未更新键的过期时间时返回"
      - "1, 过期时间成功设置后返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET mykey "Hello"
      "OK"
      redis:6379> EXPIRE mykey 10
      (integer) 1
      redis:6379> TTL mykey
      (integer) 10
      redis:6379> SET mykey "Hello World"
      "OK"
      redis:6379> TTL mykey
      (integer) -1
      redis:6379> EXPIRE mykey 10 XX
      (integer) 0
      redis:6379> TTL mykey
      (integer) -1
      redis:6379> EXPIRE mykey 10 NX
      (integer) 1
      redis:6379> TTL mykey
      (integer) 10
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