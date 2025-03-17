---
slug: /a51875bd
---



Zsh（Z Shell）是一个功能强大的 Unix/Linux shell，它是 Bourne Shell（sh）的扩展版本，提供了许多增强功能，如更好的自动补全、主题支持、插件系统等。

Zsh 的优点是对脚本兼容好，缺点是需要自己下载和配置插件。

## 安装 Zsh

在大多数 Linux 发行版和 macOS 上，Zsh 可以通过包管理器安装。

- **Debian/Ubuntu**:

  ```bash
  sudo apt-get install zsh
  ```

- **Fedora**:

  ```bash
  sudo dnf install zsh
  ```
- **macOS**:

  ```bash
  brew install zsh
  ```

## 设置 Zsh 为默认 Shell

安装完成后，你可以将 Zsh 设置为默认的 shell：

```bash
chsh -s $(which zsh)
```

## 配置文件

Zsh 的配置文件是 `~/.zshrc`。你可以在这个文件中添加自定义配置、别名、函数等。

## 插件和主题

Zsh 支持丰富的插件和主题，可以通过 Oh My Zsh 来管理。

### 安装 Oh My Zsh

Oh My Zsh 是一个社区驱动的框架，用于管理 Zsh 配置。

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> DNS 劫持导致无法下载？替换 DNS 配置
>
> ```bash
> # 判断 DNS 劫持
> nslookup raw.githubusercontent.com
>
> # 替换 nameserver
> ➜  ~ sed '/^#/d;/^$/d' /etc/resolv.conf
> options edns0 trust-ad
> search wifi
> nameserver 8.8.8.8
> nameserver 1.1.1.1
> ```

### 使用插件

安装 **`zsh-autosuggestions`** 和 **`zsh-syntax-highlighting`**

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

在 `~/.zshrc` 中，你可以启用插件：

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

### 使用主题

同样在 `~/.zshrc` 中，你可以设置主题：

```bash
ZSH_THEME="robbyrussell"
```

#### p10k

p10k 一个更风格的主题。

https://github.com/romkatv/powerlevel10k




## 常用命令

- **查看当前使用的 shell**:

  ```bash
  echo $SHELL
  ```
- **重新加载 `.zshrc` 文件**:

  ```bash
  source ~/.zshrc
  ```

## 其他工具

- **zsh-autosuggestions**: 提供命令自动补全建议。
- **zsh-syntax-highlighting**: 提供命令语法高亮。

## 参考文档

- [Zsh 官方文档](https://zsh.sourceforge.io/Doc/)
- [Oh My Zsh GitHub](https://github.com/ohmyzsh/ohmyzsh)

通过这些工具和配置，你可以极大地提升命令行操作的效率和体验。
