## 静态网站

网站使用 [Docusaurus](https://docusaurus.io/) 构建。

### 安装

克隆项目，进入目录，运行npm命令。

```
$ npm install
```

### 预览

```
$ npm start
```

本地 3000 端口访问预览。

### 构建

```
$ npm run build
```

生成网站源文件。

## 插件

### 永久链接

运行脚本自动完成：为每篇文章生成长度为 8 位数的slug，用以固定文章URL。

```
node scripts/generateSlug.js
```
