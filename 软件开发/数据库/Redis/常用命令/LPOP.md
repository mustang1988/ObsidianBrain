---
# 命令名称
Command: "LPOP"
# 分类
Category: "List"
# 命令签名
Signature: "LPOP key [count]"
# 命令说明
Comment: "从 [[Redis]] 库中指定键对应的列表 ***前端*** 取出元素"
# 命令额外说明
ExtraComment:
  - "类似 [[RPOP]] , 区别在于取出元素的方向, [[RPOP]] 是从列表 ***后端*** 取出元素, 此命令是从列表 ***前端*** 取出元素"
# 命令时间复杂度
TimeComplexity:
  Value: "n"
  Comment: "n为取出的元素个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要取出元素的列表的键"
    Default: ""
  - Name: "count"
    Type: "Integer"
    Required: false
    Comment: "需要取出的元素个数"
    Default: 1
# 命令返回结果
Returns:
  - Type: "String | String[]"
    Comment:
      - "nil, 当指定的键不存在时或指定键的列表为空时返回"
      - "当未指定count可选参数或指定count参数值为1时, 元素成功取出后返回被取出的元素"
      - "当指定了count可选参数, 且指定的count值不为1时, 元素成功移除后返回被取出的元素组成数组"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> RPUSH mylist "one" "two" "three" "four" "five"
      (integer) 5
      redis:6379> LPOP mylist
      "one"
      redis:6379> LPOP mylist 2
      1) "two"
      2) "three"
      redis:6379> LRANGE mylist 0 -1
      1) "four"
      2) "five"
      redis:6379> RPUSH list1 "1"
      (integer) 1
      redis:6379> LPOP list1
      "1"
      redis:6379> LPOP list1
      (nil)
      redis:6379> LPOP mylist 0
      (empty array)
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是List类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> LPOP key
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