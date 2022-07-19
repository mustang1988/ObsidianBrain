## spawn
### 所属类
[[ChildProcess]]

### 事件触发条件
子进程派生成功时触发***一次***, 如果子进程派生失败, spawn事件是不会触发的, 取而代之, 一个 [[error]] 事件会被触发

```ad-info
title: spawn事件总是会在其他可触发事件前最先触发
```

```ad-warning
title: 注意
content: spawn事件只会在派生子进程成功后触发一次, 如果设置了[[spawn()#可选参数options]] { shell: true }, 那么子进程会先创建Shell, 再将需要执行的命令交给Shell去执行, 只要Shell的创建是成功的, 就意味着子进程派生成功, 此时spawn事件就会触发, 不论传递给Shell的命令是否开始执行, 执行成功与否, 因此并不能简单的以spawn事件是否触发来判断子进程是否成功的完成派生
```

### 事件回调函数
spawn事件回调函数没有参数

### 示例
```javascript
const { exec } = require('child_process');
const command = 'ls -al /';
const child_p = exec(command);
child_p.on('spawn', () => {
    console.log('Child Process on spawn');
});
```

#ChildProcess/Event 