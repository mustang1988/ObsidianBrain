---
# 命令名称
Command: "APPEND"
# 命令签名
Signature: "APPEND key value"
# 命令说明
Comment: "向 [[Redis]] 库中, 指定键对应的字符串类型值后追加指定的字符串内容"
# 扩展命令说明
ExtraComment: |
  当指定的键不存在时, 会新建该键, 并设置其值为空字符串, 然后对其后追加内容
# 时间复杂度
TimeComplexity: "O(1)"
# 时间复杂度说明
TimeComplexityComment: ""
# 参数
Arguments:
    # 参数名
  - Name: "key"
    # 参数类型
    Type: "String"
    # 参数说明
    Comment: "需要追加内容值对应的键"
    # 参数备注
    Remark: ""
  - Name: "value"
    Type: "String"
    Comment: "需要追加的字符串内容"
    Remark: ""
# 返回值
Returns:
    # 返回值类型
  - Type: "Int"
    # 返回值说明
    Comment: "追加内容后字符串值的长度"
# 示例
Samples:
  # 正常示例
  Success:
    # 示例内容
    Sample: |
      ```bash
      redis:6379> EXISTS mykey
      (integer) 0
      redis:6379> APPEND mykey "Hello"
      (integer) 5
      redis:6379> APPEND mykey " World"
      (integer) 11
      redis:6379> GET mykey
      "Hello World"
      ```
      
  # 异常示例
  Error:
      # 异常原因
    - Reason: "指定的键对应的值不是String类型时, 返回异常"
      # 示例内容
      Sample: |
        ```bash
        redis:6379> LPUSH key value
        (integer) 1
        redis:6379> APPEND key "hello"
        (error) WRONGTYPE Operation against a key holding the wrong kind of value
        ```
---

# `$=dv.current().Signature;`

## 用途
`$=dv.current().Comment;`

`$=dv.current().ExtraComment;`

## 时间复杂度
```dataviewjs
const TimeComplexity = dv.current().TimeComplexity;
let TimeComplexityString = TimeComplexity;
TimeComplexityString += TimeComplexity.includes("n") 
						? `: ${dv.current().TimeComplexityComment}`
						: "";
dv.paragraph(TimeComplexityString);
```

## 参数
```dataviewjs
const data = dv.current().Arguments.map(arg => [arg.Name, arg.Type, arg.Comment, arg.Remark]);
dv.table(
	["参数名","参数类型","参数说明","备注"],
	data
);
```

## 返回值
```dataviewjs
const {Returns = []} = dv.current();
for(const ret of Returns){
	const {Type, Comment} = ret;
	let print = `返回${Type}类型结果: ${Comment}`
	dv.paragraph(print);
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
for(const err of Error){
	const { Reason, Sample } = err;
	dv.paragraph(Reason);
	dv.paragraph(Sample);
}
~~~

```

#Redis #Redis/常用命令/String 