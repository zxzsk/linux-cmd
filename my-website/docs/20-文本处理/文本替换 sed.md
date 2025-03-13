---
description: 流编辑工具
---

## 1. 命令简介

`sed`（Stream Editor，流编辑器）是一个强大的文本处理工具，广泛用于在命令行中进行文本替换、插入、删除和修改等操作。它可以读取输入流（如文件或标准输入），进行编辑并将结果输出。💡 `sed` 是非常高效的文本处理工具，尤其在自动化脚本中有着重要的作用。

通过使用 `sed`，你可以快速处理文本文件，进行查找替换、行删除、文本格式化等操作！🛠️

## 2. 命令语法

```bash
sed [选项] 'command' [文件]
```

- `command`：要执行的操作（如替换、删除等）。
- `选项`：`sed` 提供了一些选项来定制命令的行为。
- `文件`：要处理的文件，如果不指定文件，`sed` 会从标准输入读取。

## 3. 常见选项

- `-e`：指定要执行的编辑命令。
- `-i`：直接修改文件，而不是输出到标准输出。
- `-n`：禁止默认输出，只有在使用 `p` 命令时才输出。
- `-f`：从文件中读取 `sed` 命令。

## 4. 基本用法

### 4.1 **替换操作**

最常见的 `sed` 用法就是文本替换。以下命令将文件中的第一个 `hello` 替换为 `hi`：

```bash
$ sed 's/hello/hi/' file.txt
```

- `s`：表示替换（substitute）。
- `/hello/`：要被替换的文本。
- `/hi/`：替换成的文本。

### 4.2 **替换所有匹配项**

默认情况下，`sed` 只替换每行的第一个匹配项。如果想替换每一行中所有匹配的文本，可以使用 `g` 标志：

```bash
$ sed 's/hello/hi/g' file.txt
```

- `g`：表示全局替换，即替换该行中所有的 `hello`。

### 4.3 **直接修改文件**

如果你希望直接修改文件内容而不是输出结果，可以使用 `-i` 选项。以下命令会直接在文件中执行替换操作，而不将结果打印到终端：

```bash
$ sed -i 's/hello/hi/g' file.txt
```

### 4.4 **显示指定行的内容**

可以通过 `-n` 选项来禁止 `sed` 默认的输出行为，只打印符合条件的行。比如，打印包含 `hello` 的行：

```bash
$ sed -n '/hello/p' file.txt
```

- `/hello/`：表示匹配包含 `hello` 的行。
- `p`：表示打印匹配的行。

### 4.5 **删除行**

使用 `d` 命令可以删除特定的行。例如，删除包含 `hello` 的所有行：

```bash
$ sed '/hello/d' file.txt
```

- `/hello/`：表示匹配包含 `hello` 的行。
- `d`：表示删除匹配的行。

### 4.6 **替换文本并保留原行**

如果你想替换某些文本并在替换后保留原行，可以使用 `p` 命令。例如，替换 `hello` 为 `hi`，并在输出中显示原始行：

```bash
$ sed 's/hello/hi/p' file.txt
```

- `p`：表示打印替换后的行。

### 4.7 **按行号操作**

你还可以指定按行号进行操作。比如，只替换第 2 行的 `hello`：

```bash
$ sed '2s/hello/hi/' file.txt
```

- `2`：表示操作第 2 行。
- `s/hello/hi/`：表示在第 2 行中将 `hello` 替换为 `hi`。

### 4.8 **插入和追加文本**

`sed` 还可以在特定位置插入或追加文本。你可以使用 `i` 来插入文本，使用 `a` 来追加文本。

- 在第 2 行前插入文本：

  ```bash
  $ sed '2i This is a new line' file.txt
  ```

- 在第 2 行后追加文本：

  ```bash
  $ sed '2a This is an appended line' file.txt
  ```

### 4.9 **多条命令执行**

如果需要在同一命令中执行多条 `sed` 命令，可以使用 `-e` 选项：

```bash
$ sed -e 's/hello/hi/' -e '/bye/d' file.txt
```

- `-e`：表示执行多条命令。
- `s/hello/hi/`：替换 `hello` 为 `hi`。
- `/bye/d`：删除包含 `bye` 的行。

## 5. 命令示例

### 5.1 **替换并显示修改后的内容**

假设文件 `data.txt` 内容如下：

```text
hello world
hello again
goodbye world
```

使用 `sed` 替换 `hello` 为 `hi`：

```bash
$ sed 's/hello/hi/' data.txt
```

输出：

```text
hi world
hi again
goodbye world
```

### 5.2 **删除包含特定文本的行**

删除文件中包含 `goodbye` 的行：

```bash
$ sed '/goodbye/d' data.txt
```

输出：

```text
hello world
hello again
```

### 5.3 **修改文件并保存更改**

直接修改文件 `data.txt`，将 `hello` 替换为 `hi`：

```bash
$ sed -i 's/hello/hi/g' data.txt
```

文件内容更新为：

```text
hi world
hi again
goodbye world
```

## 6. 总结

`sed` 是一个功能强大的流编辑器，它可以在不打开编辑器的情况下处理文本，快速进行替换、删除、插入、格式化等操作。掌握了 `sed`，你就能在命令行中高效地处理各种文本文件，提升工作效率。⏳

`sed` 的应用场景非常广泛，尤其适用于日志处理、文本文件批量修改等任务。🚀

希望这篇教程帮助你掌握了 `sed` 的基础使用方法！加油，在文本处理的道路上越走越远！💪

---

记得收藏在线知识库 [www.zxzsk.com](http://www.zxzsk.com)，了解更多实用的 Linux 命令技巧！📚

