'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Width = 'wide' | 'narrow';
type Size = 'normal' | 'large';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '본문 폭과 글자 크기를 바꿔 화면 배치를 바꾼 뒤, ‘2쪽’ 링크로 이동해 보세요. 화면 위치는 바뀌어도 2쪽이 시작하는 문단은 같습니다.',
    width: '본문 폭',
    widths: { wide: '넓게', narrow: '좁게 (320px)' },
    size: '글자 크기',
    sizes: { normal: '보통', large: '크게' },
    observed: '페이지가 읽은 쪽 표시',
    first: '2쪽 표시 바로 다음 문단',
    top: '2쪽 표시의 위쪽 위치 (안내 상자 기준)',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Change the text width and size to change the layout, then follow the “Page 2” link. The position on screen changes, but the paragraph where page 2 begins stays the same.',
    width: 'Text width',
    widths: { wide: 'Wide', narrow: 'Narrow (320px)' },
    size: 'Text size',
    sizes: { normal: 'Normal', large: 'Large' },
    observed: 'Page marker the page read',
    first: 'Paragraph right after the page 2 marker',
    top: 'Top of the page 2 marker (from the notice box)',
  },
};

/** 같은 안내의 배치만 바꾸고, 2쪽 표시가 가리키는 문단과 화면 위치를 실제 DOM에서 읽는다. */
export const PageMarkerDemo = ({ children }: { children: React.ReactNode }) => {
  const c = useLang(content);
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<Width>('wide');
  const [size, setSize] = useState<Size>('normal');
  const [read, setRead] = useState({ first: '', top: 0 });

  useEffect(() => {
    const marker = box.current?.querySelector<HTMLElement>('#guide-page-2');
    if (!marker || !box.current) return;
    setRead({
      first: marker.nextElementSibling?.textContent ?? '',
      top: Math.round(marker.getBoundingClientRect().top - box.current.getBoundingClientRect().top),
    });
  }, [width, size]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap gap-xl">
        <RadioGroup
          label={c.width}
          value={width}
          onValueChange={(v) => setWidth(v as Width)}
          className="flex gap-md"
        >
          {(['wide', 'narrow'] as Width[]).map((w) => (
            <Radio key={w} value={w} className="text-xsm">
              {c.widths[w]}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.size}
          value={size}
          onValueChange={(v) => setSize(v as Size)}
          className="flex gap-md"
        >
          {(['normal', 'large'] as Size[]).map((s) => (
            <Radio key={s} value={s} className="text-xsm">
              {c.sizes[s]}
            </Radio>
          ))}
        </RadioGroup>
      </div>
      <div
        ref={box}
        className={`${width === 'narrow' ? 'max-w-[320px]' : ''} ${size === 'large' ? 'text-lg' : 'text-xsm'}`}
      >
        {children}
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.first, read.first],
          [c.top, <code key="t">{read.top}px</code>],
        ]}
      />
    </PracticeFrame>
  );
};
