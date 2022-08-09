---
# 命令名称
Command: "APPEND"
# 分类
Category: "String"
# 命令签名
Signature: "APPEND key value"
# 命令说明
Comment: "向 [[Redis]] 库中, 指定键对应的字符串类型值后追加指定的字符串内容"
# 命令额外说明
ExtraComment:
  - "当指定的键不存在时, 会新建该键, 并设置其值为空字符串, 然后对其后追加内容"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要追加内容值对应的键"
    Default: ""
  - Name: "value"
    Type: "String"
    Required: true
    Comment: "需要追加的字符串内容"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "追加内容后字符串值的长度"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> EXISTS mykey
      (integer) 0
      redis:6379> APPEND mykey "Hello"
      (integer) 5
      redis:6379> APPEND mykey " World"
      (integer) 11
      redis:6379> GET mykey
      "Hello World"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是String类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> LPUSH key value
        (integer) 1
        redis:6379> APPEND key "hello"
        (error) WRONGTYPE Operation against a key holding the wrong kind of value
        ```
---

# `$=dv.current().Signature;`

## 用途
`$=dv.current().Comment;`

```dataviewjs
const { ExtraComment=[] } = dv.current();
Array.isArray(ExtraComment) ? dv.list(ExtraComment) : dv.paragraph(ExtraComment);
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