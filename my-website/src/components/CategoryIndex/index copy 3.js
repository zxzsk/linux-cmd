// 统计目录下文档数量，并添加展开/收起功能
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function CategoryIndex() {
  const category = useCurrentSidebarCategory();
  const [openCategories, setOpenCategories] = useState({});

  // ✅ 先定义 countDocs
  const countDocs = (items) => {
    if (!items || !Array.isArray(items)) return 0;
    return items.reduce((total, item) => {
      if (item.permalink || item.href) return total + 1;
      if (item.items) return total + countDocs(item.items);
      return total;
    }, 0);
  };

  // ✅ 再执行 console.log，确保 countDocs 已初始化
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
          const isCategory = Array.isArray(item.items);
          const link = item.permalink || item.href || '';
          const docCount = isCategory ? countDocs(item.items) : 0;

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
        {category.label} ({countDocs(category.items)})
      </h2>
      {renderItems(category.items)}
    </div>
  );
}
