---
# 命令名称
Command: "UNLINK"
# 分类
Category: "通用"
# 命令签名
Signature: "UNLINK key [key...]"
# 命令说明
Comment: "从 [[Redis]] 库中删除指定的键"
# 命令额外说明
ExtraComment:
  - "如果指定的键不存在, 则会忽略不进行操作"
  - "与 [[DEL]] 类似, 不同之处在于, 此命令会在不同线程执行内存回收, 是非阻塞的, 而 [[DEL]] 是阻塞的"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为删除的键数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要从库中删除的键, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "实际被删除的键的数量"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET key1 "Hello"
      "OK"
      redis:6379> SET key2 "World"
      "OK"
      redis:6379> UNLINK key1 key2 key3
      (integer) 2
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

```ad-warning
title: 注意
返回的是实际被删除的键的数量, 可能不等于提交的键的数量, 因为提交的键如果不存在是不执行操作的, 此时返回的结果数量必定不等于提交的键的数量, 此外此命令并不会对提交的键进行去重, 可以在一个命令中重复提交相同的键, 此时返回的结果也不等于提交的键的数量
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