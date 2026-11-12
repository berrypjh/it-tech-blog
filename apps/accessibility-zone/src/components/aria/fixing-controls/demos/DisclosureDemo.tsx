'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';

import { Kbd } from '@/components/shared/Kbd';
import { SourceTag } from '@/components/shared/SourceTag';

type Version = 'before' | 'after';
type Keys = { Enter: number; Space: number };

const content = {
  ko: {
    practice: '실습',
    instructions: (enter: React.ReactNode, space: React.ReactNode) => (
      <>
        두 컨트롤을 각각 마우스로 눌러 본 뒤, Tab으로 가서 {enter}와 {space}를 눌러 보세요. 아래
        관찰 값이 어떻게 바뀌는지, 바뀌지 않는지를 기록합니다.
      </>
    ),
    titles: { before: '수정 전 (의도한 결함)', after: '수정 후' },
    name: '상세 보기',
    panel: '주문 상세 (가상의 주문): 상품 2개 · 배송비 3,000원',
    observed: '지금 관찰한 값',
    rows: {
      element: '요소 · role',
      tab: 'tabIndex (0 이상이면 Tab 순서에 있음)',
      text: '보이는 글자',
      expanded: 'aria-expanded',
      hidden: '패널이 숨어 있는가',
      match: 'aria-expanded와 패널이 맞는가',
      target: 'aria-controls 대상',
      keys: '이 컨트롤이 받은 키',
      toggles: '펼침이 바뀐 횟수',
    },
    none: '(없음)',
    yes: '예',
    no: '아니요',
    found: (id: string) => `있음 (#${id})`,
    missing: (id: string) => `없음 (#${id}를 찾지 못함)`,
    keyCount: (k: Keys) => `Enter ${k.Enter}회 · Space ${k.Space}회`,
    times: (n: number) => `${n}회`,
    note: '관찰 값은 페이지가 DOM에서 직접 읽은 것입니다. 보조기술이 무엇을 말하는지는 실제 보조기술로 들어 봐야 합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions: (enter: React.ReactNode, space: React.ReactNode) => (
      <>
        Click each control with a mouse, then Tab to it and press {enter} and {space}. Record how
        the observed values below change, or do not change.
      </>
    ),
    titles: { before: 'Before (intentional defect)', after: 'After' },
    name: 'Show details',
    panel: 'Order details (fictional order): 2 items, shipping $3',
    observed: 'What you observe now',
    rows: {
      element: 'Element and role',
      tab: 'tabIndex (0 or more means in the Tab order)',
      text: 'Visible text',
      expanded: 'aria-expanded',
      hidden: 'Is the panel hidden?',
      match: 'Do aria-expanded and the panel agree?',
      target: 'aria-controls target',
      keys: 'Keys this control received',
      toggles: 'Times expansion changed',
    },
    none: '(none)',
    yes: 'Yes',
    no: 'No',
    found: (id: string) => `Found (#${id})`,
    missing: (id: string) => `Missing (#${id} not found)`,
    keyCount: (k: Keys) => `Enter ${k.Enter}, Space ${k.Space}`,
    times: (n: number) => `${n}`,
    note: 'The observed values are read by the page directly from the DOM. What assistive technology says has to be heard with real assistive technology.',
  },
};

type Reading = {
  element: string;
  tabIndex: number;
  text: string;
  expanded: string | null;
  hidden: boolean;
  controls: string | null;
  targetFound: boolean;
};

/** 컨트롤과 패널에서 실제 DOM 값을 읽는다. 이름 · 역할의 최종 노출은 페이지 스크립트로 읽을 수 없다. */
const read = (control: HTMLElement, panel: HTMLElement): Reading => {
  const controls = control.getAttribute('aria-controls');
  const role = control.getAttribute('role');
  return {
    element: `${control.tagName.toLowerCase()}${role ? ` role="${role}"` : ''}`,
    tabIndex: control.tabIndex,
    text: control.textContent?.trim() ?? '',
    expanded: control.getAttribute('aria-expanded'),
    hidden: panel.hidden,
    controls,
    targetFound: controls !== null && document.getElementById(controls) !== null,
  };
};

const keyOf = (key: string) => (key === 'Enter' ? 'Enter' : key === ' ' ? 'Space' : null);

