---
# 命令名称
Command: "RENAME"
# 分类
Category: "通用"
# 命令签名
Signature: "RENAME key newkey"
# 命令说明
Comment: "重命名 [[Redis]] 库中的键"
# 命令额外说明
ExtraComment:
  - "如果newkey已经存在, 则会 ***覆盖原有值*** , 此时会隐式的执行 [[DEL]] 操作, 如果被删除的原始值较大, 可能会出现性能问题, 需要注意"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要重命名的键"
    Default: ""
  - Name: "newkey"
    Type: "String"
    Required: true
    Comment: "重命名后的键"
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
      redis:6379> SET mykey "Hello"
      "OK"
      redis:6379> RENAME mykey myotherkey
      "OK"
      redis:6379> GET myotherkey
      "Hello"
      ```
  # 异常示例
  Error:
    - Reason: "当指定的key不存在时, 返回异常"
      Sample: |
        ```bash
        redis:6379> RENAME notexistingkey newkey
        (error) no such key
        ``` 
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