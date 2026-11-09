'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, cx, Radio, RadioGroup, TableScroll } from '@berrypjh/react-ui';
import { ChevronDown } from 'lucide-react';

type Mode = 'sync' | 'defect';
type Row = { what: string; attribute: string; property: string };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '입력 칸의 글자를 바꾸고, 체크박스와 "주문 상세" 버튼을 눌러 표의 값을 비교하세요.',
    modeLabel: '버튼 상태 처리',
    modes: {
      sync: '펼침 상태와 aria-expanded를 함께 바꿈',
      defect: 'aria-expanded 갱신을 빠뜨림 (의도한 결함)',
    },
    name: '받는 분',
    defaultName: '김민지',
    sms: '문자 알림 받기',
    details: '주문 상세',
    panel: '무선 키보드 1개 · 무료 배송',
    caption: '이 실습 요소들의 지금 값 — 실제 DOM에서 읽음',
    head: ['요소', 'HTML 속성 (getAttribute)', 'DOM 프로퍼티'],
    rows: {
      value: 'input value',
      checked: 'checkbox checked',
      expanded: '버튼 aria-expanded / 패널 hidden',
    },
    absent: '(없음)',
    match: '화면 상태와 aria-expanded가 같습니다',
    status: (open: boolean, text: string) => `주문 상세 ${open ? '펼침' : '접힘'} — ${text}`,
    mismatch: '화면은 펼쳐졌는데 aria-expanded는 "false"입니다',
    reset: '다시 하기',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Edit the text, then press the checkbox and the "Order details" button and compare the values in the table.',
    modeLabel: 'Button state handling',
    modes: {
      sync: 'Change the expanded state and aria-expanded together',
      defect: 'Forget to update aria-expanded (intentional defect)',
    },
    name: 'Recipient',
    defaultName: 'Jamie Lee',
    sms: 'Get text alerts',
    details: 'Order details',
    panel: '1 wireless keyboard · free shipping',
    caption: 'Current values of these elements — read from the real DOM',
    head: ['Element', 'HTML attribute (getAttribute)', 'DOM property'],
    rows: {
      value: 'input value',
      checked: 'checkbox checked',
      expanded: 'button aria-expanded / panel hidden',
    },
    absent: '(none)',
    match: 'The visible state and aria-expanded agree',
    status: (open: boolean, text: string) =>
      `Order details ${open ? 'expanded' : 'collapsed'} — ${text}`,
    mismatch: 'The panel is open on screen, but aria-expanded is "false"',
    reset: 'Start over',
  },
};

/**
 * 속성과 프로퍼티의 차이를 실제 값으로 보여주는 실습. input · checkbox는 비제어 요소라 React가
 * 속성을 다시 쓰지 않으므로 브라우저 그대로의 차이가 보인다. 결함 모드에서는 aria-expanded를 고정한다.
 */
export const AttrPropDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [mode, setMode] = useState<Mode>('sync');
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [tick, setTick] = useState(0);
  const [rows, setRows] = useState<Row[]>([]);
  const [instance, setInstance] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const refresh = () => setTick((n) => n + 1);

  useEffect(() => {
    const input = inputRef.current;
    const check = checkRef.current;
    const button = buttonRef.current;
    const panel = panelRef.current;
    if (!input || !check || !button || !panel) return;
    const attr = (el: Element, name: string) =>
      el.hasAttribute(name) ? `${name}="${el.getAttribute(name)}"` : c.absent;
    setRows([
      { what: c.rows.value, attribute: attr(input, 'value'), property: `value = "${input.value}"` },
      {
        what: c.rows.checked,
        attribute: attr(check, 'checked'),
        property: `checked = ${check.checked}`,
      },
      {
        what: c.rows.expanded,
        attribute: attr(button, 'aria-expanded'),
        property: `hidden = ${panel.hidden}`,
      },
    ]);
  }, [tick, open, mode, instance, c]);

  const expanded = mode === 'sync' ? open : false;
  const matches = expanded === open;

  /** 펼침 상태를 바꾸고, 화면 상태와 aria-expanded가 같은지 알린다. */
  const toggle = () => {
    const next = !open;
    setOpen(next);
    const agree = mode === 'sync' || !next;
    setStatus(c.status(next, agree ? c.match : c.mismatch));
  };

  const reset = () => {
    setMode('sync');
    setOpen(false);
    setStatus('');
    setInstance((n) => n + 1);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap items-end justify-between gap-md">
        <RadioGroup
          label={c.modeLabel}
          value={mode}
          onValueChange={(value) => {
            setMode(value as Mode);
            setOpen(false);
            setStatus('');
          }}
        >
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

      {/* key를 바꾸면 비제어 요소가 처음 값으로 다시 만들어진다. */}
      <div
        key={instance}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-name`}>{c.name}</label>
          <input
            ref={inputRef}
            id={`${id}-name`}
            defaultValue={c.defaultName}
            onInput={refresh}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm sm:w-64"
          />
        </div>
        <label className="flex items-center gap-sm">
          <input ref={checkRef} type="checkbox" onChange={refresh} />
          {c.sms}
        </label>
        <div>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={expanded}
            aria-controls={`${id}-panel`}
            onClick={toggle}
            className="inline-flex items-center gap-xs rounded-sm border border-stroke-light px-md py-sm font-semiBold text-text-default hover:bg-background-grey/20"
          >
            {c.details}
            <ChevronDown className={cx('h-4 w-4', open && 'rotate-180')} aria-hidden="true" />
          </button>
          <div ref={panelRef} id={`${id}-panel`} hidden={!open} className="mt-sm">
            {c.panel}
          </div>
        </div>
      </div>

      <TableScroll label={c.caption}>
        <table className="w-full text-left text-xxsm">
          <caption className="mb-xs text-left text-text-light">{c.caption}</caption>
          <thead>
            <tr>
              {c.head.map((h) => (
                <th key={h} scope="col" className="py-2xs pr-md font-semiBold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.what} className="border-t border-stroke-light">
                <th scope="row" className="py-2xs pr-md font-normal">
                  {row.what}
                </th>
                <td className="py-2xs pr-md font-mono">{row.attribute}</td>
                <td className="py-2xs pr-md font-mono">{row.property}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableScroll>
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
