```bash
ssh-keygen -t rsa -C '邮箱地址'
```
示例
```bash
root@pgu-PC:~/.ssh# ssh-keygen -t rsa -C 'test@test.com'
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): test
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in test
Your public key has been saved in test.pub
The key fingerprint is:
SHA256:g9puXgnvnscRYq8hWmutTqQNeE7Quj6nK4nx3c0Gri0 test@test.com
The key's randomart image is:
+---[RSA 3072]----+
|                 |
|   .             |
|  . .            |
|   +   .o .      |
|  o + +.So .     |
|.  = B+o.oo      |
|.+..+=+B++ .     |
|+.o E+*o*.o      |
| .+=.B*++.       |
+----[SHA256]-----+
root@pgu-PC:~/.ssh#
```
执行命令后会询问将生成的密钥文件存放在哪里，默认为
- ~/.ssh/id_rsa
- ~/.ssh/id_rsa.pub
前者为私钥文件，后者为公钥文件

生成完毕后，使用文本编辑工具打开公钥文件，拷贝其中的内容添加到所用Git服务器个人账户的RSA密钥中即可