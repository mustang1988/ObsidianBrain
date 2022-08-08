---
---
# VideoDecoder
```ad-tldr
title: 接口声明
collapse: open
~~~cpp
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
~~~
```

## 核心方法
### InitDecode
用于初始化解码器, 在创建PeerConnectionFactory对象时, WebRTC会调用此函数

此函数内需要对解码器实例创建前对相关依赖进行初始化

### Decode
解码WebRTC接收到的被编码的图像

### RegisterDecodeCompleteCallback
注册解码回调函数实例, 解码回调函数的实例由WebRTC传入, 可以自定义回调函数类, 一般情况下并不需要

需要在自定义的VideoDecoder类中, 维护一个DecodedImageCallback类型的引用, 在Decode函数直接结束后, 调用该引用的Decode函数将解码后的VideoFrame对象放入其中, 供后续WebRTC流程访问

### Release
解码器释放时由WebRTC调用, 用于释放相关依赖, 可以空实现此函数, 资源和依赖释放工作可以在VideoDecoder的析构函数中执行, 某些需要立即释放的资源还是建议放在此函数中, 例如: 清空解码队列和渲染队列, 以防客户机断开连接后, 继续渲染解码后的画面, 内存拷贝到无效指针的问题.

### PrefersLateDecoding
当此函数返回true时, 允许帧排队等待解码

### ImplementationName
该函数的返回一个解码示例的名字, 无特别作用, 可以不实现此函数



#WebRTC/Source/Core/Interface 