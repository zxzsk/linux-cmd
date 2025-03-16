const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

/**
 * 生成一个8位长度的随机slug
 * @returns {string} 8位随机十六进制字符串
 */
function generateSlug() {
  return crypto.randomBytes(4).toString('hex');
}

/**
 * 处理单个 Markdown 文件：
 * 1. 解析文件中的 front matter
 * 2. 如果前置数据中没有 slug，则生成并添加
 * 3. 将修改后的内容写回文件
 *
 * @param {string} filePath 文件的完整路径
 */
function processMarkdownFile(filePath) {
  // 读取 Markdown 文件内容
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // 使用 gray-matter 解析 front matter 和正文内容
  const parsed = matter(fileContent);
  
  // 如果 front matter 对象中没有 slug 字段，则添加
  if (!parsed.data.slug) {
    const newSlug = `/${generateSlug()}`;
    parsed.data.slug = newSlug;
    console.log(`为文件 ${filePath} 生成新的 slug: ${newSlug}`);
    // 通过 gray-matter 重新构造 Markdown 内容（包含新的 front matter）
    const newContent = matter.stringify(parsed.content, parsed.data);
    // 将新的内容写回到源文件
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

/**
 * 递归遍历指定目录，处理所有 Markdown 文件（支持 .md 和 .mdx 后缀）
 *
 * @param {string} dirPath 目录路径
 */
function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      // 如果是目录，则递归处理
      processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      // 如果是 Markdown 文件，调用处理函数
      processMarkdownFile(fullPath);
    }
  }
}

// 指定 docs 目录所在路径（相对于脚本位置）
const docsPath = path.join(__dirname, '../docs');
// 开始处理 docs 目录下的所有 Markdown 文件
processDirectory(docsPath);