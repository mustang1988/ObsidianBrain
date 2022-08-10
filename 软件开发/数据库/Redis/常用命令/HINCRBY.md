---
# 命令名称
Command: "HINCRBY"
# 分类
Category: "Hash"
# 命令签名
Signature: "HINCRBY key field increment"
# 命令说明
Comment: "为 [[Redis]] 库中指定键对应的Hash的指定字段值加进行+n操作"
# 命令额外说明
ExtraComment:
  - "如果指定键对应的hash中不包含指定的字段, 则先创建该字段, 并设置值为0, 再进行加进行+n操作"
  - "如果指定的键不存在时, 会先创建该键, 并设置指定字段值为0, 再进行加进行+n操作"
  - "与 [[INCRBY]] 操作类似"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要执行操作的Hash的键"
    Default: ""
  - Name: "field"
    Type: "String"
    Required: true
    Comment: "需要执行+n操作的字段名"
    Default: ""
  - Name: "increment"
    Type: "Integer"
    Required: true
    Comment: "需要增加的数值, 可以是负值, 表示-n操作"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "值为执行+n操作后, 指定字段当前的值"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> HSET myhash field 5
      (integer) 1
      redis:6379> HINCRBY myhash field 1
      (integer) 6
      redis:6379> HINCRBY myhash field -1
      (integer) 5
      redis:6379> HINCRBY myhash field -10
      (integer) -5
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Hash类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> HINCRBY key field 1
        (error) WRONGTYPE Operation against a key holding the wrong kind of value
        ``` 
    - Reason: "该操作对数值的范围有限制, 限制为64位带符号整数(-2^63, 2^63-1), 当被操作的值超出此范围时, 返回异常"
      Sample: |
        ```bash
        redis:6379> HSET hash field "9223372036854775807"
        (integer) 0
        redis:6379> HGET hash field
        "9223372036854775807"
        redis:6379> HINCRBY hash field 1
        (error) increment or decrement would overflow
        ``` 
    - Reason: "指定字段的值无法表示为一个 **整数** 时, 返回异常"
      Sample: |
        ```bash
        redis:6379> HSET hash field "helloworld"
        (integer) 0
        redis:6379> HINCRBY hash field 10
        (error) hash value is not an integer
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