---
# 命令名称
Command: "MSETNX"
# 分类
Category: "String"
# 命令签名
Signature: "MSETNX key value [ key value ...]"
# 命令说明
Comment: "向 [[Redis]] 库中存入键值对"
# 命令额外说明
ExtraComment:
  - "当且仅当所有给定的键都不存在时才执行入库"
  - "原子操作, 所有给定的键值对是一起存入的"
  - "与 [[MSET]] 类似, 但是加入了键存在性检查, 可以避免键值被覆盖的问题"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为指定键值对的数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要存入值的键, 可以同时提交多个"
    Default: ""
  - Name: "value"
    Type: "String"
    Required: true
    Comment: "需要存入的值, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment:
      - "0, 至少有一个键已经存在, 所有键均没有执行存入时返回"
      - "1, 所有给定的键均不存在, 并全都存入成功时返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> MSETNX key1 "Hello" key2 "there"
      (integer) 1
      redis:6379> MSETNX key2 "new" key3 "world"
      (integer) 0
      redis:6379> MGET key1 key2 key3
      1) "Hello"
      2) "there"
      3) (nil)
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