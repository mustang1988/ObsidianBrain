1. 更新/安装最新版本显卡驱动
	- 下载地址: https://www.nvidia.cn/Download/index.aspx?lang=cn, 根据实际使用的GPU型号下载最新版本的驱动即可
2. 安装CUDA SDK
	- 下载地址: https://developer.nvidia.com/cuda-downloads
		- 安装完成后会自动新增一个系统环境变量 "CUDA_PATH", 值为CUDA SDK的安装目录
		- 检查系统的"Path"环境变量中是否包含 "CUDA_PATH" 下的 bin 和 libnvvp 目录，若没有，手动添加
3. 安装cuDNN(CUDA Deep Neural Network)
	- 下载地址: https://developer.nvidia.com/rdp/cudnn-download, 根据上一步安装的CUDA SDK 的版本选择cuDNN的下载包，下载文件为zip压缩包
	- 下载完成后解压到任意目录，将其中的==bin==子目录添加到系统"Path"环境变量中
	- 安装参考文档: https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html
4. 安装TensorRT
	- 下载地址: https://developer.nvidia.com/nvidia-tensorrt-download, 与前一步 cuDNN 类似，需要根据第二步安装的CUDA SDK 的版本下载对应版本的TensorRT，下载文件同样为zip压缩包
	- 下载完成后解压到任意目录，将其中的==bin==子目录和==lib==子目录均添加到系统"Path"环境变量中
5. 安装zlib
	- 下载地址: http://www.winimage.com/zLibDll/zlib123dllx64.zip, 出处 cuDNN介绍文档: https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html, 下载文件同样为zip压缩包
	- 下载完成后解压到任意目录，将其中的==dll_x64==子目录添加到系统"Path"环境变量中
6. 安装cmake
     - 下载地址: 
7. 安装Visual Studio
	- 2019，2022社区版本均可以
1. 获取和构建 FastDeploy
  ```bash
  git clone git@github.com:PaddlePaddle/FastDeploy.git
  
  ```
	


