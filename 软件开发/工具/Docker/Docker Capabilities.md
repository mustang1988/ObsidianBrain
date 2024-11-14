# Docker 支持的 Capabilities 配置
|名称|用途|
|:-|:-|
|CAP_CHOWN|修改文件属主的权限|
|CAP_DAC_OVERRIDE|忽略文件的 DAC 访问限制|
|CAP_DAC_READ_SEARCH|忽略文件读及目录搜索的 DAC 访问限制|
|CAP_FOWNER|忽略文件属主 ID 必须和进程用户 ID 相匹配的限制|
|CAP_FSETID|允许设置文件的 setuid 位|
|CAP_KILL|允许对不属于自己的进程发送信号|
|CAP_SETGID|允许改变进程的组 ID|
|CAP_SETUID|允许改变进程的用户 ID|
|CAP_SETPCAP|允许向其他进程转移能力以及删除其他进程的能力|
|CAP_LINUX_IMMUTABLE|允许修改文件的 IMMUTABLE 和 APPEND 属性标志|
|CAP_NET_BIND_SERVICE|允许绑定到小于 1024 的端口|
|CAP_NET_BROADCAST|允许网络广播和多播访问|
|CAP_NET_ADMIN|允许执行网络管理任务|
|CAP_NET_RAW|允许使用原始套接字|
|CAP_IPC_LOCK|允许锁定共享内存片段|
|CAP_IPC_OWNER|忽略 IPC 所有权检查|
|CAP_SYS_MODULE|允许插入和删除内核模块|
|CAP_SYS_RAWIO|允许直接访问 / devport,/dev/mem,/dev/kmem 及原始块设备|
|CAP_SYS_CHROOT|允许使用 chroot() 系统调用|
|CAP_SYS_PTRACE|允许跟踪任何进程|
|CAP_SYS_PACCT|允许执行进程的 BSD 式审计|
|CAP_SYS_ADMIN|允许执行系统管理任务，如加载或卸载文件系统、设置磁盘配额等|
|CAP_SYS_BOOT|允许重新启动系统|
|CAP_SYS_NICE|允许提升优先级及设置其他进程的优先级|
|CAP_SYS_RESOURCE|忽略资源限制|
|CAP_SYS_TIME|允许改变系统时钟|
|CAP_SYS_TTY_CONFIG|允许配置 TTY 设备|
|CAP_MKNOD|允许使用 mknod() 系统调用|
|CAP_LEASE|允许修改文件锁的 FL_LEASE 标志|

# 配置方式示例
```yaml
# doker-compose
version: '3'
services:
  <service_name>:
    image: <image>
    container_name: <container_name>
    add_caps:
      - CAP_CHOWN
	drop_caps:
	  - CAP_SYS_RESOURCE
```

#Docker