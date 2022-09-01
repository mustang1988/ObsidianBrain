---
Args:
  - Name: "-PixelStreamingIP=value"
    ValueType: "String"
    DefaultValue: "localhost"
    Comment: |
      ```ad-info
      title: 
      信令服务IP地址
      ```
  - Name: "-PixelStreamingPort=value"
    ValueType: "Integer"
    DefaultValue: 8888
    Comment: |
      ```ad-info
      title: 
      信令服务WebSocket监听端口
      ```
  - Name: "-PixelStreamingURL=value"
    ValueType: "String"
    DefaultValue: "ws://localhost:8888"
    Comment: |
      ```ad-info
      title: 信令服务WebSocket连接地址
      - 格式为: **==ws://==**[信令服务IP]**==:==**[信令服务WebSocket监听端口]
      - 此参数与-PixelStreamingIP和-PixelStreamingPort互斥, 设置此参数后这两个参数**==不再生效==**
      - ==推荐使用此参数设置信令服务地址==
      ```
  - Name: "-PixelStreamingEncoderTargetBitrate=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 8000000 (8Mbps)
      ```
    Comment: |
      ```ad-important
      title: 输出视频流的编码**==目标码率==**
      - 单位: bps
      - 如果此值**==不为==**-1, 则会按照该参数值作为目标码率对输出流进行编码
      - 反之, 使用-PixelStreamingWebRTCStartBitrate参数值作为目标码率
      ```
  - Name: "-PixelStreamingEncoderKeyframeInterval=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 15
      ```
    Comment: |
      ```ad-important
      title: 输出视频的GOP
      - GOP: Group Of Picture, 两个相邻I帧之间的帧数
      - 此值越大, 对画面复杂度的适应能力越低; 画面变化越频繁, 内容复杂度越高的画面, 出现模糊的概率越高, 编码输出结果的码率也越低
      - 对画质要求较高的情况下**==建议GOP值不大于帧率的一半==**, 以保证每秒的视频流中至少包含2个I帧
      ```
  - Name: "-PixelStreamingEncoderMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 12000000 (12Mbps)
      ```
    Comment: |
      ```ad-important
      title: VBR模式下输出视频流的最大码率
      单位: bps
      - **==仅在VBR模式生效==**
      ```
  - Name: "-PixelStreamingEncoderMinQP=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 20
      ```
    Comment: |
      ```ad-important
      title: **==最低==**质量量化参数
      - 取值范围[ -1, 51 ]
      - 值越低意味着质量越高, 需要的码率也越高
      - 值-1表示禁用**==最低==**质量限制
      ```
  - Name: "-PixelStreamingEncoderMaxQP=value"
    ValueType: "Integer"
    DefaultValue: 0
    Comment: |
      ```ad-info
      title: **==最高==**质量量化参数
      - 取值范围[ -1, 51 ]
      - 值越低意味着质量越高, 需要的码率也越高
      - 值-1表示禁用**==最高==**质量限制
      ```
  - Name: "-PixelStreamingEncoderMultipass=value"
    ValueType: "String"
    DefaultValue: "DISABLED"
    Comment: |
      ```ad-info
      title: 视频编码Pass参数
      此参数仅在使用**==Nvidia==**设备时有效, 可选值
      - DISABLED: 直接编码, ==注重**编码速度**==
      - QUARTER: 分析1/4的画面像素后编码
      - FULL: 分析全画面像素后编码, ==注重**画面质量与压缩率**==
      ```
  - Name: "-PixelStreamingH264Profile=value"
    ValueType: "String"
    DefaultValue: |
      ```ad-important
      title: HIGH
      ```
    Comment: |
      ```ad-important
      title: H.264 编码的 Profile
      可选值
      - AUTO: 由WebRTC自动选择
      - Baseline: 对应 H.264 的 Baseline Profile
      - MAIN: 对应 H.264 的 Main Profile
      - HIGH: 对应 H.264 的 High Profile, **==推荐使用==**
      - HIGH444: 对应 H.264 的 High444 Profile
      - STEREO
      - SVC_TEMPORAL_SCALABILITY
      - PROGRESSIVE_HIGH
      - CONSTRAINED_HIGH
      ```
  - Name: "-PixelStreamingCaptureSize=value"
    ValueType: "String"
    DefaultValue: "1920x1080"
    Comment: |
      ```ad-info
      title: 输出视频流的屏幕捕捉尺寸
      - 参数格式为: 宽度x高度
      - 单位: 像素
      ```
  - Name: "-PixelStreamingEncoderRateControl=value"
    ValueType: "String"
    DefaultValue: |
      ```ad-important
      title: ConstQP
      ```
    Comment: |
      ````ad-important
      title: 码率控制模式
      可选值
      - CBR: 固定码率模式
      - VBR: 可变码率模式
      - ConstQP: 固定质量模式
        ```ad-danger
        title: 注意
        icon: warning
        collapse: open
        PixelStreaming中输出画面是通过 UnrealEngine\Engine\Plugins\Media\HardwareEncoders 插件中的硬件编码实现
        该插件在使用**==Nvidia==**设备时, ConstQP控制模式是**==没有实现==**的, 需要修改插件源码才可以实现
        ~~~cpp
        // UnrealEngine\Engine\Plugins\Media\HardwareEncoders\Source\EncoderNVENC\Private\NVENC_EncoderH264.cpp, Line: 477
        RateControlParams.minQP = {MinQP, MinQP, MinQP};
        RateControlParams.maxQP = {MaxQP, MaxQP, MaxQP}; 
        // Add Support For ConstQP Mode
        //                            P, QP             B, QP  I, QP
        RateControlParams.constQP = { (MaxQP+ MaxQP)/2, MaxQP, MinQP};
        RateControlParams.targetQuality = MaxQP;
        // END Add Support For ConstQP Mode
        ~~~
        插件源码修改后, 需要将整个插件目录拷贝到项目的Plugins目录中, 在项目中单独编译插件才可以使上述改动生效; 或重新编译完整的 Unreal Engine 源码
        ```
      ````
  - Name: "-PixelStreamingMaxNumBackBuffers=value"
    ValueType: "Integer"
    DefaultValue: 3
    Comment: |
      ```ad-info
      title: 输出视频编码的最大缓冲帧数
      - 超过该缓冲数的待编码帧会被丢弃
      - 设置值0, 为不限制缓冲帧数量
      ```
  - Name: "-PixelStreamingWebRTCMaxFps=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 30
      ```
    Comment: |
      ```ad-important
      title: WebRTC画面最大帧率限制
      此参数值同时会作用于UE场景的最大渲染帧率
      ```
  - Name: "-PixelStreamingWebRTCStartBitrate=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 8000000 (8Mbps)
      ```
    Comment: |
      ```ad-important
      title: 
      WebRTC**==初始==**码率, 单位: bps
      ```
  - Name: "-PixelStreamingWebRTCMinBitrate=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 500000 (500kbps)
      ```
    Comment: |
      ```ad-important
      title: 
      WebRTC**==最低==**码率限制, 单位: bps
      ```
  - Name: "-PixelStreamingWebRTCMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 12000000 (12Mbps)
      ```
    Comment: |
      ```ad-important
      title: 
      WebRTC**==最高==**码率限制, 单位: bps
      ```
  - Name: |
      - -PixelStreamingDegradationPreference=value
      - -PixelStreamingWebRTCDegradationPreference=value
    ValueType: "String"
    DefaultValue: |
      ```ad-important
      title: MAINTAIN_RESOLUTION
      ```
    Comment: |
      ```ad-important
      title: 设置WebRTC的画面偏好, 可选值
      - BALANCED: 由WebRTC在有限带宽下自动进行帧率和分辨率的动态调节
      - MAINTAIN_FRAMERATE: **==帧率优先==**, 在带宽允许的前提下, 优先保证帧率不变, 动态调节分辨率
      - MAINTAIN_RESOLUTION: **==分辨率优先==**, 在带宽允许的前提下, 优先保证画面的分辨率不变, 动态调节帧率
      ```
  - Name: "-PixelStreamingWebRTCLowQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 25
    Comment: |
      ```ad-info
      title: WebRTC画面质量**==下限阈值==**
      - 当-PixelStreamingEncoderMinQP参数值**==不为-1时==**此参数**==不生效==**
      - 如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**==不生效==**
      - WebRTC会为每帧画面分析计算出一个QP值, 当QP值**小于**此参数值时, WebRTC会**==提升==**画面的分辨率
      - 取值范围: [ 1, 51 ]
      ```
  - Name: "-PixelStreamingWebRTCHighQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 37
    Comment: |
      ```ad-info
      title: WebRTC画面质量**==上限阈值==**
      - 当-PixelStreamingEncoderMinQP参数值**==不为-1时==**此参数**==*不生效*==**
      - 如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**==不生效==**
      - WebRTC会为每帧画面分析计算出一个QP值, 当QP值**大于**此参数值时, WebRTC会**==降低==**画面的分辨率
      - 取值范围: [ 1, 51 ]
      ```
  - Name: "-PixelStreamingFreezeFrameQuality=value"
    ValueType: "Integer"
    DefaultValue: 100
    Comment: |
      ```ad-info
      title: 冻结画面的压缩质量
      取值范围: [ 1, 100 ], 越小的值对应的压缩率越高, 最终输出的数据量越少
      ```
  - Name: "-LHTPixelStreamingMaxLatency=value"
    ValueType: "Integer"
    DefaultValue: |
      ```ad-important
      title: 100
      - FPS30, 对应渲染帧队列长度上限为:3
      - FPS60, 对应渲染帧队列长度上限为: 6
      ```
    Comment: |
      ```ad-important
      title: 允许的最大延迟
      - **==LHTPixelStreaming插件新增参数==**
      - 单位: 毫秒
      - 此参数值用计算渲染帧队列的长度上限, 当解码速度与渲染速度不一致时, 用于缓冲解码后的帧
      - 渲染帧队列长度上限计算公式:
        - 每帧时长 = (double)1000 / -PixelStreamingWebRTCMaxFps参数值
        - 渲染队列长度上限 = 此参数值 / 每帧时长, 向上取整
      ```
  - Name: "-LHTPixelStreamingVideoDecoder=value"
    ValueType: "String"
    DefaultValue: |
      ```ad-important
      title: H264
      ```
    Comment: |
      ```ad-important
      title: 收流支持的解码器名称
      **==LHTPixelStreaming插件新增参数==**, 可选值(不区分大小写):
      - H264: **==仅支持H264==**编码的视频推流, 以下配置的H264格式的推流被支持
        - High Profile + Level 5.2 及以下
        - ConstraintedHigh Profile + Level 5.2 及以下
        - Main Profile + Level 5.2 及以下
        - Baseline Profile + Level 5.2 及以下
        - ConstraintedBaseline Profile + Level 5.2 及以下
      - VP8: **==仅支持VP8==**编码的视频推流
      - VP9: **==仅支持VP9==**编码的视频推流
      - AV1: **==仅支持AV1==**编码的视频推流
      - ALL: 同时支持H264, VP8, VP9 和 AV1 编码的视频推流, 具体使用何种编码取决于客户机提交的SDP信息交换的结果
      ```
  - Name: "-PixelStreamingKeyFilter=value"
    ValueType: "String"
    DefaultValue: ""
    Comment: |
      ```ad-info
      title: 需要过滤的客户端按键
      多个按键用逗号隔开, 在此列表中的按键在触发按键事件时, 不做处理
      ```
  - Name: |
      - -PixelStreamingOnScreenStats=value
      - -PixelStreamingHudStats=value
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 是否在屏幕上显示HUD信息
      显示的信息中包含PixelStreaming的输出画面编码实时信息, **==调试用==**
      ```
  - Name: "-PixelStreamingLogStats=value"
    ValueType: "Boolean"
    DefaultValue: |
      ```ad-important
      title: true
      ```
    Comment: |
      ```ad-important
      title: 是否在UE日志文件中输出信息
      输出的信息中包含PixelStreaming的输出画面编码实时信息, **==调试用==**
      ```
  - Name: "-PixelStreamingDebugDumpFrame=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 是否在磁盘中输出编码的帧文件
      文件会输出到项目目录下的Saved子目录中, **==调试用==**
      ```
  - Name: "-PixelStreamingEnableFillerData=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 是否在编码时填充无用数据以保证固定码率
      当-PixelStreamingEncoderRateControl参数值为CBR且-PixelStreamingEncoderMinQP参数值为-1时, 此参数**==不生效==**
      ```
  - Name: "-PixelStreamingUseBackBufferSize=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 
      是否使用-PixelStreamingCaptureSize参数值的分辨率设置缓冲帧尺寸
      ```
  - Name: "-PixelStreamingWebRTCDisableReceiveAudio=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 
      是否禁用客户端音频传入UE
      ```
  - Name: "-PixelStreamingWebRTCDisableTransmitAudio=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 
      是否禁用UE声音回传客户端
      ```
  - Name: "-PixelStreamingWebRTCDisableAudioSync=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: |
      ```ad-info
      title: 
      是否禁用WebRTC音画同步
      ```
  - Name: "-PixelStreamingWebRTCDisableResolutionChange=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: |
      ```ad-info
      title: 
      是否禁用WebRTC的分辨率动态调节
      ```
  - Name: "-PixelStreamingSendPlayerIdAsInteger=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: |
      ```ad-info
      title: 
      是否将客户端唯一标识(PlayerId)以字符串或整数的类型发送
      ```
  - Name: "-PixelStreamingWebRTCUseLegacyAudioDevice=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 
      是否允许WebRTC将音视频信息放入同一个流中, 用于音画同步
      ```
  - Name: "-PixelStreamingDisableLatencyTester=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      ```ad-info
      title: 
      是否禁用UE提供的WebRTC延迟测试功能
      ```
  - Name: "-PixelStreamingID=value"
    ValueType: "String"
    DefaultValue: ""
    Comment: |
        ```ad-info
        title: 
        设置 Pixel Streaming UE 实例的唯一标识
        ```
  - Name: "-AllowPixelStreamingCommands"
    ValueType: ""
    DefaultValue: ""
    Comment: |
        ```ad-info
        title: 
        是否允许使用PixelStreaming的命令
        ```
  - Name: "-PixelStreamingHideCursor"
    ValueType: ""
    DefaultValue: ""
    Comment: |
        ```ad-info
        title: 
        是否在场景中隐藏鼠标指针
        ```
  - Name: "-PSForceVP8"
    ValueType: ""
    DefaultValue: ""
    Comment: |
        ```ad-info
        title: 
        是否强制使用VP8编码输出视频流
        ```
  - Name: "-PixelStreamingControlScheme=value"
    ValueType: "String"
    DefaultValue: ""
    Comment: |
        ```ad-info
        title: 设置控制模式
        可选值:
        - 0: LockedMouse模式, 鼠标在页面中是隐藏的, 通过鼠标移动即可实现在场景中的视角转动
        - 1: HoveringMouse模式, 鼠标会在页面中显示, 转动视角需要按住鼠标进行拖拽
        ```
  - Name: "-PixelStreamingFastPan=value"
    ValueType: "Number"
    DefaultValue: ""
    Comment: |
        ```ad-question
        title: 未知用途
        ```
#  - Name: ""
#    ValueType: ""
#    DefaultValue: ""
#    Comment: |
---
# PixelStreaming命令行参数
```dataviewjs
dv.table(
	[ "参数", "默认值", "说明" ],
	dv.current().Args
	.map(arg => [
		arg.Name.replace(/=value/g, `=${arg.ValueType}`),
		arg.DefaultValue,
		arg.Comment
	])
);
```
