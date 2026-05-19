'use client';

import { useState } from 'react';

type NavGroupLike = { items: { id: string }[] };

const getInitialExpanded = <G extends NavGroupLike>(groups: G[], pathname: string): Set<number> => {
  const activeIndex = groups.findIndex((group) =>
    group.items.some((item) => pathname === `/${item.id}`),
  );

  return new Set([activeIndex >= 0 ? activeIndex : 0]);
};

export const useSidebarNav = <G extends NavGroupLike>(groups: G[], pathname: string) => {
  const [expanded, setExpanded] = useState<Set<number>>(() => getInitialExpanded(groups, pathname));

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
