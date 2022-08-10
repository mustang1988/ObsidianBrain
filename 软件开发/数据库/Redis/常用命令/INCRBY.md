---
# 命令名称
Command: "INCRBY"
# 分类
Category: "String"
# 命令签名
Signature: "INCRBY key increment"
# 命令说明
Comment: "对 [[Redis]] 库中指定键的值进行+n操作"
# 命令额外说明
ExtraComment:
  - "类似于 [[INCR]], 不同之处在于, [[INCR]] 固定+1, 而此命令可以指定加的数值"
  - "[[DECRBY]] 的反操作"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要对值进行+n操作的键"
    Default: ""
  - Name: "increment"
    Type: "Integer"
    Required: false
    Comment: "需要增加的数值"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment: "执行成功固定返回字符串\"OK\""
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET mykey "10"
      "OK"
      redis:6379> INCRBY mykey 5
      (integer) 15
      ```
  # 异常示例
  Error:
    - Reason: "指定键对应的值不是String类型, 返回异常"
      Sample: |
        ```bash
        redis:6379> LPUSH nostringkey "Hello"
        (integer) 1
        redis:6379> INCRBY nostringkey 10
        (error) WRONGTYPE Operation against a key holding the wrong kind of value
        ``` 
    - Reason: "指定键对应的值无法表示为一个 ***整数*** 时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET nonumberkey "World"
        "OK"
        redis:6379> INCRBY nonumberkey 10
        (error) value is not an integer or out of range
        ```
    - Reason: "此操作对数值的范围有限制, 限制为64位带符号整数(-2^63, 2^63-1), 当被操作的值超出此范围时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET overflowkey "234293482390480948029348230948"
        "OK"
        redis:6379> INCRBY overflowkey 10
        (error) value is not an integer or out of range
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