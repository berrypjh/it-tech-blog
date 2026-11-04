'use client';

import { useEffect, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, cx, List, Radio, RadioGroup } from '@berrypjh/react-ui';

import { type CheckResult, CheckRow } from '@/components/shared/CheckRow';
import { Kbd } from '@/components/shared/Kbd';
import { PracticeFrame } from '@/components/shared/PracticeFrame';

type Mode = 'keyboard' | 'touch';
type Target = 'div' | 'button';
type Checks = { focus: boolean; key: boolean; pointer: boolean };
type Signal = { target: Target; kind: 'key' | 'pointer'; time: number };

/** click 직전 이 시간(ms) 안에 같은 요소에서 일어난 입력만 그 click의 원인으로 본다. */
const SIGNAL_WINDOW = 1000;

const emptyChecks = (): Record<Target, Checks> => ({
  div: { focus: false, key: false, pointer: false },
  button: { focus: false, key: false, pointer: false },
});

const content = {
  ko: {
    practice: '실습',
    instructions: {
      keyboard: (tab: React.ReactNode, enter: React.ReactNode, space: React.ReactNode) => (
        <>
          시작 지점을 누른 뒤 {tab}으로 이동하고 {enter}나 {space}로 두 저장 버튼을 눌러 보세요.
          마우스나 터치로도 눌러 보세요.
        </>
      ),
      touch: <>두 저장 버튼을 눌러 보고, 각 버튼에 Tab으로 도착할 수 있는지 확인해 보세요.</>,
    },
    modeLabel: '실습 방법',
    modes: { keyboard: '키보드로 해 보기', touch: '터치·마우스로 해 보기' },
    startLabel: '실습 시작 지점',
    save: '저장',
    checks: {
      focus: '키보드로 도착',
      key: 'Enter·Space로 실행',
      pointer: '마우스·터치로 실행',
      reach: 'Tab으로 도착',
    },
    done: '확인됨',
    pending: '아직',
    reachable: (tabIndex: number) => `가능 (tabIndex ${tabIndex})`,
    unreachable: (tabIndex: number) => `불가 (tabIndex ${tabIndex})`,
    notes: {
      keyboard: (
        <>
          체크는 이 브라우저에서 실제로 일어난 이벤트로만 채워집니다. macOS Safari는 기본 설정에서
          Tab이 링크와 버튼을 건너뜁니다. <Kbd>Option</Kbd>+<Kbd>Tab</Kbd>으로 이동하거나, Safari
          설정의 고급에서 &apos;Tab 키를 눌러 웹 페이지의 각 항목 강조&apos;를 켭니다.
        </>
      ),
      touch:
        'Tab 도착 여부는 이 브라우저가 계산한 tabIndex입니다. Enter · Space 실행은 키보드로만 확인할 수 있고, 휴대폰도 블루투스 키보드를 연결하면 해 볼 수 있습니다.',
    },
    reset: '다시 하기',
    checked: (target: string, check: string) => `${target} — ${check} 확인됨`,
  },
  en: {
    practice: 'Exercise',
    instructions: {
      keyboard: (tab: React.ReactNode, enter: React.ReactNode, space: React.ReactNode) => (
        <>
          Select the starting point, move with {tab}, and press both Save buttons with {enter} or{' '}
          {space}. Try a mouse or touch as well.
        </>
      ),
      touch: <>Press both Save buttons, then check whether Tab can reach each one.</>,
    },
    modeLabel: 'How to try it',
    modes: { keyboard: 'With a keyboard', touch: 'With touch or a mouse' },
    startLabel: 'Exercise starting point',
    save: 'Save',
    checks: {
      focus: 'Reached by keyboard',
      key: 'Activated with Enter or Space',
      pointer: 'Activated with mouse or touch',
      reach: 'Reachable with Tab',
    },
    done: 'confirmed',
    pending: 'not yet',
    reachable: (tabIndex: number) => `yes (tabIndex ${tabIndex})`,
    unreachable: (tabIndex: number) => `no (tabIndex ${tabIndex})`,
    notes: {
      keyboard: (
        <>
          Checks are filled only by events that actually happened in this browser. In macOS Safari,
          Tab skips links and buttons by default. Move with <Kbd>Option</Kbd>+<Kbd>Tab</Kbd>, or
          turn on &apos;Press Tab to highlight each item on a webpage&apos; in Safari Settings under
          Advanced.
        </>
      ),
      touch:
        'Reachability is the tabIndex computed by this browser. Activation with Enter or Space can only be checked with a keyboard; on a phone, connect a Bluetooth keyboard to try it.',
    },
    reset: 'Start over',
    checked: (target: string, check: string) => `${target} — ${check} confirmed`,
  },
};

