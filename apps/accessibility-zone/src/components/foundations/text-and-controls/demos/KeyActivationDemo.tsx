'use client';

import { useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, cx, List, Radio, RadioGroup } from '@berrypjh/react-ui';

import { type CheckResult, CheckRow } from '@/components/shared/CheckRow';
import { Kbd } from '@/components/shared/Kbd';

type Target = 'link' | 'button' | 'div';
type Key = 'Enter' | 'Space';
type Mode = 'keyboard' | 'touch';
type Results = Record<Target, Record<Key | 'pointer', CheckResult>>;

const TARGETS: Target[] = ['link', 'button', 'div'];
const KEYS: Key[] = ['Enter', 'Space'];

/** 키보드 없이 볼 때 보여 주는 결과. "링크와 버튼의 기본 동작" 표와 같다. 측정값이 아니다. */
const TABLE_RESULTS: Record<Target, Record<Key, CheckResult>> = {
  link: { Enter: 'done', Space: 'fail' },
  button: { Enter: 'done', Space: 'done' },
  div: { Enter: 'fail', Space: 'fail' },
};

/** keyup 뒤 이 시간(ms) 안에 click이 없으면 그 키로는 실행되지 않은 것으로 본다. */
const CLICK_WAIT = 100;

const content = {
  ko: {
    practice: '실습',
    instructions: {
      keyboard: (enter: React.ReactNode, space: React.ReactNode) => (
        <>
          Tab으로 세 요소에 차례로 가서 각각 {enter}와 {space}를 한 번씩 눌러 보세요.
        </>
      ),
      touch: () => <>세 요소를 손가락이나 마우스로 눌러 보세요.</>,
    },
    modeLabel: '확인 방법',
    modes: { keyboard: '키보드로 해 보기', touch: '터치·마우스로 해 보기' },
    pointerRow: '포인터 click 이벤트',
    notes: {
      keyboard: (
        <>
          macOS Safari는 기본 설정에서 Tab이 링크와 버튼을 건너뜁니다. <Kbd>Option</Kbd>+
          <Kbd>Tab</Kbd>
          으로 이동하거나, Safari 설정의 고급에서 &apos;Tab 키를 눌러 웹 페이지의 각 항목
          강조&apos;를 켭니다.
        </>
      ),
      touch:
        'Enter · Space 결과는 키보드로만 확인할 수 있어, 위에는 표에 적힌 결과를 보여 줍니다. 휴대폰도 블루투스 키보드를 연결하면 해 볼 수 있습니다.',
    },
    code: { link: '<a href>', button: '<button>', div: '<div role="button" tabindex="0">' },
    labels: { link: '배송 안내 보기', button: '장바구니 담기', div: '장바구니 담기' },
    defect: '의도한 결함',
    row: (key: Key) => `${key === 'Space' ? 'Space' : 'Enter'} → click 이벤트`,
    results: { done: '발생', fail: '발생하지 않음', pending: '확인 전' },
    fromTable: '표의 결과',
    target: '이 링크가 가는 곳: 배송 안내',
    reset: '다시 하기',
    status: (code: string, key: Key, result: CheckResult) =>
      `${code} — ${key} → click ${result === 'done' ? '발생' : '발생하지 않음'}`,
    pointerStatus: (code: string) => `${code} — 포인터 click 발생`,
  },
  en: {
    practice: 'Exercise',
    instructions: {
      keyboard: (enter: React.ReactNode, space: React.ReactNode) => (
        <>
          Tab to each of the three elements in turn and press {enter} and {space} once on each.
        </>
      ),
      touch: () => <>Press the three elements with a finger or mouse.</>,
    },
    modeLabel: 'How to check',
    modes: { keyboard: 'Try with a keyboard', touch: 'Try with touch or a mouse' },
    pointerRow: 'Pointer click event',
    notes: {
      keyboard: (
        <>
          With default settings, Tab in macOS Safari skips links and buttons. Use <Kbd>Option</Kbd>+
          <Kbd>Tab</Kbd>, or turn on &quot;Press Tab to highlight each item on a webpage&quot; in
          Safari Settings → Advanced.
        </>
      ),
      touch:
        'Enter and Space results can only be checked with a keyboard, so the rows above show the results from the table. On a phone, connect a Bluetooth keyboard to try it.',
    },
    code: { link: '<a href>', button: '<button>', div: '<div role="button" tabindex="0">' },
    labels: { link: 'Shipping details', button: 'Add to cart', div: 'Add to cart' },
    defect: 'Intentional defect',
    row: (key: Key) => `${key} → click event`,
    results: { done: 'fired', fail: 'did not fire', pending: 'not tried yet' },
    fromTable: 'from the table',
    target: 'Where the link goes: shipping details',
    reset: 'Start over',
    status: (code: string, key: Key, result: CheckResult) =>
      `${code} — ${key} → click ${result === 'done' ? 'fired' : 'did not fire'}`,
    pointerStatus: (code: string) => `${code} — pointer click fired`,
  },
};

const emptyResults = (): Results => ({
  link: { Enter: 'pending', Space: 'pending', pointer: 'pending' },
  button: { Enter: 'pending', Space: 'pending', pointer: 'pending' },
  div: { Enter: 'pending', Space: 'pending', pointer: 'pending' },
});

