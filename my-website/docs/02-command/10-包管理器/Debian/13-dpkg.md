---
slug: /b5ff4ee5
---


⭐Debian 系统包管理器，比 apt 包管理器更偏底层。

`dpkg` 是 Debian 及其衍生版本（如 Ubuntu）中使用的低级软件包管理工具。它用于安装、构建、删除和管理 `.deb` 格式的软件包。虽然 `dpkg` 是强大的包管理工具，但在实际使用中，`apt` 命令（高级包工具）常常作为更高级的工具，简化了包管理的过程。

## 1. 安装软件包 🔧

### 1.1 使用 dpkg 安装 `.deb` 软件包

`dpkg` 用于直接处理 `.deb` 包文件。要安装 `.deb` 包，使用 `-i` 选项：

```bash
sudo dpkg -i <package-file.deb>
```

例如，安装 `vim` 的 `.deb` 包：

```bash
sudo dpkg -i vim_8.0.deb
```

安装过程中，`dpkg` 只会安装 `.deb` 文件，而不会自动处理缺失的依赖。如果缺少依赖，你可以使用 `apt-get` 来修复它们：

```bash
sudo apt-get install -f
```

#### 与 apt 的对比 🔍

`apt` 在安装软件包时自动处理依赖关系，用户不需要手动修复：

```bash
sudo apt install <package-name>
```

`apt` 还可以从软件仓库中直接安装软件包，而不需要下载 `.deb` 文件。👏

## 2. 删除软件包 ❌

### 2.1 使用 dpkg 删除软件包

要删除已安装的软件包，可以使用 `-r`（remove）选项：

```bash
sudo dpkg -r <package-name>
```

例如，删除 `vim`：

```bash
sudo dpkg -r vim
```

### 2.2 完全删除软件包及其配置文件

如果你希望删除软件包及其所有配置文件，可以使用 `-P`（purge）选项：

```bash
sudo dpkg -P <package-name>
```

例如，完全删除 `vim`：

```bash
sudo dpkg -P vim
```

#### 与 apt 的对比 🧹

`apt` 提供了类似的功能来删除包及其配置文件：

```bash
sudo apt remove <package-name>  # 删除包
sudo apt purge <package-name>   # 完全删除包及配置文件
```

`apt` 会处理依赖关系，并确保删除不再需要的包哦！🧘‍♀️

## 3. 查看已安装的软件包 📂

### 3.1 使用 dpkg 查看已安装的所有软件包

通过 `dpkg -l` 命令可以列出所有已安装的软件包：

```bash
dpkg -l
```

### 3.2 查看单个软件包的详细信息

使用 `-s`（status）选项查看某个包的详细信息：

```bash
dpkg -s <package-name>
```

例如，查看 `vim` 包的详细信息：

```bash
dpkg -s vim
```

#### 与 apt 的对比 👀

`apt` 提供了相似的功能，但更加简洁：

```bash
apt list --installed   # 查看已安装的软件包
apt show <package-name>  # 查看某个软件包的详细信息
```

`apt` 提供了更直观的命令输出，特别适合对包进行查询和管理。📑

## 4. 查询软件包的内容 🧐

### 4.1 查看软件包中的文件

要查看某个包中包含的所有文件，使用 `dpkg -L` 命令：

```bash
dpkg -L <package-name>
```

例如，查看 `vim` 包的所有文件：

```bash
dpkg -L vim
```

### 4.2 查找文件属于哪个软件包

如果你想知道某个文件属于哪个软件包，可以使用 `dpkg -S` 命令：

```bash
dpkg -S <file-path>
```

例如，查找 `/usr/bin/vim` 属于哪个软件包：

```bash
dpkg -S /usr/bin/vim
```

#### 与 apt 的对比 🔄

`apt` 也支持类似的功能，但语法更简洁：

```bash
apt-file list <package-name>  # 查看包中的文件
apt-file search <file-path>   # 查找文件属于哪个包
```

需要注意的是，`apt-file` 是一个单独的工具，在首次使用时可能需要更新索引：

```bash
sudo apt update
sudo apt install apt-file
```

## 5. 修复损坏的软件包 🔧

如果在使用 `dpkg` 时遇到依赖问题或损坏的包，可以使用以下命令修复：

```bash
sudo apt-get install -f
```

该命令会自动修复依赖问题，并确保系统中的包能够正确安装。⚙️

## 6. 总结 🌟

`dpkg` 是一个强大的工具，适用于直接处理 `.deb` 包文件，它允许你安装、删除、查询和管理包。虽然 `dpkg` 提供了底层操作的灵活性，但在日常使用中，`apt` 提供了更高层次的封装，自动处理依赖和更新包。因此，对于大多数用户来说，`apt` 更加方便和易用。😊

然而，`dpkg` 在需要直接操作 `.deb` 包文件时仍然不可或缺。如果你需要更精细地控制包管理，`dpkg` 会是一个不错的选择。希望这篇教程帮助你更好地理解 `dpkg` 和 `apt` 的区别与使用场景，让你在软件包管理中得心应手！🌈

希望这篇教程对你有所帮助！别忘了收藏 **在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊🎉


