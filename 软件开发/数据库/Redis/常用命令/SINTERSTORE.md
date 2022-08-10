---
# 命令名称
Command: "SINTERSTORE"
# 分类
Category: "Set"
# 命令签名
Signature: "SINTERSTORE destination key [key ...]"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键对应Set内容的交集并存储到新键中"
# 命令额外说明
ExtraComment:
  - "此为 [[SINTER]] 的扩展命令, 区别在于会将交集比对结果以Set类型存入新键中"
# 命令时间复杂度
TimeComplexity:
  Value: "n*m"
  Comment: "n为所有指定集合中最小的集合长度, m为指定的集合数量"
# 命令参数列表
Arguments:
  - Name: "destination"
    Type: "String"
    Required: true
    Comment: "存储交集比对结果的键"
    Default: ""
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "参与交集比对的集合的键, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "交集比对结果的长度"
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
      redis:6379> SINTERSTORE key key1 key2
      (integer) 1
      redis:6379> SMEMBERS key
      1) "c"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是Set类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key value
        "OK"
        redis:6379> SINTERSTORE k key key1 key2
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
```ad-warning
title: 注意
如果在此命令中指定的存储交集结果的键存在, 会直接 ***覆盖*** 原有的值, 不论原有值是否是Set类型
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