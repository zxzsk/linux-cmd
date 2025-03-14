

生成秘钥对、SSL/TLS加密

`OpenSSL` 是一个广泛使用的工具和库，用于处理安全协议（如 SSL/TLS）和进行加密操作。它提供了许多命令行功能，支持证书生成、私钥/公钥生成、加密/解密操作、哈希计算等。

下面是常见的 `openssl` 命令和操作示例：

### 1. **检查 OpenSSL 版本**
查看已安装的 OpenSSL 版本：
```bash
openssl version
```

### 2. **生成 RSA 密钥对**
生成 RSA 私钥和公钥：
- 生成 2048 位的私钥：
  ```bash
  openssl genpkey -algorithm RSA -out private.key -aes256
  ```
  这会生成一个加密的私钥文件 `private.key`，并要求输入密码（可以省略 `-aes256`，只生成未加密的私钥）。

- 从私钥中提取公钥：
  ```bash
  openssl rsa -pubout -in private.key -out public.key
  ```

### 3. **生成证书签名请求（CSR）**
生成一个 CSR 请求文件，用于申请 SSL 证书：
```bash
openssl req -new -key private.key -out request.csr
```
此命令会提示你输入证书的详细信息，如国家、组织、公共域名等。

### 4. **自签名 SSL 证书**
如果你需要一个自签名证书（通常用于测试环境），可以使用以下命令：
```bash
openssl req -x509 -new -key private.key -out certificate.crt -days 365
```
这将使用你的私钥生成一个有效期为 365 天的自签名证书。

### 5. **查看证书内容**
查看证书文件的详细信息：
```bash
openssl x509 -in certificate.crt -text -noout
```
此命令将输出证书的详细内容，如公钥、有效期、颁发者等。

### 6. **验证证书**
验证证书链是否有效：
```bash
openssl verify -CAfile ca-certificates.crt certificate.crt
```
`-CAfile` 参数指向一个包含根证书的文件。

### 7. **从证书中提取公钥**
从一个证书中提取公钥：
```bash
openssl x509 -pubkey -noout -in certificate.crt > pubkey.pem
```

### 8. **证书转换**
将证书格式进行转换，例如从 PEM 转换为 DER 格式：
```bash
openssl x509 -in certificate.crt -outform DER -out certificate.der
```

将证书从 PEM 格式转换为 PFX 格式（用于 Windows 环境）：
```bash
openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt
```

### 9. **创建加密文件**
用公钥加密一个文件：
```bash
openssl rsautl -encrypt -inkey public.key -pubin -in plaintext.txt -out encrypted.bin
```

使用私钥解密文件：
```bash
openssl rsautl -decrypt -inkey private.key -in encrypted.bin -out decrypted.txt
```

### 10. **生成对称加密密钥**
生成一个 AES 密钥：
```bash
openssl rand -base64 32
```
这将生成一个 256 位的 AES 密钥。

### 11. **文件加密与解密**
使用对称加密算法（如 AES）加密文件：
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.bin
```
其中 `-aes-256-cbc` 表示使用 AES 算法和 CBC 模式。

解密文件：
```bash
openssl enc -d -aes-256-cbc -in encrypted.bin -out decrypted.txt
```

### 12. **计算文件哈希**
计算文件的哈希值（如 SHA-256）：
```bash
openssl dgst -sha256 filename
```

### 13. **生成 HMAC**
生成带有密钥的哈希值（HMAC）：
```bash
openssl dgst -sha256 -mac HMAC -macopt key:secretkey file.txt
```

### 14. **验证私钥**
验证私钥文件是否有效：
```bash
openssl rsa -in private.key -check
```

### 15. **生成 Diffie-Hellman 参数**
生成 Diffie-Hellman 密钥交换所需的参数：
```bash
openssl dhparam -out dhparam.pem 2048
```

### 16. **创建 PFX（PKCS#12）文件**
将公钥证书和私钥打包成 PFX 格式（用于 Windows）：
```bash
openssl pkcs12 -export -out mycert.pfx -inkey private.key -in certificate.crt -certfile CA.crt
```

### 17. **生成 EC 密钥对**
生成椭圆曲线（EC）密钥对：
```bash
openssl ecparam -name prime256v1 -genkey -noout -out ec_private.key
openssl ec -in ec_private.key -pubout -out ec_public.key
```

### 18. **使用 OpenSSL 进行 TLS 握手**
你可以使用 `s_client` 命令来模拟客户端与服务器的 TLS 握手，诊断 SSL/TLS 连接：
```bash
openssl s_client -connect example.com:443
```

### 19. **提取 PEM 格式的证书**
从 PFX 文件中提取证书：
```bash
openssl pkcs12 -in certificate.pfx -clcerts -nokeys -out certificate.crt
```

### 20. **证书撤销列表（CRL）**
检查证书撤销列表（CRL）：
```bash
openssl crl -in crl.pem -text
```

### 小结

`openssl` 是一个强大的工具，支持多种加密和证书管理操作。从密钥生成到证书管理，再到数据加密和哈希计算，`openssl` 能够完成几乎所有与加密相关的任务。如果你需要执行安全相关的操作，`openssl` 是一个非常有用的工具。
