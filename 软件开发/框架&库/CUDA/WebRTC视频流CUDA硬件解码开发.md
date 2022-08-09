# WebRTC视频流CUDA硬件解码开发

## VideoDecoderFactory与VideoDecoder

WebRTC 提供了 [[VideoDecoderFactory]] 与 [[VideoDecoder]] 两个接口用于扩展其视频流的编解码支持, 前者为一个工厂类接口, 用于创建具体的VideoDecoder实例, 后者提供对应编码类型视频流的解码支持

在调用 CreatePeerConnectionFactory 函数创建 PeerConnection工厂 时, 通过参数将自定义视频解码器工厂注入, 即可实现工厂创建 PeerConnection 实例时, 自动调用自定义的解码器工厂的创建流程, 创建自定义的解码器实例, 用于WebRTC画面的解码


#WebRTC #CUDA  #视频编解码 