const keyOf = (key: string): Key | null =>
  key === 'Enter' ? 'Enter' : key === ' ' ? 'Space' : null;

const controlClass = 'inline-flex items-center rounded-sm px-xl py-sm text-xsm font-semiBold';

/**
 * 링크 · 버튼 · role만 붙인 div에서 Enter와 Space가 click을 일으키는지 실제 키 · click 이벤트로 확인하는 실습.
 * 키 없이 일어난 click은 포인터 click으로 기록한다. 기본 동작(링크 이동, Space 스크롤)은 막지 않는다.
 */
export const KeyActivationDemo = () => {
  const c = useLang(content);
  const id = useId();
  const targetId = `${id}-target`;
  const codeId = (target: Target) => `${id}-${target}`;
  const [mode, setMode] = useState<Mode>('keyboard');
  const [results, setResults] = useState(emptyResults);
  const [status, setStatus] = useState('');
  const pending = useRef<{ target: Target; key: Key } | null>(null);

  const record = (target: Target, key: Key | 'pointer', result: CheckResult) => {
    pending.current = null;
    setResults((prev) => ({ ...prev, [target]: { ...prev[target], [key]: result } }));
    setStatus(
      key === 'pointer' ? c.pointerStatus(c.code[target]) : c.status(c.code[target], key, result),
    );
  };

  const handlers = (target: Target) => ({
    onKeyDown: (e: React.KeyboardEvent) => {
      const key = keyOf(e.key);
      if (key && !e.repeat) pending.current = { target, key };
    },
    onKeyUp: (e: React.KeyboardEvent) => {
      const key = keyOf(e.key);
      if (!key) return;
      setTimeout(() => {
        const p = pending.current;
        if (p?.target === target && p.key === key) record(target, key, 'fail');
      }, CLICK_WAIT);
    },
    onClick: () => {
      const last = pending.current;
      record(target, last?.target === target ? last.key : 'pointer', 'done');
    },
  });

  const reset = () => {
    pending.current = null;
    setResults(emptyResults());
    setStatus('');
  };

  const changeMode = (value: string) => {
    setMode(value as Mode);
    reset();
  };

  const control = (target: Target) => {
    if (target === 'link') {
      return (
        <a
          href={`#${targetId}`}
          aria-describedby={codeId('link')}
          className={cx(controlClass, 'text-text-link underline')}
          {...handlers('link')}
        >
          {c.labels.link}
        </a>
      );
    }
    if (target === 'button') {
      return (
        <button
          type="button"
          aria-describedby={codeId('button')}
          className={cx(
            controlClass,
            'bg-primaryBtn-default text-text-contrastText hover:bg-primaryBtn-hover',
          )}
          {...handlers('button')}
        >
          {c.labels.button}
        </button>
      );
    }
    return (
      // role만 붙이면 키보드 동작이 생기지 않는다는 것을 의도적으로 재현한다.
      <div
        role="button"
        tabIndex={0}
        aria-describedby={codeId('div')}
        className={cx(
          controlClass,
          'cursor-pointer select-none bg-primaryBtn-default text-text-contrastText',
        )}
        {...handlers('div')}
      >
        {c.labels.div}
      </div>
    );
  };

  return (
    <PracticeFrame
      label={c.practice}
      instructions={
        mode === 'keyboard'
          ? c.instructions.keyboard(<Kbd>Enter</Kbd>, <Kbd>Space</Kbd>)
          : c.instructions.touch()
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

      <div className="grid gap-md md:grid-cols-3">
        {TARGETS.map((target) => (
          <div
            key={target}
            className="flex flex-col gap-md rounded-sm border border-stroke-light p-md"
          >
            <p
              id={codeId(target)}
              className={cx(
                'font-mono text-xxsm',
                target === 'div' ? 'text-text-error' : 'text-text-success',
              )}
            >
              {c.code[target]}
              {target === 'div' && <span className="ml-xs font-sans">({c.defect})</span>}
            </p>
            <div>{control(target)}</div>
            {/* 링크가 이동한 곳을 링크 바로 뒤에 두어, 이동한 뒤 Tab이 다음 요소로 이어지게 한다. */}
            {target === 'link' && (
              <p id={targetId} tabIndex={-1} className="text-xxsm text-text-light">
                {c.target}
              </p>
            )}
            <List className="flex flex-col gap-xs text-xsm">
              {KEYS.map((key) => {
                const result =
                  mode === 'keyboard' ? results[target][key] : TABLE_RESULTS[target][key];
                const source = mode === 'keyboard' ? '' : ` (${c.fromTable})`;
                return (
                  <CheckRow
                    key={key}
                    label={`${c.row(key)}: ${c.results[result]}${source}`}
                    result={result}
                  />
                );
              })}
              <CheckRow
                label={`${c.pointerRow}: ${c.results[results[target].pointer]}`}
                result={results[target].pointer}
              />
            </List>
          </div>
        ))}
      </div>

      <p className="text-xxsm leading-xxsm text-text-light">{c.notes[mode]}</p>
      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
