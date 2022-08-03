# TL;DR
```ad-tldr
title: PeerConnectionInterface完整声明
collapse: close
icon: Quote

~~~cpp
class RTC_EXPORT PeerConnectionInterface : public rtc::RefCountInterface {
 public:
  enum SignalingState {
    kStable,
    kHaveLocalOffer,
    kHaveLocalPrAnswer,
    kHaveRemoteOffer,
    kHaveRemotePrAnswer,
    kClosed,
  };
  enum IceGatheringState {
    kIceGatheringNew,
    kIceGatheringGathering,
    kIceGatheringComplete
  };
  enum class PeerConnectionState {
    kNew,
    kConnecting,
    kConnected,
    kDisconnected,
    kFailed,
    kClosed,
  };
  enum IceConnectionState {
    kIceConnectionNew,
    kIceConnectionChecking,
    kIceConnectionConnected,
    kIceConnectionCompleted,
    kIceConnectionFailed,
    kIceConnectionDisconnected,
    kIceConnectionClosed,
    kIceConnectionMax,
  };
  enum TlsCertPolicy {
    kTlsCertPolicySecure,
    kTlsCertPolicyInsecureNoCheck,
  };
  struct RTC_EXPORT IceServer {
    IceServer();
    IceServer(const IceServer&);
    ~IceServer();
    std::string uri;
    std::vector<std::string> urls;
    std::string username;
    std::string password;
    TlsCertPolicy tls_cert_policy = kTlsCertPolicySecure;
    std::string hostname;
    std::vector<std::string> tls_alpn_protocols;
    std::vector<std::string> tls_elliptic_curves;
    bool operator==(const IceServer& o) const {
      return uri == o.uri && urls == o.urls && username == o.username &&
             password == o.password && tls_cert_policy == o.tls_cert_policy &&
             hostname == o.hostname &&
             tls_alpn_protocols == o.tls_alpn_protocols &&
             tls_elliptic_curves == o.tls_elliptic_curves;
    }
    bool operator!=(const IceServer& o) const { return !(*this == o); }
  };
  typedef std::vector<IceServer> IceServers;
  enum IceTransportsType {
    kNone,
    kRelay,
    kNoHost,
    kAll
  };
  enum BundlePolicy {
    kBundlePolicyBalanced,
    kBundlePolicyMaxBundle,
    kBundlePolicyMaxCompat
  };
  enum RtcpMuxPolicy {
    kRtcpMuxPolicyNegotiate,
    kRtcpMuxPolicyRequire,
  };
  enum TcpCandidatePolicy {
    kTcpCandidatePolicyEnabled,
    kTcpCandidatePolicyDisabled
  };
  enum CandidateNetworkPolicy {
    kCandidateNetworkPolicyAll,
    kCandidateNetworkPolicyLowCost
  };
  enum ContinualGatheringPolicy { GATHER_ONCE, GATHER_CONTINUALLY };
  enum class RTCConfigurationType {
    kSafe,
    kAggressive
  };
  struct RTC_EXPORT RTCConfiguration {
    RTCConfiguration();
    RTCConfiguration(const RTCConfiguration&);
    explicit RTCConfiguration(RTCConfigurationType type);
    ~RTCConfiguration();
    bool operator==(const RTCConfiguration& o) const;
    bool operator!=(const RTCConfiguration& o) const;
    bool dscp() const { return media_config.enable_dscp; }
    void set_dscp(bool enable) { media_config.enable_dscp = enable; }
    bool cpu_adaptation() const {
      return media_config.video.enable_cpu_adaptation;
    }
    void set_cpu_adaptation(bool enable) {
      media_config.video.enable_cpu_adaptation = enable;
    }

    bool suspend_below_min_bitrate() const {
      return media_config.video.suspend_below_min_bitrate;
    }
    void set_suspend_below_min_bitrate(bool enable) {
      media_config.video.suspend_below_min_bitrate = enable;
    }
    bool prerenderer_smoothing() const {
      return media_config.video.enable_prerenderer_smoothing;
    }
    void set_prerenderer_smoothing(bool enable) {
      media_config.video.enable_prerenderer_smoothing = enable;
    }
    bool experiment_cpu_load_estimator() const {
      return media_config.video.experiment_cpu_load_estimator;
    }
    void set_experiment_cpu_load_estimator(bool enable) {
      media_config.video.experiment_cpu_load_estimator = enable;
    }
    int audio_rtcp_report_interval_ms() const {
      return media_config.audio.rtcp_report_interval_ms;
    }
    void set_audio_rtcp_report_interval_ms(int audio_rtcp_report_interval_ms) {
      media_config.audio.rtcp_report_interval_ms =
          audio_rtcp_report_interval_ms;
    }
    int video_rtcp_report_interval_ms() const {
      return media_config.video.rtcp_report_interval_ms;
    }
    void set_video_rtcp_report_interval_ms(int video_rtcp_report_interval_ms) {
      media_config.video.rtcp_report_interval_ms =
          video_rtcp_report_interval_ms;
    }
    static const int kUndefined = -1;
    static const int kAudioJitterBufferMaxPackets = 200;
    static const int kAggressiveIceConnectionReceivingTimeout = 1000;
    IceServers servers;
    IceTransportsType type = kAll;
    BundlePolicy bundle_policy = kBundlePolicyBalanced;
    RtcpMuxPolicy rtcp_mux_policy = kRtcpMuxPolicyRequire;
    std::vector<rtc::scoped_refptr<rtc::RTCCertificate>> certificates;
    int ice_candidate_pool_size = 0;
    bool disable_ipv6 = false;
    bool disable_ipv6_on_wifi = false;
    int max_ipv6_networks = cricket::kDefaultMaxIPv6Networks;
    bool disable_link_local_networks = false;
    bool enable_rtp_data_channel = false;
    absl::optional<int> screencast_min_bitrate;
    absl::optional<bool> combined_audio_video_bwe;
    absl::optional<bool> enable_dtls_srtp;
    TcpCandidatePolicy tcp_candidate_policy = kTcpCandidatePolicyEnabled;
    CandidateNetworkPolicy candidate_network_policy = kCandidateNetworkPolicyAll;
    int audio_jitter_buffer_max_packets = kAudioJitterBufferMaxPackets;
    bool audio_jitter_buffer_fast_accelerate = false;
    int audio_jitter_buffer_min_delay_ms = 0;
    bool audio_jitter_buffer_enable_rtx_handling = false;
    int ice_connection_receiving_timeout = kUndefined;
    int ice_backup_candidate_pair_ping_interval = kUndefined;
    ContinualGatheringPolicy continual_gathering_policy = GATHER_ONCE;
    bool prioritize_most_likely_ice_candidate_pairs = false;
    struct cricket::MediaConfig media_config;
    bool prune_turn_ports = false;
    PortPrunePolicy turn_port_prune_policy = NO_PRUNE;
    PortPrunePolicy GetTurnPortPrunePolicy() const {
      return prune_turn_ports ? PRUNE_BASED_ON_PRIORITY
                              : turn_port_prune_policy;
    }

    bool presume_writable_when_fully_relayed = false;
    bool enable_ice_renomination = false;
    bool redetermine_role_on_ice_restart = true;
    bool surface_ice_candidates_on_ice_transport_type_changed = false;
    absl::optional<int> ice_check_interval_strong_connectivity;
    absl::optional<int> ice_check_interval_weak_connectivity;
    absl::optional<int> ice_check_min_interval;
    absl::optional<int> ice_unwritable_timeout;
    absl::optional<int> ice_unwritable_min_checks;
    absl::optional<int> ice_inactive_timeout;
    absl::optional<int> stun_candidate_keepalive_interval;
    webrtc::TurnCustomizer* turn_customizer = nullptr;
    absl::optional<rtc::AdapterType> network_preference;
    SdpSemantics sdp_semantics = SdpSemantics::kPlanB;
    bool active_reset_srtp_params = false;
    bool use_media_transport = false;
    bool use_media_transport_for_data_channels = false;
    absl::optional<bool> use_datagram_transport;
    absl::optional<bool> use_datagram_transport_for_data_channels;
    absl::optional<bool> use_datagram_transport_for_data_channels_receive_only;
    absl::optional<CryptoOptions> crypto_options;
    bool offer_extmap_allow_mixed = false;
    std::string turn_logging_id;
    bool enable_implicit_rollback = false;
    absl::optional<bool> allow_codec_switching;
  };
  struct RTCOfferAnswerOptions {
    static const int kUndefined = -1;
    static const int kMaxOfferToReceiveMedia = 1;
    static const int kOfferToReceiveMediaTrue = 1;
    int offer_to_receive_video = kUndefined;
    int offer_to_receive_audio = kUndefined;
    bool voice_activity_detection = true;
    bool ice_restart = false;
    bool use_rtp_mux = true;
    bool raw_packetization_for_video = false;
    int num_simulcast_layers = 1;
    bool use_obsolete_sctp_sdp = false;
    RTCOfferAnswerOptions() = default;
    RTCOfferAnswerOptions(int offer_to_receive_video,
                          int offer_to_receive_audio,
                          bool voice_activity_detection,
                          bool ice_restart,
                          bool use_rtp_mux)
        : offer_to_receive_video(offer_to_receive_video),
          offer_to_receive_audio(offer_to_receive_audio),
          voice_activity_detection(voice_activity_detection),
          ice_restart(ice_restart),
          use_rtp_mux(use_rtp_mux) {}
  };
  enum StatsOutputLevel {
    kStatsOutputLevelStandard,
    kStatsOutputLevelDebug,
  };
  virtual rtc::scoped_refptr<StreamCollectionInterface> local_streams() = 0;
  virtual rtc::scoped_refptr<StreamCollectionInterface> remote_streams() = 0;
  virtual bool AddStream(MediaStreamInterface* stream) = 0;
  virtual void RemoveStream(MediaStreamInterface* stream) = 0;
  virtual RTCErrorOr<rtc::scoped_refptr<RtpSenderInterface>> AddTrack(
      rtc::scoped_refptr<MediaStreamTrackInterface> track,
      const std::vector<std::string>& stream_ids) = 0;
  virtual bool RemoveTrack(RtpSenderInterface* sender) = 0;
  virtual RTCError RemoveTrackNew(
      rtc::scoped_refptr<RtpSenderInterface> sender);
  virtual RTCErrorOr<rtc::scoped_refptr<RtpTransceiverInterface>>
  AddTransceiver(rtc::scoped_refptr<MediaStreamTrackInterface> track) = 0;
  virtual RTCErrorOr<rtc::scoped_refptr<RtpTransceiverInterface>>
  AddTransceiver(rtc::scoped_refptr<MediaStreamTrackInterface> track, const RtpTransceiverInit& init) = 0;
  virtual RTCErrorOr<rtc::scoped_refptr<RtpTransceiverInterface>>
  AddTransceiver(cricket::MediaType media_type) = 0;
  virtual RTCErrorOr<rtc::scoped_refptr<RtpTransceiverInterface>>
  AddTransceiver(cricket::MediaType media_type, const RtpTransceiverInit& init) = 0;
  virtual rtc::scoped_refptr<RtpSenderInterface> CreateSender(const std::string& kind, const std::string& stream_id) = 0;
  virtual std::vector<rtc::scoped_refptr<RtpSenderInterface>> GetSenders() const = 0;
  virtual std::vector<rtc::scoped_refptr<RtpReceiverInterface>> GetReceivers() const = 0;
  virtual std::vector<rtc::scoped_refptr<RtpTransceiverInterface>>
  GetTransceivers() const = 0;
  virtual bool GetStats(StatsObserver* observer, MediaStreamTrackInterface* track, StatsOutputLevel level) = 0;
  virtual void GetStats(RTCStatsCollectorCallback* callback) = 0;
  virtual void GetStats(rtc::scoped_refptr<RtpSenderInterface> selector, rtc::scoped_refptr<RTCStatsCollectorCallback> callback) = 0;
  virtual void GetStats(rtc::scoped_refptr<RtpReceiverInterface> selector, rtc::scoped_refptr<RTCStatsCollectorCallback> callback) = 0;
  virtual void ClearStatsCache() {}
  virtual rtc::scoped_refptr<DataChannelInterface> CreateDataChannel(const std::string& label, const DataChannelInit* config) = 0;
  virtual const SessionDescriptionInterface* local_description() const = 0;
  virtual const SessionDescriptionInterface* remote_description() const = 0;
  virtual const SessionDescriptionInterface* current_local_description() const = 0;
  virtual const SessionDescriptionInterface* current_remote_description() const = 0;
  virtual const SessionDescriptionInterface* pending_local_description() const = 0;
  virtual const SessionDescriptionInterface* pending_remote_description() const = 0;
  virtual void RestartIce() = 0;
  virtual void CreateOffer(CreateSessionDescriptionObserver* observer, const RTCOfferAnswerOptions& options) = 0;
  virtual void CreateAnswer(CreateSessionDescriptionObserver* observer, const RTCOfferAnswerOptions& options) = 0;
  virtual void SetLocalDescription(SetSessionDescriptionObserver* observer, SessionDescriptionInterface* desc) = 0;
  virtual void SetLocalDescription(SetSessionDescriptionObserver* observer) {}
  virtual void SetRemoteDescription(SetSessionDescriptionObserver* observer, SessionDescriptionInterface* desc) {}
  virtual void SetRemoteDescription(
      std::unique_ptr<SessionDescriptionInterface> desc,
      rtc::scoped_refptr<SetRemoteDescriptionObserverInterface> observer) = 0;
  virtual PeerConnectionInterface::RTCConfiguration GetConfiguration() = 0;
  virtual RTCError SetConfiguration(
      const PeerConnectionInterface::RTCConfiguration& config);
  virtual bool AddIceCandidate(const IceCandidateInterface* candidate) = 0;
  virtual void AddIceCandidate(std::unique_ptr<IceCandidateInterface> candidate,
                               std::function<void(RTCError)> callback) {}
  virtual bool RemoveIceCandidates(
      const std::vector<cricket::Candidate>& candidates) = 0;
  struct BitrateParameters {
    BitrateParameters();
    ~BitrateParameters();
    absl::optional<int> min_bitrate_bps;
    absl::optional<int> current_bitrate_bps;
    absl::optional<int> max_bitrate_bps;
  };
  virtual RTCError SetBitrate(const BitrateSettings& bitrate);
  virtual RTCError SetBitrate(const BitrateParameters& bitrate_parameters);
  virtual void SetAudioPlayout(bool playout) {}
  virtual void SetAudioRecording(bool recording) {}
  virtual rtc::scoped_refptr<DtlsTransportInterface> LookupDtlsTransportByMid(const std::string& mid) = 0;
  virtual rtc::scoped_refptr<SctpTransportInterface> GetSctpTransport() const = 0;
  virtual SignalingState signaling_state() = 0;
  virtual IceConnectionState ice_connection_state() = 0;
  virtual IceConnectionState standardized_ice_connection_state() = 0;
  virtual PeerConnectionState peer_connection_state() = 0;
  virtual IceGatheringState ice_gathering_state() = 0;
  virtual absl::optional<bool> can_trickle_ice_candidates() {
    return absl::nullopt;
  }
  virtual void AddAdaptationResource(rtc::scoped_refptr<Resource> resource) {}
  virtual bool StartRtcEventLog(std::unique_ptr<RtcEventLogOutput> output, int64_t output_period_ms) = 0;
  virtual bool StartRtcEventLog(std::unique_ptr<RtcEventLogOutput> output) = 0;
  virtual void StopRtcEventLog() = 0;
  virtual void Close() = 0;
 protected:
  ~PeerConnectionInterface() override = default;
};
~~~
```




#WebRTC/Source/Core/Interface 