---
# 命令名称
Command: "SADD"
# 分类
Category: "Set"
# 命令签名
Signature: "SADD key member [member ...]"
# 命令说明
Comment: "向 [[Redis]] 库中指定键的Set添加成员"
# 命令额外说明
ExtraComment:
  - "如果指定的成员已经在Set中, 则会被忽略"
  - "如果指定的键不存在, 会先创建该键后再存入成员"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为实际加入Set的成员数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要添加成员的键"
    Default: ""
  - Name: "member"
    Type: "String"
    Required: true
    Comment: "需要加入Set的成员, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "成功添加的成员数量"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SADD myset "Hello"
      (integer) 1
      redis:6379> SADD myset "World"
      (integer) 1
      redis:6379> SADD myset "World"
      (integer) 0
      redis:6379> SMEMBERS myset
      1) "Hello"
      2) "World"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> SADD key "value2"
        (error) WRONGTYPE Operation against a key holding the wrong kind of value
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
```ad-warning
title: 注意
返回的数值是成功添加的成员的数量, 如果提交的多个成员中有已经在Set中存在的, 那么返回的结果是不等于提交的成员数量的
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