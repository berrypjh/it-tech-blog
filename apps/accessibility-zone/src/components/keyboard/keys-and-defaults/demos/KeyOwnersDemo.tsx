'use client';

import { useId, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, TableScroll } from '@berrypjh/react-ui';

import { Kbd } from '@/components/shared/Kbd';

import { ObservedPanel } from '../../shared/ObservedPanel';

type Owner = 'widget' | 'text' | 'browser';
type LogEntry = {
  id: number;
  key: string;
  target: string;
  composing: boolean;
  blocked: boolean;
  owner: Owner;
};

const MIN = 1;
const MAX = 9;

const content = {
  ko: {
    practice: '실습',
    instructions: (enter: React.ReactNode, space: React.ReactNode) => (
      <>
        Tab으로 차례로 가서 링크는 {enter}, 버튼은 {enter}와 {space}, 수량은 방향키, 메모는 글자와
        방향키, 한글 조합을 써 보세요. 그다음 결함을 켜고 다시 해 봅니다.
      </>
    ),
    defect: '의도한 결함: 이 상자에서 방향키와 Space의 기본 동작 막기',
    stage: '주문 메모 (교육 예시 · 실제로 보내지 않음)',
    link: '배송 안내 보기',
    coupon: '쿠폰 적용',
    quantity: '수량',
    less: '수량 줄이기',
    more: '수량 늘리기',
    note: '배송 메모',
    policy: '배송 안내: 평일 오후 2시 전 주문은 당일 출발합니다 (교육 예시).',
    observed: '지금 관찰한 값',
    linkClicks: '링크 click',
    couponClicks: '쿠폰 버튼 click',
    value: '수량 값',
    text: '메모 내용',
    caret: '입력 커서 위치',
    empty: '(비어 있음)',
    logHeading: '최근 키 입력',
    head: ['키', '대상', '조합 중', '기본 동작 막힘', '주인'],
    owners: { widget: '위젯', text: '텍스트 입력', browser: '브라우저' },
    yes: '예',
    no: '아니요',
    noLog: '아직 입력한 키가 없습니다.',
    clear: '기록 지우기',
    limit: '이 기록은 지금 브라우저에서 일어난 keydown입니다. 다른 환경으로 일반화하지 않습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions: (enter: React.ReactNode, space: React.ReactNode) => (
      <>
        Tab through and try {enter} on the link, {enter} and {space} on the button, arrows on the
        quantity, and characters, arrows, and composition in the note. Then turn on the defect and
        try again.
      </>
    ),
    defect: 'Intentional defect: block the default of arrows and Space in this box',
    stage: 'Order note (teaching example; nothing is sent)',
    link: 'View shipping info',
    coupon: 'Apply coupon',
    quantity: 'Quantity',
    less: 'Decrease quantity',
    more: 'Increase quantity',
    note: 'Delivery note',
    policy: 'Shipping info: orders before 2 p.m. on weekdays ship the same day (teaching example).',
    observed: 'Observed now',
    linkClicks: 'Link clicks',
    couponClicks: 'Coupon button clicks',
    value: 'Quantity value',
    text: 'Note text',
    caret: 'Caret position',
    empty: '(empty)',
    logHeading: 'Recent keys',
    head: ['Key', 'Target', 'Composing', 'Default blocked', 'Owner'],
    owners: { widget: 'Widget', text: 'Text input', browser: 'Browser' },
    yes: 'Yes',
    no: 'No',
    noLog: 'No keys pressed yet.',
    clear: 'Clear log',
    limit:
      'This log is the keydown events in this browser. Do not generalize it to other environments.',
  },
};

const spinKeys = ['ArrowUp', 'ArrowDown', 'Home', 'End'];

const controlClass =
  'w-fit rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold text-text-default';

/** 수량 위젯의 키 전이. 맡지 않는 키는 null이다. */
const nextQuantity = (key: string, value: number) =>
  ({
    ArrowUp: Math.min(value + 1, MAX),
    ArrowDown: Math.max(value - 1, MIN),
    Home: MIN,
    End: MAX,
  })[key] ?? null;

/** 글자 키 외에 입력 칸이 커서 이동 · 편집에 쓰는 키. */
const textKeys = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End',
  'Backspace',
  'Delete',
  'Process',
];

const isPlainKey = (e: React.KeyboardEvent) =>
  !e.ctrlKey && !e.metaKey && !e.altKey && !e.nativeEvent.isComposing;

const ownerOf = (e: React.KeyboardEvent): Owner => {
  const target = e.target as HTMLElement;
  if (target.getAttribute('role') === 'spinbutton' && spinKeys.includes(e.key) && isPlainKey(e)) {
    return 'widget';
  }
  const editsText = e.key.length === 1 || textKeys.includes(e.key);
  return target.tagName === 'INPUT' && editsText && (isPlainKey(e) || e.nativeEvent.isComposing)
    ? 'text'
    : 'browser';
};

