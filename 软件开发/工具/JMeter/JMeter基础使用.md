**目录**
- [1. JMeter是什么](#1.%20JMeter%E6%98%AF%E4%BB%80%E4%B9%88)
- [2. JMeter的安装](#2.%20JMeter%E7%9A%84%E5%AE%89%E8%A3%85)
	- [2.1 安装&配置JRE](#2.1%20%E5%AE%89%E8%A3%85&%E9%85%8D%E7%BD%AEJRE)
	- [2.2 安装&配置JMeter](#2.2%20%E5%AE%89%E8%A3%85&%E9%85%8D%E7%BD%AEJMeter)
- [3. JMeter的常用组件](#3.%20JMeter%E7%9A%84%E5%B8%B8%E7%94%A8%E7%BB%84%E4%BB%B6)
	- [3.1 测试计划（Test Plan）](#3.1%20%E6%B5%8B%E8%AF%95%E8%AE%A1%E5%88%92%EF%BC%88Test%20Plan%EF%BC%89)
	- [3.2 线程组（Thread Group）](#3.2%20%E7%BA%BF%E7%A8%8B%E7%BB%84%EF%BC%88Thread%20Group%EF%BC%89)
	- [3.3 配置元件（Config Element）](#3.3%20%E9%85%8D%E7%BD%AE%E5%85%83%E4%BB%B6%EF%BC%88Config%20Element%EF%BC%89)
		- [3.3.1 HTTP Header Manager](#3.3.1%20HTTP%20Header%20Manager)
		- [3.3.2 HTTP Cookie Manager](#3.3.2%20HTTP%20Cookie%20Manager)
		- [3.3.3 Random Variable](#3.3.3%20Random%20Variable)
		- [3.3.4 JDBC Connection Configuration](#3.3.4%20JDBC%20Connection%20Configuration)
		- [3.3.5 User Defined Variables](#3.3.5%20User%20Defined%20Variables)
		- [3.3.6 CSV Data Set Config](#3.3.6%20CSV%20Data%20Set%20Config)
		- [3.3.7 DNS Cache Manager](#3.3.7%20DNS%20Cache%20Manager)
	- [3.4 前置处理器（Pre Processer）](#3.4%20%E5%89%8D%E7%BD%AE%E5%A4%84%E7%90%86%E5%99%A8%EF%BC%88Pre%20Processer%EF%BC%89)
		- [3.4.1 User Parameters](#3.4.1%20User%20Parameters)
		- [3.4.2 JSR223 PreProcesser](#3.4.2%20JSR223%20PreProcesser)
		- [3.4.3 JDBC PreProcesser](#3.4.3%20JDBC%20PreProcesser)
	- [3.5 后置处理器（Post Processer）](#3.5%20%E5%90%8E%E7%BD%AE%E5%A4%84%E7%90%86%E5%99%A8%EF%BC%88Post%20Processer%EF%BC%89)
		- [3.5.1 JSON Extractor](#3.5.1%20JSON%20Extractor)
		- [3.5.2 Regular Expression Extractor](#3.5.2%20Regular%20Expression%20Extractor)
		- [3.5.3 JSR223 PostProcesser](#3.5.3%20JSR223%20PostProcesser)
		- [3.5.4 Debug PostProcesser](#3.5.4%20Debug%20PostProcesser)
		- [3.5.5 JDBC PostProcesser](#3.5.5%20JDBC%20PostProcesser)
	- [3.6 断言（Assertion）](#3.6%20%E6%96%AD%E8%A8%80%EF%BC%88Assertion%EF%BC%89)
		- [3.6.1 Response Assertion](#3.6.1%20Response%20Assertion)
		- [3.6.2 JSON Assertion](#3.6.2%20JSON%20Assertion)
		- [3.6.3 JSR223 Assertion](#3.6.3%20JSR223%20Assertion)
	- [3.7 监听器（Listener）](#3.7%20%E7%9B%91%E5%90%AC%E5%99%A8%EF%BC%88Listener%EF%BC%89)
		- [3.7.1 View Result Tree](#3.7.1%20View%20Result%20Tree)
		- [3.7.2 Summary Report](#3.7.2%20Summary%20Report)
	- [3.8 采样器（Sampler）](#3.8%20%E9%87%87%E6%A0%B7%E5%99%A8%EF%BC%88Sampler%EF%BC%89)
		- [3.8.1 HTTP Request](#3.8.1%20HTTP%20Request)
		- [3.8.2 JDBC Request](#3.8.2%20JDBC%20Request)
- [4. JMeter常用扩展插件](#4.%20JMeter%E5%B8%B8%E7%94%A8%E6%89%A9%E5%B1%95%E6%8F%92%E4%BB%B6)
	- [4.1 JMeter Plugin Manager](#4.1%20JMeter%20Plugin%20Manager)
	- [4.2 gRPC Request Plugin](#4.2%20gRPC%20Request%20Plugin)
- [5. JMeter示例](#5.%20JMeter%E7%A4%BA%E4%BE%8B)

<div class="page-break" style="page-break-before: always;"></div>

# 1. JMeter是什么
JMeter是Apache软件基金会开源的，使用纯Java编写的应用，设计用于负载测试功能行为和测量性能。它最初是为测试Web应用程序而设计的，但后来扩展到其他测试功能

# 2. JMeter的安装
由于JMeter是用纯Java编写的应用，因此运行安装运行JMeter前需要先安装JRE，JMeter当前版本5.6.3适配的JRE版本为8+，Oracle JRE、Oracle JDK、Open JRE、Open JDK 均可以
以下将介绍在Windows上安装并运行JMeter的过程

## 2.1 安装&配置JRE
> [!todo]+ 安装&配置JRE
> > [!download]+ 下载
> > [Oracle JDK（含JRE） 8.0u202 下载地址](https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/jdk/8u202-b08/1961070e4c9b4e26a04e7f5a083f551e/jdk-8u202-windows-x64.exe) [^1]
> > 
> > > [!fail] 该下载地址需要先登录Oracle账号才可以下载，使用邮箱注册一个即可
> > 
> > 下载完成后双击 jdk-8u202-windows-x64.exe 一路"下一步"安装即可，无注意点
> 
> > [!config]+ 配置
> > 1. 添加系统环境变量 JAVA_HOME 值为 Oracle JDK 安装路径
> > 2. 在==系统环境变量== PATH 中添加新值，值为 \%JAVA_HOME\%\\bin [^2]
> 
> > [!check]+ 检查
> > 完成环境变量设置后，打开“命令提示符（CMD）”，输入以下命令
> > ```
> > java -version
> > ```
> > 若输出以下内容，表示配置正确
> > ```
> > java version "1.8.0_202"
> > Java(TM) SE Runtime Environment (build 1.8.0_202-b08)
> > Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)
> > ```
^install-and-config-jre

<div class="page-break" style="page-break-before: always;"></div>

## 2.2 安装&配置JMeter
> [!todo]+ 安装&配置JMeter
> > [!download]+ 下载
> > [Apache JMeter 5.6.3 下载地址](https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.zip)
> > 解压下载的 apache-jmeter-5.6.3.zip 到任意路径，在解压目录中找到README.md文档，并复制该文档所在的完整路径
> 
> > [!config]+ 配置
> > 1. 添加系统环境变量 JMETER_HOME 值为 apache-jmeter-5.6.3.zip 解压后 README.md 文档所在路径
> > 2. 在==系统环境变量== PATH 中添加新值，值为 \%JMETER_HOME\%\\bin
> 
> > [!check]+ 检查
> > 完成环境变量设置后，使用快捷键 win+r 打开运行，输入以下命令运行
> > 
> > ```bash
> > jmeter
> > ```
> > 
> > 若JMeter成功启动，表示配置正确，如下图
> > ![JMeter](assets/images/JMeter/components/Test%20Plan.png)
^install-and-config-jmeter


<div class="page-break" style="page-break-before: always;"></div>

# 3. JMeter的常用组件
> [!property]+ JMeter提供的所有组件均包含以下2个通用属性，后续属性介绍中不再赘述
> 
> |属性名|属性说明|否必填、选|
> |-:|:-|:-|
> |Name|组件名称，该属性值会就是左侧树状列表中显示的文字|==必填==|
> |Comments|组件说明、备注|可选|
^common-properties

## 3.1 测试计划（Test Plan）
> [!test-plan]+ 测试计划（Test Plan）
> 测试计划是JMeter根节点，所有组件均放在测试计划下，执行时按照左侧树状列表中展示的顺序，从上至下依次执行
> 
> ![测试计划](assets/images/JMeter/components/Test%20Plan.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:|
> > |User Defined Variables|用户自定义变量，变量定义以Key-Value的格式存储，此处定义的变量全局生效，使用${Key}的格式语法访可以问变量，需要注意其他组件也支持定义自定义变量，变量命名时不要出现冲突，尤其是在多人协作编写测试用例时|可选|
> > |Run Thread Groups consecutively|在一轮Test Plan中是否依次执行每个线程组，true：是，false：否，所有线程组并行执行，默认值：false|可选|
> > |Run tearDown Thread after ...|是否在主线程关闭后执行tearDown线程组，true：执行，false：不执行，默认值：false|可选|
> > |Functional Test Mode|是否开启函数测试模式，true：开启，false：不开启，默认值：false，当需要保存请求、响应数据到文件时，才需要开启该模式，该模式很影响性能|可选|
> > |Add directory or jar...|运行时需要额外加载的jar包库的路径，可以是文件也可以是文件夹，通常只在扩展JMeter功能或二次开发时才需要使用<br/>如果需要在 [Test Plan](JMeter/JMeter基础使用.md#^test-plan) 使用以下组件时<br/>- [JDBC Connection Configuration](JMeter/JMeter基础使用.md#^config-element-jdbc-connection-configuration)<br/>- [JDBC PreProcesser](JMeter/JMeter基础使用.md#^pre-processer-jdbc-preprocesser)<br/>- [JDBC PostProcesser](JMeter/JMeter基础使用.md#^post-processer-jdbc-postprocesser)<br/>- [JDBC Request](JMeter/JMeter基础使用#^sampler-jdbc-request)<br/>需要进行数据库查询，也可以在此处手动加载对应数据库的JDBC驱动jar包|可选|
^test-plan

<div class="page-break" style="page-break-before: always;"></div>

## 3.2 线程组（Thread Group）
> [!thread-group]+ 线程组（Thread Group）
> 线程组是JMeter实现并发压力测试的核心组件，通过在线程组中设置线程数和线程启动时间，来模拟指定QPS压力下的用户操作，QPS = 测试线程数 / 线程启动时间
>
> ![线程组（Thread Group）](assets/images/JMeter/components/Thread%20Group.png)
> 
> > [!group]+ 常用线程组有以下三类
> >
> > |名称|说明|
> > |-:|:-|
> > |setUp Thread Group|前置线程组，通常用于实际测试线程组执行前的各种初始化，压力测试的预热等操作，其中设置的内容会在测试内容开始前率先执行|
> > |Thread Group|通用线程组，实际测试用例一般都放置在该类型线程组中，其中设置的组件会按照树状列表中的顺序，从上至下依次执行|
> > |tearDown Thread Group|后置线程组，通常用于实际测试结束后释放资源、关闭连接等操作，其中设置的内容会在测试内容全部结束后才执行|
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Action to be taken after ...|线程执行过程中，采样器出现异常时的处理方式<br/>- Continue：继续线程执行<br/>- Start Next Thread Loop：开始下一轮线程<br/>- Stop Thread：关停当前发生异常的线程<br/>- Stop Test：终止测试（等待当前线程正在执行的指令完成后关闭线程）<br/>- Stop Test Now：立即终止测试（立即kill所有线程）|==必选==|
> > |Number of Threads|测试线程数，即模拟的并发请求数|==必填==|
> > |Ramp-up period secends|线程启动时间，单位：秒，测试线程数 / 线程启动时间 = QPS|==必填==|
> > |Loop Count|线程循环次数，特殊可选值 Infinite 表示线程无限次循环|可选|
> > |Same user on each iteration|每次迭代均使用与上轮相同的线程|可选|
> > |Specify Thread lifetime|手动指定线程的生命周期，可以指定：<br/>- Duration: 线程持续时间<br/>- Startup daley: 线程启动间隔时间，单位：秒|可选|
^thread-group

<div class="page-break" style="page-break-before: always;"></div>

## 3.3 配置元件（Config Element）
> [!config-element]+ 配置元件（Config Element）
> 配置元件用于配置一些通用的设置信息，例如：公共HTTP请求头中的格式信息，HTTP请求时携带的Cookie信息，自定义全局变、常量，DNS域名解析配置，数据库连接池等等
> 
> ![配置元件](assets/images/JMeter/components/Config%20Element.png)
> 
> > [!group]+ 常用JMeter配置元件如下
> > 
> > |名称|用途|
> > |-:|:-|
> > |[HTTP Header Manager](JMeter/JMeter基础使用#^config-element-http-header-manager)|用于配置HTTP请求发送时的通用请求头信息|
> > |[HTTP Cookie Manager](JMeter/JMeter基础使用#^config-element-http-cookie-manager)|用于配置HTTP请求发送时携带的Cookie信息|
> > |[Random Variable](JMeter/JMeter基础使用#^config-element-random-variable)|用于按照指定规则生成随机临时变量|
> > |[JDBC Connection Configuration](JMeter/JMeter基础使用#^config-element-jdbc-connection-configuration)|用于配置数据库连接，通常只有在使用到以下组件，进行数据库查询时才会使用<br/>- [JDBC PreProcesser](JMeter/JMeter基础使用#^pre-processer-jdbc-preprocesser)<br/>- [JDBC PostProcesser](JMeter/JMeter基础使用#^post-processer-jdbc-postprocesser)<br/>- [JDBC Request](JMeter/JMeter基础使用#^sampler-jdbc-request)|
> > |[User Defined Variables](JMeter/JMeter基础使用#^config-element-user-defined-variables)|用户自定义全局变量|
> > |[CSV Data Set Config](JMeter/JMeter基础使用#^config-element-csv-data-set-config)|CSV 数据集配置|
> > |[DNS Cache Manager](JMeter/JMeter基础使用#^config-element-dns-cache-manager)|DNS 域名解析缓存、Hosts管理|
^config-element

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.1 HTTP Header Manager
> [!config-element]+ HTTP Header Manager
> HTTP Header Manager 用于配置通用的 HTTP 请求发送时携带的头信息，可以实现一次配置，所有后续的 HTTP 请求通用
> 
> ![HTTP Header Manager](assets/images/JMeter/components/config%20element/HTTP%20Header%20Manager.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Header Stored in the Header Manager|通用请求头配置，头信息以Key-Value的格式进行设置|可选|
^config-element-http-header-manager

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.2 HTTP Cookie Manager
> [!config-element]+ HTTP Cookie Manager
> HTTP Cookie Manager 用于配置 HTTP 请求发送时携带的 Cookie 信息，用于鉴权、身份检查、登陆校验等
> 
> ![HTTP Cookie Manager](assets/images/JMeter/components/config%20element/HTTP%20Cookie%20Manager.png)
> > [!fail]+ 注意！
> > 如果需要使用 HTTP Cookie Manager 存储登录请求后服务端返回的 Cookie 值，需要先关闭 JMeter，然后修改 JMeter 安装目录下 bin 子目录中的配置文件：jmeter.properties
> > 按照如下所示进行修改，保存修改后重新打开 JMeter
> > ```properties
> > # ...以上部分略
> > # CookieManager behaviour - should Cookies be stored as variables?
> > # Default is false
> > CookieManager.save.cookies=true
> > #...以下部分略
> > ```
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Clear cookies each iteration|是否每轮迭代都自动清空 Cookie，true：清空，false：不清空，默认值：不清空|可选|
> > |Use Thread Group conf...|是否使用线程组中的配置控制 Cookie 的清空，true：使用，false：不使用，默认值：不使用|可选|
> > |User Defined Cookie|用户自定义Cookie值|可选|
^config-element-http-cookie-manager

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.3 Random Variable
> [!config-element]+ Random Variable
> Random Variable 用于按照指定规则生成随机临时变量
> 
> ![Random Variable](assets/images/JMeter/components/config%20element/Random%20Variable.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Veriable Name|临时变量名称，在 Random Variable 之后需要使用该临时变量时，使用${变量名}的语法，设置时注意不要出现全局变量名冲突|==必填==|
> > |Output Format|输出临时变量的格式规则，规则中使用0作为数值的占位符<br/>例如：如果需要生成“xxxxx-xxxxx-xxxxx”格式的随机字符串（xxxxx为五位数字），则 Output Format 应设置为：00000-00000-00000|==必填==|
> > |Minunun Value|随机值的最小值|==必填==|
> > |Maximun Value|随机值的最大值|==必填==|
> > |Seed for Random ...|由于Java的随机数生成器实现是伪随机数，相同的上下限生成的随机数队列是固定的，通过变更种子值可以在相同的上下限范围内产生不同的随机数队列|可选|
> > |Per Thread|是否每个线程使用独立的随机数生成器，true：是，false：否，默认值：false|可选|
^config-element-random-variable

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.4 JDBC Connection Configuration
> [!config-element]+ JDBC Connection Configuration
> JDBC Connection Configuration 用于配置数据库连接，在使用到以下组件时必须配置
> - [JDBC PreProcesser](JMeter/JMeter基础使用#^pre-processer-jdbc-preprocesser)
> - [JDBC PostProcesser](JMeter/JMeter基础使用#^post-processer-jdbc-postprocesser)
> - [JDBC Request](JMeter/JMeter基础使用#^sampler-jdbc-request)
> 
> > [!fail]+ 注意！
> > 数据库连接需要使用对应数据库的 JDBC 驱动 jar 包，可以在对应数据库开发商处获得，常用 JDBC 驱动下载地址如下，其他数据库请查阅数据库开发商的官方文档
> > - [MySQL/MariaDB JDBC 驱动下载](https://dev.mysql.com/downloads/connector/j/)
> > - [SQLServer JDBC 驱动下载](https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver16#download)
> > - [Oracle JDBC 驱动下载](https://www.oracle.com/database/technologies/appdev/jdbc.html)
> > - [SQlite JDBC 驱动下载](https://www.sqlite.org/java/raw/doc/overview.html?name=0a704f4b7294a3d63e6ea2b612daa3b997c4b5f1)
> > 
> > jar 包下载后，放入JMeter安装目录下的 lib 子目录中即可，或者通过 [测试计划（Test Plan）](JMeter/JMeter基础使用.md#^test-plan) 的属性 Add directory or jar to classpath 中配置
> > 
> > 目前 JDBC Connection Configuration 仅支持配置关系型数据库的连接，诸如：[MongoDB](https://www.mongodb.com/zh-cn)、[Redis](https://redis.io/)  等非关系型数据库目前是不支持的
> 
> ![JDBC Connection Configuration](assets/images/JMeter/components/config%20element/JDBC%20Connection%20Configuration.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Variable Name for created pool|创建的数据据连接池对象的全局变量名，JMeter中可以同时配置多个 JDBC Connection Configuration，通过此属性区分数据库连接|==必填==|
> > |Max Number of Connections|数据库连接池支持的最大连接数|==必填==|
> > |Max Wait|SQL语句执行的超时等待时间，当SQL执行超过此值时，会抛出错误，单位：毫秒|可选|
> > |Time Between Eviction Runs|空闲对象退出线程运行之间的睡眠毫秒数，当非正值时，不会运行空闲的对象驱逐线程，单位：毫秒|可选|
> > |Auto Commit|是否自动提交事务，true：是，false：否，默认值：true|可选|
> > |Transaction isolation|事务隔离级别|==必填==|
> > |Pool Prepared Statements|每个连接池中准备语句的最大数目，-1：禁用池化，0：不限制，默认值：-1|==必填==|
> > |Preinit Pool|是否立即初始化连接池，如果设置为false，使用此池的JDBC请求采样器可能会测量到第一个查询会出现更高响应时间，因为包含了整个池的连接建立时间也算在第一个采样器的耗时中|可选|
> > |Init SQL statements|SQL语句的集合，将用于在首次创建连接时初始化用，这些语句只执行一次，可以用于测试数据库连接是否成功|可选|
> > |Test While Idle|是否自动对连接池中的空闲连接进行测试，连接保活|可选|
> > |Soft Min Evictable Idle|自动空闲连接测试的最小间隔时间，Test While Idle设置为true时生效，单位：毫秒|可选|
> > |Validation Query|自动空闲连接测试用SQL,Test While Idle设置为true时生效<br/>不同数据库建议使用的测试SQL：<br/>- MySQL/MariaDB：select 1<br/>- SQLServer         ：select 1<br/>- Oracle                 ：select 1 from dual|可选|
> > |Database URL|数据库连接地址，不同数据库建链接地址格式：<br/>- MySQL/MariaDB：com.mysql.jdbc.Driver<br/>- SQLServer         ：com.microsoft.jdbc.sqlserver.SQLServerDriver<br/>- Oracle                 ：com.ibm.db2.jcc.DB2Driver|==必填==|
> > |JDBC Driver class|JDBC驱动中主类的完整包路径，不同数据库建JDBC驱动类名：<br/>- MySQL/MariaDB：jdbc:mysql://\<IP地址\>:\<端口\>/\<数据库名\><br/>- SQLServer         ：jdbc:sqlserver://\<IP地址\>:\<端口\>;databaseName=\<数据库名\><br/>- Oracle                 ：jdbc:oracle:thin:@\<IP地址\>:\<端口\>:\<SID或服务名\>|==必填==|
> > |Username|数据库连接用户名|==必填==|
> > |Password|数据库连接密码|==必填==|
> > |Connection Properties|建立连接时要设置的连接属性|可选|
^config-element-jdbc-connection-configuration

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.5 User Defined Variables
> [!config-element]+ User Defined Variables
> User Defined Variables 用于配置用户自定义全局变量，其作用与 [Test Plan](JMeter/JMeter基础使用.md#^test-plan) 中的属性 User Defined Variables 的用途和使配置方式完全相同，不再赘述，使用时注意全局变量名冲突即可
> 
> ![](assets/images/JMeter/components/config%20element/User%20Defined%20Variables.png)
^config-element-user-defined-variables

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.6 CSV Data Set Config
> [!config-element]+ CSV Data Set Config
> CSV Data Set Config 用于配置本地CSV数据源，例如：需要同时测试多个账号功能时，可以预先将参测账号数据写入CSV文件，通过 CSV Data Set Config 读取CSV文件中的数据，进行测试使用，可以做到一套测试计划根据外部CSV文件实现不同测试流程
> 
> ![](assets/images/JMeter/components/config%20element/CSV%20Data%20Set%20Config.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Filename|CSV文件路径|==必填==|
> > |File Encoding|CSV文件内容编码|可选|
> > |Variable Names|变量名列表。名称之间必须用分隔符分隔。它们可以用双引号括起来。JMeter支持CSV头行:如果变量名字段为空，则读取文件的第一行并将其解释为列名列表|可选|
> > |Ignore first line|是否忽略首行，通常CSV的首行数据为表头，字段名称|可选|
> > |Delimiter|分隔符|可选|
> > |Allow quited data|是否允许银行包裹的数据|可选|
> > |Recycle on EOF|文件到达EOF时是否应该从头重新读取|可选|
> > |Stop thread on EOF|如果Recycle为false，线程应是否在EOF处停止|可选|
> > |Sharing mode|数据共享方式，可选值：<br/>- All threads：文件对所有线程共享<br/>- Current thread group：文件对当前线程组内的线程共享<br/>- Current thread：每个线程独立打开并读取文件，互相不共享数据<br/>- Identifier：所有共享相同标识符的线程共享相同的文件|可选|
^config-element-csv-data-set-config

<div class="page-break" style="page-break-before: always;"></div>

### 3.3.7 DNS Cache Manager
> [!config-element]+ DNS Cache Manager
> DNS Cache Manager 用于管理 DNS 域名解析配置，当针对不同环境进行测试时，可以快速切换相同域名的DNS解析
> 
> ![](assets/images/JMeter/components/config%20element/DNS%20Cache%20Manager.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|是否必填、选|
> > |-:|:-|:-|
> > |Clear cache each iteration|是否每次迭代前清空DNS缓存|可选|
> > |Use ? DNS resolver|DNS解析来源|==必选==|
> > |DBS Servers|自定义DNS服务地址|可选|
> > |Static Host Table|静态DNS解析配置，类似Hosts配置|可选|
^config-element-dns-cache-manager

<div class="page-break" style="page-break-before: always;"></div>

## 3.4 前置处理器（Pre Processer）
> [!pre-processer]+ 前置处理器（Pre Processer）
> 前置处理器通常用于实际测试用例执行前，对即将进行的内容进行预先处理，诸如：声明变量，数据库预取数据等
> 
> ![前置处理器（Pre Processer）](assets/images/JMeter/components/Pre%20Processer.png)
> 
> > [!group]+ 常用JMeter前置处理器
> > 
> > |名称|用途|
> > |-:|:-|
> > |[User Parameters](JMeter/JMeter基础使用#^pre-processer-user-parameter)|声明用户参数|
> > |[JSR223 PreProcesser](JMeter/JMeter基础使用#^pre-processer-jsr223-preprocesser)|使用复合 [JSR223标准](https://www.openhab.org/docs/configuration/jsr223.html) 的脚本语言进行预处理|
> > |[JDBC PreProcesser](JMeter/JMeter基础使用#^pre-processer-jdbc-preprocesser)|通过数据库查询进行预处理|
^pre-processer

<div class="page-break" style="page-break-before: always;"></div>

### 3.4.1 User Parameters
> [!pre-processer]+ User Parameters
> User Parameters 前置处理器可以用于声明用户变量，可以为多并发下不同线程的同名变量设置不同的值，实现一轮测试对多种情况进行并行测试的目的
> 
> ![User Parameters](assets/images/JMeter/components/pre%20processer/User%20Parameters.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Update Once Per Iteration|是否每次迭代都清空重置变量值，true：是，false：否，默认值：false|可选|
> > |Parameters|变量声明，以Key-Value的格式声明变量|可选|
^pre-processer-user-parameter

<div class="page-break" style="page-break-before: always;"></div>

### 3.4.2 JSR223 PreProcesser
> [!pre-processer]+ JSR223 PreProcesser
> JSR223 PreProcesser 前置处理器可以通过执行指定的脚本代码来实现一些前置操作，脚本代码必须复合 [JSR223标准](https://www.openhab.org/docs/configuration/jsr223.html)，支持的脚本语言包括但不限于以下类型：
> - [Groovy](https://groovy-lang.org/) (**推荐使用**)[^3]
> - [JavaScript(ES5.1)](https://262.ecma-international.org/5.1/) (**推荐使用**)[^4]
> - [BeanShell](http://www.beanshell.org/)
> - [JRuby](https://www.jruby.org/)
> - [Jython](https://www.jython.org/)
> 
> ![JSR223 PreProcesser](assets/images/JMeter/components/pre%20processer/JSR223%20Pre%20Processer.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Language|脚本语言类型|==必选==|
> > |Parameter|脚本语言执行参数|可选|
> > |File Name|脚本文件名，用于加载本地已经编写好的脚本代码文件|可选|
> > |Cache compiled script...|缓存已编译脚本，true：缓存，false：不缓存，默认值：true|可选|
> > |Script|脚本代码|可选|
^pre-processer-jsr223-preprocesser

<div class="page-break" style="page-break-before: always;"></div>

### 3.4.3 JDBC PreProcesser
> [!pre-processer]+ JDBC PreProcesser
> JDBC 前置处理器通常可以用于测试接口返回数据的正确性，例如：已知接下来要请求的接口会返回数据库中指定的数据，就可以在请求发送前，使用 JDBC 前置处理器从数据库中将数据预取出来，等到接口请求结束后，比对接口返回的数据和从数据库中预取的数据，验证接口返回数据的正确性
> 
> ![JDBC PreProcesser](assets/images/JMeter/components/pre%20processer/JDBC%20Pre%20Processer.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Variable Name|[JDBC Connection Configuration](JMeter/JMeter基础使用.md#^config-element-jdbc-connection-configuration)中配置的数据库连接池的名字（Variable Name for created pool）|==必填==|
> > |Query Type|需要执行的SQL语句类型|==必选==|
> > |Query|需要执行的SQL语句|==必填==|
> > |Parameter values|如果Query的语句中有”?”则此处填值，可以使用${Key}的格式引用JMeter上下文中的变量，多个值用“,”隔开，顺序必须与SQL语句中的“?”顺序保持一致|可选|
> > |Parameter types|Parameter values中每个变量对应的数据库字段类型，多个值用“,”隔开，顺序必须与SQL语句中的“?”顺序保持一致|可选|
> > |Variable Names|以逗号分隔的变量名列表，用于保存Select语句、Prepared Select语句或CallableStatement返回的值，变量列表必须与调用返回的OUT参数具有相同的顺序|可选|
> > |Query timeout|数据库查询超时等待时间，查询语句执行超过该值后会抛出异常，0：无限，-1：不设置超时时间，默认值：0|可选|
> > |Limit ResultSet|限制遍历查询结果的条数，空/-1：没有限制，默认值：-1|可选|
> > |Handle ResultSet|定义如何处理从可调用语句返回的ResultSet|可选|
^pre-processer-jdbc-preprocesser

<div class="page-break" style="page-break-before: always;"></div>

## 3.5 后置处理器（Post Processer）
> [!post-processer]+ 后置处理器（Post Processer）
> 后置处理器通常用于在完成测试用例后，对测试用例的返回内容进行计算、提取等操作，用于后续其他组件使用
> 
> ![后置处理器（Post Processer）](assets/images/JMeter/components/Post%20Processer.png)
> 
> > [!group]+ 常用JMeter后置处理器
> > 
> > |名称|用途|
> > |-:|:-|
> > |[JSON Extractor](JMeter/JMeter基础使用#^post-processer-json-extractor)|用于对响应内容为JSON格式数据进行参数提取|
> > |[Regular Expression Extractor](JMeter/JMeter基础使用#^post-processer-regex-extractor)|使用正则表达式对响应数据进行参数提取|
> > |[JSR223 PostProcesser](JMeter/JMeter基础使用#^post-processer-jsr223-postprocesser)|使用复合[JSR223标准](https://www.openhab.org/docs/configuration/jsr223.html)的脚本语言对响应内容进行后处理|
> > |[Debug PostProcesser](JMeter/JMeter基础使用#^post-processer-debug-postprocesser)|JMeter调试用后处理器|
> > |[JDBC PostProcesser](JMeter/JMeter基础使用#^post-processer-jdbc-postprocesser)|数据库查询后处理器|
^post-processer

<div class="page-break" style="page-break-before: always;"></div>

### 3.5.1 JSON Extractor
> [!post-processer]+ JSON Extractor
> JSON Extractor 用于对 JSON 格式的响应数据的数据字段提取
> 
> ![JSON Extractor](assets/images/JMeter/components/post%20processer/JSON%20Extractor.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Apply to|用于可以生成子样本的采样器，例如带有嵌入式资源的HTTP采样器，邮件阅读器或由事务控制器生成的样本，可选值：<br/>- Main sample only：只用于主采样器<br/>- Sub-samples only：只用于子采样器<br/>- Main sample and sub-samples：主、子采样器均可以<br/>- JMeter Variable Name to use：应用于指定变量的内容|==必选==|
> > |Names of created variables|包含JSON路径表达式结果的变量的名称以分号分隔|==必填==|
> > |JSON path expression|分号分隔的JSON路径表达式|==必填==|
> > |Match No.|对于每个JSON路径表达式，如果JSON路径查询导致许多结果，您可以选择将其中一个提取为变量<br/>- 0：随机提取一个<br/>- -1：提取所有，多个结果会被分别存入"\<变量名\>\_N"的变量中<br/>- 其他数值：提取指定索引序号的数据(索引序号起始值为1)|可选|
> > |Compite concataenation var|如果提取到多个结果，插件将使用","作为分隔符将它们连接起来，并将其存储在名为"\<变量名\>\_ALL"的变量中|可选|
> > |Default Values|如果JSON路径表达式未返回任何结果时提取到的默认值，结果的变量的名称以分号分隔|可选|
^post-processer-json-extractor

<div class="page-break" style="page-break-before: always;"></div>

### 3.5.2 Regular Expression Extractor
> [!post-processer]+ Regular Expression Extractor
> Regular Expression Extractor 的用途与 [JSON Extractor](JMeter/JMeter基础使用.md#^post-processer-json-extractor) 基本相同，不同点在于采用正则表达式提取内容，可以用于非 JSON 格式内容的数据提取
> 
> ![Regular Expression Extractor](assets/images/JMeter/components/post%20processer/Regular%20Expression%20Extractor.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Apply to|用于可以生成子样本的采样器，例如带有嵌入式资源的HTTP采样器，邮件阅读器或由事务控制器生成的样本，可选值：<br/>- Main sample only：只用于主采样器<br/>- Sub-samples only：只用于子采样器<br/>- Main sample and sub-samples：主、子采样器均可以<br/>- JMeter Variable Name to use：应用于指定变量的内容|==必选==|
> > |Field to check|需要进行正则匹配的数据来源，可选值：<br/>- Body：响应内容<br/>- Body（unescaped）：替换所有HTML转义码后的响应内容<br/>- Body as Document：通过Apache Tika从响应内容中进行提取<br/>- Request Headers：请求头<br/>- Response Headers：响应头<br/>- URL：请求地址<br/>- Response Code：响应码<br/>- Response Message：响应码对应消息|==必选==|
> > |Names of created variables|要在其中存储结果的JMeter变量的名称，还要注意，每个组被存储为\[refname\]\_g#，其中\[refname\]是您作为引用名称输入的字符串，#是组号，其中组0是整个匹配，组1是来自第一组括号的匹配，等等|可选|
> > |Regular Expression|解析数据的正则表达式，必须包含至少一组"()"来捕获字符串的一部分，除非使用组\$0\$|==必填==|
> > |Template|用于从找到的匹配项创建字符串的模板，这是一个带有特殊元素的任意字符串，用于引用正则表达式中的组。引用组的语法是:'\$1\$'引用组1，'\$2\$'引用组2，等等，\$0\$引用整个表达式匹配的任何内容|可选|
> > |Match No.|指示使用哪个匹配项，正则表达式可以匹配多次，<br/>- 0：随机提取一个<br/>- 正数：提取指定索引序号的数据(索引序号起始值为1)<br/>- 负数：需要与ForEach控制器一起使用|可选|
> > |Default Values|如果正则表达式未返回任何结果时提取到的默认值，结果的变量的名称以分号分隔|可选|
> > |Use empty default value|是否使用空值作为默认值，true：是，false：否，默认值：false|可选|
^post-processer-regex-extractor

<div class="page-break" style="page-break-before: always;"></div>

### 3.5.3 JSR223 PostProcesser
> [!post-processer]+ JSR223 PostProcesser
> JSR223 PostProcesser 与 [JSR223 PreProcesser](JMeter/JMeter基础使用.md#^pre-processer-jsr223-preprocesser) 的使用方式完全相同，属性不再赘述
> 
> ![JSR223 PostProcesser](assets/images/JMeter/components/post%20processer/JSR223%20Post%20Processer.png)
> 
> > [!property]+ 脚本示例
> > ```javascript
> > // ECMAScript 5.1 脚本示例，用于提取数据库查询结果
> > /*
>  > * 提取数据库查询结果第一行中的结果到全局变量中，删除数据库查询时自动生成的临时变量
>  > */
>  > var id_from_db = vars.get("id_1")
>  > var username_from_db = vars.get("username_1")
>  > var nickname_from_db = vars.get("nickname_1")
>  > vars.put("id", id_from_db)
>  > vars.put("username", username_from_db)
>  > vars.put("nickname", nickname_from_db)
>  > vars.remove("id_1")
>  > vars.remove("username_1")
>  > vars.remove("nickname_1")
> > ```
^post-processer-jsr223-postprocesser

<div class="page-break" style="page-break-before: always;"></div>

### 3.5.4 Debug PostProcesser
> [!post-processer]+ Debug PostProcesser
> Debug PostProcesser 通常用于调试 JMeter 测试计划，加入该后置处理器，可以将运行时各种变量的值输出，以检查测试用例的运行流程是否正确
> 
> ![Debug PostProcesser](assets/images/JMeter/components/post%20processer/Debug%20Post%20Processer.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |JMeter properties|是否输出JMete属性的值，true：是，false：否，默认值：false|==必选==|
> > |JMeter variables|是否输出JMeter变量的值，true：是，false：否，默认值：true|==必选==|
> > |Sampler properties|是否输出采样器属性的值，true：是，false：否，默认值：true|==必选==|
> > |System properties|是否输出系统属性的值，true：是，false：否，默认值：false|==必选==|
^post-processer-debug-postprocesser

<div class="page-break" style="page-break-before: always;"></div>

### 3.5.5 JDBC PostProcesser
> [!post-processer]+ JDBC PostProcesser
> JDBC PostProcesser 与 [JDBC PreProcesser](JMeter/JMeter基础使用.md#^pre-processer-jdbc-preprocesser) 的使用方式完全相同，属性不再赘述
> 
> ![JDBC PostProcesser](assets/images/JMeter/components/post%20processer/JDBC%20Post%20Processer.png)
^post-processer-jdbc-postprocesser

<div class="page-break" style="page-break-before: always;"></div>

## 3.6 断言（Assertion）
> [!assertion]+ 断言（Assertion）
> 断言用于对 [采样器](#3.8%20%E9%87%87%E6%A0%B7%E5%99%A8%EF%BC%88Sampler%EF%BC%89) 的结果执行检查，如果置于采样器同层，则该断言会作用于同层所有放置在其之前执行的采样器；若要确保断言仅应用于特定采样器，请将其作为 [采样器](#3.8%20%E9%87%87%E6%A0%B7%E5%99%A8%EF%BC%88Sampler%EF%BC%89) 的子组件添加
> 当断言检查不通过时，会抛出错误，提示测试不通过
> 
> ![断言（Assertion）](assets/images/JMeter/components/Assertion.png)
> 
> > [!group]+ 常用JMeter断言
> > 
> > |名称|用途|
> > |-:|:-|
> > |[Response Assertion](JMeter/JMeter基础使用.md#^assertion-response-assertion)|用于对 HTTP 响应进结果行检查|
> > |[JSON Assertion](JMeter/JMeter基础使用.md#^assertion-json-assertion)|用于对JSON格式 HTTP 响应内容进行检查|
> > |[JSR223 Assertion](JMeter/JMeter基础使用.md#^assertion-jsr223-assertion)|使用复合 [JSR223标准](https://www.openhab.org/docs/configuration/jsr223.html) 的自定义检查脚本执行检查|

<div class="page-break" style="page-break-before: always;"></div>

### 3.6.1 Response Assertion
> [!assertion]+ Response Assertion
> Response Assertion 断言用于检查 HTTP 响应结果，其可以提取指定的响应内容，通过正则表达式检查内容是否复合预期，如果检查不通过，在 [View Result Tree](JMeter/JMeter基础使用.md#^listener-view-result-tree) 中会显示错误信息
> 
> ![Response Assertion](assets/images/JMeter/components/assertion/Response%20Assertion.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Apply to|用于可以生成子样本的采样器，例如带有嵌入式资源的HTTP采样器，邮件阅读器或由事务控制器生成的样本|==必选==|
> > |Field to Test|提取响应中哪个部分的数据进行验证检查|==必选==|
> > |Pattern Matching Rules|正则检查规则|==必选==|
> > |Pattern to Test|检查用正则表达式|==必填==|
> > |Custom failure message|自定义检查失败时的提示信息|可选|
^assertion-response-assertion

<div class="page-break" style="page-break-before: always;"></div>

### 3.6.2 JSON Assertion
> [!assertion]+ JSON Assertion
> JSON Assertion 断言用于检查 JSON 格式的 HTTP 响应内容，可以按照给定的 JSON 路径表达式提取值，然后进行检查
> 
> ![JSON Assertion](assets/images/JMeter/components/assertion/JSON%20Assertion.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Assert JSON Path exists|需要进行存在性检查的JSON路径表达式|==必选==|
> > |Additionally assert value|是否额外检查值，true：检查，false：不检查，默认值：false|可选|
> > |Match as regular expression|是否使用正则表达式进行额外检查，true：是，false：否，默认值：true|可选|
> > |Expected Value|用于检查期望值的正确值或正则表达式|==必填==|
> > |Except null|是否设置期望值为null|可选|
> > |Invert assertion|是否设置反断言|可选|
^assertion-json-assertion

<div class="page-break" style="page-break-before: always;"></div>

### 3.6.3 JSR223 Assertion
> [!assertion]+ JSR223 Assertion
> JSR223 Assertion 使用自定义脚本代码进行检查，使用方式同 [JSR223 PreProcesser](JMeter/JMeter基础使用.md#^pre-processer-jsr223-preprocesser) 属性不再赘述
> 
> ![](assets/images/JMeter/components/assertion/JSR223%20Assertion.png)
> 
> > [!property]+ 脚本示例
> > ```javascript
> > // ECMAScript 5.1 断言脚本代码示例
> > /*
> >  * 检查上下文中的变量"id"的值是否等于1623，若不等于，则触发断言，并设置自定义断言错误消息
> >  */
> > if(vars.get("id") != 1623) {
> >     AssertionResult.setFailure(true)
> >     AssertionResult.setFailureMessage("用户ID错误")
> > }
> > ```
^assertion-jsr223-assertion

<div class="page-break" style="page-break-before: always;"></div>

## 3.7 监听器（Listener）
> [!listener]+ 监听器（Listener）
> 监听器用于监听测试过程中的输出，记录、统计相关检查结果
> 
> ![监听器](assets/images/JMeter/components/Listener.png)
> 
> > [!group]+ 常用JMeter监听器
> > 
> > |名称|用途|
> > |-:|:-|
> > |[View Result Tree](JMeter/JMeter基础使用.md#^listener-view-result-tree)|结果查看树，以树状结构显示全测试流程中各组件的输出内容和检查结果|
> > |[Summary Report](JMeter/JMeter基础使用.md#^listener-summary-report)|统计报告，以表格结构显示全测试流程中各组件的测试统计结果|

<div class="page-break" style="page-break-before: always;"></div>

### 3.7.1 View Result Tree
> [!listener]+ View Result Tree
> 结果查看树，以树状结构显示全测试流程中各组件的输出内容和检查结果
> 
> ![View Result Tree](assets/images/JMeter/components/listener/View%20Results%20Tree.png)
^listener-view-result-tree

<div class="page-break" style="page-break-before: always;"></div>

### 3.7.2 Summary Report
> [!listener]+ Summary Report
> 统计报告，以表格结构显示全测试流程中各组件的测试用例的统计汇总结果
> 
> ![Summary Report](assets/images/JMeter/components/listener/Summary%20Report.png)
^listener-summary-report

<div class="page-break" style="page-break-before: always;"></div>

## 3.8 采样器（Sampler）
> [!sampler]+ 采样器（Sampler）
> 采样器为 JMeter 中执行的测试用例的基本单位，每个采样器都是一个测试用例
> 
> > [!fail]+ 注意！
> > 采样器必须在 [线程组](JMeter/JMeter基础使用.md#^thread-group) 下才可以创建，无法在 [测试计划](JMeter/JMeter基础使用.md#^test-plan) 中直接使用
> 
> ![采样器](assets/images/JMeter/components/Sampler.png)
> 
> > [!group]+ 常用JMeter采样器
> > 
> > |名称|用途|
> > |-:|:-|
> > |[HTTP Request](JMeter/JMeter基础使用.md#^sampler-http-request)|执行HTTP请求测试用例|
> > |[JDBC Request](JMeter/JMeter基础使用.md#^sampler-jdbc-request)|执行数据库查询测试用例|

<div class="page-break" style="page-break-before: always;"></div>

### 3.8.1 HTTP Request
> [!sampler]+ HTTP Request
> HTTP Request 用于执行 HTTP 请求测试用例的采样
> 
> ![HTTP Request](assets/images/JMeter/components/sampler/HTTP%20Request.png)
> 
> > [!property]+ 属性
> > 
> > |属性名|属性说明|否必填、选|
> > |-:|:-|:-|
> > |Protocol|请求协议，默认值：http|==必填==|
> > |Server Name or IP|请求服务域名或IP地址|==必填==|
> > |Port Number|请求服务的监听端口|可选|
> > |Request Method|请求类型|==必选==|
> > |Path|请求地址URI|==必填==|
> > |Content encoding|内容编码格式|可选|
> > |Redirect Automatically|是否自动重定向|可选|
> > |Follow Redirects|是否跟踪重定向|可选|
> > |Use KeepAlive|是否使用启用keep-alive|可选|
> > |Use multipart/form-data|是否启用multipart/form-data 或 application/x-www-form-urlencoded请求头，在文件上传请求中才会指定使用|可选|
> > |Browser-compatible headers|是否启用浏览器兼容的请求头，通常只在部分限定浏览器才可以访问的请求中启用|可选|
> > |Parameters|请求Path和Query中的参数|可选|
> > |Body|请求Body参数|可选|
> > |Files Upload|文件上传参数|可选|
^sampler-http-request

<div class="page-break" style="page-break-before: always;"></div>

### 3.8.2 JDBC Request
> [!sampler]+ JDBC Request
> JDBC Request 用于执行数据库查询测试用例的采样，其使用方式与 [JDBC PreProcesser](JMeter/JMeter基础使用.md#^pre-processer-jdbc-preprocesser) 和 [JDBC PostProcesser](JMeter/JMeter基础使用.md#^post-processer-jdbc-postprocesser) 相同，属性不再赘述
> 
> ![JDBC Request](assets/images/JMeter/components/sampler/JDBC%20Request.png)
^sampler-jdbc-request

<div class="page-break" style="page-break-before: always;"></div>

# 4. JMeter常用扩展插件
## 4.1 JMeter Plugin Manager
> [!plugin]+ JMeter Plugin Manager
> JMeter Plugin Manager 是一个插件管理器，提供安装、检索、删除、启/禁用 JMeter 插件的功能
> 
> > [!todo]+ 安装&配置
> > > [!download]+ 下载
> > > [JMeter Plugin Manager 插件下载地址](https://jmeter-plugins.org/get/)
> > 
> > > [!config]+ 配置
> > > 将下载得到的 plugins-manager.jar 放入 JMeter 安装目录下的 lib\ext 子目录中
> >  
> > > [!check]+ 检查
> > > 重启 JMeter 后，点击顶部菜单栏的 "Options" 菜单，检查菜单项中是否有新增 "Plugins Manager" 菜单项
> >  > ![Plugins Manager](assets/images/JMeter/components/plugin/JMeter%20Plugins%20Manager.png)
> 
> > [!use]+ 使用
> > 点击菜单项 "Plugins Manager" 打开插件管理器
> > 
> > ![插件管理器](assets/images/JMeter/components/plugin/JMeter%20Plugins%20Manager%20Dialog.png)
> > 
> > > [!property]+ 插件管理器提供以下功能
> > > 
> > > |功能|说明|
> > > |-:|:-|
> > > |Installed Plugins|管理当前已经安装的插件列表|
> > > |Available Plugins|在线查找、安装插件|
> > > |Updates|插件更新检查|
^plugin-manager

<div class="page-break" style="page-break-before: always;"></div>

## 4.2 gRPC Request Plugin
> [!plugin]+ gRPC Request Plugin
> gRPC Request Plugin 扩展插件为 JMeter 扩展了测试gRPC接口的能力
> 
> > [!todo]+ 安装&配置
> > > [!download]+ 下载
> > > - 手动下载  [gRPC扩展插件下载地址](https://github.com/zalopay-oss/jmeter-grpc-request/releases)
> > > - 使用 [JMeter Plugin Manager](JMeter/JMeter基础使用.md#^plugin-manager) 进行安装
> > 
> > > [!config]+ 配置
> > > 将下载得到的 jmeter-grpc-request.jar 放入 JMeter 安装目录下的 lib\ext 子目录中
> > 
> > > [!check]+ 检查
> > > 重启 JMeter，在 [线程组](JMeter/JMeter基础使用.md#^thread-group) 下右击，检查 Sampler 子菜单中是否出现 "GRPC Request"
> > > ![gRPC 扩展插件](assets/images/JMeter/components/plugin/gRPC%20Plugin.png)
> 
> > [!sampler]+ GRPC Request
> > GRPC Request 采样器为 JMeter 提供了发送 gRPC 请求测试用例的采样能力，可以用于测试 gRPC 接口，使用方式上，类似于 [HTTP Request](JMeter/JMeter基础使用.md#^sampler-http-request)
> > 
> > ![GRPC Request](assets/images/JMeter/components/sampler/GRPC%20Request.png)
> > 
> > > [!property]+ 属性
> > > 
> > > |属性名|属性说明|
> > > |-:|:-|
> > > |Server Name or IP|gRPC服务域名或IP地址|
> > > |Port Number|gRPC服务监听端口|
> > > |SSL/TLS|是否启用SSL或TLS|
> > > |Disable SSL/TLS Cert Ver...|是否禁用SSL或TLS的证书检查|
> > > |Proto Root Directory|gRPC proto 协议文件所在目录|
> > > |Library Directory|proto文件解析需要依赖的额外库的文件夹路径|
> > > |Metadata|Metadata可以用于token身份验证等方式，支持以下两种方式传输（UTF-8）：<br/>1. 使用键值对（Key: Value）： key1: value1, key2: value2<br/>2. 使用 JSON String：- {"key1":"Value1", "key2":"value2"}|
> > > |Deadline in ...|请求超时时间，单位：毫秒|
> > > |Send JSON Format With...|格式化的 JSON 请求数据|
^plugin-grpc-plugin

<div class="page-break" style="page-break-before: always;"></div>

# 5. JMeter示例
> TODO 待补充

---
[^1]: 更高版本JDK未进行测试，不确定是否可以正常使用，在此仅推荐使用8.0u202的版本
[^2]: 不建议设置用户环境变量，用户环境变量在部分版本的Windows中设置后并不生效
[^3]: 官方推荐，同为Apache出品，内置工具函多，入门门槛适中
[^4]: 群众基础好，入门门槛低

#JMeter #测试 #压力测试 