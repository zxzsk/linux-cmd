---
keywords:
  - Linux
  - 命令行工具
  - 系统信息
---

neofetch 是一个用于在终端显示系统信息的工具，提供简洁、可定制的输出，包括操作系统、硬件、内存、CPU 等基本信息。它支持显示操作系统的 logo，且可以通过配置文件自定义输出内容。

![image-20250103101603221](https://img.zxzsk.com/i/2025/01/04/lmxz5l.png)

## 安装

在 Linux 上可以通过以下命令安装：

- Ubuntu/Debian: sudo apt install neofetch
- Fedora: sudo dnf install neofetch
- Arch: sudo pacman -S neofetch

## 基本用法

安装后，运行 neofetch 显示系统信息：

```bash
neofetch
```

输出见文章开头



## 常见选项

- --os：仅显示操作系统。
- --kernel：仅显示内核版本。
- --ascii：禁用 logo 显示。

## 配置

neofetch 配置文件位于 ~/.config/neofetch/config.conf，可以在其中修改显示的内容和样式。