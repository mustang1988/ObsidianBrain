## ChildProcess模块

NodeJS的ChildProcess模块提供了"多进程"的支持, 使得我们可以通过新开进程来处理计算密集或IO密集型的长耗时任务, 这样可以充分利用CPU的计算资源

ChildProcess模块提供了以下API用来创建子进程
- [[exec]]
- [[execFile]]
- [[fork]]
- [[spawn]]
- [[execSync]]
- [[execFileSync]]
- [[spawnSync]]

其中结尾不带"Sync"的API函数会返回一个ChildProcess的子进程对象, 模块为其提供了相应的一套API和事件用于处理子进程在不同执行阶段的处理逻辑的Hook
- [[ChildProcessAPI]]
- [[ChildProcessEvent]]

#JavaScript/ChileProcess模块 #TypeScript/ChildProcess模块 #多进程