const controlClass =
  'inline-flex cursor-pointer select-none items-center rounded-sm bg-primaryBtn-default px-xl py-sm text-xsm font-semiBold text-text-contrastText';

/**
 * div 버튼과 native button을 비교하는 실습. 키보드로 할 때는 실제 포커스·키·포인터 이벤트로 체크하고,
 * 키보드가 없을 때는 이 브라우저가 계산한 tabIndex로 Tab 도착 여부를 보여준다.
 */
export const KeyboardDemo = () => {
  const c = useLang(content);
  const [mode, setMode] = useState<Mode>('keyboard');
  const [checks, setChecks] = useState(emptyChecks);
  const [tabIndex, setTabIndex] = useState<Record<Target, number> | null>(null);
  const [status, setStatus] = useState('');
  const signal = useRef<Signal | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTabIndex({
      div: divRef.current?.tabIndex ?? -1,
      button: buttonRef.current?.tabIndex ?? -1,
    });
  }, []);

  const mark = (target: Target, check: keyof Checks) => {
    if (checks[target][check]) return;
    setChecks((prev) => ({ ...prev, [target]: { ...prev[target], [check]: true } }));
    setStatus(c.checked(`<${target}>`, c.checks[check]));
  };

  const handlers = (target: Target) => ({
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      if (e.currentTarget.matches(':focus-visible')) mark(target, 'focus');
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        signal.current = { target, kind: 'key', time: e.timeStamp };
      }
    },
    onPointerDown: (e: React.PointerEvent) => {
      signal.current = { target, kind: 'pointer', time: e.timeStamp };
    },
    onClick: (e: React.MouseEvent) => {
      const s = signal.current;
      signal.current = null;
      if (s && s.target === target && e.timeStamp - s.time < SIGNAL_WINDOW) mark(target, s.kind);
    },
  });

  const reset = () => {
    setChecks(emptyChecks());
    setStatus('');
  };

  const changeMode = (value: string) => {
    setMode(value as Mode);
    reset();
  };

  const card = (target: Target) => {
    const ch = checks[target];
    const state = (done: boolean) => (done ? c.done : c.pending);
    const toResult = (done: boolean): CheckResult => (done ? 'done' : 'pending');
    const reach = tabIndex?.[target] ?? -1;
    const isButton = target === 'button';

    return (
      <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md">
        <p
          className={cx('font-mono text-xxsm', isButton ? 'text-text-success' : 'text-text-error')}
        >
          {isButton ? '<button>' : '<div onclick>'}
        </p>
        <div>
          {isButton ? (
            <button
              ref={buttonRef}
              type="button"
              className={`${controlClass} hover:bg-primaryBtn-hover`}
              {...handlers('button')}
            >
              {c.save}
            </button>
          ) : (
            // 키보드로 닿지 않는 div 버튼을 의도적으로 재현한다.
            <div ref={divRef} className={controlClass} {...handlers('div')}>
              {c.save}
            </div>
          )}
        </div>
        <List className="flex flex-col gap-xs text-xsm">
          {mode === 'keyboard' ? (
            <>
              <CheckRow
                label={c.checks.focus}
                result={toResult(ch.focus)}
                state={state(ch.focus)}
              />
              <CheckRow label={c.checks.key} result={toResult(ch.key)} state={state(ch.key)} />
            </>
          ) : (
            <CheckRow
              label={`${c.checks.reach}: ${reach >= 0 ? c.reachable(reach) : c.unreachable(reach)}`}
              result={reach >= 0 ? 'done' : 'fail'}
            />
          )}
          <CheckRow
            label={c.checks.pointer}
            result={toResult(ch.pointer)}
            state={state(ch.pointer)}
          />
        </List>
      </div>
    );
  };

  return (
    <PracticeFrame
      label={c.practice}
      instructions={
        mode === 'keyboard'
          ? c.instructions.keyboard(<Kbd>Tab</Kbd>, <Kbd>Enter</Kbd>, <Kbd>Space</Kbd>)
          : c.instructions.touch
      }
    >
      <div className="flex flex-wrap items-end justify-between gap-md">
        <RadioGroup
          label={c.modeLabel}
          value={mode}
          onValueChange={changeMode}
          className="flex-row flex-wrap gap-x-xl"
        >
          <Radio value="keyboard" className="text-xsm">
            {c.modes.keyboard}
          </Radio>
          <Radio value="touch" className="text-xsm">
            {c.modes.touch}
          </Radio>
        </RadioGroup>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>

      {mode === 'keyboard' && (
        <label className="flex flex-col gap-xs text-xsm">
          {c.startLabel}
          <input className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm" />
        </label>
      )}

      <div className="grid gap-md sm:grid-cols-2">
        {card('div')}
        {card('button')}
      </div>

      <p className="text-xxsm text-text-light">{c.notes[mode]}</p>
      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
