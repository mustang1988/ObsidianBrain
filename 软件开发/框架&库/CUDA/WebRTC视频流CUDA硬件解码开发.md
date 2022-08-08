# WebRTC视频流CUDA硬件解码开发

## VideoDecoderFactory与VideoDecoder

WebRTC 提供了 [[VideoDecoderFactory]] 与 [[VideoDecoder]] 两个接口用于扩展其视频流的编解码支持, 前者为一个工厂类接口, 用于创建具体的VideoDecoder实例, 后者提供对应编码类型视频流的解码支持

在创建 PeerConnection 对象时, 需要使用CreatePeerConnectionFactory工厂来创建PeerConnection对象, 在CreatePeerConnectionFactory中可以指定用于创建VideoDecoder的VideoDecoderFactory


#WebRTC #CUDA  #视频编解码 