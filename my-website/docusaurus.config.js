// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查（与 `@ts-check` 配合使用）。
// 有多种等效的方式可以声明 Docusaurus 配置。
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// 此文件在 Node.js 环境中运行，不要在这里使用客户端代码（如浏览器 API、JSX 等）。

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站标题
  title: '在线知识库',
  // 网站标语
  tagline: 'Linux命令备忘录',
  // 网站图标
  favicon: 'img/Shell.svg',

  // 设置网站的生产环境 URL
  url: 'https://linux-cmd.zxzsk.com',
  // 设置网站的基本路径（baseUrl），通常用于 GitHub Pages 部署
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: '/',

  // GitHub Pages 部署配置
  // 如果不使用 GitHub Pages，可以忽略以下配置
  organizationName: 'zxzsk', // 通常是 GitHub 组织或用户名
  projectName: 'linux-cmd', // 通常是仓库名称
  trailingSlash: false, // 是否在 URL 末尾添加斜杠
  deploymentBranch: 'gh-pages', // 部署分支

  // 处理损坏链接的行为：'throw' 抛出错误，'warn' 仅警告
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置
  // 即使你不使用国际化，也可以设置有用的元数据，如 HTML 的 lang 属性。
  // 例如，如果你的网站是中文的，可以将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans', // 默认语言
    locales: ['zh-Hans'], // 支持的语言列表
  },

  // Docusaurus 预设配置
  presets: [
    [
      'classic', // 使用经典预设
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 文档配置
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件路径
          routeBasePath: '/',  // 文档路由



          // 请将此 URL 替换为你的仓库地址。
          // 如果不需要 "编辑此页面" 链接，可以移除此项。
          editUrl:
            'https://github.com/zxzsk/linux-cmd/',
        },
        // 博客配置
        blog: {
          showReadingTime: true, // 显示阅读时间
          feedOptions: {
            type: ['rss', 'atom'], // 支持的订阅类型
            xslt: true, // 是否启用 XSLT
          },
          // 请将此 URL 替换为你的仓库地址。
          // 如果不需要 "编辑此页面" 链接，可以移除此项。
          editUrl:
            'https://github.com/zxzsk/linux-cmd/',
          // 强制博客最佳实践的选项
          onInlineTags: 'warn', // 内联标签警告
          onInlineAuthors: 'warn', // 内联作者警告
          onUntruncatedBlogPosts: 'warn', // 未截断博客文章警告
        },
        // 主题配置
        theme: {
          customCss: './src/css/custom.css', // 自定义 CSS 文件路径

        },
      }),
    ],
  ],


  themes: [
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,   // 是否对搜索结果进行hash
        language: ["en", "zh"], // 搜索语言
        indexDocs: true, // 是否对docs进行索引
        indexBlog: false, // 是否对blog进行索引
        indexPages: false, // 是否对pages进行索引
        docsRouteBasePath: ["/"], // 配置需要搜索的文档路径
        searchResultLimits: 8, // 限制返回数量 别调太大
        highlightSearchTermsOnTargetPage: true, // 在文章中高亮关键词

      }),
    ],
  ],


  // 主题配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你的项目的社交卡片图片
      image: 'img/docusaurus-social-card.jpg',


      // 导航栏配置
      navbar: {
        title: '主页', // 导航栏标题
        logo: {
          alt: 'My Site Logo', // Logo 的 alt 文本
          src: 'img/logo.svg', // Logo 图片路径
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' }, // 博客链接
          {
            href: 'https://github.com/zxzsk/linux-cmd/', // 外部链接
            label: 'GitHub', // 标签文本
            position: 'right', // 位置
          },
        ],
      },
      // 页脚配置
      footer: {
        style: 'dark', // 页脚样式
        links: [
          {
            title: '我的网站', // 链接组标题
            items: [
              {
                label: 'www.zxzsk.com', // 链接标签
                href: 'https://www.zxzsk.com', // 外部链接
              },
              {
                label: '导航', // 链接标签
                href: 'https://nav.zxzsk.com', // 外部链接
              },
            ],
          },
          {
            title: 'More', // 链接组标题
            items: [
              {
                label: 'GitHub', // 链接标签
                href: 'https://github.com/zxzsk/linux-cmd/', // 外部链接
              },
            ],
          },
        ],
        // 页脚版权信息
        copyright: `Copyright © ${new Date().getFullYear()} 在线知识库, Inc. Built with Docusaurus.`,
      },
      // 代码高亮配置
      prism: {
        theme: prismThemes.github, // 亮色主题
        darkTheme: prismThemes.dracula, // 暗色主题
        additionalLanguages: ['bash', 'ini'], // 添加语法高亮额外支持的语言
      },

    }),

  // markdown插件支持
  markdown: {
    // 美人鱼
    mermaid: true,
    // 解析器 md | mdx | detect
    format: 'detect',
  },




};

// 导出配置
export default config;