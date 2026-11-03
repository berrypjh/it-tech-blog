'use client';

import { useState } from 'react';

type NavGroupLike = { items: { id: string }[] };

const activeIndexOf = <G extends NavGroupLike>(groups: G[], pathname: string) =>
  groups.findIndex((group) => group.items.some((item) => pathname === `/${item.id}`));

const getInitialExpanded = <G extends NavGroupLike>(groups: G[], pathname: string): Set<number> => {
  const activeIndex = activeIndexOf(groups, pathname);

  return new Set([activeIndex >= 0 ? activeIndex : 0]);
};

export const useSidebarNav = <G extends NavGroupLike>(groups: G[], pathname: string) => {
  const [expanded, setExpanded] = useState<Set<number>>(() => getInitialExpanded(groups, pathname));
  const [prevPathname, setPrevPathname] = useState(pathname);

  // 사이드바는 페이지를 옮겨도 다시 그려지지 않으므로, 경로가 바뀌면 새 현재 그룹을 펼친다.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    const activeIndex = activeIndexOf(groups, pathname);
    if (activeIndex >= 0 && !expanded.has(activeIndex)) {
      setExpanded(new Set(expanded).add(activeIndex));
    }
  }

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);

      return next;
    });
  };

  const anyExpanded = expanded.size > 0;
  const toggleAll = () => setExpanded(anyExpanded ? new Set() : new Set(groups.map((_, i) => i)));

  return { expanded, toggle, toggleAll, anyExpanded };
};
