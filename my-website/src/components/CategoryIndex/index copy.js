// 实现基础的文档目录功能，支持多级目录，支持链接和标题
import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';

export default function CategoryIndex() {
  const category = useCurrentSidebarCategory();

  const renderItems = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item.permalink || item.label}>
          {item.permalink ? (
            <Link to={item.permalink}>{item.label}</Link> // 修复链接
          ) : (
            <>
              <Link to={item.href || '#'}><strong>{item.label}</strong></Link>
              {item.items && renderItems(item.items)}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{category.label}</h2>
      {renderItems(category.items)}
    </div>
  );
}
