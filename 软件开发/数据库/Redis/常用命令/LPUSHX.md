---
# 命令名称
Command: "LPUSHX"
# 分类
Category: "List"
# 命令签名
Signature: "LPUSHX key element [element...]"
# 命令说明
Comment: "向 [[Redis]] 库中指定键的列表 ***前端*** 添加元素"
# 命令额外说明
ExtraComment:
  - "与 [[LPUSH]] 类似, 不同之处在于当指定的键 ***不存在*** 时, LPUSHX ***不会*** 创建一个空列表再把元素放入, 而是什么都不做"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为添加元素的个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要添加元素的列表的键"
    Default: ""
  - Name: "element"
    Type: "String"
    Required: true
    Comment: "需要添加的元素, 可以同时提交多个"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "添加元素后列表的长度"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> LPUSH mylist "World"
      (integer) 1
      redis:6379> LPUSHX mylist "Hello"
      (integer) 2
      redis:6379> LPUSHX myotherlist "Hello"
      (integer) 0
      redis:6379> LRANGE mylist 0 -1
      1) "Hello"
      2) "World"
      redis:6379> LRANGE myotherlist 0 -1
      (empty array)
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是List类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> LPUSHX key "value2"
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