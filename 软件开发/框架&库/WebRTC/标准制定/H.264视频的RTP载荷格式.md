---
annotation-target: "[[rfc6184.txt.pdf]]"
---


>%%
>```annotation-json
>{"text":"profile-level-id 参数:\n16进制字符串, 包含以下3个部分\n- profile_idc\n- profile-iop\n- level_idc\n\n例如\n\nprofile-level-id值 42e01f\n- profile_idc -> 42, 表示该流是Baseline Profile 的子集\n- profile-iop -> e0, 转换为二进制: 1110 0000, 表示该流是Baseline Profile 下的 Constrainted Baseline 子集\n- level_idc -> if, 转换为十进制: 31, 表示该流使用 Level 3.1\n\n又例如\n\nprofile-level-id 值 4d001f\n- profile_idc -> 4d, 对应 Main Profile\n- profile-iop -> 00, 转换为二进制为: 00000000, 对应Main Profile\n- level_idc -> 1f, 转换为十进制为: 31, 表示 Level 3.1","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":93301,"end":93317},{"type":"TextQuoteSelector","exact":"profile-level-id","prefix":"one   OPTIONAL parameters:","suffix":":         A base16 [7] (hexadeci"}]}],"created":"2022-08-22T01:14:04.787Z","updated":"2022-08-22T01:14:04.787Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
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
>
>例如
>
>profile-level-id值 42e01f
>- profile_idc -> 42, 表示该流是Baseline Profile 的子集
>- profile-iop -> e0, 转换为二进制: 1110 0000, 表示该流是Baseline Profile 下的 Constrainted Baseline 子集
>- level_idc -> if, 转换为十进制: 31, 表示该流使用 Level 3.1
>
>又例如
>
>profile-level-id 值 4d001f
>- profile_idc -> 4d, 对应 Main Profile
>- profile-iop -> 00, 转换为二进制为: 00000000, 对应Main Profile
>- level_idc -> 1f, 转换为十进制为: 31, 表示 Level 3.1
>%%TAGS%%
>#profile-level-id
^51wv6z303om


>%%
>```annotation-json
>{"text":"profile-level-id \n参数用于**兼容性检查**或**会话设置**时\n\n表示的profile子集同时支持发送和接收","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":98375,"end":98621},{"type":"TextQuoteSelector","exact":"If the profile-level-id parameter is used for capability         exchange or session setup, it indicates the subset of coding         tools, which is equal to the default sub-profile, that the         codec supports for both receiving and sending","prefix":"ideo           May 2011","suffix":".  If max-recv-         level is"}]}],"created":"2022-08-22T01:16:40.831Z","updated":"2022-08-22T01:16:40.831Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%ideo           May 2011%%HIGHLIGHT%% ==If the profile-level-id parameter is used for capability         exchange or session setup, it indicates the subset of coding         tools, which is equal to the default sub-profile, that the         codec supports for both receiving and sending== %%POSTFIX%%.  If max-recv-         level is*
>%%LINK%%[[#^mtx8576s9s|show annotation]]
>%%COMMENT%%
>profile-level-id 
>参数用于**兼容性检查**或**会话设置**时
>
>表示的profile子集同时支持发送和接收
>%%TAGS%%
>#profile-level-id
^mtx8576s9s


>%%
>```annotation-json
>{"text":"max-recv-level\n\n如果有提供此参数, 则此参数表示编解码器在接收端支持的最高level, 否则支持的最高level由 profile-level-id 参数中指定的值为其默认值, 无论发送端还是接收端, 所支持的level都应小于等于最高level的值, 且最高level的值也应被支持","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":98624,"end":99016},{"type":"TextQuoteSelector","exact":"If max-recv-         level is not present, the default level from profile-level-id         indicates the highest level the codec wishes to support.  If         max-recv-level is present, it indicates the highest level the         codec supports for receiving.  For either receiving or sending,         all levels that are lower than the highest level supported MUST         also be supported.","prefix":"or both receiving and sending.","suffix":"Informative note: Ca"}]}],"created":"2022-08-22T01:19:11.993Z","updated":"2022-08-22T01:19:11.993Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%or both receiving and sending.%%HIGHLIGHT%% ==If max-recv-         level is not present, the default level from profile-level-id         indicates the highest level the codec wishes to support.  If         max-recv-level is present, it indicates the highest level the         codec supports for receiving.  For either receiving or sending,         all levels that are lower than the highest level supported MUST         also be supported.== %%POSTFIX%%Informative note: Ca*
>%%LINK%%[[#^4fjprwo3vlg|show annotation]]
>%%COMMENT%%
>max-recv-level
>
>如果有提供此参数, 则此参数表示编解码器在接收端支持的最高level, 否则支持的最高level由 profile-level-id 参数中指定的值为其默认值, 无论发送端还是接收端, 所支持的level都应小于等于最高level的值, 且最高level的值也应被支持
>%%TAGS%%
>#profile-level-id, #max-recv-level
^4fjprwo3vlg


>%%
>```annotation-json
>{"text":"如果未提供 profile-level-id 参数\n\nBaseline Profile + Level 1 将会被设置为其默认的值","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":100041,"end":100166},{"type":"TextQuoteSelector","exact":"If no profile-level-id is present, the Baseline profile,         without additional constraints at Level 1, MUST be inferred.","prefix":"quivalent combinations.","suffix":"max-recv-level:         Th"}]}],"created":"2022-08-22T01:25:29.600Z","updated":"2022-08-22T01:25:29.600Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%quivalent combinations.%%HIGHLIGHT%% ==If no profile-level-id is present, the Baseline profile,         without additional constraints at Level 1, MUST be inferred.== %%POSTFIX%%max-recv-level:         Th*
>%%LINK%%[[#^tfxepmq368|show annotation]]
>%%COMMENT%%
>如果未提供 profile-level-id 参数
>
>Baseline Profile + Level 1 将会被设置为其默认的值
>%%TAGS%%
>
^tfxepmq368


>%%
>```annotation-json
>{"text":"max-recv-level\n\nMaximum Receiver Level\n\n用于设置接收端支持的最高level, 此level需要被支持和达到\n\n注意: 当接收端支持的最高level不高于 profile-level-id 中指定的默认level时, **一定不要**设置此参数","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":101126,"end":101249},{"type":"TextQuoteSelector","exact":"max-recv-level MUST NOT be present if the highest level the         receiver supports is not higher than the default level.","prefix":"cv-level divided by 10.","suffix":"Wang, et al.                 Sta"}]}],"created":"2022-08-22T01:27:56.119Z","updated":"2022-08-22T01:27:56.119Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%cv-level divided by 10.%%HIGHLIGHT%% ==max-recv-level MUST NOT be present if the highest level the         receiver supports is not higher than the default level.== %%POSTFIX%%Wang, et al.                 Sta*
>%%LINK%%[[#^83nps4dzifd|show annotation]]
>%%COMMENT%%
>max-recv-level
>
>Maximum Receiver Level
>
>用于设置接收端支持的最高level, 此level需要被支持和达到
>
>注意: 当接收端支持的最高level不高于 profile-level-id 中指定的默认level时, **一定不要**设置此参数
>%%TAGS%%
>#max-recv-level
^83nps4dzifd


>%%
>```annotation-json
>{"text":"max-mbps\n\nMaximum Marcroblock Per Second\n\n一个整数数值参数, 表示最大宏块处理速度, 单位: 宏块/秒","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":103861,"end":103869},{"type":"TextQuoteSelector","exact":"max-mbps","prefix":"ecified profile and level.","suffix":": The value of max-mbps is an in"}]}],"created":"2022-08-22T01:33:08.641Z","updated":"2022-08-22T01:33:08.641Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%ecified profile and level.%%HIGHLIGHT%% ==max-mbps== %%POSTFIX%%: The value of max-mbps is an in*
>%%LINK%%[[#^cj7pyjh9dfw|show annotation]]
>%%COMMENT%%
>max-mbps
>
>Maximum Marcroblock Per Second
>
>一个整数数值参数, 表示最大宏块处理速度, 单位: 宏块/秒
>%%TAGS%%
>#max-mbps
^cj7pyjh9dfw


>%%
>```annotation-json
>{"text":"max-smbps\n\nMaximum Static Marcroblock Per Second \n\n一个整数数值参数, 表示最大静态宏块处理速度, 单位: 静态宏块/秒","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":105008,"end":105017},{"type":"TextQuoteSelector","exact":"max-smbps","prefix":"he signaled highest level.","suffix":": The value of max-smbps is an i"}]}],"created":"2022-08-22T01:34:46.312Z","updated":"2022-08-22T01:34:46.312Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-smbps== %%POSTFIX%%: The value of max-smbps is an i*
>%%LINK%%[[#^xvemf2kl84|show annotation]]
>%%COMMENT%%
>max-smbps
>
>Maximum Static Marcroblock Per Second 
>
>一个整数数值参数, 表示最大静态宏块处理速度, 单位: 静态宏块/秒
>%%TAGS%%
>#max-smbps
^xvemf2kl84


>%%
>```annotation-json
>{"text":"max-fs\n\nMaximum Frame Size\n\n一个整数数值参数, 表示支持的最大帧尺寸, 单位: 宏块","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":106688,"end":106694},{"type":"TextQuoteSelector","exact":"max-fs","prefix":"he signaled highest level.","suffix":": The value of max-fs is an inte"}]}],"created":"2022-08-22T01:37:04.085Z","updated":"2022-08-22T01:37:04.085Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-fs== %%POSTFIX%%: The value of max-fs is an inte*
>%%LINK%%[[#^x2svp7xsuco|show annotation]]
>%%COMMENT%%
>max-fs
>
>Maximum Frame Size
>
>一个整数数值参数, 表示支持的最大帧尺寸, 单位: 宏块
>%%TAGS%%
>#max-fs
^x2svp7xsuco


>%%
>```annotation-json
>{"text":"max-cpb\n\nMaximum Coded Picture Buffer\n\n一个整数数值参数, 表示最大编码图片缓冲区大小\n\n单位:\n- 在 VCL HRD 中为, 1000bit\n- 在 NAL HRD 中为, 1200bit","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":107788,"end":107795},{"type":"TextQuoteSelector","exact":"max-cpb","prefix":"he signaled highest level.","suffix":": The value of max-cpb is an int"}]}],"created":"2022-08-22T01:38:56.244Z","updated":"2022-08-22T01:38:56.244Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%he signaled highest level.%%HIGHLIGHT%% ==max-cpb== %%POSTFIX%%: The value of max-cpb is an int*
>%%LINK%%[[#^feyb95i8xrd|show annotation]]
>%%COMMENT%%
>max-cpb
>
>Maximum Coded Picture Buffer
>
>一个整数数值参数, 表示最大编码图片缓冲区大小
>
>单位:
>- 在 VCL HRD 中为, 1000bit
>- 在 NAL HRD 中为, 1200bit
>%%TAGS%%
>#max-cpb
^feyb95i8xrd



>%%
>```annotation-json
>{"text":"max-dpb\n\nMaximum Decoded Picture Buffer\n\n一个整数数值参数, 表示最大解码图片缓冲区大小, 单位: 8/3 宏块","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":110312,"end":110319},{"type":"TextQuoteSelector","exact":"max-dpb","prefix":"4 Video           May 2011","suffix":": The value of max-dpb is an int"}]}],"created":"2022-08-22T01:43:49.142Z","updated":"2022-08-22T01:43:49.142Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%4 Video           May 2011%%HIGHLIGHT%% ==max-dpb== %%POSTFIX%%: The value of max-dpb is an int*
>%%LINK%%[[#^a3k3god9ls|show annotation]]
>%%COMMENT%%
>max-dpb
>
>Maximum Decoded Picture Buffer
>
>一个整数数值参数, 表示最大解码图片缓冲区大小, 单位: 8/3 宏块
>%%TAGS%%
>#max-dpb
^a3k3god9ls


>%%
>```annotation-json
>{"text":"max-br\n\nMaximum Bit Rate\n\n一个整数数值参数, 表示最大视频码率\n\n单位:\n- 在 VCL HRD 中为, 1000bit/秒\n- 在 NAL HRD 中为, 1200bit/秒","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":113110,"end":113116},{"type":"TextQuoteSelector","exact":"max-br","prefix":"4 Video           May 2011","suffix":": The value of max-br is an inte"}]}],"created":"2022-08-22T01:45:08.497Z","updated":"2022-08-22T01:45:08.497Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%4 Video           May 2011%%HIGHLIGHT%% ==max-br== %%POSTFIX%%: The value of max-br is an inte*
>%%LINK%%[[#^x6dggoz2xrh|show annotation]]
>%%COMMENT%%
>max-br
>
>Maximum Bit Rate
>
>一个整数数值参数, 表示最大视频码率
>
>单位:
>- 在 VCL HRD 中为, 1000bit/秒
>- 在 NAL HRD 中为, 1200bit/秒
>%%TAGS%%
>#max-br
^x6dggoz2xrh


>%%
>```annotation-json
>{"text":"redundant-pic-cap\n\nRedundant Picture Capabilities\n\nBoolean 类型值参数, 可选值为0 或1\n- 0, 表示接收端不尝试使用冗余编码图像来纠正错误解码的主编码图像, 此时, 发送端应避免冗余编码图像.\n- 1, 表示接收端会尝试使用冗余编码图像来纠正错误解码的主编码图像, 此时发送端不用特别注意\n\n此参数未设置时, 默认值为0","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":115884,"end":115901},{"type":"TextQuoteSelector","exact":"redundant-pic-cap","prefix":"control constraints.","suffix":":         This parameter signals"}]}],"created":"2022-08-22T01:48:16.545Z","updated":"2022-08-22T01:48:16.545Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%control constraints.%%HIGHLIGHT%% ==redundant-pic-cap== %%POSTFIX%%:         This parameter signals*
>%%LINK%%[[#^si11mmw0j0b|show annotation]]
>%%COMMENT%%
>redundant-pic-cap
>
>Redundant Picture Capabilities
>
>Boolean 类型值参数, 可选值为0 或1
>- 0, 表示接收端不尝试使用冗余编码图像来纠正错误解码的主编码图像, 此时, 发送端应避免冗余编码图像.
>- 1, 表示接收端会尝试使用冗余编码图像来纠正错误解码的主编码图像, 此时发送端不用特别注意
>
>此参数未设置时, 默认值为0
>%%TAGS%%
>#redundant-pic-cap
^si11mmw0j0b


>%%
>```annotation-json
>{"created":"2022-08-22T02:06:14.550Z","text":"VCL","updated":"2022-08-22T02:06:14.550Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":9593,"end":9617},{"type":"TextQuoteSelector","exact":"Video Coding Layer (VCL)","prefix":"ually distinguishes between   a ","suffix":" and a Network Abstraction Layer"}]}]}
>```
>%%
>*%%PREFIX%%ually distinguishes between   a%%HIGHLIGHT%% ==Video Coding Layer (VCL)== %%POSTFIX%%and a Network Abstraction Layer*
>%%LINK%%[[#^dz1m41ma0uf|show annotation]]
>%%COMMENT%%
>VCL
>%%TAGS%%
>#VCL
^dz1m41ma0uf


>%%
>```annotation-json
>{"created":"2022-08-22T02:06:28.509Z","text":"NAL","updated":"2022-08-22T02:06:28.509Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":9624,"end":9655},{"type":"TextQuoteSelector","exact":"Network Abstraction Layer (NAL)","prefix":" Video Coding Layer (VCL) and a ","suffix":".   The VCL contains the signal "}]}]}
>```
>%%
>*%%PREFIX%%Video Coding Layer (VCL) and a%%HIGHLIGHT%% ==Network Abstraction Layer (NAL)== %%POSTFIX%%.   The VCL contains the signal*
>%%LINK%%[[#^7vyp5ugdy5m|show annotation]]
>%%COMMENT%%
>NAL
>%%TAGS%%
>#NAL
^7vyp5ugdy5m


>%%
>```annotation-json
>{"created":"2022-08-22T02:08:06.949Z","text":"VCL\nVCL包含\n- 编解码器的信号处理功能\n- 转换、量化和运动补偿预测等机制\n- 循环滤波器","updated":"2022-08-22T02:08:06.949Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":9659,"end":9826},{"type":"TextQuoteSelector","exact":"The VCL contains the signal processing functionality of the codec;   mechanisms such as transform, quantization, and motion-compensated   prediction; and a loop filter","prefix":"work Abstraction Layer (NAL).   ","suffix":".  It follows the general concep"}]}]}
>```
>%%
>*%%PREFIX%%work Abstraction Layer (NAL).%%HIGHLIGHT%% ==The VCL contains the signal processing functionality of the codec;   mechanisms such as transform, quantization, and motion-compensated   prediction; and a loop filter== %%POSTFIX%%.  It follows the general concep*
>%%LINK%%[[#^8ddck7ocz3j|show annotation]]
>%%COMMENT%%
>VCL
>VCL包含
>- 编解码器的信号处理功能
>- 转换、量化和运动补偿预测等机制
>- 循环滤波器
>%%TAGS%%
>#VCL
^8ddck7ocz3j


>%%
>```annotation-json
>{"created":"2022-08-22T02:09:47.471Z","text":"NAL\nNAL将VCL编码器的切片输出封装到网络抽象层单元中，该网络抽象层单元适用于分组网络传输或在面向分组的多路环境中使用","updated":"2022-08-22T02:09:47.471Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":10564,"end":10765},{"type":"TextQuoteSelector","exact":"The NAL encoder encapsulates the slice output of the VCL encoder into   Network Abstraction Layer Units (NALUs), which are suitable for   transmission over packet networks or for use in packet-oriented","prefix":"mation is provided   in [10].   ","suffix":"Wang, et al.                 Sta"}]}]}
>```
>%%
>*%%PREFIX%%mation is provided   in [10].%%HIGHLIGHT%% ==The NAL encoder encapsulates the slice output of the VCL encoder into   Network Abstraction Layer Units (NALUs), which are suitable for   transmission over packet networks or for use in packet-oriented== %%POSTFIX%%Wang, et al.                 Sta*
>%%LINK%%[[#^c6q547csunj|show annotation]]
>%%COMMENT%%
>NAL
>NAL将VCL编码器的切片输出封装到网络抽象层单元中，该网络抽象层单元适用于分组网络传输或在面向分组的多路环境中使用
>%%TAGS%%
>#NAL
^c6q547csunj


>%%
>```annotation-json
>{"text":"level-asymmetry-allowed\n\nBoolean 类型值参数, 可选值为 0 或 1\n\n表示是否在 Offer/Anwser 模型中是否允许level的水平不对称\n\n- 0, 表示禁止level的水平不对称, 即发送方和接收方必须使用相同的level进行编解码\n- 1, 表示允许level的水平不对称, 发送方和接收方可以使用不同的level进行编解码\n\n当未设置此参数时, 此参数默认值为 0","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":124909,"end":124932},{"type":"TextQuoteSelector","exact":"level-asymmetry-allowed","prefix":"only, or it MAY send both.","suffix":":         This parameter MAY be"}]}],"created":"2022-08-22T02:31:32.106Z","updated":"2022-08-22T02:31:32.106Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%only, or it MAY send both.%%HIGHLIGHT%% ==level-asymmetry-allowed== %%POSTFIX%%:         This parameter MAY be*
>%%LINK%%[[#^hqtsmoks1l|show annotation]]
>%%COMMENT%%
>level-asymmetry-allowed
>
>Boolean 类型值参数, 可选值为 0 或 1
>
>表示是否在 Offer/Anwser 模型中是否允许level的水平不对称
>
>- 0, 表示禁止level的水平不对称, 即发送方和接收方必须使用相同的level进行编解码
>- 1, 表示允许level的水平不对称, 发送方和接收方可以使用不同的level进行编解码
>
>当未设置此参数时, 此参数默认值为 0
>%%TAGS%%
>#level-asymmetry-allowed
^hqtsmoks1l


>%%
>```annotation-json
>{"text":"packetization-mode\n\n此为整数枚举类型值参数, 参数可选值为 0, 1, 2\n\n用于设置画面信息的分包模式\n\n- 0, 必须使用单 NAL 模式\n- 1, 必须使用非交错模式, 即逐行扫描\n- 2, 必须使用交错模式, 即隔行扫描\n\n当此参数未设置时, 此参数默认值为 0","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":125865,"end":125883},{"type":"TextQuoteSelector","exact":"packetization-mode","prefix":"the opposite direction.","suffix":":         This parameter signals"}]}],"created":"2022-08-22T02:35:47.714Z","updated":"2022-08-22T02:35:47.714Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}
>```
>%%
>*%%PREFIX%%the opposite direction.%%HIGHLIGHT%% ==packetization-mode== %%POSTFIX%%:         This parameter signals*
>%%LINK%%[[#^f8psx7iepns|show annotation]]
>%%COMMENT%%
>packetization-mode
>
>此为整数枚举类型值参数, 参数可选值为 0, 1, 2
>
>用于设置画面信息的分包模式
>
>- 0, 必须使用单 NAL 模式
>- 1, 必须使用非交错模式, 即逐行扫描
>- 2, 必须使用交错模式, 即隔行扫描
>
>当此参数未设置时, 此参数默认值为 0
>%%TAGS%%
>#packetization-mode
^f8psx7iepns


>%%
>```annotation-json
>{"created":"2022-08-22T05:25:39.157Z","text":"sprop-interleaving-depth\n\n此参数指定了RTP包流中按传输顺序排在VCL NAL单元之前、按解码顺序排在VCL NAL单元之后的VCL NAL单元的最大数量\n\n此参数只在 packetization-mode 参数设置为2 即, 逐行扫描模式下才可以设置, 非此模式下 ***一定不要*** 设置此参数\n\n参数取值范围: [0, 32767]\n\n当 packetization-mode 参数值为2时, 此参数 ***必须*** 设置","updated":"2022-08-22T05:25:39.157Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":126786,"end":126810},{"type":"TextQuoteSelector","exact":"sprop-interleaving-depth","prefix":"ange of 0 to 2, inclusive.      ","suffix":":         This parameter MUST NO"}]}]}
>```
>%%
>*%%PREFIX%%ange of 0 to 2, inclusive.%%HIGHLIGHT%% ==sprop-interleaving-depth== %%POSTFIX%%:         This parameter MUST NO*
>%%LINK%%[[#^raz1lctkjob|show annotation]]
>%%COMMENT%%
>sprop-interleaving-depth
>
>此参数指定了RTP包流中按传输顺序排在VCL NAL单元之前、按解码顺序排在VCL NAL单元之后的VCL NAL单元的最大数量
>
>此参数只在 packetization-mode 参数设置为2 即, 逐行扫描模式下才可以设置, 非此模式下 ***一定不要*** 设置此参数
>
>参数取值范围: [0, 32767]
>
>当 packetization-mode 参数值为2时, 此参数 ***必须*** 设置
>%%TAGS%%
>#sprop-interleaving-depth
^raz1lctkjob



>%%
>```annotation-json
>{"created":"2022-08-22T05:39:26.916Z","text":"当设置 level-asymmetry-allowed 参数在offer和anwser中均设置为1时\n\noffer->anwser 方向上, anwser方必须使用anwser方支持的最高等级的level来接收\n\n反过来 anwser->offer 方向上, offer必须使用offer方支持的最高等级的level来接收\n","updated":"2022-08-22T05:39:26.916Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":146691,"end":147083},{"type":"TextQuoteSelector","exact":"level-asymmetry-allowed equals 1 in both the offer and      the answer, and level asymmetry is allowed.  In this case, the      level to use in the offerer-to-answerer direction MUST be equal to      the highest level the answerer supports for receiving, and the      level to use in the answerer-to-offerer direction MUST be equal to      the highest level the offerer supports for receiving","prefix":"       May 2011      Otherwise, ","suffix":".      When level asymmetry is n"}]}]}
>```
>%%
>*%%PREFIX%%May 2011      Otherwise,%%HIGHLIGHT%% ==level-asymmetry-allowed equals 1 in both the offer and      the answer, and level asymmetry is allowed.  In this case, the      level to use in the offerer-to-answerer direction MUST be equal to      the highest level the answerer supports for receiving, and the      level to use in the answerer-to-offerer direction MUST be equal to      the highest level the offerer supports for receiving== %%POSTFIX%%.      When level asymmetry is n*
>%%LINK%%[[#^qs8d1l8cek|show annotation]]
>%%COMMENT%%
>当设置 level-asymmetry-allowed 参数在offer和anwser中均设置为1时
>
>offer->anwser 方向上, anwser方必须使用anwser方支持的最高等级的level来接收
>
>反过来 anwser->offer 方向上, offer必须使用offer方支持的最高等级的level来接收
>
>%%TAGS%%
>#level-asymmetry-allowed
^qs8d1l8cek


>%%
>```annotation-json
>{"created":"2022-08-22T05:42:26.935Z","text":"level-asymmetry-allowed 参数设置为0 或未设置时, level的升级将不被允许, anwser中的level必须等于或低于offer中的默认level值","updated":"2022-08-22T05:42:26.935Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":147090,"end":147267},{"type":"TextQuoteSelector","exact":"When level asymmetry is not allowed, level upgrade is not allowed,      i.e., the default level in the answer MUST be equal to or lower      than the default level in the offer.","prefix":"er supports for receiving.      ","suffix":"   o  The parameters sprop-deint"}]}]}
>```
>%%
>*%%PREFIX%%er supports for receiving.%%HIGHLIGHT%% ==When level asymmetry is not allowed, level upgrade is not allowed,      i.e., the default level in the answer MUST be equal to or lower      than the default level in the offer.== %%POSTFIX%%o  The parameters sprop-deint*
>%%LINK%%[[#^38iie7exk6m|show annotation]]
>%%COMMENT%%
>level-asymmetry-allowed 参数设置为0 或未设置时, level的升级将不被允许, anwser中的level必须等于或低于offer中的默认level值
>%%TAGS%%
>
^38iie7exk6m


>%%
>```annotation-json
>{"created":"2022-08-22T05:50:52.846Z","text":"Anwser 的RTP负载中的类型编号, 必须是在Offer中使用了的, 两者必须保持对称","updated":"2022-08-22T05:50:52.846Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":159801,"end":160112},{"type":"TextQuoteSelector","exact":"To simplify the handling and matching of these configurations, the      same RTP payload type number used in the offer SHOULD also be used      in the answer, as specified in [8].  An answer MUST NOT contain a      payload type number used in the offer unless the configuration is      the same as in the offer.","prefix":"lticast is not changeable.      ","suffix":"   o  Parameter sets received MU"}]}]}
>```
>%%
>*%%PREFIX%%lticast is not changeable.%%HIGHLIGHT%% ==To simplify the handling and matching of these configurations, the      same RTP payload type number used in the offer SHOULD also be used      in the answer, as specified in [8].  An answer MUST NOT contain a      payload type number used in the offer unless the configuration is      the same as in the offer.== %%POSTFIX%%o  Parameter sets received MU*
>%%LINK%%[[#^02rk1oubkc4a|show annotation]]
>%%COMMENT%%
>Anwser 的RTP负载中的类型编号, 必须是在Offer中使用了的, 两者必须保持对称
>%%TAGS%%
>
^02rk1oubkc4a


>%%
>```annotation-json
>{"created":"2022-08-22T06:18:50.503Z","text":"Offer 和 Anwser 端均期望同时发送和接收流的SDP示例","updated":"2022-08-22T06:18:50.503Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":166978,"end":167098},{"type":"TextQuoteSelector","exact":"An SDP Offer/Answer exchange wherein both parties are expected to   both send and receive could look like the following.","prefix":"       May 20118.3.  Examples   ","suffix":"  Only the media-   codec-specif"}]}]}
>```
>%%
>*%%PREFIX%%May 20118.3.  Examples%%HIGHLIGHT%% ==An SDP Offer/Answer exchange wherein both parties are expected to   both send and receive could look like the following.== %%POSTFIX%%Only the media-   codec-specif*
>%%LINK%%[[#^zu94z8958q|show annotation]]
>%%COMMENT%%
>Offer 和 Anwser 端均期望同时发送和接收流的SDP示例
>%%TAGS%%
>
^zu94z8958q


>%%
>```annotation-json
>{"created":"2022-08-22T09:53:14.052Z","text":"sprop-level-parameter-sets\n","updated":"2022-08-22T09:53:14.052Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":119524,"end":119550},{"type":"TextQuoteSelector","exact":"sprop-level-parameter-sets","prefix":"the         default level.      ","suffix":":         This parameter MAY be "}]}]}
>```
>%%
>*%%PREFIX%%the         default level.%%HIGHLIGHT%% ==sprop-level-parameter-sets== %%POSTFIX%%:         This parameter MAY be*
>%%LINK%%[[#^1cov6ipf751|show annotation]]
>%%COMMENT%%
>sprop-level-parameter-sets
>
>%%TAGS%%
>#sprop-level-parameter-sets
^1cov6ipf751



>%%
>```annotation-json
>{"created":"2022-08-23T02:32:48.405Z","text":"当 answer->offer 方向上的 level 等于默认level时\n\n如果在 anwser 的 a=fmtp 行有定义 sprop-parameter-sets 参数, 那么 offer 方**必须**对sprop-parameter-set 中定义的出参数进行准备, 以解码接收到的从anwser 方向送入的NAL流","updated":"2022-08-23T02:32:48.405Z","document":{"title":"Enscript Output","link":[{"href":"urn:x-pdf:9fe515e82966956357a6533c80ddeda6"},{"href":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf"}],"documentFingerprint":"9fe515e82966956357a6533c80ddeda6"},"uri":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","target":[{"source":"vault:/%E5%9B%BE%E7%89%87/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%A1%86%E6%9E%B6&%E5%BA%93/WebRTC/PDF/rfc6184.txt.pdf","selector":[{"type":"TextPositionSelector","start":155181,"end":155477},{"type":"TextQuoteSelector","exact":"When there is a sprop-parameter-sets included in                     the \"a=fmtp\" line in the answer, the offerer MUST                     be prepared to use the parameter sets included in                     the sprop-parameter-sets for decoding the incoming                     NAL unit stream.","prefix":"ng applies.                     ","suffix":"                     When there "}]}]}
>```
>%%
>*%%PREFIX%%ng applies.%%HIGHLIGHT%% ==When there is a sprop-parameter-sets included in                     the "a=fmtp" line in the answer, the offerer MUST                     be prepared to use the parameter sets included in                     the sprop-parameter-sets for decoding the incoming                     NAL unit stream.== %%POSTFIX%%When there*
>%%LINK%%[[#^0bkdom0h6g5d|show annotation]]
>%%COMMENT%%
>当 answer->offer 方向上的 level 等于默认level时
>
>如果在 anwser 的 a=fmtp 行有定义 sprop-parameter-sets 参数, 那么 offer 方**必须**对sprop-parameter-set 中定义的出参数进行准备, 以解码接收到的从anwser 方向送入的NAL流
>%%TAGS%%
>#sprop-parameter-sets
^0bkdom0h6g5d
