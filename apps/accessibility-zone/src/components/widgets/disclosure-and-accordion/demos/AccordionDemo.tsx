'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';
import { ChevronDown, ChevronRight } from 'lucide-react';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { cardClass, controlClass } from '@/components/widgets/shared/styles';

type Mode = 'single' | 'multiple';

const content = {
  ko: {
    practice: '실습',
    instructions: '위 순서대로 키보드로 열고 닫으며 관찰 값을 읽으세요. 가상의 행사 안내입니다.',
    detailsSummary: '환불 기준 보기',
    detailsText: '행사 3일 전까지 전액 환불됩니다. 이후에는 환불되지 않습니다.',
    modeLegend: '열림 규칙',
    modes: { single: '하나만 열림', multiple: '여러 개 열림' },
    items: [
      { title: '입장 시간', text: '오전 9시 30분부터 입장합니다. 좌석은 선착순입니다.' },
      { title: '주차 안내', text: '지하 2층에 3시간 무료 주차가 있습니다.' },
      { title: '문의 방법', text: '안내 데스크는 본관 1층 동쪽 입구 옆입니다.' },
    ],
    close: '이 안내 닫기',
    observed: '페이지가 읽은 DOM',
    expanded: 'aria-expanded="true"인 제목 버튼',
    hiddenPanels: 'hidden인 패널',
    hiddenButtons: 'hidden인 패널 안의 버튼',
    count: (n: number) => `${n}개`,
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Open and close with the keyboard in the order above and read the observed values. The event guide is fictional.',
    detailsSummary: 'See the refund policy',
    detailsText: 'Full refund up to 3 days before the event. No refund after that.',
    modeLegend: 'Open rule',
    modes: { single: 'Only one open', multiple: 'Several open' },
    items: [
      {
        title: 'Entry time',
        text: 'Entry starts at 9:30 a.m. Seats are first come, first served.',
      },
      { title: 'Parking', text: 'Three hours of free parking are on basement level 2.' },
      {
        title: 'How to ask',
        text: 'The help desk is on the first floor, next to the east entrance.',
      },
    ],
    close: 'Close this guide',
    observed: 'DOM the page read',
    expanded: 'Heading buttons with aria-expanded="true"',
    hiddenPanels: 'Panels with hidden',
    hiddenButtons: 'Buttons inside hidden panels',
    count: (n: number) => `${n}`,
    focus: 'document.activeElement',
    none: 'None',
  },
};

/**
 * details 하나와, 제목 속 버튼으로 만든 Accordion. 열림 규칙은 하나만 열림 · 여러 개 열림 가운데 고른다.
 * 닫힌 패널은 hidden이라 그 안의 버튼이 Tab 순서에서 빠지고, 패널 안에서 닫으면 초점을 제목 버튼으로 돌려보낸다.
 */
export const AccordionDemo = () => {
  const c = useLang(content);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [mode, setMode] = useState<Mode>('single');
  const [open, setOpen] = useState<number[]>([0]);
  const [focus, setFocus] = useState<{ index: number; tick: number } | null>(null);
  const [read, setRead] = useState({ expanded: '', hiddenPanels: 0, hiddenButtons: 0 });

  useEffect(() => {
    if (focus) document.getElementById(`${id}-header-${focus.index}`)?.focus();
  }, [id, focus]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    setRead({
      expanded: [...el.querySelectorAll('h3 > [aria-expanded="true"]')]
        .map((button) => button.textContent)
        .join(', '),
      hiddenPanels: el.querySelectorAll('div[hidden]').length,
      hiddenButtons: el.querySelectorAll('div[hidden] button').length,
    });
  }, [open]);

  const toggle = (index: number) =>
    setOpen((previous) => {
      if (previous.includes(index)) return previous.filter((i) => i !== index);
      return mode === 'single' ? [index] : [...previous, index];
    });

  const closeFromInside = (index: number) => {
    setOpen((previous) => previous.filter((i) => i !== index));
    setFocus((previous) => ({ index, tick: (previous?.tick ?? 0) + 1 }));
  };

  const changeMode = (next: Mode) => {
    setMode(next);
    if (next === 'single') setOpen((previous) => previous.slice(0, 1));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">
          {c.detailsSummary}
        </summary>
        <p className="mt-sm">{c.detailsText}</p>
      </details>

      <fieldset className="flex flex-wrap gap-md text-xsm">
        <legend className="mb-xs font-semiBold text-text-default">{c.modeLegend}</legend>
        {(Object.keys(c.modes) as Mode[]).map((value) => (
          <label key={value} className="flex items-center gap-sm">
            <input
              type="radio"
              name={`${id}-mode`}
              value={value}
              checked={mode === value}
              onChange={() => changeMode(value)}
            />
            {c.modes[value]}
          </label>
        ))}
      </fieldset>

      <div ref={box} className={cardClass}>
        {c.items.map((item, index) => {
          const expanded = open.includes(index);
          const Icon = expanded ? ChevronDown : ChevronRight;
          return (
            <div key={item.title} className="flex flex-col gap-sm">
              <h3>
                <button
                  type="button"
                  id={`${id}-header-${index}`}
                  aria-expanded={expanded}
                  aria-controls={`${id}-panel-${index}`}
                  onClick={() => toggle(index)}
                  className={`${controlClass} w-full`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {item.title}
                </button>
              </h3>
              <div
                id={`${id}-panel-${index}`}
                hidden={!expanded}
                className="flex flex-col gap-sm pl-md"
              >
                <p>{item.text}</p>
                <div>
                  <Button
                    type="button"
                    variant="text"
                    size="sm"
                    onClick={() => closeFromInside(index)}
                  >
                    {c.close}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.expanded, read.expanded || c.none],
          [c.hiddenPanels, c.count(read.hiddenPanels)],
          [c.hiddenButtons, c.count(read.hiddenButtons)],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
