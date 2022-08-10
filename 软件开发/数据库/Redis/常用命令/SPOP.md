---
# 命令名称
Command: "SPOP"
# 分类
Category: "Set"
# 命令签名
Signature: "SPOP key [count]"
# 命令说明
Comment: "从 [[Redis]] 库中指定键的Set中 ***随机取出*** 并删除成员"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为指定的元素个数"
# 命令参数列表
Arguments:
  - Name: "jey"
    Type: "String"
    Required: true
    Comment: "取出成员Set的键"
    Default: ""
  - Name: "count"
    Type: "Integer"
    Required: false
    Comment: "取出元素的个数"
    Default: 1
# 命令返回结果
Returns:
  - Type: "String | String[]"
    Comment:
      - "nil, 指定的键不存在时返回"
      - "取出的成员, 未指定count参数或指定其值为1时返回"
      - "取出的成员数组, 指定count参数的值大于1时返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SADD myset "one"
      (integer) 1
      redis:6379> SADD myset "two"
      (integer) 1
      redis:6379> SADD myset "three"
      (integer) 1
      redis:6379> SPOP myset
      "two"
      redis:6379> SMEMBERS myset
      1) "one"
      2) "three"
      redis:6379> SADD myset "four"
      (integer) 1
      redis:6379> SADD myset "five"
      (integer) 1
      redis:6379> SPOP myset 3
      1) "four"
      2) "one"
      3) "three"
      redis:6379> SMEMBERS myset
      1) "five"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SPOP key
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