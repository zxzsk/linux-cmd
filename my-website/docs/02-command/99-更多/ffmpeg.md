

流媒体处理、视频剪辑

## 1. 简介

`FFmpeg` 是一个强大的音视频处理工具，支持几乎所有的视频和音频格式的转换、剪辑、合并、压缩等功能。它在 Linux 系统中常用于视频编辑、格式转换、音频处理和流媒体处理等任务🎧。

FFmpeg 支持多种操作方式，从简单的文件转换到复杂的视频处理，能够满足大多数音视频编辑需求。掌握 FFmpeg 的常用命令将极大提高你在音视频处理方面的效率🎥。

本文仅收集了一些基础用法，更为详细的内容可查看 [ffmpeg官方文档](https://ffmpeg.org//ffmpeg.html)

你可以通过以下命令安装它
```bash
sudo apt install ffmpeg
```

## 2. 常见操作概览 📋

| 操作                    | 命令格式                               | 说明                                           |
|-------------------------|---------------------------------------|------------------------------------------------|
| 显示版本信息            | `ffmpeg -version`                     | 显示 FFmpeg 的版本信息。                       |
| 查看帮助信息            | `ffmpeg -h`                           | 显示 FFmpeg 命令的基本帮助。                   |
| 转换视频格式            | `ffmpeg -i input.mp4 output.avi`      | 将 `input.mp4` 视频转换为 `output.avi` 格式。  |
| 提取音频                 | `ffmpeg -i input.mp4 -vn output.mp3`  | 从 `input.mp4` 中提取音频并保存为 `output.mp3`。|
| 调整视频分辨率          | `ffmpeg -i input.mp4 -s 1280x720 output.mp4` | 调整视频分辨率为 1280x720。                    |
| 剪切视频                 | `ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 output.mp4` | 裁剪视频为 1 分钟到 2 分钟的片段。              |
| 视频压缩                 | `ffmpeg -i input.mp4 -b:v 1000k -b:a 128k output.mp4` | 压缩视频和音频比特率。                          |
| 合并视频文件             | `ffmpeg -f concat -i file_list.txt -c copy output.mp4` | 合并多个视频文件为一个文件。                    |
| 视频加水印               | `ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" output.mp4` | 给视频添加水印。                                |
| 查看视频详细信息         | `ffmpeg -i input.mp4`                 | 查看视频的详细信息，如编码、分辨率、帧率等。    |

## 3. 命令示例 ⚡

### 3.1 显示版本信息

查看 FFmpeg 的版本信息：

```bash
$ ffmpeg -version
```

此命令会显示 FFmpeg 的版本及构建配置。

### 3.2 转换视频格式

将 `input.mp4` 转换为 `output.avi`：

```bash
$ ffmpeg -i input.mp4 output.avi
```

此命令会将 `input.mp4` 文件转换为 `output.avi` 格式。

### 3.3 提取音频

从 `input.mp4` 中提取音频并保存为 `output.mp3`：

```bash
$ ffmpeg -i input.mp4 -vn output.mp3
```

此命令会提取视频文件中的音频流，保存为 MP3 格式。

### 3.4 调整视频分辨率

将视频分辨率调整为 1280x720：

```bash
$ ffmpeg -i input.mp4 -s 1280x720 output.mp4
```

此命令会调整视频的分辨率为 1280x720。

### 3.5 剪切视频

从视频中裁剪 1 分钟到 2 分钟的片段：

```bash
$ ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 output.mp4
```

此命令会从 `input.mp4` 视频中裁剪 1 分钟到 2 分钟的片段，并保存为 `output.mp4`。

### 3.6 合并多个视频文件

合并多个视频文件为一个文件：

```bash
$ ffmpeg -f concat -i file_list.txt -c copy output.mp4
```

`file_list.txt` 文件应该包含需要合并的视频文件路径列表。

### 3.7 添加水印

给视频添加水印：

```bash
$ ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" output.mp4
```

此命令将 `watermark.png` 水印图像添加到 `input.mp4` 视频的左上角，并保存为 `output.mp4`。

### 3.8 转换视频为GIF

假设你的录屏视频文件名为 `recording.mp4`，你可以使用以下命令将它转换为GIF：

```bash
ffmpeg -i recording.mp4 -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```

<details>
这个FFmpeg命令用于将一个视频文件转换为GIF格式。以下是对每个参数的详细解释：

#### 基本参数

- **`-i recording.mp4`**：
  - 指定输入文件。这里是 `recording.mp4`，FFmpeg将从这个文件读取视频数据。

- **`-vf`**：
  - 这个参数用于应用视频滤镜（video filters）。以下是这个滤镜链中的各个部分的解释：

#### 视频滤镜 (`-vf`)

1. **fps=10**：
   - 设置输出视频的帧率为每秒10帧。这意味着每秒将有10个图像帧被转换为GIF格式。较低的帧率可以减小文件大小，但也可能使动画看起来不那么流畅。

2. **scale=320:-1:flags=lanczos**：
   - `scale` 滤镜用于改变视频的分辨率。
     - `320:-1`：将视频的宽度设置为320像素，高度自动调整以保持纵横比。
     - `flags=lanczos`：使用Lanczos缩放算法，该算法在缩放图像时提供较好的质量。

3. **split[s0][s1]**：
   - `split` 滤镜将视频流分成两个副本，分别标记为 `[s0]` 和 `[s1]`。这是为了后续的滤镜处理准备的。

4. **[s0]palettegen[p]**：
   - `palettegen` 滤镜用于从 `[s0]` 流中生成一个调色板 `[p]`。GIF格式只支持最多256色，所以需要生成一个最适合视频的调色板。

5. **[s1][p]paletteuse**：
   - `paletteuse` 滤镜使用前面生成的调色板 `[p]` 来将 `[s1]` 流中的帧转换为GIF格式。

#### 其他参数

- **`-loop 0`**：
  - 设置GIF动画循环播放。`0` 表示无限循环。

- **`output.gif`**：
  - 指定输出文件的名称，这里是 `output.gif`。

#### 总结

这个命令的作用是：
- 从 `recording.mp4` 读取视频。
- 将帧率调整为10帧每秒。
- 调整视频尺寸为宽320像素，高度自动调整。
- 生成一个适合GIF的颜色调色板。
- 使用这个调色板将视频转换为GIF格式，并设置为无限循环播放。

通过这些参数，FFmpeg可以将一个视频文件转换为适合网络分享或展示的GIF动画，平衡了文件大小和动画的流畅性。注意，GIF格式文件通常会比原始视频大得多，因此在设置这些参数时需要考虑文件大小和质量之间的平衡。
</details>

解释：
- `-i recording.mp4` 指定输入文件。
- `-vf` 应用视频滤镜：
    - `fps=10` 设置帧率为10帧每秒。
    - `scale=320:-1` 将视频宽度设置为320像素，高度自动调整。
    - `flags=lanczos` 提供更好的缩放质量。
    - `split[s0][s1]` 将视频流分成两个副本。
    - `palettegen[p]` 生成颜色调色板。
    - `paletteuse` 使用生成的调色板来转换视频。
- `-loop 0` 使GIF循环播放。
- `output.gif` 是输出GIF文件的名称。

## 4. 常用选项 📝

- `-i input.mp4`：输入文件。
- `-s 1280x720`：设置视频分辨率。
- `-b:v 1000k`：设置视频比特率。
- `-b:a 128k`：设置音频比特率。
- `-vn`：禁用视频流，仅提取音频。
- `-ss 00:01:00`：设置视频开始时间。
- `-to 00:02:00`：设置视频结束时间。
- `-filter_complex`：设置复杂过滤器，例如水印添加。

## 5. 小贴士 💡

- 使用 `ffmpeg -i input.mp4` 查看视频文件的详细信息（如编码、分辨率等），方便做进一步处理。
- 可以通过组合使用多个过滤器，例如同时调整视频分辨率和加水印：`ffmpeg -i input.mp4 -s 1280x720 -i watermark.png -filter_complex "overlay=10:10" output.mp4`。
- 使用 `-c copy` 可以避免重新编码，直接复制输入流，这样可以加速文件处理。
- 如果想要批量处理多个文件，可以使用脚本自动化处理。

## 6. 总结 🎯

FFmpeg 是一个强大的音视频处理工具，它不仅可以转换格式，还支持视频剪切、合并、加水印等多种操作。掌握 FFmpeg 的常用命令，可以有效提高你的音视频编辑效率🎬。

希望这篇教程帮助你掌握如何使用 FFmpeg 命令！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊

