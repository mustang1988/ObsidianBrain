
```ad-tldr
title: 8.2.2 Usage with the SDP Offer/Answer Model
collapse: open

原文地址: https://www.rfc-editor.org/rfc/rfc6184.html#section-8.2.2

When H.264 is offered over RTP using SDP in an Offer/Answer model [[8](https://www.rfc-editor.org/rfc/rfc6184.html#ref-8 ""An Offer/Answer Model with Session Description Protocol (SDP)"")]
   for negotiation for unicast usage, the following limitations and
   rules apply:

   o  The parameters identifying a media format configuration for H.264
      are profile-level-id and packetization-mode.  These media format
      configuration parameters (except for the level part of profile-
      level-id) MUST be used symmetrically; that is, the answerer MUST
      either maintain all configuration parameters or remove the media
      format (payload type) completely if one or more of the parameter
      values are not supported.  Note that the level part of profile-
      level-id includes level_idc, and, for indication of Level 1b when
      profile_idc is equal to 66, 77, or 88, bit 4
      (constraint_set3_flag) of profile-iop.  The level part of profile-
      level-id is changeable.

         Informative note: The requirement for symmetric use does not
         apply for the level part of profile-level-id and does not apply
         for the other stream properties and capability parameters.

         Informative note: In H.264 [[1](https://www.rfc-editor.org/rfc/rfc6184.html#ref-1 ""Advanced video coding for generic audiovisual services"")], all the levels except for Level
         1b are equal to the value of level_idc divided by 10.  Level 1b
         is a level higher than Level 1.0 but lower than Level 1.1 and
         is signaled in an ad hoc manner, because the level was

Wang, et al.                 Standards Track                   [Page 58]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

         specified after Level 1.0 and Level 1.1.  For the Baseline,
         Main, and Extended profiles (with profile_idc equal to 66, 77,
         and 88, respectively), Level 1b is indicated by level_idc equal
         to 11 (i.e., same as Level 1.1) and constraint_set3_flag equal
         to 1.  For other profiles, Level 1b is indicated by level_idc
         equal to 9 (but note that Level 1b for these profiles are still
         higher than Level 1, which has level_idc equal to 10 and lower
         than Level 1.1).  In SDP Offer/Answer, an answer to an offer
         may indicate a level equal to or lower than the level indicated
         in the offer.  Due to the ad hoc indication of Level 1b,
         offerers and answerers must check the value of bit 4
         (constraint_set3_flag) of the middle octet of the parameter
         profile-level-id, when profile_idc is equal to 66, 77, or 88
         and level_idc is equal to 11.

      To simplify the handling and matching of these configurations, the
      same RTP payload type number used in the offer SHOULD also be used
      in the answer, as specified in [[8](https://www.rfc-editor.org/rfc/rfc6184.html#ref-8 ""An Offer/Answer Model with Session Description Protocol (SDP)"")].  An answer MUST NOT contain
      the payload type number used in the offer unless the configuration
      is exactly the same as in the offer.

         Informative note: When an offerer receives an answer, it has to
         compare payload types not declared in the offer based on the
         media type (i.e., video/H264) and the above media configuration
         parameters with any payload types it has already declared.
         This will enable it to determine whether the configuration in
         question is new or if it is equivalent to configuration already
         offered, since a different payload type number may be used in
         the answer.

   o  When present, the parameter max-recv-level declares the highest
      level supported for receiving.  In case max-recv-level is not
      present, the highest level supported for receiving is equal to the
      default level indicated by the level part of profile-level-id.
      When present, max-recv-level MUST be higher than the default
      level.

   o  The parameter level-asymmetry-allowed indicates whether level
      asymmetry is allowed.

      If level-asymmetry-allowed is equal to 0 (or not present) in
      either the offer or the answer, level asymmetry is not allowed.
      In this case, the level to use in the direction from the offerer
      to the answerer MUST be the same as the level to use in the
      opposite direction, and the common level to use is equal to the
      lower value of the default level in the offer and the default
      level in the answer.

Wang, et al.                 Standards Track                   [Page 59]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

      Otherwise, level-asymmetry-allowed equals 1 in both the offer and
      the answer, and level asymmetry is allowed.  In this case, the
      level to use in the offerer-to-answerer direction MUST be equal to
      the highest level the answerer supports for receiving, and the
      level to use in the answerer-to-offerer direction MUST be equal to
      the highest level the offerer supports for receiving.

      When level asymmetry is not allowed, level upgrade is not allowed,
      i.e., the default level in the answer MUST be equal to or lower
      than the default level in the offer.

   o  The parameters sprop-deint-buf-req, sprop-interleaving-depth,
      sprop-max-don-diff, and sprop-init-buf-time describe the
      properties of the RTP packet stream that the offerer or answerer
      is sending for the media format configuration.  This differs from
      the normal usage of the Offer/Answer parameters: normally such
      parameters declare the properties of the stream that the offerer
      or the answerer is able to receive.  When dealing with H.264, the
      offerer assumes that the answerer will be able to receive media
      encoded using the configuration being offered.

         Informative note: The above parameters apply for any stream
         sent by a declaring entity with the same configuration; i.e.,
         they are dependent on their source.  Rather than being bound to
         the payload type, the values may have to be applied to another
         payload type when being sent, as they apply for the
         configuration.

   o  The capability parameters max-mbps, max-smbps, max-fs, max-cpb,
      max-dpb, max-br, redundant-pic-cap, max-rcmd-nalu-size, sar-
      understood, and sar-supported MAY be used to declare further
      capabilities of the offerer or answerer for receiving.  These
      parameters MUST NOT be present when the direction attribute is
      "sendonly" and when the parameters describe the limitations of
      what the offerer or answerer accepts for receiving streams.

   o  An offerer has to include the size of the de-interleaving buffer,
      sprop-deint-buf-req, in the offer for an interleaved H.264 stream.
      To enable the offerer and answerer to inform each other about
      their capabilities for de-interleaving buffering in receiving
      streams, both parties are RECOMMENDED to include deint-buf-cap.
      For interleaved streams, it is also RECOMMENDED to consider
      offering multiple payload types with different buffering
      requirements when the capabilities of the receiver are unknown.

   o  The sprop-parameter-sets or sprop-level-parameter-sets parameter,
      when present (included in the "a=fmtp" line of SDP or conveyed
      using the "fmtp" source attribute as specified in [Section 6.3](https://www.rfc-editor.org/rfc/rfc6184.html#section-6.3) of

Wang, et al.                 Standards Track                   [Page 60]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

      [[9](https://www.rfc-editor.org/rfc/rfc6184.html#ref-9 ""Source-Specific Media Attributes in the Session Description Protocol (SDP)"")]), is used for out-of-band transport of parameter sets.
      However, when out-of-band transport of parameter sets is used,
      parameter sets MAY still be additionally transported in-band.

      The answerer MAY use either out-of-band or in-band transport of
      parameter sets for the stream it is sending, regardless of whether
      out-of-band parameter sets transport has been used in the offerer-
      to-answerer direction.  Parameter sets included in an answer are
      independent of those parameter sets included in the offer, as they
      are used for decoding two different video streams, one from the
      answerer to the offerer and the other in the opposite direction.

      The following rules apply to transport of parameter sets in the
      offerer-to-answerer direction.

         o  An offer MAY include either or both of sprop-parameter-sets
            and sprop-level-parameter-sets.  If neither sprop-parameter-
            sets nor sprop-level-parameter-sets is present in the offer,
            then only in-band transport of parameter sets is used.

         o  If the answer includes in-band-parameter-sets equal to 1,
            then the offerer MUST transmit parameter sets in-band.
            Otherwise, the following applies.

               o  If the level to use in the offerer-to-answerer
                  direction is equal to the default level in the offer,
                  the following applies.

                     When there is a sprop-parameter-sets included in
                     the "a=fmtp" line in the offer, the answerer MUST
                     be prepared to use the parameter sets included in
                     the sprop-parameter-sets for decoding the incoming
                     NAL unit stream.

                     When there is a sprop-parameter-sets conveyed using
                     the "fmtp" source attribute in the offer, the
                     following applies.  If the answer includes use-
                     level-src-parameter-sets equal to 1 or the "fmtp"
                     source attribute, the answerer MUST be prepared to
                     use the parameter sets included in the sprop-
                     parameter-sets for decoding the incoming NAL unit
                     stream;  otherwise, the offerer MUST transmit
                     parameter sets in-band.

                     When sprop-parameter-sets is not present in the
                     offer, the offerer MUST transmit parameter sets in-
                     band.

Wang, et al.                 Standards Track                   [Page 61]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

                     The answerer MUST ignore sprop-level-parameter-
                     sets, when present (either included in the "a=fmtp"
                     line or conveyed using the "fmtp" source attribute)
                     in the offer.

               o  Otherwise, the level to use in the offerer-to-answerer
                  direction is not equal to the default level in the
                  offer, and the following applies.

                     The answerer MUST ignore sprop-parameter-sets, when
                     present (either included in the "a=fmtp" line or
                     conveyed using the "fmtp" source attribute) in the
                     offer.

                     When neither use-level-src-parameter-sets is equal
                     to 1 nor the "fmtp" source attribute is present in
                     the answer, the answerer MUST ignore sprop-level-
                     parameter-sets, when present in the offer, and the
                     offerer MUST transmit parameter sets in-band.

                     When either use-level-src-parameter-sets is equal
                     to 1 or the "fmtp" source attribute is present in
                     the answer, the answerer MUST be prepared to use
                     the parameter sets that are included in sprop-
                     level-parameter-sets for the accepted level (i.e.,
                     the default level in the answer), when present in
                     the offer, for decoding the incoming NAL unit
                     stream, and ignore all other parameter sets
                     included in sprop-level-parameter-sets.

                     When no parameter sets for the level to use in the
                     offerer-to-answerer direction are present in sprop-
                     level-parameter-sets in the offer, the offerer MUST
                     transmit parameter sets in-band.

      The following rules apply to the transport of parameter sets in
      the answerer-to-offerer direction.

         o  An answer MAY include either sprop-parameter-sets or sprop-
            level-parameter-sets but MUST NOT include both.  If neither
            sprop-parameter-sets nor sprop-level-parameter-sets is
            present in the answer, then only in-band transport of
            parameter sets is used.

         o  If the offer includes in-band-parameter-sets equal to 1, the
            answerer MUST NOT include sprop-parameter-sets or sprop-
            level-parameter-sets in the answer and MUST transmit
            parameter sets in-band.  Otherwise, the following applies.

Wang, et al.                 Standards Track                   [Page 62]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

               o  If the level to use in the answerer-to-offerer
                  direction is equal to the default level in the answer,
                  the following applies.

                     When there is a sprop-parameter-sets included in
                     the "a=fmtp" line in the answer, the offerer MUST
                     be prepared to use the parameter sets included in
                     the sprop-parameter-sets for decoding the incoming
                     NAL unit stream.

                     When there is a sprop-parameter-sets conveyed using
                     the "fmtp" source attribute in the answer, the
                     following applies.  If the offer includes use-
                     level-src-parameter-sets equal to 1 or the "fmtp"
                     source attribute, the offerer MUST be prepared to
                     use the parameter sets included in the sprop-
                     parameter-sets for decoding the incoming NAL unit
                     stream;  otherwise, the answerer MUST transmit
                     parameter sets in-band.

                     When sprop-parameter-sets is not present in the
                     answer, the answerer MUST transmit parameter sets
                     in-band.

                     The offerer MUST ignore sprop-level-parameter-sets,
                     when present (either included in the "a=fmtp" line
                     or conveyed using the "fmtp" source attribute) in
                     the answer.

               o  Otherwise, the level to use in the answerer-to-offerer
                  direction is not equal to the default level in the
                  answer, and the following applies.

                     The offerer MUST ignore sprop-parameter-sets when
                     present (either included in the "a=fmtp" line of
                     SDP or conveyed using the "fmtp" source attribute)
                     in the answer.

                     When neither use-level-src-parameter-sets is equal
                     to 1 nor the "fmtp" source attribute is present in
                     the offer, the offerer MUST ignore sprop-level-
                     parameter-sets, when present, and the answerer MUST
                     transmit parameter sets in-band.

                     When either use-level-src-parameter-sets is equal
                     to 1 or the "fmtp" source attribute is present in
                     the offer, the offerer MUST be prepared to use the
                     parameter sets that are included in sprop-level-

Wang, et al.                 Standards Track                   [Page 63]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

                     parameter-sets for the level to use in the
                     answerer-to-offerer direction, when present in the
                     answer, for decoding the incoming NAL unit stream,
                     and ignore all other parameter sets included in
                     sprop-level-parameter-sets in the answer.

                     When no parameter sets for the level to use in the
                     answerer-to-offerer direction are present in sprop-
                     level-parameter-sets in the answer, the answerer
                     MUST transmit parameter sets in-band.

      When sprop-parameter-sets or sprop-level-parameter-sets is
      conveyed using the "fmtp" source attribute as specified in [Section](https://www.rfc-editor.org/rfc/rfc6184.html#section-6.3)
      [6.3](https://www.rfc-editor.org/rfc/rfc6184.html#section-6.3) of [[9](https://www.rfc-editor.org/rfc/rfc6184.html#ref-9 ""Source-Specific Media Attributes in the Session Description Protocol (SDP)"")], the receiver of the parameters MUST store the
      parameter sets included in the sprop-parameter-sets or sprop-
      level-parameter-sets for the accepted level and associate them
      with the source given as a part of the "fmtp" source attribute.
      Parameter sets associated with one source MUST only be used to
      decode NAL units conveyed in RTP packets from the same source.
      When this mechanism is in use, SSRC collision detection and
      resolution MUST be performed as specified in [[9](https://www.rfc-editor.org/rfc/rfc6184.html#ref-9 ""Source-Specific Media Attributes in the Session Description Protocol (SDP)"")].

         Informative note: Conveyance of sprop-parameter-sets and sprop-
         level-parameter-sets using the "fmtp" source attribute may be
         used in topologies like Topo-Video-switch-MCU [[29](https://www.rfc-editor.org/rfc/rfc6184.html#ref-29 ""RTP Topologies"")] to enable
         out-of-band transport of parameter sets.

   For streams being delivered over multicast, the following rules
   apply:

   o  The media format configuration is identified by "profile-level-
      id", including the level part, and packetization-mode.  These
      media format configuration parameters (including the level part of
      profile-level-id) MUST be used symmetrically; that is, the
      answerer MUST either maintain all configuration parameters or
      remove the media format (payload type) completely.  Note that this
      implies that the level part of profile-level-id for Offer/Answer
      in multicast is not changeable.

      To simplify the handling and matching of these configurations, the
      same RTP payload type number used in the offer SHOULD also be used
      in the answer, as specified in [[8](https://www.rfc-editor.org/rfc/rfc6184.html#ref-8 ""An Offer/Answer Model with Session Description Protocol (SDP)"")].  An answer MUST NOT contain a
      payload type number used in the offer unless the configuration is
      the same as in the offer.

   o  Parameter sets received MUST be associated with the originating
      source and MUST only be used in decoding the incoming NAL unit
      stream from the same source.

Wang, et al.                 Standards Track                   [Page 64]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

   o  The rules for other parameters are the same as above for unicast
      as long as the above rules are obeyed.

   Table 6 lists the interpretation of all the media type parameters
   that MUST be used for the different direction attributes.

       Table 6.  Interpretation of parameters for different direction
                 attributes

                                              sendonly --+
                                           recvonly --+  |
                                        sendrecv --+  |  |
                                                   |  |  |
                profile-level-id                   C  C  P
                max-recv-level                     R  R  -
                packetization-mode                 C  C  P
                sprop-deint-buf-req                P  -  P
                sprop-interleaving-depth           P  -  P
                sprop-max-don-diff                 P  -  P
                sprop-init-buf-time                P  -  P
                max-mbps                           R  R  -
                max-smbps                          R  R  -
                max-fs                             R  R  -
                max-cpb                            R  R  -
                max-dpb                            R  R  -
                max-br                             R  R  -
                redundant-pic-cap                  R  R  -
                deint-buf-cap                      R  R  -
                max-rcmd-nalu-size                 R  R  -
                sar-understood                     R  R  -
                sar-supported                      R  R  -
                in-band-parameter-sets             R  R  -
                use-level-src-parameter-sets       R  R  -
                level-asymmetry-allowed            O  -  -
                sprop-parameter-sets               S  -  S
                sprop-level-parameter-sets         S  -  S

             Legend:

             C: configuration for sending and receiving streams
             O: offer/answer mode
             P: properties of the stream to be sent
             R: receiver capabilities
             S: out-of-band parameter sets
             -: not usable (when present, SHOULD be ignored)

Wang, et al.                 Standards Track                   [Page 65]

---

[RFC 6184](https://www.rfc-editor.org/rfc/rfc6184)           RTP Payload Format for H.264 Video           May 2011

   Parameters used for declaring receiver capabilities are in general
   downgradable; that is, they express the upper limit for a sender's
   possible behavior.  Thus, a sender MAY select to set its encoder
   using only lower/less or equal values of these parameters.

   Parameters declaring a configuration point are not changeable, with
   the exception of the level part of the profile-level-id parameter for
   unicast usage.

   When a sender's capabilities are declared and non-downgradable
   parameters are used in this declaration, these parameters express a
   configuration that is acceptable for the sender to receive streams.
   In order to achieve high interoperability levels, it is often
   advisable to offer multiple alternative configurations, e.g., for the
   packetization mode.  It is impossible to offer multiple
   configurations in a single payload type.  Thus, when multiple
   configuration offers are made, each offer requires its own RTP
   payload type associated with the offer.

   A receiver SHOULD understand all media type parameters, even if it
   only supports a subset of the payload format's functionality.  This
   ensures that a receiver is capable of understanding when an offer to
   receive media can be downgraded to what is supported by the receiver
   of the offer.

   An answerer MAY extend the offer with additional media format
   configurations.  However, to enable their usage, in most cases, a
   second offer is required from the offerer to provide the stream
   property parameters that the media sender will use.  This also has
   the effect that the offerer has to be able to receive this media
   format configuration, not only to send it.

   If an offerer wishes to have non-symmetric capabilities between
   sending and receiving, the offerer can allow asymmetric levels via
   level-asymmetry-allowed being equal to 1.  Alternatively, the offerer
   could offer different RTP sessions, i.e., different media lines
   declared as "recvonly" and "sendonly", respectively.  This may have
   further implications on the system and may require additional
   external semantics to associate the two media lines.

```


当H.264在RTP上使用SDP提供/应答模式进行单播协商时，以下限制和规则适用
- 