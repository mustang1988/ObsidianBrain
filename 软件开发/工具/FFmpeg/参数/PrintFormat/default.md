## default
```ad-info
title: 此格式为 [[FFprobe]] 中 [[-of]] 参数输出的默认格式
```

### 输出示例
```bash
[FORMAT]
filename=output.mp4
nb_streams=1
nb_programs=0
format_name=mov,mp4,m4a,3gp,3g2,mj2
format_long_name=QuickTime / MOV
start_time=0.000000
duration=10.234000
size=15797948
bit_rate=12349382
probe_score=100
TAG:major_brand=isom
TAG:minor_version=512
TAG:compatible_brands=isomiso2avc1mp41
TAG:encoder=Lavf59.10.100
[/FORMAT]
```

### 可选参数
#### nokey, nk
设置是否输出属性字段的名称, 即是否输出 [[default#输出示例]] 中属性列表中"="及其前面的部分, 可选值: 0 \| 1, 默认值: 0, 0为**输出**字段名称, 1为**不输出**字段名称

使用示例
```bash
ffprobe -of default=nk=1
# 或
ffprobe -of default=nokey=1
```

输出结果示例
```bash
[FORMAT]
output.mp4
1
0
mov,mp4,m4a,3gp,3g2,mj2
QuickTime / MOV
0.000000
10.234000
15797948
12349382
100
isom
512
isomiso2avc1mp41
Lavf59.10.100
[/FORMAT]
```

#### noprint_wrappers, nw
设置是否输出属性分类名称, 即设置是否输出 [[default#输出示例]] 中, "\[FORMAT\]" 和 "\[/FORMAT\]" 所在的行, 可选值: 0 \| 1, 默认值: 0, 0为**输出**属性分类名称, 1为**不输出**属性分类名称

使用示例
```bash
ffprobe -of default=noprint_wrappers=1
# 或
ffprobe -of default=nw=1
```

输出结果示例
```bash
filename=output.mp4
nb_streams=1
nb_programs=0
format_name=mov,mp4,m4a,3gp,3g2,mj2
format_long_name=QuickTime / MOV
start_time=0.000000
duration=10.234000
size=15797948
bit_rate=12349382
probe_score=100
TAG:major_brand=isom
TAG:minor_version=512
TAG:compatible_brands=isomiso2avc1mp41
TAG:encoder=Lavf59.10.100
```

`````ad-info
title: **default** 输出格式为 [[FFprobe]] 中 [[-of]] 参数输出的默认格式

````ad-note
title: 默认输出示例, 点开查看
collapse: close
~~~bash
[FORMAT]
filename=output.mp4
nb_streams=1
nb_programs=0
format_name=mov,mp4,m4a,3gp,3g2,mj2
format_long_name=QuickTime / MOV
start_time=0.000000
duration=10.234000
size=15797948
bit_rate=12349382
probe_score=100
TAG:major_brand=isom
TAG:minor_version=512
TAG:compatible_brands=isomiso2avc1mp41
TAG:encoder=Lavf59.10.100
[/FORMAT]
~~~
````

````ad-note
title: 可选参数, 点开查看
collapse: close

default 输出格式拥有以下专属可选参数

```ad-example
title: nokey 或 nk, 点开查看
collapse: close
设置是否输出属性字段的名称, 即是否输出默认输出示例中属性列表中"="及其前面的部分

可选值: 
- 0, **输出**字段名称
- 1, **不输出**字段名称

默认值: 0

使用实例
~~~bash
ffprobe -of default=nk=1
# 或
ffprobe -of default=nokey=1
~~~

输出结果示例
~~~bash
[FORMAT]
output.mp4
1
0
mov,mp4,m4a,3gp,3g2,mj2
QuickTime / MOV
0.000000
10.234000
15797948
12349382
100
isom
512
isomiso2avc1mp41
Lavf59.10.100
[/FORMAT]
~~~

```

```ad-example
title: noprint_wrappers 或 nw, 点开查看
collapse: close
设置是否输出属性分类名称, 即设置是否输出默认输出示例中, "\[FORMAT\]" 和 "\[/FORMAT\]" 所在的行

可选值: 
- 0, **输出**属性分类名称
- 1, **不输出**属性分类名称

默认值: 0

使用示例
~~~bash
ffprobe -of default=noprint_wrappers=1
# 或
ffprobe -of default=nw=1
~~~

输出结果示例
~~~bash
filename=output.mp4
nb_streams=1
nb_programs=0
format_name=mov,mp4,m4a,3gp,3g2,mj2
format_long_name=QuickTime / MOV
start_time=0.000000
duration=10.234000
size=15797948
bit_rate=12349382
probe_score=100
TAG:major_brand=isom
TAG:minor_version=512
TAG:compatible_brands=isomiso2avc1mp41
TAG:encoder=Lavf59.10.100
~~~
```
````
`````

#FFprobe #PrintFormat 