'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

import { Carousel } from '../Carousel';
import { guides } from '../slides';

const counts = [3, 1, 0] as const;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '자동 넘김을 시작한 뒤 Tab으로 다음 버튼에 가서 넘김이 멈추는지 보고, 이전 · 다음으로 직접 옮기세요. 안내의 개수도 바꿔 봅니다. 가상의 행사 안내입니다.',
    label: '행사 안내',
    countLegend: '안내의 개수',
    counts: { 3: '세 개', 1: '한 개', 0: '없음' },
    observed: '페이지가 읽은 DOM',
    shown: '보이는 슬라이드의 이름',
    hidden: 'hidden인 슬라이드',
    hiddenControls: 'hidden인 슬라이드 안의 summary',
    rotation: '자동 넘김 버튼의 이름',
    live: '슬라이드 영역의 aria-live',
    count: (n: number) => `${n}개`,
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Start automatic rotation, then Tab to the next button and see rotation stop, and move by hand with previous and next. Change the number of guides too. The event guide is fictional.',
    label: 'Event guide',
    countLegend: 'Number of guides',
    counts: { 3: 'Three', 1: 'One', 0: 'None' },
    observed: 'DOM the page read',
    shown: 'Name of the visible slide',
    hidden: 'Slides with hidden',
    hiddenControls: 'summary elements inside hidden slides',
    rotation: 'Name of the rotation button',
    live: 'aria-live of the slide area',
    count: (n: number) => `${n}`,
    focus: 'document.activeElement',
    none: 'none',
  },
};

/** 자동 넘김을 고를 수 있는 캐러셀과, 그 DOM을 밖에서 다시 읽은 관찰 값. 안내가 세 개 · 한 개 · 없을 때를 바꿔 볼 수 있다. */
export const CarouselDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [count, setCount] = useState<(typeof counts)[number]>(3);
  const [read, setRead] = useState({
    shown: '',
    hidden: 0,
    hiddenControls: 0,
    rotation: '',
    live: '',
  });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () =>
      setRead({
        shown: el.querySelector('[role="group"]:not([hidden])')?.getAttribute('aria-label') ?? '',
        hidden: el.querySelectorAll('[role="group"][hidden]').length,
        hiddenControls: el.querySelectorAll('[role="group"][hidden] summary').length,
        rotation: el.querySelector('button[id$="-rotation"]')?.textContent ?? '',
        live: el.querySelector('[aria-live]')?.getAttribute('aria-live') ?? '',
      });
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { subtree: true, childList: true, attributes: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <fieldset className="flex flex-wrap gap-md text-xsm">
        <legend className="mb-xs font-semiBold text-text-default">{c.countLegend}</legend>
        {counts.map((value) => (
          <label key={value} className="flex items-center gap-sm">
            <input
              type="radio"
              name={`${id}-count`}
              checked={count === value}
              onChange={() => setCount(value)}
            />
            {c.counts[value]}
          </label>
        ))}
      </fieldset>
      <div ref={box}>
        <Carousel label={c.label} slides={guides[locale].slice(0, count)} rotation />
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.shown, read.shown || c.none],
          [c.hidden, c.count(read.hidden)],
          [c.hiddenControls, c.count(read.hiddenControls)],
          [c.rotation, read.rotation || c.none],
          [c.live, <code key="l">{read.live || c.none}</code>],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
