# Admonition
Admonition 插件是对Obsidian在 [0.14](https://forum.obsidian.md/t/obsidian-release-v0-14-0-insider-build/33986) 版本中加入的 Callout 展示块的扩展

## Obsidian Callout
Obsidian 内置的Callout展示块支持以下类型, 类型用于决定Callout展示块的颜色和图标

Obsidian Callout 的基本格式如下:
````
```
> [!<Callout类型>] <Callout标题>
> Callout 内容
```
````

- note
```
> [!note] 标题
> 内容
```
> [!note] 标题
> 内容
- abstract, summary, tldr
```
> [!abstract/summary/tldr] 标题
> 内容
```
> [!abstract] 标题
> 内容
- info, todo
```
> [!info/todo] 标题
> 内容
```
> [!info] 标题
> 内容
- tip, hint, important
```
> [!tip/hint/important] 标题
> 内容
```
> [!tip] 标题
> 内容
- success, check, done
```
> [!success/check/done] 标题
> 内容
```
> [!success] 标题
> 内容
- question, help, faq
```
> [!question/help/faq] 标题
> 内容
```
> [!question] 标题
> 内容
- warning, caution, attention
```
> [!warning/caution/attention] 标题
> 内容
```
> [!warning] 标题
> 内容
- failure, fail, missing
```
> [!failure/fail/missing] 标题
> 内容
```
> [!failure] 标题
> 内容
- danger, error
```
> [!danger/error] 标题
> 内容
```
> [!danger] 标题
> 内容
- bug
```
> [!bug] 标题
> 内容
```
> [!bug] 标题
> 内容
- example
```
> [!example] 标题
> 内容
```
> [!example] 标题
> 内容
- quote, cite
```
> [!quote/cite] 标题
> 内容
```
> [!quote] 标题
> 内容

## Admonition Callout
Admonition 插件支持上述 Obsidian 提供的所有的Callout格式, 同时扩展了以下功能
- 自定义颜色
- 自定义图标
- Callout嵌套
- Callout折叠收起
- Callout内容部分代码块支持

上述这些是 Obsidian 内置的 Callout 所不支持的, 也因此, Admonition Callout的编写格式与 Obsidian 内置的有所不同, 大致格式如下:
````
```ad-<callout类型>
title:    <标题, 可选配置, 默认为Callout类型名>
icon:     <图标, 可选配置, 默认根据callout类型自动设定>
color:    <颜色, 可选配置, 默认根据callout类型自动设定>
collapse: <展开/收起设定, 可选配置, 默认: 无, 可选值: close | open>

<内容>

```
````

### Admonition 基础用法
使用Admonition语法编写Obsidian内置的Callout
- note
````
```ad-note
title: 标题
内容
```
````
```ad-note
title: 标题
内容
```
- abstract, summary, tldr
````
```ad-abstract/summary/tldr
title: 标题
内容
```
````
```ad-abstract
title: 标题
内容
```
- info, todo
````
```ad-info/todo
title: 标题
内容
````
```ad-info
title: 标题
内容
```
- tip, hint, important
````
```ad-tip/hint/important
title: 标题
内容
```
````
```ad-tip
title: 标题
内容
```
- success, check, done
````
```ad-success/check/done
title: 标题
内容
```
````
```ad-success
title: 标题
内容
```
- question, help, faq
````
```ad-question/help/faq
title: 标题
内容
```
````
```ad-question
title: 标题
内容
```
- warning, caution, attention
````
```ad-warning/caution/attention
title: 标题
内容
```
````
```ad-warning
title: 标题
内容
```
- failure, fail, missing
````
```ad-failure/fail/missing
title: 标题
内容
```
````
```ad-failure
title: 标题
内容
```
- danger, error
````
```ad-danger/error
title: 标题
内容
```
````
```ad-danger
title: 标题
内容
```
- bug
````
```ad-bug
title: 标题
内容
```
````
```ad-bug
title: 标题
内容
```
- example
````
```ad-example
title: 标题
内容
```
````
```ad-example
title: 标题
内容
```
- quote, cite
````
```ad-quote/cite
title: 标题
内容
```
````
```ad-quote
title: 标题
内容
```

### Admonition 扩展用法
- 无标题Callout
````
```ad-info
title:
内容
```
````
```ad-info
title:
内容
```
- 仅标题Callout
````
```ad-warning
title: 标题即内容
```
````
```ad-warning
title: 标题即内容
```
- 自定义Callout颜色
````
```ad-info
title: 自定义颜色为(100, 255, 240)的Callout
color: 100, 255, 240
自定义颜色的 Callout
```
````
```ad-info
title: 自定义颜色为(100, 255, 240)的Callout
color: 100, 255, 240
自定义颜色的 Callout
```
- 自定义Callout图标
````
```ad-info
title: 自定义trophy图标的 Callout
icon: trophy
自定义trophy图标的 Callout
```
````
```ad-info
title: 自定义trophy图标的 Callout
icon: trophy
自定义trophy图标的 Callout
```
- 嵌套Callout
``````
`````ad-info
title: 嵌套Callout
嵌套Callout内容1
````ad-abstract
title: 嵌套Callout
嵌套Callout内容2
```ad-quote
title: 嵌套Callout
嵌套Callout内容3
```
````
`````
``````
`````ad-info
title: 嵌套Callout
嵌套Callout内容1
````ad-abstract
title: 嵌套Callout
嵌套Callout内容2
```ad-quote
title: 嵌套Callout
嵌套Callout内容3
```
````
`````
- Callout折叠收起
`````
````ad-success
title: Callout折叠收起, 默认: 打开, 点击后收起
collapse: open
Callout折叠
```ad-bug
title: Callout折叠收起, 默认: 收起, 点击后展开
collapse: close
Callout折叠
```
````
`````
````ad-success
title: Callout折叠收起, 默认: 打开, 点击后收起
collapse: open
Callout折叠
```ad-bug
title: Callout折叠收起, 默认: 收起, 点击后展开
collapse: close
Callout折叠
```
````
- Callout代码块内容
````
```ad-info
title: Callout代码块内容
以下为嵌套的代码块:
~~~java
// HelloWorld.java
public class HelloWorld {
	public static void main(String[] args){
		System.out.println("Hello World!");
	}
}
~~~
```
````
```ad-info
title: Callout代码块内容
以下为嵌套的代码块:
~~~java
// HelloWorld.java
public class HelloWorld {
	public static void main(String[] args){
		System.out.println("Hello World!");
	}
}
~~~
```

#Obsidian/Plugin 