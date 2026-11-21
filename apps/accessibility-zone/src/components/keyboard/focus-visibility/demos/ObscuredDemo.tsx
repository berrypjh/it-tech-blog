'use client';

import { useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '../../shared/ObservedPanel';
import { overlapRatio } from '../../shared/overlapRatio';

type Mode = 'partial' | 'full' | 'padded';
type Coverage = 'none' | 'partial' | 'full';

const modes: Mode[] = ['partial', 'full', 'padded'];
const barHeight: Record<Mode, number> = { partial: 20, full: 72, padded: 48 };
const rows = [1, 2, 3, 4, 5, 6, 7, 8];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '고정 영역을 고른 뒤 스크롤 상자 안의 "항목 1"부터 Tab으로 내려가 보세요. 포커스가 고정 영역 뒤로 들어가는지 봅니다.',
    legend: '고정 영역',
    labels: {
      partial: '낮음: 일부 가림',
      full: '높음: 전부 가림',
      padded: 'scroll-padding 적용',
    },
    item: (n: number) => `항목 ${n}`,
    scroller: '가림 확인용 스크롤 영역',
    bar: '고정 안내 영역 (교육 예시)',
    observed: '포커스 받은 항목의 가림',
    target: '항목',
    covered: '가려진 면적',
    minimum: '2.4.11 관점',
    enhanced: '2.4.12 관점',
    none: '(아직 없음)',
    clear: '가려지지 않음',
    notEntirely: '완전히 가려지지는 않음',
    fails: '조건에 어긋남',
    outside: '스크롤되어 영역 밖에 있음',
    note: '계산한 사각형 겹침입니다. 판정은 포커스 표시까지 포함한 실제 화면과 함께 합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose a fixed area, then Tab down from "Item 1" in the scroll box. Watch whether focus goes behind the fixed area.',
    legend: 'Fixed area',
    labels: {
      partial: 'Short: partly hides',
      full: 'Tall: fully hides',
      padded: 'With scroll-padding',
    },
    item: (n: number) => `Item ${n}`,
    scroller: 'Scroll area for checking obscuring',
    bar: 'Fixed notice area (teaching example)',
    observed: 'Obscuring of the focused item',
    target: 'Item',
    covered: 'Area hidden',
    minimum: 'From 2.4.11',
    enhanced: 'From 2.4.12',
    none: '(nothing yet)',
    clear: 'Not hidden',
    notEntirely: 'Not entirely hidden',
    fails: 'Does not meet the condition',
    outside: 'Scrolled out of the area',
    note: 'This is a computed rectangle overlap. Judge together with the real screen, including the focus indicator.',
  },
};

const coverageOf = (ratio: number): Coverage =>
  ratio <= 0 ? 'none' : ratio >= 0.999 ? 'full' : 'partial';

/** 이 상자 안의 sticky 영역이 포커스 받은 항목을 얼마나 가리는지 잰다. */
export const ObscuredDemo = () => {
  const c = useLang(content);
  const [mode, setMode] = useState<Mode>('partial');
  const [reading, setReading] = useState<{
    name: string;
    ratio: number;
    outside: boolean;
  } | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef<HTMLButtonElement | null>(null);

  const measure = () => {
    const item = focusedRef.current;
    if (!item || !barRef.current || !boxRef.current) return;
    const rect = item.getBoundingClientRect();
    setReading({
      name: item.textContent ?? '',
      ratio: overlapRatio(rect, barRef.current.getBoundingClientRect()),
      outside: overlapRatio(rect, boxRef.current.getBoundingClientRect()) === 0,
    });
  };

  const onFocus = (event: React.FocusEvent) => {
    focusedRef.current = event.target as HTMLButtonElement;
    requestAnimationFrame(measure);
  };

  const coverage = reading ? coverageOf(reading.ratio) : null;
  const height = barHeight[mode];
  const verdict = (text: string) => (!reading ? c.none : reading.outside ? c.outside : text);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={mode}
        onValueChange={(value) => {
          setMode(value as Mode);
          setReading(null);
        }}
        className="flex-row flex-wrap gap-x-xl"
      >
        {modes.map((value) => (
          <Radio key={value} value={value} className="text-xsm">
            {c.labels[value]}
          </Radio>
        ))}
      </RadioGroup>

      <div
        ref={boxRef}
        role="group"
        aria-label={c.scroller}
        onFocus={onFocus}
        onScroll={measure}
        className="overflow-y-auto rounded-sm border border-stroke-light"
        style={{
          height: '12rem',
          scrollPaddingBottom: mode === 'padded' ? height + 8 : undefined,
        }}
      >
        <div className="flex flex-col gap-sm p-sm">
          {rows.map((n) => (
            <button
              key={n}
              type="button"
              className="rounded-sm border border-stroke-light px-md py-sm text-left text-xsm"
            >
              {c.item(n)}
            </button>
          ))}
        </div>
        <div
          ref={barRef}
          style={{ height }}
          className="sticky bottom-0 flex items-center overflow-hidden bg-background-default px-md text-xxsm font-semiBold text-text-default"
        >
          {c.bar}
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.target, reading?.name ?? c.none],
          [c.covered, reading ? `${Math.round(reading.ratio * 100)}%` : c.none],
          [c.minimum, verdict(coverage === 'full' ? c.fails : c.notEntirely)],
          [c.enhanced, verdict(coverage === 'none' ? c.clear : c.fails)],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
