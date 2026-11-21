'use client';

import { useCallback, useEffect, useState } from 'react';

/** 요소를 태그 · 역할 · 이름 글자로 짧게 적는다. */
export const describeElement = (element: Element | null) => {
  if (!element) return '(null)';
  const tag = element.tagName.toLowerCase();
  if (tag === 'body') return '<body>';
  const role = element.getAttribute('role');
  const text = element.getAttribute('aria-label') ?? element.textContent?.trim() ?? '';
  const label = element instanceof HTMLInputElement ? element.labels?.[0]?.textContent : text;
  return `<${tag}${role ? ` role="${role}"` : ''}> ${(label ?? '').slice(0, 40)}`;
};

/**
 * document.activeElement를 글자로 따라간다. 문서의 포커스 이벤트는 듣기만 하고 막지 않는다.
 * 포커스된 요소가 지워지면 이벤트가 없을 수 있어, 상태 변경 뒤에는 돌려준 refresh를 부른다.
 */
export const useActiveElement = () => {
  const [label, setLabel] = useState('');
  const refresh = useCallback(() => setLabel(describeElement(document.activeElement)), []);

  useEffect(() => {
    const onChange = () => queueMicrotask(refresh);
    refresh();
    document.addEventListener('focusin', onChange);
    document.addEventListener('focusout', onChange);
    return () => {
      document.removeEventListener('focusin', onChange);
      document.removeEventListener('focusout', onChange);
    };
  }, [refresh]);

  return [label, refresh] as const;
};
