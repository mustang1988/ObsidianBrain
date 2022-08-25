---
Args:
  - Name: "-PixelStreamingIP=value"
    ValueType: "String"
    DefaultValue: "localhost"
    Comment: "信令服务IP"
  - Name: "-PixelStreamingPort=value"
    ValueType: "Integer"
    DefaultValue: 8888
    Comment: "信令服务的WebSocket监听端口"
  - Name: "-PixelStreamingURL=value"
    ValueType: "String"
    DefaultValue: "ws://localhost:8888"
    Comment: |
      信令服务的WebSocket连接地址
      此参数为-PixelStreamingIP和-PixelStreamingPort的合并
      设置此参数后-PixelStreamingIP和-PixelStreamingPort参数不用再设置
      推荐使用此参数设置信令服务地址
  - Name: "-PixelStreamingEncoderTargetBitrate=value"
    ValueType: "Integer"
    DefaultValue: -1
    Comment: |
      输出视频流的编码目标码率, 单位: bps
      如果此值不为-1, 则会按照给定的参数值作为目标码率编码
      反之, 使用WebRTC参数中的StartBitrate值作为目标码率
  - Name: "-PixelStreamingEncoderKeyframeInterval=value"
    ValueType: "Integer"
    DefaultValue: 300
    Comment: "输出视频的GOP值"
  - Name: "-PixelStreamingEncoderMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: 20000000
    Comment: "VBR模式下输出视频流的最大码率, 单位: bps"
  - Name: "-PixelStreamingEncoderMinQP=value"
    ValueType: "Integer"
    DefaultValue: 15
    Comment: |
      **最低**质量量化参数, 取值范围[ -1, 51 ]
      值越低意味着质量越高, 同时需要的码率也越高
      值-1表示禁用**最低**质量限制
  - Name: "-PixelStreamingEncoderMaxQP=value"
    ValueType: "Integer"
    DefaultValue: 0
    Comment: |
      **最高**质量量化参数, 取值范围[ -1, 51 ]
      值越低意味着质量越高, 同时需要的码率也越高
      值-1表示禁用**最高**质量限制
  - Name: "-PixelStreamingEncoderRateControl=value"
    ValueType: "String"
    DefaultValue: "CBR"
    Comment: |
      码率控制模式, 可选值
      - CBR, 固定码率模式
      - VBR, 可变码率模式
      - ConstQP, 固定质量模式
  - Name: "-PixelStreamingEncoderMultipass=value"
    ValueType: "String"
    DefaultValue: "DISABLED"
    Comment: |
      NvEncoder编码多次Pass参数, 可选值
      - DISABLED, 单Pass编码
      - QUARTER, Pass2次编码, 第一遍分析1/4的分辨率
      - FULL, Pass2次编码, 第一遍分析全分辨率
  - Name: "-PixelStreamingH264Profile=value"
    ValueType: "String"
    DefaultValue: "Baseline"
    Comment: |
      编码的Profile配置, 可选值
      - AUTO, 自动选择
      - Baseline, H.264 的 Baseline Profile
      - MAIN, H.264 的 Main Profile
      - HIGH, H.264 的 High Profile
      - HIGH444, H.264 的 High Profile
      - STEREO
      - SVC_TEMPORAL_SCALABILITY
      - PROGRESSIVE_HIGH
      - CONSTRAINED_HIGH
  - Name: "-PixelStreamingCaptureSize=value"
    ValueType: "String"
    DefaultValue: "1920x1080"
    Comment: |
      输出视频流的屏幕捕捉尺寸
      格式为: 宽度x高度, 单位: 像素
  - Name: "-PixelStreamingMaxNumBackBuffers=value"
    ValueType: "Integer"
    DefaultValue: 3
    Comment: |
      输出视频编码的最大缓冲帧数, 超过次缓冲数的待编码帧会被丢弃
      设置值0, 为不限制缓冲帧数量
  - Name: |
      - -PixelStreamingDegradationPreference=value
      - -PixelStreamingWebRTCDegradationPreference=value
    ValueType: "String"
    DefaultValue: "BALANCED"
    Comment: |
      设置WebRTC的画面偏好, 可选值
      - BALANCED, 平衡, 由WebRTC在优先带宽下动态调节帧率和分辨率
      - MAINTAIN_FRAMERATE, 帧率优先, 在有限带宽下, 优先保证帧率的稳定, 动态调节分辨率
      - MAINTAIN_RESOLUTION, 分辨率优先, 在有限带宽下, 有限保证画面的分辨率, 动态调节帧率
  - Name: "-PixelStreamingWebRTCMaxFps=value"
    ValueType: "Integer"
    DefaultValue: 60
    Comment: "WebRTC画面最大帧率限制"
  - Name: "-PixelStreamingWebRTCStartBitrate=value"
    ValueType: "Integer"
    DefaultValue: 10000000
    Comment: "WebRTC初始码率, 单位: bps"
  - Name: "-PixelStreamingWebRTCMinBitrate=value"
    ValueType: "Integer"
    DefaultValue: 100000
    Comment: "WebRTC最低码率限制, 单位: bps"
  - Name: "-PixelStreamingWebRTCMaxBitrate=value"
    ValueType: "Integer"
    DefaultValue: 20000000
    Comment: "WebRTC最高码率限制, 单位: bps"
  - Name: "-PixelStreamingWebRTCLowQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 25
    Comment: |
      WebRTC画面质量**下限阈值**
      当-PixelStreamingEncoderMinQP参数值不为-1时此参数***不生效***
      如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**不生效**
      WebRTC会为每帧画面设定一个QP值, 当QP值低于此参数值时, WebRTC会提升画面的分辨率
      取值范围: [ 1, 51 ]
  - Name: "-PixelStreamingWebRTCHighQpThreshold=value"
    ValueType: "Integer"
    DefaultValue: 37
    Comment: |
      WebRTC画面质量**上限阈值**
      当-PixelStreamingEncoderMinQP参数值不为-1时此参数***不生效***
      如果-PixelStreamingDegradationPreference参数值为MAINTAIN_RESOLUTION时, 此参数亦**不生效**
      WebRTC会为每帧画面设定一个QP值, 当QP值大于此参数值时, WebRTC会降低画面的分辨率
      取值范围: [ 1, 51 ]
  - Name: "-PixelStreamingFreezeFrameQuality=value"
    ValueType: "Integer"
    DefaultValue: 100
    Comment: "冻结画面的压缩质量"
  - Name: "-PixelStreamingKeyFilter=value"
    ValueType: "String"
    DefaultValue: ""
    Comment: "需要过滤的前端按键, 多个按键用逗号隔开, 在此列表中的按键在触发按键事件时, 不做处理"
  - Name: |
      - -PixelStreamingOnScreenStats=value
      - -PixelStreamingHudStats=value
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在屏幕上显示HUD信息, 信息中包含PixelStreaming的输出画面编码实时信息, 以供调试用"
  - Name: "-PixelStreamingLogStats=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在UE日志文件中输出信息, 信息中包含PixelStreaming的输出画面编码实时信息, 以供调试用"
  - Name: "-PixelStreamingDebugDumpFrame=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否在磁盘中输出编码的帧文件, 以供调试用"
  - Name: "-PixelStreamingEnableFillerData=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: |
      当-PixelStreamingEncoderRateControl参数值为CBR和-PixelStreamingEncoderMinQP参数值为-1时, 不适用
      是否在编码时填充无用数据以保证固定码率
  - Name: "-PixelStreamingUseBackBufferSize=value"
    ValueType: "Boolea"
    DefaultValue: true
    Comment: "Whether to use back buffer size or custom size"
  - Name: "-PixelStreamingWebRTCDisableReceiveAudio=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否禁用前端音频传入UE"
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
    Comment: "是否禁止WebRTC改变分辨率"
  - Name: "-PixelStreamingSendPlayerIdAsInteger=value"
    ValueType: "Boolean"
    DefaultValue: true
    Comment: "是否将客户机ID(PlayerId)以字符串或整数的类型发送"
  - Name: "-PixelStreamingWebRTCUseLegacyAudioDevice=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "允许WebRTC将音视频信息放入同一个流中, 用于音画同步"
  - Name: "-PixelStreamingDisableLatencyTester=value"
    ValueType: "Boolean"
    DefaultValue: false
    Comment: "是否禁用UE提供的延迟测试功能"
#  - Name: ""
#    ValueType: ""
#    DefaultValue: ""
#    Comment: |
---
# PixelStreaming参数
```dataviewjs
let i = 0;
dv.table(
	[ "", "参数", "值类型", "默认值", "说明" ],
	dv.current().Args
	.map(arg => [
	  ++i,
		arg.Name,
		arg.ValueType,
		arg.DefaultValue,
		arg.Comment
	])
);
```