const Chevron = ({ decorative }: { decorative: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden={decorative ? 'true' : undefined}
    focusable={decorative ? 'false' : undefined}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const controlClass =
  'inline-flex items-center gap-sm rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold text-text-default';

/** 수정 전 · 후 컨트롤 하나와 그 관찰 값. 수정 전은 의미 · 이름 · 상태 · 관계의 결함을 일부러 재현한다. */
const DisclosureCard = ({ version }: { version: Version }) => {
  const c = useLang(content);
  const { locale: lang } = useLocale();
  const id = useId();
  const panelId = `${id}-details`;
  const [open, setOpen] = useState(false);
  const [toggles, setToggles] = useState(0);
  const [keys, setKeys] = useState<Keys>({ Enter: 0, Space: 0 });
  const [reading, setReading] = useState<Reading | null>(null);
  const controlRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controlRef.current && panelRef.current) {
      setReading(read(controlRef.current, panelRef.current));
    }
  }, [open]);

  const toggle = () => {
    setOpen((prev) => !prev);
    setToggles((prev) => prev + 1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const key = keyOf(e.key);
    if (key && !e.repeat) setKeys((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const control =
    version === 'before' ? (
      // 의도한 결함: role만 있고 포커스 · 키 · 이름이 없으며, aria-expanded는 고정이고 aria-controls는 없는 id를 가리킨다.
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus -- Tab으로 닿지 않는 버튼을 의도적으로 재현
      <div
        ref={controlRef as React.RefObject<HTMLDivElement>}
        role="button"
        aria-expanded="true"
        aria-controls={`${id}-detail`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={cx(controlClass, 'cursor-pointer select-none')}
      >
        <Chevron decorative={false} />
      </div>
    ) : (
      <button
        ref={controlRef as React.RefObject<HTMLButtonElement>}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={cx(controlClass, 'hover:border-stroke-primary')}
      >
        <Chevron decorative />
        {c.name}
      </button>
    );

  const r = reading;
  const yesNo = (v: boolean) => (v ? c.yes : c.no);

  return (
    <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md">
      <p
        className={cx(
          'text-xxsm font-semiBold',
          version === 'before' ? 'text-text-error' : 'text-text-success',
        )}
      >
        {c.titles[version]}
      </p>
      <div>{control}</div>
      <div ref={panelRef} id={panelId} hidden={!open} className="text-xsm text-text-light">
        {c.panel}
      </div>
      {r && (
        <div className="text-xsm">
          <p className="mb-xs flex flex-wrap items-center gap-sm font-semiBold text-text-default">
            {c.observed} <SourceTag locale={lang} id="dom" />
          </p>
          <dl className="grid gap-x-md gap-y-2xs">
            <dt className="text-text-light">{c.rows.element}</dt>
            <dd>
              <code>{r.element}</code>
            </dd>
            <dt className="text-text-light">{c.rows.tab}</dt>
            <dd>{r.tabIndex}</dd>
            <dt className="text-text-light">{c.rows.text}</dt>
            <dd>{r.text || c.none}</dd>
            <dt className="text-text-light">{c.rows.expanded}</dt>
            <dd>
              <code>{r.expanded ?? c.none}</code>
            </dd>
            <dt className="text-text-light">{c.rows.hidden}</dt>
            <dd>{yesNo(r.hidden)}</dd>
            <dt className="text-text-light">{c.rows.match}</dt>
            <dd>{yesNo(r.expanded === String(!r.hidden))}</dd>
            <dt className="text-text-light">{c.rows.target}</dt>
            <dd className="break-all">
              {r.controls === null
                ? c.none
                : r.targetFound
                  ? c.found(r.controls)
                  : c.missing(r.controls)}
            </dd>
            <dt className="text-text-light">{c.rows.keys}</dt>
            <dd>{c.keyCount(keys)}</dd>
            <dt className="text-text-light">{c.rows.toggles}</dt>
            <dd>{c.times(toggles)}</dd>
          </dl>
        </div>
      )}
    </div>
  );
};

/**
 * 수정 전 · 후 상세 보기 컨트롤을 나란히 두고, 마우스 · Tab · Enter · Space로 조작한 결과를 DOM 관찰 값으로 보여 준다.
 * 수정 전 컨트롤은 포커스를 받지 않으므로 Tab 순서를 깨거나 포커스를 가두지 않는다.
 */
export const DisclosureDemo = () => {
  const c = useLang(content);

  return (
    <PracticeFrame
      label={c.practice}
      instructions={c.instructions(<Kbd>Enter</Kbd>, <Kbd>Space</Kbd>)}
    >
      <div className="grid gap-md md:grid-cols-2">
        <DisclosureCard version="before" />
        <DisclosureCard version="after" />
      </div>
      <p className="text-xxsm leading-xxsm text-text-light">{c.note}</p>
    </PracticeFrame>
  );
};
