---
slug: /a23c70c9
---
⭐⭐`curl` 是一个功能强大的网络工具，可以帮助你与网络服务进行交互，进行文件下载、API 测试、文件上传等多种任务。

## 1. 基本语法

```bash
curl [options] [URL]
```

`curl` 命令通过指定不同的选项来控制如何与 URL 进行交互。最常见的用法是获取某个 URL 的内容。

### 示例

显示网页的 HTML 源代码。

```bash
➜  ~ curl https://www.example.com
<!doctype html>
<html>
<head>
    <title>Example Domain</title>
...
```

在终端查询命令用法

```bash
➜  ~ curl cheat.sh/ls            
 cheat:ls 
# To display everything in <dir>, excluding hidden files:
ls <dir>

# To display everything in <dir>, including hidden files:
ls -a <dir>

# To display all files, along with the size (with unit suffixes) and timestamp:
ls -lh <dir>
...
```



## 2. 常见实用技巧 🎯

### 2.1 下载文件 🎉

通过 `curl` 下载文件非常简单。只需使用 `-O` 或 `-o` 选项指定文件名即可。

```bash
# 使用 URL 中的文件名
curl -O https://www.example.com/file.zip

# 指定文件名
curl -o myfile.zip https://www.example.com/file.zip

# 保存网页源码
curl -o page.html https://www.example.com

# 从文件读取 URL 并下载
curl -K urls.txt -O

# 同时输出响应和保存文件
curl -O https://www.example.com/file.zip -v
```

类似的命令是 wget

### 2.2 测试 API 请求 🔥

`curl` 是测试 REST API 请求的利器。你可以轻松地发送 `GET`、`POST` 等请求，并查看响应内容。

- **`GET` 请求（默认）**：

```bash
➜  ~ curl www.zxzsk.com
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>tengine</center>
</body>
</html>

➜  ~ curl nav.zxzsk.com
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>tengine</center>
</body>
</html>

➜  ~ curl cheat.sh/ls  
 cheat:ls 
# To display everything in <dir>, excluding hidden files:
ls <dir>

# To display everything in <dir>, including hidden files:
ls -a <dir>

# To display all files, along with the size (with unit suffixes) and timestamp:
ls -lh <dir>
...


➜  ~ curl cheat.sh   
      _                _         _    __                                        
  ___| |__   ___  __ _| |_   ___| |__ \ \      The only cheat sheet you need    
 / __| '_ \ / _ \/ _` | __| / __| '_ \ \ \     Unified access to the best       
