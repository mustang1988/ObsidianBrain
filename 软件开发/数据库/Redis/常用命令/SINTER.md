---
# 命令名称
Command: "SINTER"
# 分类
Category: "Set"
# 命令签名
Signature: "SINTER key [key ...]"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键对应Set内容的交集"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "n*m"
  Comment: "n为所有指定集合中最小的集合长度, m为指定的集合数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "参与交集比对的集合的键, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String[]"
    Comment: "包含所有给定键对应Set中都存在的成员"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SADD key1 "a"
      (integer) 1
      redis:6379> SADD key1 "b"
      (integer) 1
      redis:6379> SADD key1 "c"
      (integer) 1
      redis:6379> SADD key2 "c"
      (integer) 1
      redis:6379> SADD key2 "d"
      (integer) 1
      redis:6379> SADD key2 "e"
      (integer) 1
      redis:6379> SINTER key1 key2
      1) "c"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SINTER key key1 key2
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