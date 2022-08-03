---
date created: 2022-07-27 18:29
---

## [[UnrealEngine]]源码使用

### 源码获取

访问 [Unreal Engine 官方仓库](https://github.com/EpicGames/UnrealEngine)

```ad-warning
title: 注意
该仓库并非Public的, 需要先加入 EpicGames 的组织后才可以访问该仓库
```

获取源码的方式, 有以下2种任选其一即可

- 使用 Git Clone 仓库源码到本地, 需要较好的网络环境, 耗时较长
- 下载Release列表中对应版本的ZIP包, 速度较快, 推荐

下载或Clone完成后得到如下结构的目录
![[UnrealEngine源码使用_1.png]]

### 环境准备

具体环境准备可参考: [UE 官方说明文档](https://docs.unrealengine.com/4.27/en-US/Basics/InstallingUnrealEngine/RecommendedSpecifications/)

必须安装的组件有

- DirectX Runtime: [下载地址](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
- Visual Studio 2017 或 2019: [下载地址](https://visualstudio.microsoft.com/zh-hans/vs/community/), 推荐使用2019或更高版本, 社区版即可, 企业版/专业版不是必须的

Visual Studio 建议在安装时勾选以下组件

- .NET 桌面开发
- 通用Windows平台开发
- 使用 [[C++]] 的游戏开发
- .NET Framework 4.6 SDK & 目标包
- Windows 10 SDK

### 依赖处理与预编译库的下载

执行源码目录中的 _**Setup.bat**_ 脚本文件, 其会自动检查和处理所需的依赖, 下载Epic提供的预编译好的第三方组件的库, 此步骤会比较耗时需要耐心等待

```ad-warning
title: 注意
期间会下载10~15GB左右的文件, 请注意预留好足够的磁盘空间
```

### 生成VS解决方案

执行源码目录中的 _**GenerateProjectFiles.bat**_ 脚本文件, 执行完毕后会在目录下生成Visual Studio解决方案文件 _**UE4.sln**_

### 编译&调试

使用 Visual Studio 打开 _**UE4.sln**_, 将运行模式调整为开发模式, 即可开始编译与调试引擎了, 初次编译大约需要消耗40~60分钟的时间, 具体时长视开发机配置而定

![[UnrealEngine源码使用_2.PNG]]

```ad-info
title: 参考
使用以下配置的PC, 初次编译耗时约4小时, 配置低于该配置的机器编译耗时会更长
- CPU: I7 11700
- RAM: 32GB
- HDD: 1TB
- SSD: N/A
```

```ad-warning
title: 注意
支持Debug的版本最终编译产物+源码会占用 ***至少80GB*** 的磁盘空间, 极端情况下会占用 ***超过140GB*** 的磁盘空间, 需要注意编译用磁盘分区的剩余可用空间
```

#UnrealEngine
