'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, cx, Radio, RadioGroup } from '@berrypjh/react-ui';

import { PracticeFrame } from '@/components/shared/PracticeFrame';

type Version = 'defect' | 'fixed';

/** 화면에 남기는 이벤트 기록 줄 수. */
const LOG_SIZE = 4;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '결함 버전에서 "1개 추가"를 누르고, Tab으로 "배송 안내"까지 가 보세요. 원인을 찾았으면 수정 버전에서 같은 과업을 키보드로 다시 해 봅니다. 키보드가 없으면 관찰 패널의 "배송 안내가 링크인가"로 결함 2를 확인할 수 있습니다.',
    versionLabel: '화면 버전',
    versions: { defect: '결함 버전', fixed: '수정 버전' },
    qty: '수량',
    add: '1개 추가',
    shipping: '배송 안내',
    order: '주문하기',
    shippingText: '배송 안내: 오후 2시 전 주문은 당일 출발합니다.',
    ordered: (order: number, n: string) =>
      `주문 접수 #${order}: 수량 ${n}개 (실습이라 실제 주문은 없습니다)`,
    isLink: '배송 안내가 링크인가 (:any-link)',
    yes: '예 — Tab으로 닿음',
    no: '아니오 — href가 없어 Tab으로 닿지 않음',
    observe: '사이트 안 관찰',
    focus: '지금 포커스',
    outside: '(실습 밖)',
    log: '최근 이벤트',
    empty: '없음',
    click: (target: string) => `click → ${target}`,
    submit: (submitter: string) => `submit — 제출한 버튼: ${submitter}`,
    reset: '다시 하기',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'In the defect version, press "Add one" and Tab to "Shipping info". Once you find the causes, do the same task with the keyboard in the fixed version. Without a keyboard, check defect 2 with "Is Shipping info a link" in the observation panel.',
    versionLabel: 'Screen version',
    versions: { defect: 'Defect version', fixed: 'Fixed version' },
    qty: 'Quantity',
    add: 'Add one',
    shipping: 'Shipping info',
    order: 'Place order',
    shippingText: 'Shipping info: orders before 2 p.m. ship the same day.',
    ordered: (order: number, n: string) =>
      `Order #${order} received: quantity ${n} (an exercise; no real order is placed)`,
    isLink: 'Is Shipping info a link (:any-link)',
    yes: 'Yes — reachable with Tab',
    no: 'No — no href, so Tab does not reach it',
    observe: 'In-page observation',
    focus: 'Focus now',
    outside: '(outside the exercise)',
    log: 'Recent events',
    empty: 'none',
    click: (target: string) => `click → ${target}`,
    submit: (submitter: string) => `submit — submitted by: ${submitter}`,
    reset: 'Start over',
  },
};

/** 관찰 패널에 쓸 요소 설명: 태그, type, 보이는 글자. */
const describe = (el: Element | null) => {
  if (!el) return '?';
  const tag = el.tagName.toLowerCase();
  const type = el.getAttribute('type');
  const text = el instanceof HTMLInputElement ? el.labels?.[0]?.textContent : el.textContent;
  return `<${tag}${type ? ` type="${type}"` : ''}> ${text?.trim() ?? ''}`.trim();
};

/**
 * 장바구니 폼의 두 결함(type 없는 button, href 없는 a)을 재현하고 고친 버전과 비교하는 실습.
 * 관찰 패널은 실제 focusin · click · submit 이벤트와 SubmitEvent.submitter를 읽는다.
 */
