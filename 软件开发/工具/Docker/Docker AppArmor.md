1. Docker宿主机安装apparmor
> yum install apparmor apparmor-utils

2. 创建apparmor配置
> vi /etc/apparmor.d/xxx

3. 写入配置内容
```bash
#include <tunables/global>


profile docker-default flags=(attach_disconnected,mediate_deleted) {

  #include <abstractions/base>


  network,
  capability,
  file,
  umount,

  deny @{PROC}/{*,**^[0-9*],sys/kernel/shm*} wkx,
  deny @{PROC}/sysrq-trigger rwklx,
  deny @{PROC}/mem rwklx,
  deny @{PROC}/kmem rwklx,
  deny @{PROC}/kcore rwklx,

  deny mount,

  deny /sys/[^f]*/** wklx,
  deny /sys/f[^s]*/** wklx,
  deny /sys/fs/[^c]*/** wklx,
  deny /sys/fs/c[^g]*/** wklx,
  deny /sys/fs/cg[^r]*/** wklx,
  deny /sys/firmware/efi/efivars/** rwklx,
  deny /sys/kernel/security/** rwklx,
}
```

4. 启用配置
> apparmor_parser -r -W /etc/apparmor.d/xxx

5. 修改容器docker-compose.yml
```yaml
#...略
    security_opt:
      - apparmor:xxx
#...略
```

6. 重启容器
7. 自查
> docker ps --quiet --all | xargs docker inspect --format '{{ .Id }}: AppArmorProfile={{ .AppArmorProfile }}'

如果输出的"AppArmorProfile="等号后有内容说明配置正确

#Docker #AppArmor