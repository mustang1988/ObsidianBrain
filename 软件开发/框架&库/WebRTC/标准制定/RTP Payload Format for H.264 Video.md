---
annotation-target: "[[rfc6184.txt.pdf]]"
---


>%%
>```annotation-json
>{"created":"2022-08-22T01:14:04.787Z","text":"profile-level-id 参数:\n16进制字符串, 包含以下3个部分\n- profile_idc\n- profile-iop\n- level_idc","updated":"2022-08-22T01:14:04.787Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":93301,"end":93317},{"type":"TextQuoteSelector","exact":"profile-level-id","prefix":"one   OPTIONAL parameters:      ","suffix":":         A base16 [7] (hexadeci"}]}]}
>```
>%%
>*%%PREFIX%%one   OPTIONAL parameters:%%HIGHLIGHT%% ==profile-level-id== %%POSTFIX%%:         A base16 [7] (hexadeci*
>%%LINK%%[[#^51wv6z303om|show annotation]]
>%%COMMENT%%
>profile-level-id 参数:
>16进制字符串, 包含以下3个部分
>- profile_idc
>- profile-iop
>- level_idc
>%%TAGS%%
>#profile-level-id
^51wv6z303om


>%%
>```annotation-json
>{"created":"2022-08-22T01:16:40.831Z","text":"profile-level-id 参数用于**兼容性检查**或**会话设置**时\n表示的profile子集同时支持发送和接收","updated":"2022-08-22T01:16:40.831Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":98375,"end":98621},{"type":"TextQuoteSelector","exact":"If the profile-level-id parameter is used for capability         exchange or session setup, it indicates the subset of coding         tools, which is equal to the default sub-profile, that the         codec supports for both receiving and sending","prefix":"ideo           May 2011         ","suffix":".  If max-recv-         level is"}]}]}
>```
>%%
>*%%PREFIX%%ideo           May 2011%%HIGHLIGHT%% ==If the profile-level-id parameter is used for capability         exchange or session setup, it indicates the subset of coding         tools, which is equal to the default sub-profile, that the         codec supports for both receiving and sending== %%POSTFIX%%.  If max-recv-         level is*
>%%LINK%%[[#^mtx8576s9s|show annotation]]
>%%COMMENT%%
>profile-level-id 参数用于**兼容性检查**或**会话设置**时
>表示的profile子集同时支持发送和接收
>%%TAGS%%
>#profile-level-id
^mtx8576s9s


>%%
>```annotation-json
>{"created":"2022-08-22T01:19:11.993Z","text":"max-recv-level\n如果有提供此参数, 则此参数表示编解码器在接收端支持的最高level, 否则支持的最高level由 profile-level-id 参数中指定的值为其默认值, 无论发送端还是接收端, 所支持的level都应小于等于最高level的值, 且最高level的值也应被支持","updated":"2022-08-22T01:19:11.993Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":98624,"end":99016},{"type":"TextQuoteSelector","exact":"If max-recv-         level is not present, the default level from profile-level-id         indicates the highest level the codec wishes to support.  If         max-recv-level is present, it indicates the highest level the         codec supports for receiving.  For either receiving or sending,         all levels that are lower than the highest level supported MUST         also be supported.","prefix":"or both receiving and sending.  ","suffix":"            Informative note: Ca"}]}]}
>```
>%%
>*%%PREFIX%%or both receiving and sending.%%HIGHLIGHT%% ==If max-recv-         level is not present, the default level from profile-level-id         indicates the highest level the codec wishes to support.  If         max-recv-level is present, it indicates the highest level the         codec supports for receiving.  For either receiving or sending,         all levels that are lower than the highest level supported MUST         also be supported.== %%POSTFIX%%Informative note: Ca*
>%%LINK%%[[#^4fjprwo3vlg|show annotation]]
>%%COMMENT%%
>max-recv-level
>如果有提供此参数, 则此参数表示编解码器在接收端支持的最高level, 否则支持的最高level由 profile-level-id 参数中指定的值为其默认值, 无论发送端还是接收端, 所支持的level都应小于等于最高level的值, 且最高level的值也应被支持
>%%TAGS%%
>#profile-level-id, #max-recv-level
^4fjprwo3vlg


>%%
>```annotation-json
>{"created":"2022-08-22T01:25:29.600Z","text":"如果未提供 profile-level-id 参数\nBaseline Profile + Level 1 将会被设置为其默认的值","updated":"2022-08-22T01:25:29.600Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":100041,"end":100166},{"type":"TextQuoteSelector","exact":"If no profile-level-id is present, the Baseline profile,         without additional constraints at Level 1, MUST be inferred.","prefix":"quivalent combinations.         ","suffix":"      max-recv-level:         Th"}]}]}
>```
>%%
>*%%PREFIX%%quivalent combinations.%%HIGHLIGHT%% ==If no profile-level-id is present, the Baseline profile,         without additional constraints at Level 1, MUST be inferred.== %%POSTFIX%%max-recv-level:         Th*
>%%LINK%%[[#^tfxepmq368|show annotation]]
>%%COMMENT%%
>如果未提供 profile-level-id 参数
>Baseline Profile + Level 1 将会被设置为其默认的值
>%%TAGS%%
>
^tfxepmq368


>%%
>```annotation-json
>{"created":"2022-08-22T01:27:56.119Z","text":"max-recv-level\n当接收端支持的最高level不高于 profile-level-id 中指定的默认level时, **一定不要**设置此参数","updated":"2022-08-22T01:27:56.119Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":101126,"end":101249},{"type":"TextQuoteSelector","exact":"max-recv-level MUST NOT be present if the highest level the         receiver supports is not higher than the default level.","prefix":"cv-level divided by 10.         ","suffix":"Wang, et al.                 Sta"}]}]}
>```
>%%
>*%%PREFIX%%cv-level divided by 10.%%HIGHLIGHT%% ==max-recv-level MUST NOT be present if the highest level the         receiver supports is not higher than the default level.== %%POSTFIX%%Wang, et al.                 Sta*
>%%LINK%%[[#^83nps4dzifd|show annotation]]
>%%COMMENT%%
>max-recv-level
>当接收端支持的最高level不高于 profile-level-id 中指定的默认level时, **一定不要**设置此参数
>%%TAGS%%
>#max-recv-level
^83nps4dzifd


>%%
>```annotation-json
>{"created":"2022-08-22T01:33:08.641Z","text":"max-mbps\nMaximum Marcroblock Per Second\n一个整数数值参数, 表示最大宏块处理速度, 单位: 宏块/秒","updated":"2022-08-22T01:33:08.641Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":103861,"end":103869},{"type":"TextQuoteSelector","exact":"max-mbps","prefix":"ecified profile and level.      ","suffix":": The value of max-mbps is an in"}]}]}
>```
>%%
>*%%PREFIX%%ecified profile and level.%%HIGHLIGHT%% ==max-mbps== %%POSTFIX%%: The value of max-mbps is an in*
>%%LINK%%[[#^cj7pyjh9dfw|show annotation]]
>%%COMMENT%%
>max-mbps
>Maximum Marcroblock Per Second
>一个整数数值参数, 表示最大宏块处理速度, 单位: 宏块/秒
>%%TAGS%%
>#max-mbps
^cj7pyjh9dfw


>%%
>```annotation-json
>{"created":"2022-08-22T01:34:46.312Z","text":"max-smbps\nMaximum Static Marcroblock Per Second \n一个整数数值参数, 表示最大静态宏块处理速度, 单位: 静态宏块/秒","updated":"2022-08-22T01:34:46.312Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":105008,"end":105017},{"type":"TextQuoteSelector","exact":"max-smbps","prefix":"he signaled highest level.      ","suffix":": The value of max-smbps is an i"}]}]}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-smbps== %%POSTFIX%%: The value of max-smbps is an i*
>%%LINK%%[[#^xvemf2kl84|show annotation]]
>%%COMMENT%%
>max-smbps
>Maximum Static Marcroblock Per Second 
>一个整数数值参数, 表示最大静态宏块处理速度, 单位: 静态宏块/秒
>%%TAGS%%
>#max-smbps
^xvemf2kl84


>%%
>```annotation-json
>{"created":"2022-08-22T01:37:04.085Z","text":"max-fs\nMaximum Frame Size\n一个整数数值参数, 表示支持的最大帧尺寸, 单位: 宏块","updated":"2022-08-22T01:37:04.085Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":106688,"end":106694},{"type":"TextQuoteSelector","exact":"max-fs","prefix":"he signaled highest level.      ","suffix":": The value of max-fs is an inte"}]}]}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-fs== %%POSTFIX%%: The value of max-fs is an inte*
>%%LINK%%[[#^x2svp7xsuco|show annotation]]
>%%COMMENT%%
>max-fs
>Maximum Frame Size
>一个整数数值参数, 表示支持的最大帧尺寸, 单位: 宏块
>%%TAGS%%
>#max-fs
^x2svp7xsuco


>%%
>```annotation-json
>{"created":"2022-08-22T01:38:56.244Z","text":"max-cpb\nMaximum Coded Picture Buffer\n一个整数数值参数, 表示最大编码图片缓冲区大小\n单位:\n- 1000bit, VCL HRD\n- 1200bit, NAL HRD","updated":"2022-08-22T01:38:56.244Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":107788,"end":107795},{"type":"TextQuoteSelector","exact":"max-cpb","prefix":"he signaled highest level.      ","suffix":": The value of max-cpb is an int"}]}]}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-cpb== %%POSTFIX%%: The value of max-cpb is an int*
>%%LINK%%[[#^feyb95i8xrd|show annotation]]
>%%COMMENT%%
>max-cpb
>Maximum Coded Picture Buffer
>一个整数数值参数, 表示最大编码图片缓冲区大小
>单位:
>- 1000bit, VCL HRD
>- 1200bit, NAL HRD
>%%TAGS%%
>#max-cpb
^feyb95i8xrd



>%%
>```annotation-json
>{"created":"2022-08-22T01:43:49.142Z","text":"max-dpb\nMaximum Decoded Picture Buffer\n一个整数数值参数, 表示最大解码图片缓冲区大小, 单位: 8/3 宏块","updated":"2022-08-22T01:43:49.142Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":110312,"end":110319},{"type":"TextQuoteSelector","exact":"max-dpb","prefix":"4 Video           May 2011      ","suffix":": The value of max-dpb is an int"}]}]}
>```
>%%
>*%%PREFIX%%4 Video           May 2011%%HIGHLIGHT%% ==max-dpb== %%POSTFIX%%: The value of max-dpb is an int*
>%%LINK%%[[#^a3k3god9ls|show annotation]]
>%%COMMENT%%
>max-dpb
>Maximum Decoded Picture Buffer
>一个整数数值参数, 表示最大解码图片缓冲区大小, 单位: 8/3 宏块
>%%TAGS%%
>#max-dpb
^a3k3god9ls


>%%
>```annotation-json
>{"created":"2022-08-22T01:45:08.497Z","text":"max-br\nMaximum Bit Rate\n一个整数数值参数, 表示最大视频码率\n单位:\n1000bit/秒, VCL HRD\n1200bit/秒, NAL HRD","updated":"2022-08-22T01:45:08.497Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":113110,"end":113116},{"type":"TextQuoteSelector","exact":"max-br","prefix":"4 Video           May 2011      ","suffix":": The value of max-br is an inte"}]}]}
>```
>%%
>*%%PREFIX%%4 Video           May 2011%%HIGHLIGHT%% ==max-br== %%POSTFIX%%: The value of max-br is an inte*
>%%LINK%%[[#^x6dggoz2xrh|show annotation]]
>%%COMMENT%%
>max-br
>Maximum Bit Rate
>一个整数数值参数, 表示最大视频码率
>单位:
>1000bit/秒, VCL HRD
>1200bit/秒, NAL HRD
>%%TAGS%%
>#max-br
^x6dggoz2xrh


>%%
>```annotation-json
>{"created":"2022-08-22T01:48:16.545Z","text":"redundant-pic-cap\nRedundant Picture Capabilities\nBoolean 类型值参数, 可选值为0 或1, 表示接收端不尝试使用冗余编码图像来纠正错误解码的主编码图像\n此时, 发送端应避免冗余编码图像\n反之, 接收端会尝试使用冗余编码图像来纠正错误解码的主编码图像\n此时发送端不用特别注意\n此参数未设置时, 默认值为0","updated":"2022-08-22T01:48:16.545Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":115884,"end":115901},{"type":"TextQuoteSelector","exact":"redundant-pic-cap","prefix":"      control constraints.      ","suffix":":         This parameter signals"}]}]}
>```
>%%
>*%%PREFIX%%control constraints.%%HIGHLIGHT%% ==redundant-pic-cap== %%POSTFIX%%:         This parameter signals*
>%%LINK%%[[#^si11mmw0j0b|show annotation]]
>%%COMMENT%%
>redundant-pic-cap
>Redundant Picture Capabilities
>Boolean 类型值参数, 可选值为0 或1, 表示接收端不尝试使用冗余编码图像来纠正错误解码的主编码图像
>此时, 发送端应避免冗余编码图像
>反之, 接收端会尝试使用冗余编码图像来纠正错误解码的主编码图像
>此时发送端不用特别注意
>此参数未设置时, 默认值为0
>%%TAGS%%
>#redundant-pic-cap
^si11mmw0j0b
