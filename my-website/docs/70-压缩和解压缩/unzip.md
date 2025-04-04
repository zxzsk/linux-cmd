---
slug: /91e310c4
---
⭐ 解压 .zip 格式

## 1. 简介

`unzip` 命令是 Linux 中用于解压缩 `.zip` 格式压缩文件的工具。它可以快速恢复压缩文件的原始内容和目录结构，适合各种需要解压缩文件的场景 🗜️。

## 2. 常见操作概览 📋

| 操作                    | 命令格式                           | 说明                                 |
|-------------------------|-----------------------------------|--------------------------------------|
| 解压 zip 文件           | `unzip <包名.zip>`                  | 解压 zip 文件到当前目录。            |
| 查看 zip 文件内容       | `unzip -l <包名.zip>`               | 列出 zip 文件中的文件和目录。        |
| 指定解压目录             | `unzip <包名.zip> -d <目标目录>`    | 解压 zip 文件到指定目录。            |
| 解压特定文件             | `unzip <包名.zip> <文件>`           | 仅解压 zip 文件中的指定文件。        |
| 保留 zip 文件的解压缩   | `unzip -k <包名.zip>`               | 解压缩并保留原始 zip 文件。          |

## 3. 命令示例 ⚡

### 3.1 解压 zip 文件

解压单个 `.zip` 文件到当前目录：

```bash
$ unzip myarchive.zip
```

此命令会将 `myarchive.zip` 中的文件和目录解压到当前目录。

### 3.2 查看 zip 文件内容

列出 zip 文件中的文件和目录：

```bash
$ unzip -l myarchive.zip
```

此命令会显示 `myarchive.zip` 中的所有文件和目录。

### 3.3 指定解压目录

解压 zip 文件到指定目录：

```bash
$ unzip myarchive.zip -d /path/to/destination
```

此命令会将 `myarchive.zip` 中的内容解压到 `/path/to/destination` 目录下。

### 3.4 解压特定文件

仅解压 zip 文件中的指定文件：

```bash
$ unzip myarchive.zip file1.txt
```

此命令会仅解压 `myarchive.zip` 中的 `file1.txt` 文件到当前目录。

### 3.5 保留 zip 文件的解压缩

解压缩并保留原始 zip 文件：

```bash
$ unzip -k myarchive.zip
```

此命令会解压 `myarchive.zip` 并保留原始的 zip 文件。

## 4. 常用选项 📝

- `-l`：列出 zip 文件中的文件和目录。
- `-d`：指定解压目录。
- `-o`：覆盖已存在的文件，不提示。
- `-j`：只提取文件，不保留目录结构。
- `-k`：保留原始 zip 文件。
- `-v`：显示详细的解压过程。
- `-q`：安静模式，不显示任何信息。
- `-t`：测试压缩文件的完整性。
- `-x`：排除某些文件或目录，例如 `unzip myarchive.zip -x '*.txt'`。

## 5. 小贴士 💡

- 如果目标文件已存在，`unzip` 会提示是否覆盖。如果需要强制覆盖，可以使用 `-o` 选项。
- 使用 `-q` 选项可以使解压过程安静，不显示任何信息，适合在脚本中使用。
- 对于加密的 zip 文件，`unzip` 会提示输入密码。
- 如果你只想查看 zip 文件中的内容而不解压，可以使用 `-l` 选项。
- `unzip` 命令支持使用通配符（*）来解压特定类型的文件，例如 `unzip myarchive.zip '*.txt'`。

## 6. 总结 🎯

`unzip` 命令是 Linux 中非常实用的解压缩工具。它可以快速恢复 `.zip` 压缩文件的原始内容，适合各种需要处理压缩文件的场景 🗃️。在实际操作中，根据需求选择合适的选项以确保解压缩过程顺利进行。

希望这篇教程帮助你掌握如何使用 `unzip` 命令！别忘了收藏 **在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊
