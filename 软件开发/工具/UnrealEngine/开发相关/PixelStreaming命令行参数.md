---
Args:
  - Name: "-PixelStreamingIP=value"
    ValueType: "String"
    DefaultValue: "localhost"
    Comment: "信令服务IP地址"
  - Name: "-PixelStreamingPort=value"
    ValueType: "Integer"
    DefaultValue: 8888
    Comment: "信令服务的WebSocket监听端口"
  - Name: "-PixelStreamingURL=value"
    ValueType: "String"
    DefaultValue: "ws://localhost:8888"
    Comment: |
      信令服务的WebSocket连接地址
      - 此参数为-PixelStreamingIP和-PixelStreamingPort的合并, 设置此参数后上述2个参数**==不再生效==**
      - ==推荐使用此参数设置信令服务地址==
  - Name: "-PixelStreamingEncoderTargetBitrate=value"
    ValueType: "Integer"
    DefaultValue: -1
    Comment: |
      输出视频流的编码目标码率, 单位: bps
      - 如果此值不为-1, 则会按照参数值作为目标码率对输出流进行编码
      - 反之, 使用-PixelStreamingWebRTCStartBitrate参数值作为目标码率
  - Name: "-PixelStreamingEncoderKeyframeInterval=value"
    ValueType: "Integer"
    DefaultValue: 300
    Comment: "输出视频的GOP, **==建议GOP值不大于帧率的一半==**, 即每秒钟的视频流中至少包含2个I帧"
  - Name: "-PixelStreamingEncoderMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: "20000000 (20Mbps)"
    Comment: "VBR模式下输出视频流的最大码率, 单位: bps"
  - Name: "-PixelStreamingEncoderMinQP=value"
    ValueType: "Integer"
    DefaultValue: 15
    Comment: |
      **==最低==**质量量化参数, 取值范围[ -1, 51 ]
      - 值越低意味着质量越高, 同时需要的码率也越高
      - 值-1表示禁用**==最低==**质量限制
  - Name: "-PixelStreamingEncoderMaxQP=value"
    ValueType: "Integer"
    DefaultValue: 0
    Comment: |
      **==最高==**质量量化参数, 取值范围[ -1, 51 ]
      - 值越低意味着质量越高, 同时需要的码率也越高
      - 值-1表示禁用**==最高==**质量限制
  - Name: "-PixelStreamingEncoderMultipass=value"
    ValueType: "String"
    DefaultValue: "DISABLED"
    Comment: |
      此参数仅在使用**==Nvidia==**设备时有效, 设置视频编码多次Pass参数, 可选值
      - DISABLED: 直接编码, ==注重**编码速度**==
      - QUARTER: 分析1/4的画面像素后编码
      - FULL: 分析全画面像素后编码, ==注重**画面质量与压缩率**==
  - Name: "-PixelStreamingH264Profile=value"
    ValueType: "String"
    DefaultValue: "Baseline"
    Comment: |
      H.264 编码的Profile配置, 可选值
      - AUTO: 自动选择
      - Baseline: 对应 H.264 的 Baseline Profile
      - MAIN: 对应 H.264 的 Main Profile
      - HIGH: 对应 H.264 的 High Profile, ==推荐使用==
      - HIGH444: 对应 H.264 的 High444 Profile
      - STEREO
      - SVC_TEMPORAL_SCALABILITY
      - PROGRESSIVE_HIGH
      - CONSTRAINED_HIGH
  - Name: "-PixelStreamingCaptureSize=value"
    ValueType: "String"
    DefaultValue: "1920x1080"
    Comment: |
      输出视频流的屏幕捕捉尺寸, 参数格式为: 宽度x高度, 单位: 像素
  - Name: "-PixelStreamingMaxNumBackBuffers=value"
    ValueType: "Integer"
    DefaultValue: 3
    Comment: |
      输出视频编码的最大缓冲帧数, 超过该缓冲数的待编码帧会被丢弃
      - 设置值0, 为不限制缓冲帧数量
  - Name: "-PixelStreamingWebRTCMaxFps=value"
    ValueType: "Integer"
    DefaultValue: 60
    Comment: "WebRTC画面最大帧率限制, 此值同时会限制UE场景的渲染帧率"
  - Name: "-PixelStreamingWebRTCStartBitrate=value"
    ValueType: "Integer"
    DefaultValue: "10000000 (10Mbps)"
    Comment: "WebRTC**==初始==**码率, 单位: bps"
  - Name: "-PixelStreamingWebRTCMinBitrate=value"
    ValueType: "Integer"
    DefaultValue: "100000 (100kbps)"
    Comment: "WebRTC**==最低==**码率限制, 单位: bps"
  - Name: "-PixelStreamingWebRTCMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: "20000000 (20Mbps)"
    Comment: "WebRTC**==最高==**码率限制, 单位: bps"
  - Name: "-PixelStreamingEncoderRateControl=value"
    ValueType: "String"
    DefaultValue: "CBR"
    Comment: |
      码率控制模式, 可选值
      - CBR: 固定码率模式
      - VBR: 可变码率模式
      - ConstQP: 固定质量模式
        ````ad-danger
        title: 注意
        icon: warning
        collapse: open
        PixelStreaming中输出画面是通过 UnrealEngine\Engine\Plugins\Media\HardwareEncoders 插件中的硬件编码实现, 在使用**==Nvidia==**设备时, ConstQP控制模式是**==没有实现==**的, 需要修改插件源码才可以实现
        ```cpp
        // Engine\Plugins\Media\HardwareEncoders\Source\EncoderNVENC\Private\NVENC_EncoderH264.cpp, Line: 477
        RateControlParams.minQP = {MinQP, MinQP, MinQP};
        RateControlParams.maxQP = {MaxQP, MaxQP, MaxQP}; 
        // Add Support For ConstQP Mode
        //                            P, QP             B, QP  I, QP
        RateControlParams.constQP = { (MaxQP+ MaxQP)/2, MaxQP, MinQP};
        RateControlParams.targetQuality = MaxQP;
        // END Add Support For ConstQP Mode
        ```
        插件源码修改后, 需要放置在项目的Plugins目录中才可以使改动生效
        ````
  - Name: |
      - -PixelStreamingDegradationPreference=value
      - -PixelStreamingWebRTCDegradationPreference=value
    ValueType: "String"
    DefaultValue: "BALANCED"
    Comment: |
      设置WebRTC的画面偏好, 可选值
      - BALANCED: 由WebRTC在有限带宽下自动进行帧率和分辨率的动态调节
      - MAINTAIN_FRAMERATE: **==帧率优先==**, 在带宽允许的前提下, 优先保证帧率不变, 动态调节分辨率
      - MAINTAIN_RESOLUTION: **==分辨率优先==**, 在带宽允许的前提下, 优先保证画面的分辨率不变, 动态调节帧率
  - Name: "-PixelStreamingWebRTCLowQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 25
    Comment: |
      WebRTC画面质量**==下限阈值==**
      - 当-PixelStreamingEncoderMinQP参数值**==不为-1时==**此参数**==不生效==**
      - 如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**==不生效==**
      - WebRTC会为每帧画面设定一个QP值, 当QP值**小于**此参数值时, WebRTC会提升画面的分辨率
      - 取值范围: [ 1, 51 ]
  - Name: "-PixelStreamingWebRTCHighQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 37
    Comment: |
      WebRTC画面质量**==上限阈值==**
      - 当-PixelStreamingEncoderMinQP参数值**==不为-1时==**此参数**==*不生效*==**
      - 如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**==不生效==**
      - WebRTC会为每帧画面设定一个QP值, 当QP值**大于**此参数值时, WebRTC会降低画面的分辨率
      - 取值范围: [ 1, 51 ]
  - Name: "-PixelStreamingFreezeFrameQuality=value"
    ValueType: "Integer"
    DefaultValue: 100
    Comment: "冻结画面的压缩质量, 取值范围: [ 1, 100 ], 越小的值对应的压缩率越高, 最终输出的数据量越少"
  - Name: "-PixelStreamingKeyFilter=value"
    ValueType: "String"
    DefaultValue: ""
    Comment: "需要过滤的客户端按键, 多个按键用逗号隔开, 在此列表中的按键在触发按键事件时, 不做处理"
  - Name: |
      - -PixelStreamingOnScreenStats=value
      - -PixelStreamingHudStats=value
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在屏幕上显示HUD信息, 信息中包含PixelStreaming的输出画面编码实时信息, **==调试用==**"
  - Name: "-PixelStreamingLogStats=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在UE日志文件中输出信息, 信息中包含PixelStreaming的输出画面编码实时信息, **==调试用==**"
  - Name: "-PixelStreamingDebugDumpFrame=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在磁盘中输出编码的帧文件, **==调试用==**, 输出文件位于项目目录下的Saved子目录中"
  - Name: "-PixelStreamingEnableFillerData=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      是否在编码时填充无用数据以保证固定码率
      - 当-PixelStreamingEncoderRateControl参数值为CBR且-PixelStreamingEncoderMinQP参数值为-1时, 此参数**==不生效==**
  - Name: "-PixelStreamingUseBackBufferSize=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: "是否使用-PixelStreamingCaptureSize参数值的分辨率设置缓冲帧尺寸"
  - Name: "-PixelStreamingWebRTCDisableReceiveAudio=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否禁用客户端音频传入UE"
  - Name: "-PixelStreamingWebRTCDisableTransmitAudio=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否禁用UE声音回传客户端"
  - Name: "-PixelStreamingWebRTCDisableAudioSync=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: "是否禁用WebRTC音画同步"
  - Name: "-PixelStreamingWebRTCDisableResolutionChange=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: "是否禁止WebRTC动态调整分辨率"
  - Name: "-PixelStreamingSendPlayerIdAsInteger=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: "是否将客户端编号(PlayerId)以字符串或整数的类型发送"
  - Name: "-PixelStreamingWebRTCUseLegacyAudioDevice=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "允许WebRTC将音视频信息放入同一个流中, 用于音画同步"
  - Name: "-PixelStreamingDisableLatencyTester=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否禁用UE提供的WebRTC延迟测试功能"
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
		arg.Name.replace("=value", `=${arg.ValueType}`),
		arg.DefaultValue,
		arg.Comment
	])
);
```
