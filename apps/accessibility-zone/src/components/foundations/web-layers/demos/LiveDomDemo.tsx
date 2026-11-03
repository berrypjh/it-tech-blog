'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';
import { ChevronDown } from 'lucide-react';

import { PracticeFrame } from '@/components/shared/PracticeFrame';

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
    initial: '처음 상태 (페이지를 열었을 때의 DOM)',
    now: '지금 DOM',
    classNote:
      '두 코드 모두 이 브라우저의 실제 DOM을 읽은 것이고, 길어지는 class 속성만 생략했습니다.',
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
    initial: 'Initial state (the DOM when the page opened)',
    now: 'DOM right now',
    classNote:
      'Both are read from this browser’s live DOM; only the long class attributes are left out.',
    reset: 'Start over',
    status: (n: number, open: boolean, js: boolean) =>
      js
        ? `click #${n} · state: ${open ? 'expanded' : 'collapsed'}`
        : `click #${n} · JavaScript handling is off, so the state did not change`,
  },
};

/** class 속성을 뺀 outerHTML. 요소는 복제본에서만 고친다. */
const markupOf = (elements: (HTMLElement | null)[]) =>
  elements
    .map((el) => {
      if (!el) return '';
      const copy = el.cloneNode(true) as HTMLElement;
      [copy, ...copy.querySelectorAll('*')].forEach((node) => node.removeAttribute('class'));
      return copy.outerHTML;
    })
    .join('\n');

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
          { label: c.initial, code: initial },
          { label: c.now, code: now },
        ].map((block) => (
          <figure key={block.label} className="min-w-0">
            <figcaption className="mb-xs text-xxsm font-semiBold text-text-light">
              {block.label}
            </figcaption>
            <pre className="whitespace-pre-wrap break-all rounded-sm border border-stroke-light bg-background-surface p-md text-xxsm">
              <code>{block.code}</code>
            </pre>
          </figure>
        ))}
      </div>

      <p className="text-xxsm text-text-light">{c.classNote}</p>
      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
