'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

type Line = { key: number; text: string; summary: boolean };

/** 화면에 남기는 기록 줄 수. */
const LOG_SIZE = 16;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '점선 상자 안의 링크 · 체크박스 · 주문 버튼을 누르고 기록을 보세요. 위 두 옵션으로 기본 동작을 막아 볼 수 있습니다.',
    preventLink: '링크의 기본 동작 막기',
    preventCheck: '체크박스의 기본 동작 막기',
    link: '배송 안내 보기',
    check: '선물 포장',
    submit: '주문하기',
    target: '이 링크가 가는 곳: 배송 안내',
    log: '이벤트 기록',
    empty: '아직 기록이 없습니다.',
    clear: '기록 지우기',
    phases: ['', '캡처', '대상', '버블링'],
    line: (type: string, phase: string, current: string, target: string) =>
      `${type} · ${phase} · currentTarget: ${current} · target: ${target}`,
    summary: (n: number, type: string, prevented: boolean, checked?: boolean) =>
      `#${n} ${type} 끝 — 기본 동작 ${prevented ? '막힘' : '실행됨'}${
        checked === undefined ? '' : ` · checked: ${checked}`
      }`,
    submitNote: 'submit은 서버가 없는 실습이라 항상 막고 기록만 남깁니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press the link, checkbox, and order button inside the dashed box and read the log. The two options above let you block default actions.',
    preventLink: 'Block the link’s default action',
    preventCheck: 'Block the checkbox’s default action',
    link: 'Shipping details',
    check: 'Gift wrap',
    submit: 'Place order',
    target: 'Where the link goes: shipping details',
    log: 'Event log',
    empty: 'No entries yet.',
    clear: 'Clear log',
    phases: ['', 'capturing', 'at target', 'bubbling'],
    line: (type: string, phase: string, current: string, target: string) =>
      `${type} · ${phase} · currentTarget: ${current} · target: ${target}`,
    summary: (n: number, type: string, prevented: boolean, checked?: boolean) =>
      `#${n} ${type} done — default action ${prevented ? 'blocked' : 'ran'}${
        checked === undefined ? '' : ` · checked: ${checked}`
      }`,
    submitNote: 'There is no server, so submit is always blocked and only logged.',
  },
};

/** 기록에 쓸 요소 이름. 태그와 구분용 속성만 쓴다. */
const describe = (el: EventTarget | null) => {
  if (!(el instanceof Element)) return '?';
  const tag = el.tagName.toLowerCase();
  if (el instanceof HTMLInputElement) return `input[type=${el.type}]`;
  return el.classList.contains('event-card') ? `${tag}.card` : tag;
};

/**
 * 실제 DOM 리스너(addEventListener)를 바깥 상자와 form에 캡처 · 버블링 양쪽으로 붙여
 * click과 submit의 경로, target · currentTarget, 기본 동작 실행 여부를 기록하는 실습.
 */
export const EventPathDemo = () => {
  const c = useLang(content);
  const id = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const prevent = useRef({ link: false, check: false });
  const count = useRef(0);
  const lineKey = useRef(0);
  const [preventLink, setPreventLink] = useState(false);
  const [preventCheck, setPreventCheck] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const card = cardRef.current;
    const form = formRef.current;
    if (!card || !form) return;

    const push = (text: string, summary = false) =>
      setLines((prev) => [...prev, { key: lineKey.current++, text, summary }].slice(-LOG_SIZE));

    const log = (e: Event) =>
      push(c.line(e.type, c.phases[e.eventPhase], describe(e.currentTarget), describe(e.target)));

    const onCardCapture = (e: Event) => {
      count.current += 1;
      log(e);
    };

    const onFormBubble = (e: Event) => {
      log(e);
      const target = e.target;
      if (e.type === 'submit') e.preventDefault();
      if (target instanceof HTMLAnchorElement && prevent.current.link) e.preventDefault();
      if (target instanceof HTMLInputElement && prevent.current.check) e.preventDefault();
    };

    const onCardBubble = (e: Event) => {
      log(e);
      const n = count.current;
      const target = e.target;
      // 체크박스는 dispatch 중에 이미 바뀐 상태이고, 기본 동작이 막히면 dispatch가 끝난 뒤 되돌아간다.
      // 요약을 바로 남겨야 click 요약이 뒤이은 submit 기록보다 먼저 나오므로 최종 값을 계산해 쓴다.
      const checked =
        target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked !== e.defaultPrevented
          : undefined;
      const text = c.summary(n, e.type, e.defaultPrevented, checked);
      push(text, true);
      setStatus(text);
    };

    const types = ['click', 'submit'];
    for (const type of types) {
      card.addEventListener(type, onCardCapture, true);
      form.addEventListener(type, log, true);
      form.addEventListener(type, onFormBubble);
      card.addEventListener(type, onCardBubble);
    }
    return () => {
      for (const type of types) {
        card.removeEventListener(type, onCardCapture, true);
        form.removeEventListener(type, log, true);
        form.removeEventListener(type, onFormBubble);
        card.removeEventListener(type, onCardBubble);
      }
    };
  }, [c]);

  const clear = () => {
    setLines([]);
    setStatus('');
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-xs text-xsm">
        <label className="flex items-center gap-sm">
          <input
            type="checkbox"
            checked={preventLink}
            onChange={(e) => {
              prevent.current.link = e.target.checked;
              setPreventLink(e.target.checked);
            }}
          />
          {c.preventLink}
        </label>
        <label className="flex items-center gap-sm">
          <input
            type="checkbox"
            checked={preventCheck}
            onChange={(e) => {
              prevent.current.check = e.target.checked;
              setPreventCheck(e.target.checked);
            }}
          />
          {c.preventCheck}
        </label>
      </div>

      <div
        ref={cardRef}
        className="event-card rounded-sm border-2 border-dashed border-stroke-light p-md"
      >
        <form ref={formRef} className="flex flex-wrap items-center gap-lg text-xsm">
          <a href={`#${id}-target`}>{c.link}</a>
          {/* 링크가 이동한 곳을 링크 바로 뒤에 두어, 이동한 뒤 Tab이 다음 요소로 이어지게 한다. */}
          <span id={`${id}-target`} tabIndex={-1} className="text-xxsm text-text-light">
            {c.target}
          </span>
          <label className="flex items-center gap-sm">
            <input type="checkbox" name="gift" />
            {c.check}
          </label>
          <Button type="submit" size="sm">
            {c.submit}
          </Button>
        </form>
      </div>
      <p className="text-xxsm text-text-light">{c.submitNote}</p>

      <div>
        <div className="mb-xs flex items-center justify-between gap-md">
          <p className="text-xsm font-semiBold text-text-default">{c.log}</p>
          <Button type="button" variant="text" size="sm" onClick={clear}>
            {c.clear}
          </Button>
        </div>
        {lines.length ? (
          <ol className="flex flex-col gap-2xs rounded-sm border border-stroke-light bg-background-surface p-md font-mono text-xxsm">
            {lines.map((line) => (
              <li
                key={line.key}
                className={line.summary ? 'font-semiBold text-text-primary' : 'text-text-light'}
              >
                {line.text}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-xsm text-text-light">{c.empty}</p>
        )}
      </div>

      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
