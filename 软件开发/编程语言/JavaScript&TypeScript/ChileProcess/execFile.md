## execFile(file\[, args\]\[, options\]\[, callback\])

### 作用
execFile() 函数与 [[exec]] 函数类似, 不同点在于:
- 默认情况下**不会**生成Shell, 而是将指定的可执行文件直接作为一个新进程生成, 这使得它比 [[exec]] 略高效
- 因为不生成Shell, 所以不支持I/O重定向和文件通配符等行为

### 参数说明

### 返回值

### 示例

#JavaScript/ChileProcess模块 #TypeScript/ChildProcess模块 #多进程  #创建子进程