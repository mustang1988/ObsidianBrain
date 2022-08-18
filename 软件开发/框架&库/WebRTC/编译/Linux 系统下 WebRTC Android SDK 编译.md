---

---
# Linux 系统下 WebRTC Android SDK 编译
```ad-quote
title: 懒人一键式编译
collapse: open

环境准备: 
- JDK, 建议使用1.8(Java8)或以上版本, 打包android的SDK jar包时会使用到
- Python3, 执行编译脚本需要
- 外网代理服务, 构建期间需要访问Google域名下的服务器下载依赖, 编译工具以及源码, 故需要代理服务

下载以下编译脚本:
https://github.com/react-native-webrtc/react-native-webrtc/blob/master/tools/build-webrtc.py

执行以下命令开始一键编译

~~~bash
python3 build-webrtc.py --setup --build --android <output_path>
~~~

其中
- --setup, 参数为首次执行编译时初始化编译环境, 拉取源码等操作的参数, 修改源码或重复执行编译时不再需要
- output_path 参数为编译文件的输出的目录, 需要先手动创建

该脚本会分别编译arm, arm64, x86和x64这4个芯片平台的 libjingle_peerconnection_so.so 库文件和android的SDK jar包 libwebrtc.jar, 并将各平台的文件打包到单独的android-webrtc.tgz文件中

最终输出目录会在编译完成后输出到控制台中

```

```ad-quote
title: 手动编译


```


#WebRTC #编译 #Android #SDK #Linux 