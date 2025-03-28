---
slug: /751efa5a
---
⭐删除空文件夹

## 1. 命令简介

在 Linux 系统中，`rmdir` 命令是一个专门用于删除空目录的命令。📂 与 `rm` 命令不同，`rmdir` 只能删除空目录，因此它是一个非常安全的命令，不会误删除包含文件或其他目录的目录。🎯

## 2. 命令语法

```bash
rmdir [选项] 目录...
```

- **目录**：你要删除的空目录的路径。如果目录非空，`rmdir` 将无法删除它。

## 3. 命令选项

### 3.1 **常用选项**

- `-p`：递归删除目录及其父目录。该选项会尝试删除指定目录及其所有父目录，只要这些父目录也是空的。🧹
- `--ignore-fail-on-non-empty`：忽略无法删除的非空目录，继续删除其他空目录。🚫

## 4. 命令示例

### 4.1 **删除单个空目录**

假设你要删除目录 `dir1`，首先确保该目录是空的，然后执行：

```bash
$ rmdir dir1
```

这条命令将删除 `dir1` 目录。如果目录不为空，`rmdir` 会显示错误信息，并且不会删除该目录。🛑

### 4.2 **删除多个空目录**

你可以一次性删除多个空目录，只需在命令后提供多个目录路径：

```bash
$ rmdir dir1 dir2 dir3
```

这条命令会删除 `dir1`、`dir2` 和 `dir3`，前提是它们都是空的。🌱

### 4.3 **递归删除父目录**

如果要递归删除目录及其父目录，可以使用 `-p` 选项：

```bash
$ rmdir -p dir1/subdir
```

如果 `dir1/subdir` 是空的，`rmdir` 会删除 `subdir`，然后检查 `dir1` 是否为空，如果是，也会删除 `dir1`。这个过程会持续到所有父目录都为空为止。🧳

### 4.4 **忽略无法删除的非空目录**

如果你希望忽略那些非空目录的错误，并继续删除其他空目录，可以使用 `--ignore-fail-on-non-empty` 选项：

```bash
$ rmdir --ignore-fail-on-non-empty dir1 dir2
```

这条命令将删除空目录 `dir1`，如果 `dir2` 非空，命令会跳过 `dir2`，继续删除其他空目录。🔄

## 5. 常见错误

- **目录非空**：如果你尝试删除一个非空目录，`rmdir` 会报错，提示该目录非空。为了删除非空目录，可以使用 `rm -r` 命令。

### 错误示例：

```bash
$ rmdir dir1
rmdir: failed to remove 'dir1': Directory not empty
```

## 6. 总结

`rmdir` 是一个非常简单而安全的命令，它仅适用于删除空目录。使用 `rmdir` 命令时，你只需确保目标目录为空，否则它不会删除该目录。💡

如果你需要删除包含文件或子目录的目录，记得使用 `rm -r` 来递归删除整个目录及其内容！🚀

加油，在 Linux 的命令行世界里继续探索！每学会一个新命令，你就离 Linux 大师更进一步！⚡️ 别忘了收藏我们的在线知识库 [www.zxzsk.com](http://www.zxzsk.com)，查阅更多实用教程！📚

继续加油，你正在变得越来越棒！🌟

---

希望这个教程对你有帮助！
