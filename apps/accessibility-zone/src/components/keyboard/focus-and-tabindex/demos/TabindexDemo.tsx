'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '../../shared/ObservedPanel';
import { describeElement, useActiveElement } from '../../shared/useActiveElement';

type Kind = 'button' | 'div';
type Attr = 'none' | '0' | '-1' | '1';
type Blocker = 'none' | 'disabled' | 'inert' | 'hidden';
type Config = { kind: Kind; attr: Attr; blocker: Blocker };

const kinds: Kind[] = ['button', 'div'];
const attrs: Attr[] = ['none', '0', '-1', '1'];
const blockers: Blocker[] = ['none', 'disabled', 'inert', 'hidden'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '값을 고른 뒤 "처음" 버튼을 누르고 Tab과 Shift+Tab으로 지나가 보세요. "focus() 실행"과 대상 클릭도 해 보고, 예상 순서와 실제 기록을 비교합니다.',
    kind: '대상 요소',
    attr: 'tabindex',
    blocker: '대상의 상태',
    kindLabels: { button: 'button', div: 'div' },
    attrLabels: { none: '없음', '0': '0', '-1': '-1', '1': '1 (양수)' },
    blockerLabels: { none: '보통', disabled: 'disabled', inert: 'inert', hidden: 'hidden' },
    stage: '예제 영역 (교육 예시)',
    first: '처음',
    target: '대상',
    last: '끝',
    runFocus: 'focus() 실행',
    clear: '기록 지우기',
    positiveWarning:
      '의도한 결함: 양수 값은 이 페이지 전체의 Tab 순서를 바꿉니다. 대상에서 Tab을 누르면 페이지 맨 앞쪽으로 갈 수 있습니다. 관찰한 뒤 다른 값을 고르면 원래대로 돌아옵니다.',
    divDisabled: 'div에는 disabled가 없어 이 상태는 효과가 없습니다.',
    observed: '지금 관찰한 값',
    active: 'document.activeElement',
    property: '대상의 tabIndex 프로퍼티',
    expected: '예상 순서 (표준 기준)',
    path: '실제로 지나간 순서',
    focusResult: '마지막 focus() 결과',
    clicks: '대상 click 횟수',
    none: '(아직 없음)',
    unreachable: '대상은 포커스를 받지 못함',
    focused: '대상이 포커스를 받음',
    notFocused: '대상이 포커스를 받지 못함',
    order: {
      normal: '처음 → 대상 → 끝',
      skip: '처음 → 끝',
      positive: '대상이 페이지의 다른 요소보다 먼저, 그다음 처음 → 끝',
    },
    note: '예상은 표준의 일반 동작이고, 실제 순서는 브라우저와 운영체제 설정에 따라 다를 수 있습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose values, press the "First" button, and move through with Tab and Shift+Tab. Also try "Run focus()" and clicking the target, and compare the expected order with the real log.',
    kind: 'Target element',
    attr: 'tabindex',
    blocker: 'Target state',
    kindLabels: { button: 'button', div: 'div' },
    attrLabels: { none: 'None', '0': '0', '-1': '-1', '1': '1 (positive)' },
    blockerLabels: { none: 'Normal', disabled: 'disabled', inert: 'inert', hidden: 'hidden' },
    stage: 'Example area (teaching example)',
    first: 'First',
    target: 'Target',
    last: 'Last',
    runFocus: 'Run focus()',
    clear: 'Clear log',
    positiveWarning:
      'Intentional defect: a positive value changes the Tab order of this whole page. Pressing Tab on the target may go to the top of the page. After observing, choose another value to restore it.',
    divDisabled: 'A div has no disabled state, so this choice has no effect.',
    observed: 'Observed now',
    active: 'document.activeElement',
    property: 'Target tabIndex property',
    expected: 'Expected order (by the standard)',
    path: 'Order actually passed through',
    focusResult: 'Last focus() result',
    clicks: 'Target clicks',
    none: '(nothing yet)',
    unreachable: 'The target cannot receive focus',
    focused: 'The target received focus',
    notFocused: 'The target did not receive focus',
    order: {
      normal: 'First → Target → Last',
      skip: 'First → Last',
      positive: 'Target before other elements on the page, then First → Last',
    },
    note: 'The expectation is the standard’s general behavior; the real order can differ by browser and operating system settings.',
  },
};

