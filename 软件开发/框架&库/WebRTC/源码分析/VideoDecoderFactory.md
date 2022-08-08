---
---
# VideoDecoderFactory
```ad-tldr
title: 接口声明
collapse: open
~~~cpp
// WebRTC\src\api\video_codecs\video_decoder_factory.h
class RTC_EXPORT VideoDecoderFactory {
  public:
    virtual std::vector<SdpVideoFormat> GetSupportedFormats() const = 0;
    virtual std::unique_ptr<VideoDecoder> CreateVideoDecoder(const SdpVideoFormat& format) = 0;
    virtual std::unique_ptr<VideoDecoder> LegacyCreateVideoDecoder(const SdpVideoFormat& format,const std::string& receive_stream_id);
    virtual ~VideoDecoderFactory() {}
};
~~~
```

## 核心方法
```ad-quote
title: std::vector<SdpVideoFormat> GetSupportedFormats()
collapse: open
用于获取解码器的解码能力, 返回支持解码的格式信息组成的vector
```

```ad-quote
title: std::unique_ptr<VideoDecoder> CreateVideoDecoder(const SdpVideoFormat& format)
collapse: open
用于创建解码器实例, 返回解码器实例的unique_ptr指针
```

```ad-quote
title: ~VideoDecoderFactory()
collapse: open
析构函数, 一般不需要重写此函数
```

```ad-quote
title: std::unique_ptr<VideoDecoder> LegacyCreateVideoDecoder(const SdpVideoFormat& format,const std::string& receive_stream_id)
collapse: open
旧版本遗留函数, ==官方不建议重写或调用此函数==
```

#WebRTC/Source/Core/Interface 