---
slug: /2bf00fb2
---
⭐创建文件夹

## 1. 命令简介

在 Linux 中，`mkdir`（make directory）是用来创建新目录的命令。使用这个命令，您可以轻松地在系统中创建新的文件夹，将文件组织得更井井有条！🌟 不管是管理项目还是整理资料，`mkdir` 都是不可或缺的工具。

## 2. 命令格式

```bash
mkdir [选项] 目录名称
```

`mkdir` 的基本用法非常简单，只需要指定一个目录名称，就可以在当前工作目录下创建该目录。

## 3. 常用选项

### 3.1 **基本用法**

```bash
$ mkdir myfolder
```

这条命令会在当前目录下创建一个名为 `myfolder` 的新目录。📂

### 3.2 **创建多级目录**

有时，您可能需要一次性创建多层目录结构。在默认情况下，`mkdir` 只会创建一级目录。如果想要同时创建多个目录，可以使用 `-p` 选项：

```bash
$ mkdir -p folder1/folder2/folder3
```

这条命令将会在当前目录下创建一个名为 `folder1` 的目录，在 `folder1` 中创建 `folder2` 目录，再在 `folder2` 中创建 `folder3` 目录。🎯

### 3.3 **设置目录权限**

可以使用 `-m` 选项在创建目录时指定权限。权限值是八进制表示法，例如 `755`。这将设置目录的读取、写入和执行权限：

```bash
$ mkdir -m 755 myfolder
```

这个命令将在当前目录下创建 `myfolder` 目录，并将权限设置为 `755`，表示目录所有者可以读、写、执行，其他用户可以读取和执行。🔐

### 3.4 **创建多个目录**

如果您要创建多个目录，可以一次性传递多个目录名称：

```bash
$ mkdir dir1 dir2 dir3
```

这条命令会在当前目录下创建三个目录：`dir1`、`dir2` 和 `dir3`。🎉

### 3.5 **避免错误：如果目录已存在**

如果指定的目录已经存在，默认情况下，`mkdir` 会报错。可以使用 `-p` 选项，避免因为目录已存在而导致错误：

```bash
$ mkdir -p existing_folder
```

这个命令会检查 `existing_folder` 是否已经存在，如果存在就不做任何操作，如果不存在则会创建它。🙌

## 4. 命令示例

### 4.1 **创建单个目录**

```bash
$ mkdir myproject
```

输出示例：

```bash
$ ls
myproject
```

使用 `mkdir` 创建了一个名为 `myproject` 的目录，之后使用 `ls` 命令可以查看该目录是否已成功创建。📂

### 4.2 **创建多级目录**

```bash
$ mkdir -p project/{src,docs,tests}
```

输出示例：

```bash
$ ls project
docs  src  tests
```

使用 `-p` 选项，可以一次性创建多级目录结构。上述命令会在 `project` 目录下创建三个子目录：`src`、`docs` 和 `tests`。👨‍💻

### 4.3 **设置权限**

```bash
$ mkdir -m 755 newfolder
```

输出示例：

```bash
$ ls -ld newfolder
drwxr-xr-x 2 user user 4096 Nov 18 14:55 newfolder
```

这条命令创建了一个目录 `newfolder`，并将其权限设置为 `755`。通过 `ls -ld` 命令可以查看目录的权限设置。🔑

### 4.4 **创建多个目录**

```bash
$ mkdir dir1 dir2 dir3
```

输出示例：

```bash
$ ls
dir1  dir2  dir3
```

一次性创建了三个目录！😊

## 5. 小技巧与注意事项

### 5.1 **创建带空格的目录名**

如果目录名称中包含空格，可以使用引号将目录名括起来：

```bash
$ mkdir "My New Folder"
```

或者用反斜杠（`\`）转义空格：

```bash
$ mkdir My\ New\ Folder
```

这样，您就能创建带有空格的目录啦！🎉

### 5.2 **查看目录的详细信息**

创建目录后，可以使用 `ls -ld` 来查看目录的详细信息，包括权限、所有者、大小等：

```bash
$ ls -ld myfolder
```

### 5.3 **创建多个目录并设置不同权限**

```bash
$ mkdir -m 700 dir1
$ mkdir -m 755 dir2
```

这将分别为 `dir1` 设置 `700` 权限，为 `dir2` 设置 `755` 权限。

## 6. 总结

`mkdir` 是一个简单而强大的命令，它帮助您在 Linux 系统中快速创建目录。通过掌握不同的选项，您可以轻松地创建多层目录、设置权限、避免错误等。💪 让我们一起用 `mkdir` 来整理和管理文件系统，提升工作效率！🚀

记得，多加练习，让 `mkdir` 成为你的 Linux 工具箱中的得力助手！🎯


加油，继续在命令行中闯荡吧！💪🏻 别忘了收藏在线知识库（[www.zxzsk.com](http://www.zxzsk.com)），让更多有用的知识为你提供帮助！😊

继续探索，你已经很棒啦！🌟
