---
LinkTo:
  - "[[EXPIRE]]"
Options:
  - Name: "NX"
    Comment: "当键当前未设置过期时间, 才为其设置过期时间"
  - Name: "XX"
    Comment: "当键当前有设置过期时间, 才为其设置新的过期时间"
  - Name: "GT"
    Comment: "当新设置的过期时间大于当前已经设置的过期时间, 才为其设置新的过期时间"
  - Name: "LT"
    Comment: "当新设置的过期时间小于当前已经设置的过期时间, 才为其设置新的过期时间"
---
# EXIPRE的可选参数options

关联命令: `$=dv.list(dv.current().LinkTo);`

```dataviewjs
dv.table(
	["参数可选值", "作用"],
	dv.current().Options.map(opt => [opt.Name, opt.Comment])
);
```