| (__| | | |  __/ (_| | |_ _\__ \ | | |/ /     community driven documentation   
 \___|_| |_|\___|\__,_|\__(_)___/_| |_/_/      repositories of the world        
                                                                                
+------------------------+ +------------------------+ +------------------------+
| $ curl cheat.sh/ls     | | $ cht.sh btrfs         | | $ cht.sh lua/:learn    |
| $ curl cht.sh/btrfs    | | $ cht.sh tar~list      | | Learn any* programming |
| $ curl cht.sh/tar~list | |                        | | language not leaving   |
| $ curl https://cht.sh  | |                        | | your shell             |
|                        | |                        | | *) any of 60           |
|                        | |                        | |                        |
+-- queries with curl ---+ +- own optional client --+ +- learn, learn, learn! -+
+------------------------+ +------------------------+ +------------------------+
| $ cht.sh go/f<tab><tab>| | $ cht.sh --shell       | | $ cht.sh go zip lists  |
| go/for   go/func       | | cht.sh> help           | | Ask any question using |
| $ cht.sh go/for        | | ...                    | | cht.sh or curl cht.sh: |
| ...                    | |                        | | /go/zip+lists          |
|                        | |                        | | (use /,+ when curling) |
|                        | |                        | |                        |
+---- TAB-completion ----+ +-- interactive shell ---+ +- programming questions-+
+------------------------+ +------------------------+ +------------------------+
| $ curl cht.sh/:help    | | $ vim prg.py           | | $ time curl cht.sh/    |
| see /:help and /:intro | | ...                    | | ...                    |
| for usage information  | | zip lists _            | | real    0m0.075s       |
| and README.md on GitHub| | <leader>KK             | |                        |
| for the details        | |             *awesome*  | |                        |
|            *start here*| |                        | |                        |
+--- self-documented ----+ +- queries from editor! -+ +---- instant answers ---+
                                                                                
[Follow @igor_chubin for updates][github.com/chubin/cheat.sh]             
```

- **`POST` 请求**：

```bash
curl -X POST https://api.example.com/resource -d '{"key":"value"}' -H "Content-Type: application/json"
```

- **添加自定义头部**：

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/resource
```

### 2.3 获取响应头部 🏷️

要查看 HTTP 响应头部，使用 `-I` 选项。对于调试和获取服务器信息非常有用。

```bash
curl -I https://www.example.com

➜  ~ curl -I https://www.zxzsk.com 
HTTP/2 200 
server: Tengine
date: Mon, 17 Mar 2025 04:26:43 GMT
content-type: text/html
content-length: 16324
last-modified: Tue, 18 Feb 2025 10:09:57 GMT
etag: "67b45c75-3fc4"
cache-control: no-cache, no-store
accept-ranges: bytes
set-cookie:  sl-session=VnbIDQP22Gez0MpQUZ9p9Q==; SameSite=None; Secure; Path=/; Max-Age=86400; HttpOnly

➜  ~ curl -I https://nav.zxzsk.com
HTTP/2 200 
server: Tengine
date: Mon, 17 Mar 2025 04:26:53 GMT
content-type: text/html; charset=UTF-8
x-pingback: https://nav.zxzsk.com/index.php/action/xmlrpc
set-cookie:  sl-session=Msr8Fg322Gct3oGPHZe8OQ==; SameSite=None; Secure; Path=/; Max-Age=86400; HttpOnly

➜  ~ curl -I https://x.zxzsk.com
curl: (60) SSL certificate problem: self-signed certificate
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.


➜  ~ curl -I https://cheat.sh     
HTTP/1.1 200 OK
Server: nginx/1.13.12
Date: Mon, 17 Mar 2025 04:27:07 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 25502
Connection: keep-alive
Strict-Transport-Security: max-age=63072000; includeSubdomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
```

网站正常返回`200 OK`

### 2.4 跟踪重定向 🌍

某些 URL 会将你重定向到另一个 URL。如果你想查看整个重定向过程，可以使用 `-L` 选项来跟踪重定向。

```bash
curl -L https://www.example.com
```

这样，`curl` 会自动遵循服务器的重定向指令，直到最终到达目标页面。

### 2.5 设置请求超时 ⏳

`curl` 默认会等待服务器的响应。如果你希望设置请求的超时时间，可以使用 `--max-time` 选项。

```bash
curl --max-time 10 https://www.example.com
```

这表示如果 10 秒内没有收到服务器响应，`curl` 会自动停止请求。

### 2.6 上传文件 📤

使用 `curl` 上传文件也非常简单。通过 `-F` 选项可以模拟表单上传。

```bash
curl -F "file=@/path/to/file" https://www.example.com/upload
```

这样就能将文件上传到指定的 URL。如果你需要模拟 `multipart/form-data` 表单上传，`curl` 会自动处理。

### 2.7 使用代理 🕵️‍♂️

如果你需要通过代理服务器发送请求，可以使用 `-x` 选项指定代理服务器。

```bash
curl -x http://proxy.example.com:8080 https://www.example.com
```

通过这种方式，你可以通过指定的 HTTP 或 SOCKS 代理发送请求。

### 2.8 验证 SSL 证书 🔒

如果你想忽略 SSL 证书验证（例如在开发环境中），可以使用 `-k` 或 `--insecure` 选项。

```bash
curl -k https://example.com
```

不过，**注意**：不要在生产环境中使用该选项，它会让你的连接不再安全。

### 2.9 下载多个文件 📥

如果你要下载多个文件，可以通过将多个 URL 放在一个文件中，然后通过 `-K` 选项来批量下载。

1. 创建一个 URL 列表文件：

```bash
echo "https://www.example1.com/file1.zip" > urls.txt
echo "https://www.example2.com/file2.zip" >> urls.txt
```

2. 使用 `curl` 下载：

```bash
curl -K urls.txt
```

### 2.10 显示进度条 🚧

用 `#` 显示下载进度。

```bash
curl -# -O https://www.example.com/file.zip

➜  ~ curl -# -O https://release.piclist.cn/latest/piclist_2.9.8_amd64.snap
##########                                                                            12.7%      
```

