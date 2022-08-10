---
# 命令名称
Command: "LTRIM"
# 分类
Category: "List"
# 命令签名
Signature: "LTRIM key start stop"
# 命令说明
Comment: "裁剪 [[Redis]] 库中指定键对应的列表, 只保留指定索引范围内的元素"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为列表中被移除元素的个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要裁剪元素的列表的键"
    Default: ""
  - Name: "start"
    Type: "Integer"
    Required: false
    Comment: "裁剪起始点索引, 索引从0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推"
    Default: ""
  - Name: "stop"
    Type: "Integer"
    Required: false
    Comment: "裁剪结束点索引, 索引从0开始, 可以为负数, 即从列表末尾检索, -1 为倒数第一个元素, -2 为倒数第二个元素, 以此类推"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment: "总是返回\"OK\""
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> RPUSH mylist "one"
      (integer) 1
      redis:6379> RPUSH mylist "two"
      (integer) 2
      redis:6379> RPUSH mylist "three"
      (integer) 3
      redis:6379> LTRIM mylist 1 -1
      "OK"
      redis:6379> LRANGE mylist 0 -1
      1) "two"
      2) "three"
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是List类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> LTRIM key 0 -1
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