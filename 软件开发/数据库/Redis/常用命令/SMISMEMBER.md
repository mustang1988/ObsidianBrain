---
# 命令名称
Command: "SMISMEMBER"
# 分类
Category: "Set"
# 命令签名
Signature: "SMISMEMBER key member [member ...]"
# 命令说明
Comment: "检查 [[Redis]] 库中指定的值是否是指定键对应Set的成员"
# 命令额外说明
ExtraComment:
  - "类似 [[SISMEMBER]] , 区别在于 SMISMEMBER 支持同时检查多个值"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为参与检查的元素个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要检索的Set的键, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer[]"
    Comment: 
      - "每个成员的检查结果, 顺序与提交的参数顺序一致"
      - "0, 指定元素不是Set的成员"
      - "1, 指定元素是Set的成员"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SADD myset "one"
      (integer) 1
      redis:6379> SADD myset "one"
      (integer) 0
      redis:6379> SMISMEMBER myset "one" "notamember"
      1) (integer) 1
      2) (integer) 0
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SMISMEMBER key value value
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