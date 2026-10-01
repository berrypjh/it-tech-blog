'use client';

import { useEffect, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { cx, List, ListItem } from '@berrypjh/react-ui';

export type TocItem = { id: string; title: string };

/** 현재 읽고 있는 섹션을 표시하는 "이 페이지에서" 목차. */
export const Toc = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const heading = useLang({ ko: '이 페이지에서', en: 'On this page' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '0px 0px -75% 0px' },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-labelledby="toc-heading">
      <p id="toc-heading" className="mb-md text-xxsm font-bold uppercase text-text-light">
        {heading}
      </p>
      <List className="flex flex-col gap-px border-l border-stroke-light">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <ListItem key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cx(
                  '-ml-px block border-l-semanticBorder-default py-xs pl-md text-xxsm leading-xxxsm transition-colors',
                  isActive
                    ? 'border-stroke-primary font-semiBold text-text-primary'
                    : 'border-transparent text-text-light hover:text-text-default',
                )}
              >
                {item.title}
              </a>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
