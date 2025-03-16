import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function CategoryIndex() {
  const category = useCurrentSidebarCategory();
  const [openCategories, setOpenCategories] = useState({});

  // ✅ 递归计算文档数量（包括子目录）
  const countDocs = (items) => {
    if (!items || !Array.isArray(items)) return 0;

    let totalDocs = 0;

    items.forEach((item) => {
      if (item.permalink || item.href) {
        totalDocs += 1; // 统计当前文档
      }
      if (item.items && Array.isArray(item.items)) {
        totalDocs += countDocs(item.items); // 递归统计子目录
      }
    });

    return totalDocs;
  };

  console.log('Category Data:', category);
  console.log('Category Items:', category?.items);
  console.log('Total Docs:', countDocs(category?.items));

  const toggleCategory = (label) => {
    setOpenCategories((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderItems = (items, depth = 0) => {
    if (!items || !Array.isArray(items)) return null;

    return (
      <ul className={styles.list} style={{ paddingLeft: depth * 15 }}>
        {items.map((item) => {
          const isCategory = item.items && Array.isArray(item.items);
          const link = item.permalink || item.href || '';
          const docCount = isCategory ? countDocs(item.items) : 0; // ✅ 递归统计子目录中的文档数

          return (
            <li key={link || item.label} className={styles.item}>
              {isCategory ? (
                <>
                  <span
                    onClick={() => toggleCategory(item.label)}
                    className={`${styles.category} ${openCategories[item.label] ? styles.categoryOpen : ''}`}
                  >
                    {openCategories[item.label] ? '📂▼' : '📂▶'} {item.label} ({docCount})
                  </span>
                  {openCategories[item.label] && renderItems(item.items, depth + 1)}
                </>
              ) : (
                <Link to={link} className={styles.link}>
                  📄 {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {category.label} ({countDocs(category.items)}) {/* ✅ 递归统计总文档数 */}
      </h2>
      {renderItems(category.items)}
    </div>
  );
}