<details>
<summary> dpkg --help </summary>
```bash
$ dpkg --help
用法：dpkg [<选项>...] <命令>

命令：
  -i|--install       <.deb 文件名> ... | -R|--recursive <目录> ...
  --unpack           <.deb 文件名> ... | -R|--recursive <目录> ...
  -A|--record-avail  <.deb 文件名> ... | -R|--recursive <目录> ...
  --configure        <软件包名>    ... | -a|--pending
  --triggers-only    <软件包名>    ... | -a|--pending
  -r|--remove        <软件包名>    ... | -a|--pending
  -P|--purge         <软件包名>    ... | -a|--pending
  -V|--verify <软件包名> ...       检查包的完整性。  
  --get-selections [<表达式> ...]  把已选中的软件包列表打印到标准输出。  
  --set-selections                 从标准输入里读出要选择的软件。  
  --clear-selections               取消选中所有非必需的软件包。  
  --update-avail <软件包文件>      替换现有可安装的软件包信息。  
  --merge-avail  <软件包文件>      把文件中的信息合并到系统中。  
  --clear-avail                    清除现有的软件包信息。  
  --forget-old-unavail             忘却已被卸载的不可安装的软件包。  
  -s|--status      <软件包名> ...  显示指定软件包的详细状态。  
  -p|--print-avail <软件包名> ...  显示可供安装的软件版本。  
  -L|--listfiles   <软件包名> ...  列出属于指定软件包的文件。  
  -l|--list  [<表达式> ...]        简明地列出软件包的状态。  
  # highlight-next-line
  -S|--search <表达式> ...         搜索含有指定文件的软件包。  
  -C|--audit [<表达式> ...]        检查是否有软件包残损。  
  --yet-to-unpack                  列出标记为待解压的软件包。  
  --predep-package                 列出待解压的预依赖。  
  --add-architecture    <体系结构> 添加 <体系结构> 到体系结构列表。  
  --remove-architecture <体系结构> 从体系结构列表中移除 <体系结构>。  
  --print-architecture             显示 dpkg 体系结构。  
  --print-foreign-architectures    显示已启用的异质体系结构。  
  --assert-<特性>                  对指定特性启用断言支持。  
  --validate-<属性> <字符串>       验证一个 <属性>的 <字符串>。  
  --compare-versions <a> <关系> <b> 比较版本号 - 见下。  
  --force-help                     显示本强制选项的帮助信息。  
  -Dh|--debug=help                 显示有关出错调试的帮助信息。  
  -?, --help                       显示本帮助信息。      
  --version                    显示版本信息。

可验证的属性：pkgname, archname, trigname, version.

调用 dpkg 并带参数 -b, --build, -c, --contents, -e, --control, -I, --info,
  -f, --field, -x, --extract, -X, --vextract, --ctrl-tarfile, --fsys-tarfile
是针对归档文件的。 (输入 dpkg-deb --help 获取帮助)

选项：  
  --admindir=<目录>          使用指定 <目录> 而非 /var/lib/dpkg。  
  --root=<目录>              安装到另一个根目录下。  
  --instdir=<目录>           改变安装目录的同时保持管理目录不变。  
  --pre-invoke=<命令>        设置调用前钩子。  
  --post-invoke=<命令>       设置调用后钩子。  
  --path-exclude=<表达式>    不要安装匹配Shell表达式的路径。  
  --path-include=<表达式>    在排除模式后再包含一个模式。  
  -O|--selected-only         跳过没有被选中安装或升级的软件包。  
  -E|--skip-same-version     跳过版本与已安装软件版本相同的软件包。  
  -G|--refuse-downgrade      跳过版本早于已安装软件版本的的软件包。  
  -B|--auto-deconfigure      就算会损坏其他软件包，也要安装。  
  --[no-]triggers            跳过或强制随之发生的触发器处理。  
  --verify-format=<格式>     检查输出格式（支持的值：'rpm'）  
  --no-pager                 禁用任何分页器。  
  --no-debsig                不去尝试验证软件包的签名。  
  --no-act|--dry-run|--simulate
                             仅报告要执行的操作 - 但是不执行。  
  -D|--debug=<八进制数>      开启调试(参见 -Dhelp 或者 --debug=help)。  
  --status-fd <n>            发送状态更新到文件描述符<n>。  
  --status-logger=<命令>     发送状态更新到 <命令> 的标准输入。  
  --log=<文件名>             将状态更新和操作信息到 <文件名>。  
  --ignore-depends=<软件包>[,...]
                             忽略关于 <软件包> 的所有依赖关系。  
  --force-<项目>...          忽视遇到的问题(参见 --force-help)。  
  --no-force-<项目>[,...]    遇到指定问题时停止。  
  --refuse-<项目>[,...]      同上。  
  --abort-after <n>          累计遇到 <n> 个错误后中止。  
  --robot                    对某些命令使用机器可读的输出。

可供--compare-versions 使用的比较运算符有：
 lt le eq ne ge gt        (如果版本号为空，那么就认为它先于任意版本号)；
 lt-nl le-nl ge-nl gt-nl  (如果版本号为空，那么就认为它后于任意版本号)；
  < << <= = >= >> >        (仅仅是为了与主控文件的语法兼容)。

'apt' 和 'aptitude' 提供了更为便利的软件包管理。

```
</details>
