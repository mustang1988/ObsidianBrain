---
# 命令名称
Command: "LRANGE"
# 分类
Category: "List"
# 命令签名
Signature: "LRANGE key start stop"
# 命令说明
Comment: "获取 [[Redis]] 库中指定键的列表中指定索引范围内的的元素"
# 命令额外说明
ExtraComment:
# 命令时间复杂度
TimeComplexity:
  Value: "s+n"
  Comment: "s为检索起始索引, n为需要返回的元素个数"
# 命令参数列表
Arguments:
  - Name: "key"
    Type: "String"
    Required: true
    Comment: "需要获取元素的列表的键"
    Default: ""
  - Name: "start"
    Type: "Integer"
    Required: true
    Comment: "检索起始索引, 索引起始值为0, 可以是负数, -1表示最后一个元素, -2表示倒数第二个元素, 以此类推"
    Default: ""
  - Name: "stop"
    Type: "Integer"
    Required: true
    Comment: "检索结束索引, 索引起始值为0, 可以是负数, -1表示最后一个元素, -2表示倒数第二个元素, 以此类推"
    Default: ""
# 命令返回结果
Returns:
  - Type: "String[]"
    Comment:
      - "[], 当start索引越界或指定的键不存在时返回"
      - "List中所有元素, 当stop索引越界时返回"
      - "返回指定[start, stop]索引区间内List中元素组成的数组"
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
      redis:6379> LRANGE mylist 0 0
      1) "one"
      redis:6379> LRANGE mylist -3 2
      1) "one"
      2) "two"
      3) "three"
      redis:6379> LRANGE mylist -100 100
      1) "one"
      2) "two"
      3) "three"
      redis:6379> LRANGE mylist 5 10
      (empty array)
      ```
  # 异常示例
  Error:
    - Reason: "指定的键对应的值不是List类型时, 返回异常"
      Sample: |
        ```bash
        redis:6379> SET key "value"
        "OK"
        redis:6379> LRANGE key 0 -1
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