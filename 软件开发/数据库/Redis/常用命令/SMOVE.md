---
# 命令名称
Command: "SMOVE"
# 分类
Category: "Set"
# 命令签名
Signature: "SMOVE source destination member"
# 命令说明
Comment: "将 [[Redis]] 库中指定成员从一个Set移动到另一个Set"
# 命令额外说明
ExtraComment:
  - "当源Set不存在或不包含指定元素时, 不会进行任何操作"
  - "反之, 指定元素将会从源Set中移除, 同时加入到目标Set中, 如果目标Set中已经包含该元素, 则仅将源Set中的指定元素移除, 这是一个原子操作"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "source"
    Type: "String"
    Required: true
    Comment: "移出成员Set的键"
    Default: ""
  - Name: "destination"
    Type: "String"
    Required: true
    Comment: "移入成员Set的剑"
    Default: ""
  - Name: "member"
    Type: "String"
    Required: true
    Comment: "被移动的成员"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: 
      - "0, 移出元素的键不存在时返回"
      - "1, 元素移成功时返回"
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
      redis:6379> SADD myotherset "three"
      (integer) 1
      redis:6379> SMOVE myset myotherset "two"
      (integer) 1
      redis:6379> SMEMBERS myset
      1) "one"
      redis:6379> SMEMBERS myotherset
      1) "two"
      2) "three"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SMOVE key myset value
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