// 自动化生成导航栏项目
// 通过读取 docs 目录下的第一层目录，动态生成导航栏项目。
// 通过 glob.sync() 获取 docs 目录下的第一层目录。
// 通过 path.basename() 获取目录名称。
// 通过 formatDirName() 去除目录名称中的数字编号。
// 通过 sidebars 对象保存导航栏项目。


// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查（与 `@ts-check` 配合使用）。
// 有多种等效的方式可以声明 Docusaurus 配置。
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

// 获取 docs 目录下的第一层目录
const docsDir = path.resolve(__dirname, 'docs');
const docDirs = fs.readdirSync(docsDir).filter(file => fs.statSync(path.join(docsDir, file)).isDirectory());

// 去除目录名称中的数字编号
const formatDirName = (dir) => dir.replace(/^\d+-/, '');

// 动态生成导航栏项目
const navbarItems = docDirs.map(dir => ({
  to: `/nav/${formatDirName(dir)}/0.0`, // 确保链接指向正确的目录
  label: formatDirName(dir).charAt(0).toUpperCase() + formatDirName(dir).slice(1),
  position: 'left',
}));

// 添加其他固定的导航栏项目
navbarItems.push(
  { to: '/blog', label: 'Blog', position: 'left' },
  {
    href: 'https://github.com/zxzsk/linux-cmd/',
    label: 'GitHub',
    position: 'right',
  }
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '在线知识库',
  tagline: 'Linux命令备忘录',
  favicon: 'img/Shell.svg',
  url: 'https://linux-cmd.zxzsk.com',
  baseUrl: '/',
  organizationName: 'zxzsk',
  projectName: 'linux-cmd',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // 确保文档的基础路径正确
          editUrl: 'https://github.com/zxzsk/linux-cmd/',
          // 侧边栏目录折叠 = true 允许用户折叠sidebar上的目录
          sidebarCollapsible: true,
          // true 默认折叠所有目录，false 默认展开所有目录
          sidebarCollapsed: false,
          // 是否显示最后更新文档的时间
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/zxzsk/linux-cmd/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ["/"],
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '主页',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: navbarItems, // 确保 items 是一个数组
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '我的网站',
          items: [
            { label: 'www.zxzsk.com', href: 'https://www.zxzsk.com' },
            { label: '导航', href: 'https://nav.zxzsk.com' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/zxzsk/linux-cmd/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 在线知识库, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ini'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  },
  markdown: {
    mermaid: true,
    format: 'mdx',
  },
};

export default config;