/** 설정에서 표준상 기대되는 포커스 가능 여부와 순차 이동 결과를 낸다. 실측이 아니라 비교 기준이다. */
const predict = ({ kind, attr, blocker }: Config) => {
  const blocked =
    blocker === 'inert' || blocker === 'hidden' || (blocker === 'disabled' && kind === 'button');
  const focusable = !blocked && (kind === 'button' || attr !== 'none');
  if (!focusable) return { focusable, order: 'skip' as const };
  if (attr === '-1') return { focusable, order: 'skip' as const };
  return { focusable, order: attr === '1' ? ('positive' as const) : ('normal' as const) };
};

const targetClass =
  'w-fit rounded-sm border border-stroke-light px-md py-sm text-xsm font-semiBold text-text-default';

/** 요소 · tabindex · 상태 조합을 실제 DOM으로 만들고, 표준상 예상과 실제 포커스 기록을 나란히 보여 준다. */
export const TabindexDemo = () => {
  const c = useLang(content);
  const [config, setConfig] = useState<Config>({ kind: 'button', attr: 'none', blocker: 'none' });
  const [path, setPath] = useState<string[]>([]);
  const [focusResult, setFocusResult] = useState<boolean | null>(null);
  const [clicks, setClicks] = useState(0);
  const [property, setProperty] = useState<number | null>(null);
  const [active] = useActiveElement();
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setProperty(targetRef.current?.tabIndex ?? null);
  }, [config]);

  const change = (patch: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...patch }));
    setFocusResult(null);
    setPath([]);
  };

  const runFocus = () => {
    targetRef.current?.focus();
    setFocusResult(document.activeElement === targetRef.current);
  };

  const clear = () => {
    setPath([]);
    setFocusResult(null);
    setClicks(0);
  };

  const prediction = predict(config);
  const tabIndex = config.attr === 'none' ? undefined : Number(config.attr);
  const targetProps = { tabIndex, onClick: () => setClicks((n) => n + 1), className: targetClass };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md">
        <RadioGroup
          label={c.kind}
          value={config.kind}
          onValueChange={(kind) => change({ kind: kind as Kind })}
          className="flex-row flex-wrap gap-x-xl"
        >
          {kinds.map((kind) => (
            <Radio key={kind} value={kind} className="text-xsm">
              {c.kindLabels[kind]}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.attr}
          value={config.attr}
          onValueChange={(attr) => change({ attr: attr as Attr })}
          className="flex-row flex-wrap gap-x-xl"
        >
          {attrs.map((attr) => (
            <Radio key={attr} value={attr} className="text-xsm">
              {c.attrLabels[attr]}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.blocker}
          value={config.blocker}
          onValueChange={(blocker) => change({ blocker: blocker as Blocker })}
          className="flex-row flex-wrap gap-x-xl"
        >
          {blockers.map((blocker) => (
            <Radio key={blocker} value={blocker} className="text-xsm">
              {c.blockerLabels[blocker]}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="rounded-sm border border-stroke-light p-md">
        <p className="mb-md text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <div
          onFocus={(e) => setPath((prev) => [...prev, describeElement(e.target)].slice(-6))}
          className="flex flex-wrap items-center gap-md"
        >
          <button type="button" className={targetClass}>
            {c.first}
          </button>
          <div inert={config.blocker === 'inert'} hidden={config.blocker === 'hidden'}>
            {config.kind === 'button' ? (
              <button
                key={config.attr}
                ref={targetRef as React.RefObject<HTMLButtonElement>}
                type="button"
                disabled={config.blocker === 'disabled'}
                {...targetProps}
              >
                {c.target}
              </button>
            ) : (
              <div
                key={config.attr}
                ref={targetRef as React.RefObject<HTMLDivElement>}
                {...targetProps}
              >
                {c.target}
              </div>
            )}
          </div>
          <button type="button" className={targetClass}>
            {c.last}
          </button>
        </div>
        {config.attr === '1' && (
          <p className="mt-sm text-xxsm text-text-error">{c.positiveWarning}</p>
        )}
        {config.kind === 'div' && config.blocker === 'disabled' && (
          <p className="mt-sm text-xxsm text-text-light">{c.divDisabled}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-sm">
        <Button type="button" variant="outlined" size="sm" onClick={runFocus}>
          {c.runFocus}
        </Button>
        <Button type="button" variant="outlined" size="sm" onClick={clear}>
          {c.clear}
        </Button>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, <code key="a">{active}</code>],
          [c.property, property ?? c.none],
          [c.expected, prediction.focusable ? c.order[prediction.order] : c.unreachable],
          [c.path, path.length > 0 ? path.join(' → ') : c.none],
          [c.focusResult, focusResult === null ? c.none : focusResult ? c.focused : c.notFocused],
          [c.clicks, clicks],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
