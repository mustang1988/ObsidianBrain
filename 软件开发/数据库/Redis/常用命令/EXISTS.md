---
# 命令名称
Command: "EXISTS"
# 分类
Category: "通用"
# 命令签名
Signature: "EXISTS key [key...]"
# 命令说明
Comment: "检查 [[Redis]] 库中指定的键在是否存在"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为指定的键的数量"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要进行检查的键, 可以同时提交多个需要检查"
    Default: ""
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: "指定键中存在的键的数量"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET key1 "Hello"
      "OK"
      redis:6379> EXISTS key1
      (integer) 1
      redis:6379> EXISTS nosuchkey
      (integer) 0
      redis:6379> SET key2 "World"
      "OK"
      redis:6379> EXISTS key1 key2 nosuchkey
      (integer) 2
      redis:6379> EXISTS key1 key1 key1
      (integer) 3
      ```
  # 异常示例
  Error:
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

```ad-warning
title: 注意
当指定参数中存在重复的键, 返回结果的数量并不会将重复的键做过滤处理
例如, 提交多次相同的键, 返回的结果并不是1
```bash
redis:6379> EXISTS key1 key1 key1
(integer) 3
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