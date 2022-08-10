---
# 命令名称
Command: "HSET"
# 分类
Category: "Hash"
# 命令签名
Signature: "HSET key field value [ field value ...]"
# 命令说明
Comment: "为 [[Redis]] 库中指定键对应的Hash设置字段和值"
# 命令额外说明
ExtraComment:
  - "当指定的键不存在时会先创建一个该键的空Hash, 再设置字段值"
  - "当指定键对应的Hash中指定字段已经存在, 会使用新的值***覆盖***原有值"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为需要设置的字段的数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要设置值的Hash的键"
    Default: ""
  - Name: "field"
    Type: "String"
    Required: true
    Comment: "需要设置的Hash字段名, 可以同时提交多个"
    Default: ""
  - Name: "value"
    Type: "String"
    Required: true
    Comment: "需要设置的Hash字段值, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "Hash中***新增***字段的数量"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> HSET myhash field1 "Hello"
      (integer) 1
      redis:6379> HGET myhash field1
      "Hello"
      redis:6379> HSET myhash field1 "World"
      (integer) 0
      redis:6379> HGET myhash field1
      "World"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Hash类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> HSET key field "value"
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

```ad-warning
title: 注意
返回结果并不是当前Hash的长度, 也不是提交的字段的数量, 而仅是 ***新增*** 的字段数量
如果提交的所有字段均为已存在的, 返回值会是0, 如果提交的字段均为新字段, 但提交了重复的字段名, 返回结果也不等于提交的字段数量
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