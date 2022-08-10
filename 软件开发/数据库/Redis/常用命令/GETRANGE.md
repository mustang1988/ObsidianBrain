---
# 命令名称
Command: "GETRANGE"
# 分类
Category: "String"
# 命令签名
Signature: "GETRANGE key start end"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键对应的字符串值的子字符串"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要获取值的键"
    Default: ""
  - Name: "start"
    Type: "Integer"
    Required: true
    Comment: "字符串值截取起始索引号, 可以是负数, 表示从字符串末尾向前计算索引号, -1表示倒数第一个字符, -2表示倒数第二个字符, 以此类推, start位置的字符 ***包含*** 在最终结果中"
    Default: ""
  - Name: "end"
    Type: "Integer"
    Required: true
    Comment: "字符串截取结束索引号, 可以是负数, 表示从字符串末尾向前计算索引号, -1表示倒数第一个字符, -2表示倒数第二个字符, 以此类推, end位置的字符 ***包含*** 在最终结果中"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment:
      - "空字符串, 当指定的键不存在时返回"
      - "截取后的子字符串"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET mykey "This is a string"
      "OK"
      redis:6379> GETRANGE mykey 0 3
      "This"
      redis:6379> GETRANGE mykey -3 -1
      "ing"
      redis:6379> GETRANGE mykey 0 -1
      "This is a string"
      redis:6379> GETRANGE mykey 10 100
      "string"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是String类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> LPUSH notstringkey "Hello"
        (integer) 1
        redis:6379> GETRANGE notstringkey 0 1
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