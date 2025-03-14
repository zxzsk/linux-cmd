⭐下载文件

`wget` 是一个强大的命令行工具，用于从网络上下载文件。它支持 HTTP、HTTPS 和 FTP 协议，并且能够在网络中断时恢复下载，非常适合在没有图形界面的环境下使用。🌐



## 1. wget 基本用法

### 下载单个文件

最基本的用法是下载一个文件，直接指定 URL：

```bash
wget <url>
```

例如，下载 `example.txt`：

```bash
wget https://example.com/example.txt
```

文件将保存在当前目录，下载完成后显示下载速度、剩余时间等信息。⏳

### 下载并指定保存的文件名

如果你希望将下载的文件保存为特定的文件名，可以使用 `-O` 选项：

```bash
wget -O <new-filename> <url>
```

例如，下载文件并保存为 `myfile.txt`：

```bash
wget -O myfile.txt https://example.com/example.txt
```

## 2. wget 进阶技巧

### 下载多个文件

`wget` 允许你从一个文件中下载多个 URL，使用 `-i` 选项指定一个包含 URL 列表的文件：

```bash
wget -i <url-file>
```

例如，假设 `urls.txt` 文件中列出了多个下载链接：

```bash
wget -i urls.txt
```

这样，`wget` 将依次下载文件。📄📥

### 下载整个网站（镜像下载）

如果你想下载整个网站的内容，可以使用 `-r` 选项进行递归下载，并结合 `-np` 避免向上层目录回溯：

```bash
wget -r -np <url>
```

例如，下载 `https://example.com` 网站的所有内容：

```bash
wget -r -np https://example.com
```

这将下载整个网站及其资源，并保留原始目录结构。⛅

### 限制下载速度

如果你希望限制下载速度，以避免占用过多带宽，可以使用 `--limit-rate` 选项：

```bash
wget --limit-rate=<speed> <url>
```

例如，限制下载速度为 100 KB/s：

```bash
wget --limit-rate=100k https://example.com/example.txt
```

### 下载并后台运行

如果你需要将下载任务放在后台运行，可以使用 `-b` 选项：

```bash
wget -b <url>
```

例如，后台下载 `file.tar.gz`：

```bash
wget -b https://example.com/file.tar.gz
```

下载过程将不会在终端显示，只会将输出写入一个日志文件（`wget-log`）。📂

### 继续未完成的下载

如果你的下载中断了，可以使用 `-c` 选项继续下载：

```bash
wget -c <url>
```

例如，继续下载已经部分下载的文件：

```bash
wget -c https://example.com/file.zip
```

这样，你可以从断点继续下载，而不需要重新下载整个文件。💡

### 下载文件时忽略证书验证

如果你访问的是 HTTPS 网站，且证书有问题（例如自签名证书），可以使用 `--no-check-certificate` 选项忽略证书验证：

```bash
wget --no-check-certificate <url>
```

例如：

```bash
wget --no-check-certificate https://example.com/file.txt
```

**注意**：这种方式可能会降低下载的安全性，只有在信任目标网站时才使用。⚠️

## 3. 常见问题与解决方法

### 1. 下载文件时出现 403 错误

有时，服务器会拒绝来自某些来源的请求。你可以伪装成浏览器访问网站，使用 `--user-agent` 选项修改 `User-Agent`：

```bash
wget --user-agent="Mozilla/5.0" <url>
```

例如：

```bash
wget --user-agent="Mozilla/5.0" https://example.com/file.txt
```

### 2. 下载文件时断网或中断下载

如果在下载过程中遇到网络中断，可以使用 `-c` 选项继续下载：

```bash
wget -c <url>
```

### 3. 下载大文件时超时

可以使用 `--timeout` 选项设置超时限制，避免下载过程超时：

```bash
wget --timeout=60 <url>
```

例如，设置超时为 60 秒：

```bash
wget --timeout=60 https://example.com/largefile.zip
```

## 4. 总结 🌟

`wget` 是一个非常强大的文件下载工具，拥有众多实用选项。无论你是需要简单的文件下载，还是想要完整的网站镜像，`wget` 都能高效完成任务。🔧

通过合理利用 `wget` 的选项，你可以限制下载速度、后台下载、断点续传等，大大提高你的下载效率和体验。希望这篇教程对你有所帮助，让你能够轻松驾驭 `wget` 命令！✨

希望这篇教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