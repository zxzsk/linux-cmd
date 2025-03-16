// 实现文档目录基础功能 + 展开/收起功能 + 样式调整
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function CategoryIndex() {
  const category = useCurrentSidebarCategory();
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (label) => {
    setOpenCategories((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderItems = (items, depth = 0) => (
    <ul className={styles.list} style={{ paddingLeft: depth * 15 }}>
      {items.map((item) => {
        const isCategory = !!item.items;
        const link = item.permalink || item.href; // 确保链接存在

        return (
          <li key={link || item.label} className={styles.item}>
            {isCategory ? (
              <>
                <span
                  onClick={() => toggleCategory(item.label)}
                  className={`${styles.category} ${openCategories[item.label] ? styles.categoryOpen : ''}`}
                >
                  {openCategories[item.label] ? '📂▼' : '📂▶'} {item.label}
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{category.label}</h2>
      {renderItems(category.items)}
    </div>
  );
}
