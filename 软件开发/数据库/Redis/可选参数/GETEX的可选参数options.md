---
LinkTo:
  - "[[GETEX]]"
Options:
  - Name: "EX seconds"
    Comment: "设置键在指定***秒***后过期"
    Arguments:
      - Name: "seconds"
        Type: "Integer"
        Comment: "键剩余过期时间, 单位: 秒"
  - Name: "PX milliseconds"
    Comment: "设置键在指定***毫秒***后过期"
    Arguments:
      - Name: "milliseconds"
        Type: "Integer"
        Comment: "键剩余过期时间, 单位: 毫秒"
  - Name: "EXAT unix-time-seconds"
    Comment: "设置键在指定的***秒***时间戳过期"
    Arguments:
      - Name: "unix-time-seconds"
        Type: "Integer"
        Comment: "UNIX***秒***时间戳"
  - Name: "PXAT unix-time-milliseconds"
    Comment: "设置键在指定的***毫秒***时间戳过期"
    Arguments:
      - Name: "unix-time-milliseconds"
        Type: "Integer"
        Comment: "UNIX***毫秒***时间戳"
  - Name: "PERSIST"
    Comment: "移除键的过期时间"
---
# GETEX的可选参数options
关联命令: `$=dv.list(dv.current().LinkTo);`

```dataviewjs
const { Options } = dv.current();
const data = Options.map(opt => {
	const { Arguments } = opt;
	const args = Arguments 
				? Arguments.map(arg => [arg.Name, arg.Type, arg.Comment]).flat(1)
				: ['','',opt.Comment];
	return [
		opt.Name,
		...args
	];
})
dv.table(
	["", "参数名", "参数类型", "参数说明"],
	data
);
```