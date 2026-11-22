'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { controlClass } from '@/components/widgets/shared/styles';

const MIN = 20;
const MAX = 80;
const STEP = 5;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '경계에 초점을 두고 좌우 화살표 · Home · End · Enter로 조절한 뒤, 같은 결과를 아래 버튼으로도 만들어 보세요. 가상의 행사 안내입니다.',
    primary: '안내 목록',
    secondary: '안내 내용',
    items: ['일정', '장소', '준비물', '문의 방법'],
    text: '토요일과 일요일, 하루 세 회차로 진행합니다. 본관 2층 A홀과 B홀이며 동쪽 입구로 들어옵니다.',
    valueText: (value: number) => (value === 0 ? '접힘' : `너비의 ${value}퍼센트`),
    decrease: `안내 목록 ${STEP} 줄이기`,
    increase: `안내 목록 ${STEP} 늘리기`,
    collapse: '안내 목록 접기',
    observed: '페이지가 읽은 DOM과 실제 크기',
    value: 'separator의 aria-valuenow · min · max',
    measured: '측정한 안내 목록 너비 ÷ 전체 너비',
    percent: (ratio: number, pane: number, whole: number) => `${ratio}% (${pane}px ÷ ${whole}px)`,
    hidden: '안내 목록의 내용이 hidden인가',
    yes: '예',
    no: '아니요',
    focus: 'document.activeElement',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Focus the boundary and adjust it with the left and right arrows, Home, End, and Enter, then make the same result with the buttons below. The event guide is fictional.',
    primary: 'Guide list',
    secondary: 'Guide content',
    items: ['Schedule', 'Venue', 'What to bring', 'How to ask'],
    text: 'Saturday and Sunday, three sessions a day. Halls A and B on the second floor; enter through the east entrance.',
    valueText: (value: number) => (value === 0 ? 'collapsed' : `${value} percent of the width`),
    decrease: `Decrease guide list by ${STEP}`,
    increase: `Increase guide list by ${STEP}`,
    collapse: 'Collapse guide list',
    observed: 'DOM and real size the page read',
    value: 'aria-valuenow, min, max of the separator',
    measured: 'Measured guide list width ÷ whole width',
    percent: (ratio: number, pane: number, whole: number) => `${ratio}% (${pane}px ÷ ${whole}px)`,
    hidden: 'Is the guide list content hidden?',
    yes: 'yes',
    no: 'no',
    focus: 'document.activeElement',
  },
};

const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));

/**
 * 두 영역 사이의 세로 경계. 값은 주 영역(안내 목록)이 전체 너비에서 차지하는 퍼센트이고, 접으면 0이다.
 * 방향키 · 버튼 · 끌기는 모두 같은 값 하나를 바꾸며, 관찰 값은 렌더링된 뒤 실제 너비를 다시 재서 낸다.
 * 접힌 상태에서 늘리면 접기 전 위치로 복원하고, 줄이기는 아무것도 하지 않는다.
 */
export const SplitterDemo = () => {
  const c = useLang(content);
  const id = useId();
  const container = useRef<HTMLDivElement>(null);
  const pane = useRef<HTMLDivElement>(null);
  const separator = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [size, setSize] = useState(40);
  const [collapsed, setCollapsed] = useState(false);
  const [read, setRead] = useState({ value: '', ratio: 0, pane: 0, whole: 0, hidden: false });
  const value = collapsed ? 0 : size;

  useEffect(() => {
    const whole = container.current?.getBoundingClientRect().width ?? 0;
    const width = pane.current?.getBoundingClientRect().width ?? 0;
    const el = separator.current;
    setRead({
      value: `${el?.getAttribute('aria-valuenow')} · ${el?.getAttribute('aria-valuemin')} · ${el?.getAttribute('aria-valuemax')}`,
      ratio: whole ? Math.round((width / whole) * 1000) / 10 : 0,
      pane: Math.round(width),
      whole: Math.round(whole),
      hidden: pane.current?.firstElementChild?.hasAttribute('hidden') ?? false,
    });
  }, [size, collapsed]);

  const move = (delta: number) => {
    if (collapsed) {
      if (delta > 0) setCollapsed(false);
      return;
    }
    setSize((previous) => clamp(previous + delta));
  };

  const moveTo = (next: number) => {
    setCollapsed(false);
    setSize(clamp(next));
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const actions: Record<string, () => void> = {
      ArrowLeft: () => move(-STEP),
      ArrowRight: () => move(STEP),
      Home: () => moveTo(MIN),
      End: () => moveTo(MAX),
      Enter: () => setCollapsed((previous) => !previous),
    };
    const action = actions[event.key];
    if (!action) return;
    event.preventDefault();
    action();
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const rect = container.current?.getBoundingClientRect();
    if (!rect || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const percent = ((event.clientX - rect.left) / rect.width) * 100;
    moveTo(Math.round(percent / STEP) * STEP);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div
        ref={container}
        className="grid rounded-sm border border-stroke-light text-xsm"
        style={{
          height: '12rem',
          gridTemplateColumns: `${value}% auto minmax(0, 1fr)`,
        }}
      >
        <div ref={pane} id={`${id}-primary`} className="min-w-0 overflow-auto">
          <div
            role="group"
            aria-labelledby={`${id}-primary-title`}
            hidden={collapsed}
            className="p-md"
          >
            <h3 id={`${id}-primary-title`} className="mb-xs font-semiBold text-text-default">
              {c.primary}
            </h3>
            <ul className="list-disc pl-lg">
              {c.items.map((item) => (
                <li key={item} className="break-words">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- 아래 tabIndex와 같은 이유: 초점을 받는 separator는 위젯이다 */}
        <div
          ref={separator}
          role="separator"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- 초점을 받는 separator는 WAI-ARIA 1.2에서 값을 가진 위젯이다
          tabIndex={0}
          aria-orientation="vertical"
          aria-label={c.primary}
          aria-controls={`${id}-primary`}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={MAX}
          aria-valuetext={c.valueText(value)}
          onKeyDown={onKeyDown}
          onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
          onPointerMove={onPointerMove}
          className="w-3 cursor-col-resize touch-none border-x border-stroke-default bg-background-default"
        />
        <div role="group" aria-labelledby={`${id}-secondary-title`} className="overflow-auto p-md">
          <h3 id={`${id}-secondary-title`} className="mb-xs font-semiBold text-text-default">
            {c.secondary}
          </h3>
          <p className="break-words">{c.text}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-sm">
        <button
          type="button"
          aria-disabled={collapsed || size === MIN ? true : undefined}
          onClick={() => move(-STEP)}
          className={`${controlClass} aria-disabled:opacity-60`}
        >
          {c.decrease}
        </button>
        <button
          type="button"
          aria-disabled={!collapsed && size === MAX ? true : undefined}
          onClick={() => move(STEP)}
          className={`${controlClass} aria-disabled:opacity-60`}
        >
          {c.increase}
        </button>
        <button
          type="button"
          aria-pressed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
          className={controlClass}
        >
          {c.collapse}
        </button>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.value, <code key="v">{read.value}</code>],
          [c.measured, c.percent(read.ratio, read.pane, read.whole)],
          [c.hidden, read.hidden ? c.yes : c.no],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
