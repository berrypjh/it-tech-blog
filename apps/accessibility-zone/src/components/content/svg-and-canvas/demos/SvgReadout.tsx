'use client';

import { useEffect, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const content = {
  ko: {
    title: '페이지가 읽은 SVG 속성',
    role: 'role 속성',
    name: 'aria-label',
    shapes: '안쪽 rect 수',
    focusable: 'Tab으로 닿는 안쪽 요소',
    none: '없음',
  },
  en: {
    title: 'SVG attributes the page read',
    role: 'role attribute',
    name: 'aria-label',
    shapes: 'rect elements inside',
    focusable: 'Elements inside reachable by Tab',
    none: 'None',
  },
};

type Read = { role: string; name: string; shapes: number; focusable: number };

/** 감싼 SVG를 실제 DOM에서 읽는다. 도형 수가 있어도 이름은 작성자가 준 속성에서만 온다. */
export const SvgReadout = ({ children }: { children: React.ReactNode }) => {
  const c = useLang(content);
  const box = useRef<HTMLDivElement>(null);
  const [read, setRead] = useState<Read | null>(null);

  useEffect(() => {
    const svg = box.current?.querySelector('svg');
    if (!svg) return;
    setRead({
      role: svg.getAttribute('role') ?? '',
      name: svg.getAttribute('aria-label') ?? '',
      shapes: svg.querySelectorAll('rect').length,
      focusable: svg.querySelectorAll('a[href], [tabindex]:not([tabindex="-1"])').length,
    });
  }, []);

  return (
    <div className="my-xl flex flex-col gap-md">
      <div ref={box} className="rounded-md border border-stroke-light p-lg">
        {children}
      </div>
      {read && (
        <ObservedPanel
          title={c.title}
          rows={[
            [c.role, <code key="r">{read.role || c.none}</code>],
            [c.name, read.name || c.none],
            [c.shapes, read.shapes],
            [c.focusable, read.focusable],
          ]}
        />
      )}
    </div>
  );
};
