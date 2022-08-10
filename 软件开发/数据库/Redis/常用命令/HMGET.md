---
# 命令名称
Command: "HMGET"
# 分类
Category: "Hash"
# 命令签名
Signature: "HMGET key field [field ...]"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键对应Hash的字段的值"
# 命令额外说明
ExtraComment:
  - "与 [[HGET]] 类似, 不同之处在于可以同时获取多个Hash字段的值"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为指定的字段名的数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要获取值的Hash的键"
    Default: ""
  - Name: "field"
    Type: "String"
    Required: true
    Comment: "需要获取的Hash字段名, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String[]"
    Comment: "字段值组成的数组, 顺序由提交的字段名顺序决定, 如果指定的字段名不存在, 该字段的值由 nil 填充"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> HSET myhash field1 "Hello"
      (integer) 1
      redis:6379> HSET myhash field2 "World"
      (integer) 1
      redis:6379> HMGET myhash field1 field2 nofield
      1) "Hello"
      2) "World"
      3) (nil)
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Hash类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> HMGET key 0
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