/** 링크 · 버튼 · 수량 위젯 · 입력 칸이 있는 과업에서 키의 주인과 기본 동작이 막혔는지 기록한다. 키는 듣기만 한다. */
export const KeyOwnersDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [defect, setDefect] = useState(false);
  const [linkClicks, setLinkClicks] = useState(0);
  const [couponClicks, setCouponClicks] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [note, setNote] = useState('');
  const [caret, setCaret] = useState(0);
  const [log, setLog] = useState<LogEntry[]>([]);

  const onSpinKeyDown = (e: React.KeyboardEvent) => {
    if (!isPlainKey(e)) return;
    const next = nextQuantity(e.key, quantity);
    if (next === null) return;
    e.preventDefault();
    setQuantity(next);
  };

  const blockDefaults = (e: React.KeyboardEvent) => {
    if (defect && (e.key === ' ' || e.key.startsWith('Arrow'))) e.preventDefault();
  };

  const record = (e: React.KeyboardEvent) => {
    const { key, defaultPrevented } = e;
    const target = (e.target as HTMLElement).tagName.toLowerCase();
    const composing = e.nativeEvent.isComposing;
    const owner = ownerOf(e);
    setLog((prev) =>
      [
        { id: (prev[0]?.id ?? 0) + 1, key, target, composing, blocked: defaultPrevented, owner },
        ...prev,
      ].slice(0, 6),
    );
  };

  return (
    <PracticeFrame
      label={c.practice}
      instructions={c.instructions(<Kbd>Enter</Kbd>, <Kbd>Space</Kbd>)}
    >
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(e) => setDefect(e.target.checked)} />
        {c.defect}
      </label>

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- 자식의 키를 기록만 하는 관찰용 상자 */}
      <div
        onKeyDownCapture={blockDefaults}
        onKeyDown={record}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <p className="text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <div className="flex flex-wrap items-center gap-md">
          <a href={`#${id}-policy`} onClick={() => setLinkClicks((n) => n + 1)}>
            {c.link}
          </a>
          <button
            type="button"
            onClick={() => setCouponClicks((n) => n + 1)}
            className={controlClass}
          >
            {c.coupon}
          </button>
        </div>
        <div className="flex items-center gap-sm">
          <span id={`${id}-quantity`}>{c.quantity}</span>
          <button
            type="button"
            tabIndex={-1}
            aria-label={c.less}
            onClick={() => setQuantity((n) => Math.max(n - 1, MIN))}
            className={controlClass}
          >
            −
          </button>
          <div
            role="spinbutton"
            tabIndex={0}
            aria-labelledby={`${id}-quantity`}
            aria-valuenow={quantity}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            onKeyDown={onSpinKeyDown}
            className="min-w-10 rounded-sm border border-stroke-light px-md py-xs text-center"
          >
            {quantity}
          </div>
          <button
            type="button"
            tabIndex={-1}
            aria-label={c.more}
            onClick={() => setQuantity((n) => Math.min(n + 1, MAX))}
            className={controlClass}
          >
            +
          </button>
        </div>
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-note`}>{c.note}</label>
          <input
            id={`${id}-note`}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onSelect={(e) => setCaret(e.currentTarget.selectionStart ?? 0)}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm"
          />
        </div>
        <p id={`${id}-policy`} className="text-xxsm text-text-light">
          {c.policy}
        </p>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.linkClicks, linkClicks],
          [c.couponClicks, couponClicks],
          [c.value, quantity],
          [c.text, note || c.empty],
          [c.caret, caret],
        ]}
      />

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm font-semiBold text-text-default">{c.logHeading}</p>
        {log.length === 0 ? (
          <p className="text-text-light">{c.noLog}</p>
        ) : (
          <TableScroll label={c.logHeading}>
            <table className="w-full text-left">
              <thead>
                <tr>
                  {c.head.map((heading) => (
                    <th key={heading} scope="col" className="py-xs pr-md font-semiBold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {log.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-xs pr-md">
                      <code>{entry.key === ' ' ? 'Space' : entry.key}</code>
                    </td>
                    <td className="py-xs pr-md">
                      <code>{entry.target}</code>
                    </td>
                    <td className="py-xs pr-md">{entry.composing ? c.yes : c.no}</td>
                    <td className="py-xs pr-md">{entry.blocked ? c.yes : c.no}</td>
                    <td className="py-xs pr-md">{c.owners[entry.owner]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        )}
        <div className="mt-sm flex flex-wrap items-center gap-md">
          <Button type="button" variant="text" size="sm" onClick={() => setLog([])}>
            {c.clear}
          </Button>
          <p className="text-xxsm text-text-light">{c.limit}</p>
        </div>
      </div>
    </PracticeFrame>
  );
};
