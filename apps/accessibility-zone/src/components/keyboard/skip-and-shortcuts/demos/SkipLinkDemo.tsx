'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '../../shared/ObservedPanel';
import { describeElement } from '../../shared/useActiveElement';

type Target = 'focusable' | 'plain' | 'missing';
type Report = { active: string; inView: boolean };

const targets: Target[] = ['focusable', 'plain', 'missing'];
const menu = [1, 2, 3, 4];
/** 조각 이동과 스크롤이 끝난 뒤 값을 읽기 위한 대기 시간(ms). */
const READ_DELAY = 300;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '"시작" 버튼을 누른 뒤 Tab을 누르면 건너뛰기 링크가 나타납니다. Enter로 실행하고 도착 값을 본 다음, Tab을 한 번 더 눌러 다음 위치를 확인하세요.',
    legend: '도착 대상',
    labels: {
      focusable: 'tabindex="-1"인 제목',
      plain: 'tabindex 없는 제목',
      missing: '없는 ID (의도한 결함)',
    },
    start: '시작',
    skip: '예제 본문으로 건너뛰기',
    nav: '예제의 반복 메뉴',
    item: (n: number) => `메뉴 ${n}`,
    heading: '예제 본문',
    body: '주문 내역을 확인하고 다음 단계로 넘어갑니다 (교육 예시).',
    next: '과업 계속하기',
    observed: '건너뛰기 뒤 관찰한 값',
    active: 'document.activeElement',
    inView: '예제 본문 제목이 화면 안에 있는가',
    nextStop: '그다음 Tab이 닿은 곳',
    yes: '예',
    no: '아니요',
    none: '(아직 없음)',
    note: '활성 요소와 다음 Tab은 브라우저마다 다를 수 있습니다. 관찰한 브라우저와 함께 기록합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press "Start," then Tab, and the skip link appears. Activate it with Enter, read the landing values, then press Tab once more to see the next position.',
    legend: 'Target',
    labels: {
      focusable: 'Heading with tabindex="-1"',
      plain: 'Heading without tabindex',
      missing: 'Missing ID (intentional defect)',
    },
    start: 'Start',
    skip: 'Skip to example content',
    nav: 'Repeated example menu',
    item: (n: number) => `Menu ${n}`,
    heading: 'Example content',
    body: 'Review the order and continue to the next step (teaching example).',
    next: 'Continue task',
    observed: 'Observed after skipping',
    active: 'document.activeElement',
    inView: 'Is the example heading on screen?',
    nextStop: 'Where the next Tab went',
    yes: 'Yes',
    no: 'No',
    none: '(nothing yet)',
    note: 'The active element and next Tab can differ by browser. Record them with the browser you observed.',
  },
};

const controlClass = 'rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold';

/** 이 상자 안의 건너뛰기 링크로 도착 대상별 활성 요소 · 화면 위치 · 다음 Tab을 기록한다. */
export const SkipLinkDemo = () => {
  const c = useLang(content);
  const id = useId();
  const targetId = `${id}-content`;
  const [target, setTarget] = useState<Target>('focusable');
  const [report, setReport] = useState<Report | null>(null);
  const [nextStop, setNextStop] = useState<string | null>(null);
  const awaitingNext = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skipRef = useRef<HTMLAnchorElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onSkip = () => {
    setReport(null);
    setNextStop(null);
    awaitingNext.current = true;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const top = headingRef.current?.getBoundingClientRect().top ?? -1;
      setReport({
        active: describeElement(document.activeElement),
        inView: top >= 0 && top < window.innerHeight,
      });
    }, READ_DELAY);
  };

  const onFocus = (event: React.FocusEvent) => {
    const landed = event.target === headingRef.current || event.target === skipRef.current;
    const byKeyboard = (event.target as Element).matches(':focus-visible');
    if (!awaitingNext.current || landed || !byKeyboard) return;
    awaitingNext.current = false;
    setNextStop(describeElement(event.target));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={target}
        onValueChange={(value) => {
          setTarget(value as Target);
          setReport(null);
          setNextStop(null);
          awaitingNext.current = false;
        }}
        className="flex-row flex-wrap gap-x-xl"
      >
        {targets.map((value) => (
          <Radio key={value} value={value} className="text-xsm">
            {c.labels[value]}
          </Radio>
        ))}
      </RadioGroup>

      <div
        onFocus={onFocus}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <button type="button" className={`${controlClass} w-fit`}>
          {c.start}
        </button>
        <a
          ref={skipRef}
          href={`#${target === 'missing' ? `${id}-missing` : targetId}`}
          onClick={onSkip}
          className="sr-only w-fit focus:not-sr-only"
        >
          {c.skip}
        </a>
        <nav aria-label={c.nav} className="flex flex-wrap gap-sm">
          {menu.map((n) => (
            <button key={n} type="button" className={controlClass}>
              {c.item(n)}
            </button>
          ))}
        </nav>
        <div className="flex flex-col gap-sm">
          <h3
            key={target}
            ref={headingRef}
            id={target === 'missing' ? undefined : targetId}
            tabIndex={target === 'focusable' ? -1 : undefined}
            className="w-fit font-bold text-text-default"
          >
            {c.heading}
          </h3>
          <p>{c.body}</p>
          <button type="button" className={`${controlClass} w-fit`}>
            {c.next}
          </button>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, report ? <code key="a">{report.active}</code> : c.none],
          [c.inView, report ? (report.inView ? c.yes : c.no) : c.none],
          [c.nextStop, nextStop ? <code key="a">{nextStop}</code> : c.none],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
