'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, cx, Radio, RadioGroup } from '@berrypjh/react-ui';

import { PracticeFrame } from '@/components/shared/PracticeFrame';

type Mode = 'natural' | 'css' | 'dom';
type Item = 'coupon' | 'apply' | 'pay';

const DOM_ORDER: Record<Mode, Item[]> = {
  natural: ['coupon', 'apply', 'pay'],
  css: ['coupon', 'apply', 'pay'],
  dom: ['pay', 'coupon', 'apply'],
};

/** 기록하는 Tab 이동의 최대 개수. */
const LOG_SIZE = 6;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '배치를 고른 뒤 아래 결제 영역을 Tab으로 지나가며 기록을 보세요. 키보드가 없어도 DOM 순서와 화면 순서는 비교할 수 있습니다.',
    modeLabel: '배치',
    modes: {
      natural: 'DOM 그대로 (쿠폰 → 적용 → 결제)',
      css: 'CSS order로 결제를 화면 앞에',
      dom: 'DOM 순서 자체를 결제 먼저로',
    },
    items: { coupon: '쿠폰 코드', apply: '쿠폰 적용', pay: '결제하기' },
    dom: 'DOM 순서',
    visual: '화면 순서 (요소 위치로 계산)',
    log: '포커스 이동 기록 (Tab · 클릭)',
    empty: '아직 없음',
    match: 'DOM 순서와 화면 순서가 같습니다',
    mismatch: 'DOM 순서와 화면 순서가 다릅니다',
    reset: '다시 하기',
    clicked: (item: string) =>
      `${item}: 이 실습에서는 순서만 봅니다. 버튼은 아무 일도 하지 않습니다.`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Pick a layout, then Tab through the checkout area below and watch the log. Without a keyboard you can still compare the DOM order and the visual order.',
    modeLabel: 'Layout',
    modes: {
      natural: 'DOM as is (coupon → apply → pay)',
      css: 'Pay moved to the front with CSS order',
      dom: 'Pay moved first in the DOM itself',
    },
    items: { coupon: 'Coupon code', apply: 'Apply coupon', pay: 'Pay now' },
    dom: 'DOM order',
    visual: 'Visual order (computed from element positions)',
    log: 'Focus log (Tab and clicks)',
    empty: 'none yet',
    match: 'DOM order and visual order match',
    mismatch: 'DOM order and visual order differ',
    reset: 'Start over',
    clicked: (item: string) =>
      `${item}: this exercise is only about order. The buttons do nothing.`,
  },
};

/** 요소 위치로 화면 순서를 계산한다. 위에서 아래, 같은 줄이면 왼쪽에서 오른쪽. */
const visualOrder = (elements: HTMLElement[]) =>
  elements
    .map((el) => ({ item: el.dataset.item as Item, rect: el.getBoundingClientRect() }))
    .sort((a, b) =>
      Math.abs(a.rect.top - b.rect.top) > a.rect.height / 2
        ? a.rect.top - b.rect.top
        : a.rect.left - b.rect.left,
    )
    .map(({ item }) => item);

/**
 * 같은 세 요소를 세 가지 배치로 바꿔 가며 DOM 순서 · 화면 순서 · 실제 Tab 이동을 비교하는 실습.
 * 화면 순서는 렌더링된 위치로, Tab 이동은 실제 focus 이벤트로 기록한다.
 */
export const OrderDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [mode, setMode] = useState<Mode>('natural');
  const [visual, setVisual] = useState<Item[]>([]);
  const [log, setLog] = useState<Item[]>([]);
  const [status, setStatus] = useState('');
  const areaRef = useRef<HTMLDivElement>(null);
  const announce = useRef(false);

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;
    const measure = () => {
      const next = visualOrder([...area.querySelectorAll<HTMLElement>('[data-item]')]);
      setVisual(next);
      if (announce.current) {
        announce.current = false;
        setStatus(next.join() === DOM_ORDER[mode].join() ? c.match : c.mismatch);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(area);
    return () => observer.disconnect();
  }, [mode, c]);

  const domOrder = DOM_ORDER[mode];
  const matches = visual.join() === domOrder.join();

  const changeMode = (value: string) => {
    announce.current = true;
    setMode(value as Mode);
    setLog([]);
  };

  const onFocus = (e: React.FocusEvent) => {
    const item = (e.target as HTMLElement).dataset.item as Item | undefined;
    if (item) setLog((prev) => [...prev, item].slice(-LOG_SIZE));
  };

  const reset = () => {
    setLog([]);
    if (mode !== 'natural') changeMode('natural');
  };

  const control = (item: Item) => {
    const className = cx(item === 'pay' && mode === 'css' && 'order-first');
    if (item === 'coupon') {
      return (
        <div key={item} className={cx('flex flex-col gap-xs text-xsm', className)}>
          <label htmlFor={`${id}-coupon`}>{c.items.coupon}</label>
          <input
            id={`${id}-coupon`}
            data-item="coupon"
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm sm:w-40"
          />
        </div>
      );
    }
    return (
      <div key={item} className={className}>
        <Button
          type="button"
          size="sm"
          variant={item === 'pay' ? 'contained' : 'outlined'}
          data-item={item}
          onClick={() => setStatus(c.clicked(c.items[item]))}
        >
          {c.items[item]}
        </Button>
      </div>
    );
  };

  const sequence = (items: Item[]) =>
    items.length ? items.map((item) => c.items[item]).join(' → ') : c.empty;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap items-end justify-between gap-md">
        <RadioGroup label={c.modeLabel} value={mode} onValueChange={changeMode}>
          {(Object.keys(c.modes) as Mode[]).map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.modes[value]}
            </Radio>
          ))}
        </RadioGroup>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>

      <div
        ref={areaRef}
        onFocus={onFocus}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md sm:flex-row sm:items-end"
      >
        {domOrder.map(control)}
      </div>

      <dl className="flex flex-col gap-2xs text-xsm">
        <dt className="mt-xs font-semiBold text-text-default">{c.dom}</dt>
        <dd className="text-text-light">{sequence(domOrder)}</dd>
        <dt className="mt-xs font-semiBold text-text-default">{c.visual}</dt>
        <dd className="text-text-light">{sequence(visual)}</dd>
        <dt className="mt-xs font-semiBold text-text-default">{c.log}</dt>
        <dd className="text-text-light" data-testid="tab-log">
          {sequence(log)}
        </dd>
      </dl>
      <p
        className={cx('text-xsm font-semiBold', matches ? 'text-text-success' : 'text-text-error')}
      >
        {matches ? c.match : c.mismatch}
      </p>

      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
