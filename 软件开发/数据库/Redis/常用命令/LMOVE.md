---
# 命令名称
Command: "LMOVE"
# 分类
Category: "List"
# 命令签名
Signature: "LMOVE source destination from to"
# 命令说明
Comment: "从 [[Redis]] 库中一个列表移动最前/最后的1个元素到 [[Redis]] 库中另一个列表的最前/最后的位置处"
# 命令额外说明
ExtraComment:
  - "当目标键不存在时, 先创建一个空列表再进行元素的移动"
# 命令时间复杂度
TimeComplexity:
  Value: "1"
  Comment: ""
# 命令参数列表
Arguments:
  - Name: "source"
    Type: "String"
    Required: true
    Comment: "移出元素的列表键"
    Default: ""
  - Name: "destination"
    Type: "String"
    Required: true
    Comment: "目标列表的键"
    Default: ""
  - Name: "from"
    Type: "Enum"
    Required: true
    Comment: "元素从原始List中移出的方向, 可选值\"LEFT\", \"RIGHT\", 前者表示移出最前端元素, 后者表示移出最后端元素"
    Default: ""
  - Name: "to"
    Type: "Enum"
    Required: true
    Comment: "元素放入目标列表的方向, 可选值\"LEFT\", \"RIGHT\", 前者表示插入目标List的最前端, 后者表示插入目标List的最末尾"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String"
    Comment:
      - "nil, 当移出元素的键不存在时返回"
      - "被移动的元素, 元素移动成功时返回"
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
      redis:6379> LMOVE mylist myotherlist RIGHT LEFT
      "three"
      redis:6379> LMOVE mylist myotherlist LEFT RIGHT
      "one"
      redis:6379> LRANGE mylist 0 -1
      1) "two"
      redis:6379> LRANGE myotherlist 0 -1
      1) "three"
      2) "one"
      ```
  # 异常示例
  Error:
    - Reason: "当移出元素或移入元素的键对应的值类型不是List时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key1 "value1"
        "OK"
        redis:6379> LMOVE mylist key1 RIGHT LEFT
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