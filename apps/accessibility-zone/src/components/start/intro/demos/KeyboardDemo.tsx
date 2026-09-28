'use client';

import { useState } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

import { PracticeFrame } from './PracticeFrame';

const content = {
  ko: {
    practice: '실습',
    instructions: (tab: React.ReactNode, enter: React.ReactNode) => (
      <>
        아래 입력 칸을 클릭한 뒤 {tab}과 {enter}만으로 두 저장 버튼을 눌러 보세요. 마우스로도 눌러
        보고 차이를 비교해 보세요.
      </>
    ),
    startLabel: '실습 시작 지점',
    startPlaceholder: '여기를 클릭하고 Tab',
    save: '저장',
    divMeta: 'role: generic · Tab 순서 밖',
    buttonMeta: 'role: button · name: 저장',
    logHeading: '실행 로그',
    logEmpty: '아직 실행된 버튼이 없습니다',
    ran: '실행됨',
    keyboard: '키보드',
    mouse: '마우스',
  },
  en: {
    practice: 'Exercise',
    instructions: (tab: React.ReactNode, enter: React.ReactNode) => (
      <>
        Click the input below, then press both Save buttons using only {tab} and {enter}. Try the
        mouse too and compare.
      </>
    ),
    startLabel: 'Exercise starting point',
    startPlaceholder: 'Click here, then press Tab',
    save: 'Save',
    divMeta: 'role: generic · not in Tab order',
    buttonMeta: 'role: button · name: Save',
    logHeading: 'Activation log',
    logEmpty: 'No button activated yet',
    ran: 'activated',
    keyboard: 'keyboard',
    mouse: 'mouse',
  },
};

const controlClass =
  'inline-flex cursor-pointer select-none items-center rounded-sm bg-primaryBtn-default px-xl py-sm text-xsm font-semiBold text-text-contrastText';

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="rounded-xs border border-stroke-light px-xs">{children}</kbd>
);

/** div 버튼과 native button을 키보드로 비교하는 실습. */
export const KeyboardDemo = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((prev) => [entry, ...prev].slice(0, 5));

  const activateButton = (e: React.MouseEvent) =>
    push(`<button> ${c.ran} (${e.detail === 0 ? c.keyboard : c.mouse})`);

  return (
    <PracticeFrame
      label={c.practice}
      instructions={c.instructions(<Kbd>Tab</Kbd>, <Kbd>Enter</Kbd>)}
    >
      <input
        aria-label={c.startLabel}
        placeholder={c.startPlaceholder}
        className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
      />

      <div className="grid gap-md sm:grid-cols-2">
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-sm font-mono text-xxsm text-text-error">&lt;div onclick&gt;</p>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- 접근 불가능한 예시를 의도적으로 재현 */}
          <div className={controlClass} onClick={() => push(`<div> ${c.ran} (${c.mouse})`)}>
            {c.save}
          </div>
          <p className="mt-sm text-xxsm text-text-light">{c.divMeta}</p>
        </div>

        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-sm font-mono text-xxsm text-text-success">&lt;button&gt;</p>
          <button
            type="button"
            className={`${controlClass} hover:bg-primaryBtn-hover`}
            onClick={activateButton}
          >
            {c.save}
          </button>
          <p className="mt-sm text-xxsm text-text-light">{c.buttonMeta}</p>
        </div>
      </div>

      <div>
        <p className="mb-xs text-xxsm font-semiBold text-text-light">{c.logHeading}</p>
        <div className="min-h-[5.5rem] rounded-sm bg-background-default px-md py-sm font-mono text-xxsm leading-xxsm">
          <List ordered aria-live="polite">
            {log.length === 0 ? (
              <ListItem className="text-text-light">{c.logEmpty}</ListItem>
            ) : (
              log.map((entry, i) => <ListItem key={`${entry}-${log.length - i}`}>{entry}</ListItem>)
            )}
          </List>
        </div>
      </div>
    </PracticeFrame>
  );
};
