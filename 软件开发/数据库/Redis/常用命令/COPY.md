---
# 命令名称
Command: "COPY"
# 命令签名
Signature: "COPY source destination [DB destination-db] [REPLACE]"
# 命令说明
Comment: "复制 [[Redis]] 库中一个键的值到另一个键"
# 命令额外说明
ExtraComment: |
  
# 命令时间复杂度
TimeComplexity: "O(1)/O(n)"
# 命令时间复杂度额外说明
TimeComplexityComment: "当复制的值为集合类型时, 时间复杂度最差为 O(n), n为被复制集合的大小"
# 命令参数列表
Arguments:
  - Name: "source"
    Type: "String"
    Comment: "被复制的键"
    Remark: ""
  - Name: "destination"
    Type: "String"
    Comment: "复制后的键"
    Remark: ""
  - Name: "DB destination-db"
    Type: "Integer"
    Comment: "复制后存储的数据库索引号"
    Remark: "可选参数, 默认为当前库"
  - Name: "REPLACE"
    Type: ""
    Comment: "当目复制后的键已经存在时, 是否先删除已存在的值, 再执行复制"
    Remark: "可选参数, 默认不覆盖"
# 命令返回结果
Returns:
  - Type: "Integer"
    Comment: 
      - "0, 复制不成功时返回"
      - "1, 成功复制时返回"
# 命令示例
Samples:
  # 正常示例
  Success:
    Sample: |
      ```bash
      redis:6379> SET from "from"
      OK
      redis:6379> COPY from to
      (integer) 1
      redis:6379> GET to
      "from"
      redis:6379> COPY from to
      (integer) 0
      redis:6379> COPY notexist anothernotexist
      (integer) 0
      redis:6379> COPY from to REPLACE
      (integer) 1
      ```
  # 异常示例
  Error:
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

#Redis #Redis/常用命令/通用 