export const TraceDemo = () => {
  const c = useLang(content);
  const id = useId();
  const areaRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const orders = useRef(0);
  const [isLink, setIsLink] = useState<boolean | null>(null);
  const [version, setVersion] = useState<Version>('defect');
  const [qty, setQty] = useState('1');
  // 결함 버전에서는 click 처리 직후 같은 이벤트의 기본 동작으로 submit이 이어지므로, 렌더링 전 최신 값을 둔다.
  const qtyRef = useRef('1');
  const [message, setMessage] = useState('');
  const [focus, setFocus] = useState('');
  const [log, setLog] = useState<string[]>([]);
  const defect = version === 'defect';

  useEffect(() => {
    const onFocusIn = () => {
      const active = document.activeElement;
      setFocus(active && areaRef.current?.contains(active) ? describe(active) : c.outside);
    };
    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, [c]);

  useEffect(() => setIsLink(linkRef.current?.matches(':any-link') ?? null), [version]);

  const push = (line: string) => setLog((prev) => [...prev, line].slice(-LOG_SIZE));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    push(c.submit(describe(submitter)));
    orders.current += 1;
    setMessage(c.ordered(orders.current, qtyRef.current));
  };

  const changeQty = (value: string) => {
    qtyRef.current = value;
    setQty(value);
  };

  const add = () => changeQty(String((Number(qtyRef.current) || 0) + 1));

  const goShipping = () => document.getElementById(`${id}-shipping`)?.scrollIntoView();

  const reset = () => {
    setVersion('defect');
    changeQty('1');
    orders.current = 0;
    setMessage('');
    setLog([]);
  };

  const linkClass = 'text-xsm text-text-link underline';

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap items-end justify-between gap-md">
        <RadioGroup
          label={c.versionLabel}
          value={version}
          onValueChange={(value) => {
            setVersion(value as Version);
            setMessage('');
            setLog([]);
          }}
          className="flex-row flex-wrap gap-x-xl"
        >
          {(Object.keys(c.versions) as Version[]).map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.versions[value]}
            </Radio>
          ))}
        </RadioGroup>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>

      <div
        ref={areaRef}
        className={cx(
          'rounded-md border-2 border-dashed p-lg',
          defect ? 'border-stroke-warning' : 'border-stroke-success',
        )}
      >
        <p
          className={cx(
            'mb-md text-xxsm font-semiBold',
            defect ? 'text-text-warning' : 'text-text-success',
          )}
        >
          {c.versions[version]}
        </p>
        <form
          onSubmit={onSubmit}
          onClickCapture={(e) => push(c.click(describe(e.target as Element)))}
          className="flex flex-wrap items-end gap-md"
        >
          <div className="flex flex-col gap-xs text-xsm">
            <label htmlFor={`${id}-qty`}>{c.qty}</label>
            <input
              id={`${id}-qty`}
              inputMode="numeric"
              value={qty}
              onChange={(e) => changeQty(e.target.value)}
              className="w-24 rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
            />
          </div>
          {defect ? (
            // 의도한 결함: form 안의 button은 type이 없으면 submit이다.

            <button
              onClick={add}
              className="rounded-sm border border-stroke-light px-md py-sm text-xsm"
            >
              {c.add}
            </button>
          ) : (
            <button
              type="button"
              onClick={add}
              className="rounded-sm border border-stroke-light px-md py-sm text-xsm"
            >
              {c.add}
            </button>
          )}
          {defect ? (
            // 의도한 결함: href가 없는 a는 링크가 아니어서 Tab으로 닿지 않는다.
            // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <a ref={linkRef} onClick={goShipping} className={cx(linkClass, 'cursor-pointer')}>
              {c.shipping}
            </a>
          ) : (
            <a ref={linkRef} href={`#${id}-shipping`} className={linkClass}>
              {c.shipping}
            </a>
          )}
          <Button type="submit" size="sm">
            {c.order}
          </Button>
        </form>
        <p role="status" className="mt-md text-xsm font-semiBold text-text-default">
          {message}
        </p>
        <p id={`${id}-shipping`} tabIndex={-1} className="mt-sm text-xxsm text-text-light">
          {c.shippingText}
        </p>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-xs font-semiBold text-text-default">{c.observe}</p>
        <dl className="flex flex-col gap-2xs">
          <dt className="mt-xs text-text-default">{c.focus}</dt>
          <dd className="font-mono text-xxsm text-text-light">{focus || c.empty}</dd>
          <dt className="mt-xs text-text-default">{c.isLink}</dt>
          <dd className="text-xxsm text-text-light">
            {isLink === null ? c.empty : isLink ? c.yes : c.no}
          </dd>
          <dt className="mt-xs text-text-default">{c.log}</dt>
          <dd className="font-mono text-xxsm text-text-light">
            {log.length ? (
              <ol>
                {log.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            ) : (
              c.empty
            )}
          </dd>
        </dl>
      </div>
    </PracticeFrame>
  );
};
