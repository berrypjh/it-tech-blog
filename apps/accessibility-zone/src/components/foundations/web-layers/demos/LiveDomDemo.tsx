'use client';

import { Fragment, useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';
import { ChevronDown } from 'lucide-react';

const content = {
  ko: {
    practice: '실습',
    instructions: '"배송 정보" 버튼을 눌러 보고, JavaScript 처리를 끈 뒤 다시 눌러 보세요.',
    jsLabel: 'JavaScript 처리',
    jsOn: '켜짐',
    jsOff: '꺼짐',
    toggle: '배송 정보',
    panel: '주문 후 3일 안에 도착합니다.',
    clicks: (n: number) => `button의 click 이벤트: ${n}회`,
    initial: '처음 DOM (페이지를 열었을 때)',
    now: '지금 DOM (누를 때마다 갱신)',
    note: '화면 낭독기가 전하는 펼침 · 접힘 상태도 지금 DOM의 aria-expanded 값에서 나옵니다.',
    reset: '다시 하기',
    status: (n: number, open: boolean, js: boolean) =>
      js
        ? `click ${n}회째 · 상태: ${open ? '펼침' : '접힘'}`
        : `click ${n}회째 · JavaScript 처리가 꺼져 상태는 그대로입니다`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press the "Shipping info" button, then turn JavaScript handling off and press it again.',
    jsLabel: 'JavaScript handling',
    jsOn: 'On',
    jsOff: 'Off',
    toggle: 'Shipping info',
    panel: 'Arrives within 3 days of your order.',
    clicks: (n: number) => `click events on the button: ${n}`,
    initial: 'Initial DOM (when the page opened)',
    now: 'DOM right now (updated on every press)',
    note: 'The expanded or collapsed state a screen reader announces also comes from aria-expanded in the current DOM.',
    reset: 'Start over',
    status: (n: number, open: boolean, js: boolean) =>
      js
        ? `click #${n} · state: ${open ? 'expanded' : 'collapsed'}`
        : `click #${n} · JavaScript handling is off, so the state did not change`,
  },
};

/** class 속성과 아이콘 svg 내용을 뺀 outerHTML. 요소는 복제본에서만 고친다. */
const markupOf = (elements: (HTMLElement | null)[]) =>
  elements
    .map((el) => {
      if (!el) return '';
      const copy = el.cloneNode(true) as HTMLElement;
      [copy, ...copy.querySelectorAll('*')].forEach((node) => node.removeAttribute('class'));
      return copy.outerHTML.replace(/<svg[\s\S]*?<\/svg>/g, '<svg>…</svg>');
    })
    .join('\n');

const ATTR = /(\s[\w-]+="[^"]*")/;

/** 마크업을 보여 주고, 다른 쪽 마크업에 없는 속성을 굵은 밑줄로 표시한다. 색에만 기대지 않는다. */
const DiffMarkup = ({ code, other }: { code: string; other: string }) => {
  const others = new Set(other.split(ATTR));
  return (
    <code>
      {code.split(ATTR).map((part, i) =>
        ATTR.test(part) && !others.has(part) ? (
          <Fragment key={i}>
            {part[0]}
            <mark className="rounded-xs bg-warning-wa500/10 font-semiBold text-text-default underline">
              {part.slice(1)}
            </mark>
          </Fragment>
        ) : (
          part
        ),
      )}
    </code>
  );
};

/**
 * 펼침 버튼 하나로 층의 책임을 나눠 보는 실습. click 이벤트는 HTML button이 만들고,
 * 펼침 상태를 속성에 반영하는 일은 JavaScript가 한다. 두 코드 칸은 실제 DOM을 읽는다.
 */
export const LiveDomDemo = () => {
  const c = useLang(content);
  const panelId = useId();
  const [js, setJs] = useState(true);
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [status, setStatus] = useState('');
  const [initial, setInitial] = useState('');
  const [now, setNow] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInitial((prev) => prev || markupOf([buttonRef.current, panelRef.current]));
    setNow(markupOf([buttonRef.current, panelRef.current]));
  }, [open, clicks]);

  const onClick = () => {
    const n = clicks + 1;
    setClicks(n);
    const next = js ? !open : open;
    setOpen(next);
    setStatus(c.status(n, next, js));
  };

  const reset = () => {
    setOpen(false);
    setClicks(0);
    setStatus('');
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap items-end justify-between gap-md">
        <RadioGroup
          label={c.jsLabel}
          value={js ? 'on' : 'off'}
          onValueChange={(value) => setJs(value === 'on')}
          className="flex-row flex-wrap gap-x-xl"
        >
          <Radio value="on" className="text-xsm">
            {c.jsOn}
          </Radio>
          <Radio value="off" className="text-xsm">
            {c.jsOff}
          </Radio>
        </RadioGroup>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>

      <div className="rounded-sm border border-stroke-light p-md">
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onClick}
          className="inline-flex items-center gap-xs rounded-sm border border-stroke-light px-md py-sm text-xsm font-semiBold text-text-default hover:bg-background-grey/20"
        >
          {c.toggle}
          <ChevronDown className={open ? 'h-4 w-4 rotate-180' : 'h-4 w-4'} aria-hidden="true" />
        </button>
        <div ref={panelRef} id={panelId} hidden={!open} className="mt-sm text-xsm">
          {c.panel}
        </div>
        <p className="mt-md text-xxsm text-text-light">{c.clicks(clicks)}</p>
      </div>

      <div className="grid gap-md md:grid-cols-2">
        {[
          { label: c.initial, code: initial, other: now },
          { label: c.now, code: now, other: initial },
        ].map((block) => (
          <figure key={block.label} className="min-w-0">
            <figcaption className="mb-xs text-xxsm font-semiBold text-text-light">
              {block.label}
            </figcaption>
            <pre className="whitespace-pre-wrap break-all rounded-sm border border-stroke-light bg-background-surface p-md text-xxsm">
              <DiffMarkup code={block.code} other={block.other} />
            </pre>
          </figure>
        ))}
      </div>

      <p className="text-xxsm text-text-light">{c.note}</p>
      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
