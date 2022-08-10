---
# 命令名称
Command: "KEYS"
# 分类
Category: "通用"
# 命令签名
Signature: "KEYS pattern"
# 命令说明
Comment: "查询 [[Redis]] 库中所有符合指定规则的键"
# 命令额外说明
ExtraComment:
  - "*非常**不**建议* 在生产环境等重要环境中使用该命令, 可能会导致性能问题, 此命令只应用于开发和调试, 如果在生产环境有在数据库中大量查询键的需求, 请使用 [[SCAN]] 命令或其他命令代替"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为数据库中符合给定规则的键的数量, 若未指定规则, n就是当前数据库中所有键的数量"
# 命令参数列表
Arguments:
  - Name: "pattern"
    Type: "String"
    Required: true
    Comment: "键匹配规则, 支持通配符 * 和 ?, 以及正则表达式"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String[]"
    Comment: "库中查询到的符合给定规则的键组成的数组"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> MSET firstname Jack lastname Stuntman age 35
      "OK"
      redis:6379> KEYS *name*
      1) "lastname"
      2) "firstname"
      redis:6379> KEYS a??
      1) "age"
      redis:6379> KEYS *
      1) "lastname"
      2) "age"
      3) "firstname"
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