---
# 命令名称
Command: "LREM"
# 分类
Category: "List"
# 命令签名
Signature: "LREM key count element"
# 命令说明
Comment: "从 [[Redis]] 库中指定键的列表中按指定方向移除指定数量的指定元素"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "m+n"
  Comment: "n为列表长度, m为被移除元素的个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要移除元素的列表的键"
    Default: ""
  - Name: "count"
    Type: "Integer"
    Required: true
    Comment: |
      移除的元素个数与移除方向
      - count > 0
        列表***从前向后***检索指定元素, 移除 count 个
      - count < 0
        列表***从后向前***检索指定元素, 移除 |count| 个
      - count = 0
        移除列表中所有指定元素
    Default: ""
  - Name: "element"
    Type: "String"
    Required: true
    Comment: "需要进行检索和移除的元素"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "***实际*** 被移除元素的个数"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> RPUSH mylist "hello"
      (integer) 1
      redis:6379> RPUSH mylist "hello"
      (integer) 2
      redis:6379> RPUSH mylist "foo"
      (integer) 3
      redis:6379> RPUSH mylist "hello"
      (integer) 4
      redis:6379> LREM mylist -2 "hello"
      (integer) 2
      redis:6379> LRANGE mylist 0 -1
      1) "hello"
      2) "foo"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是List类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> LREM key 0 "value"
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