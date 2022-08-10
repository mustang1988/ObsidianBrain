---
# 命令名称
Command: "SUNIONSTORE"
# 分类
Category: "Set"
# 命令签名
Signature: "SUNIONSTORE destination key [key ...]"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键对应Set的合集并存入新键中"
# 命令额外说明
ExtraComment:
  - "此为 [[SUNION]] 的扩展命令, 区别在于, 此命令会将合集结果以Set类型存入新键中"
  - "如果指定的存储结果的键已经存在, 会直接覆盖原有的值, 不论原有值是否是Set类型"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为指定键对应Set中成员的总数"
# 命令参数列表
Arguments:
  - Name: "destination"
    Type: "String"
    Required: true
    Comment: "存储合集结果的键"
    Default: ""
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "参与合集计算Set的键, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "合集计算结果的长度"
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
      redis:6379> SUNIONSTORE key key1 key2
      (integer) 5
      redis:6379> SMEMBERS key
      1) "a"
      2) "c"
      3) "b"
      4) "d"
      5) "e"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SUNIONSTORE k key1 key2 key
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