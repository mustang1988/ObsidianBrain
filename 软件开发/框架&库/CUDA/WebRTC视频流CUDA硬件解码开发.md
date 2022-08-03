# WebRTC视频流CUDA硬件解码开发

## VideoDecoderFactory与VideoDecoder

WebRTC 提供了VideoDecoderFactory与VideoDecoder两个接口用于扩展其视频流的编解码支持, 前者为一个工厂类接口, 用于创建具体的VideoDecoder实例, 后者提供对应编码类型视频流的解码支持

在创建PeerConnection对象时, 需要使用CreatePeerConnectionFactory工厂来创建PeerConnection对象, 在CreatePeerConnectionFactory中可以指定用于创建VideoDecoder的VideoDecoderFactory

### VideoDecoderFactory
VideoDecoderFactory接口的定义如下:

```cpp
// WebRTC\src\api\video_codecs\video_decoder_factory.h
class RTC_EXPORT VideoDecoderFactory {
 public:
  virtual std::vector<SdpVideoFormat> GetSupportedFormats() const = 0;
  virtual std::unique_ptr<VideoDecoder> CreateVideoDecoder(const SdpVideoFormat& format) = 0;
  virtual std::unique_ptr<VideoDecoder> LegacyCreateVideoDecoder(const SdpVideoFormat& format,const std::string& receive_stream_id);
  virtual ~VideoDecoderFactory() {}
};
```

自定义的VideoDecoderFactory需要继承此类, 同时需要实现其中的以下方法

| 方法名 | 方法说明 | 
| --- | --- | --- |
| GetSupportedFormats | 获取当前解码器可以解码的格式类型 |  |
| CreateVideoDecoder | 创建解码器实例 |  |
| ~VideoDecoderFactory() |  |  |

### VideoDecoder
VideoDecoder接口的定义如下:

```cpp
// WebRTC\src\api\video_codecs\video_decoder.h
class RTC_EXPORT VideoDecoder {
 public:
  virtual ~VideoDecoder() {}
  virtual int32_t InitDecode(const VideoCodec* codec_settings, int32_t number_of_cores) = 0;
  virtual int32_t Decode(const EncodedImage& input_image, bool missing_frames, int64_t render_time_ms) = 0;
  virtual int32_t RegisterDecodeCompleteCallback(DecodedImageCallback* callback) = 0;
  virtual int32_t Release() = 0;
  virtual bool PrefersLateDecoding() const;
  virtual const char* ImplementationName() const;
};
```

自定义的VideoDecoder类需要继承此类, 同时需要实现其中的以下方法

| 方法名 | 方法说明 |
| --- | --- |
| ~VideoDecoder() |  |
| InitDecode | 初始化解码器 |
| Decode | 解码图像 |
| RegisterDecodeCompleteCallback | 注册解码回调对象 |
| Release | 释放解码器实例 |

#WebRTC #CUDA  #视频编解码 