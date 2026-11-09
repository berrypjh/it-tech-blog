'use client';

import { useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, cx, Radio, RadioGroup } from '@berrypjh/react-ui';
import { flushSync } from 'react-dom';

type Version = 'defect' | 'fixed';

const content = {
  ko: {
    practice: '준비된 화면',
    instructions: '과업: 진료 예약 날짜를 5월 20일로 바꾸고 변경을 확정하세요.',
    versionLabel: '화면 버전',
    defectOption: '결함 있는 화면',
    fixedOption: '비교용 수정 화면',
    defectBanner: '결함을 일부러 넣은 연습 화면입니다. 실제 예약은 바뀌지 않습니다.',
    fixedBanner: '같은 화면에서 결함을 고친 비교용 화면입니다. 실제 예약은 바뀌지 않습니다.',
    heading: '진료 예약 변경',
    current: '현재 예약: 5월 13일 오전 10시 · 내과',
    datePlaceholder: '새 날짜 (예: 5월 20일)',
    dateLabel: '새 날짜',
    dateHint: '예: 5월 20일',
    dateError: '오류: 새 날짜를 입력하세요.',
    confirm: '변경 확정',
    defectDone: '변경되었습니다',
    fixedDone: (date: string) =>
      `변경을 확정했습니다: ${date}. 연습용 화면이라 실제 예약은 바뀌지 않습니다.`,
    reset: '처음 상태로',
    resetDone: '연습 화면을 처음 상태로 되돌렸습니다.',
  },
  en: {
    practice: 'Prepared screen',
    instructions: 'Task: change the appointment date to May 20 and confirm the change.',
    versionLabel: 'Screen version',
    defectOption: 'Screen with defects',
    fixedOption: 'Fixed screen for comparison',
    defectBanner: 'A practice screen with defects added on purpose. No real appointment changes.',
    fixedBanner:
      'The same screen with the defects fixed, for comparison. No real appointment changes.',
    heading: 'Change appointment',
    current: 'Current appointment: May 13, 10 a.m. · Internal medicine',
    datePlaceholder: 'New date (e.g. May 20)',
    dateLabel: 'New date',
    dateHint: 'e.g. May 20',
    dateError: 'Error: enter a new date.',
    confirm: 'Confirm change',
    defectDone: 'Changed',
    fixedDone: (date: string) =>
      `Change to ${date} confirmed. This is a practice screen, so no real appointment changed.`,
    reset: 'Reset',
    resetDone: 'The practice screen was reset.',
  },
};

type Text = (typeof content)['ko'];

const inputClass =
  'w-full rounded-sm border bg-background-surface px-md py-sm text-xsm text-text-default';

const confirmClass =
  'inline-flex min-h-[2.75rem] items-center rounded-sm bg-primaryBtn-default px-xl text-xsm font-semiBold text-text-contrastText';

/** 결함 버전: placeholder만 있는 입력, 키보드로 닿지 않는 div 확정, 색으로만 표시하는 오류, 알리지 않는 완료. */
const DefectScreen = ({ c }: { c: Text }) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const confirm = () => {
    setError(!date.trim());
    setDone(Boolean(date.trim()));
  };

  return (
    <div className="flex flex-col gap-md">
      <p className="text-xsm text-text-light">{c.current}</p>
      <input
        type="text"
        placeholder={c.datePlaceholder}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={cx(inputClass, error ? 'border-stroke-error' : 'border-stroke-light')}
      />
      <div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- 키보드로 닿지 않는 확정 버튼을 의도적으로 재현 */}
        <div className={cx(confirmClass, 'cursor-pointer select-none')} onClick={confirm}>
          {c.confirm}
        </div>
      </div>
      {done && <p className="text-xsm text-text-success">{c.defectDone}</p>}
    </div>
  );
};

/** 수정 버전: 보이는 라벨과 힌트, native button, 글자로 연결된 오류, 상태 메시지. */
const FixedScreen = ({ c }: { c: Text }) => {
  const id = useId();
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);
  const [doneDate, setDoneDate] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const confirm = () => {
    const value = date.trim();
    // 오류 문구와 aria-invalid가 DOM에 그려진 뒤 포커스를 옮겨야 처음 실패부터 오류가 함께 읽힌다.
    flushSync(() => {
      setError(!value);
      setDoneDate(value);
    });
    if (!value) inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-md">
      <p className="text-xsm text-text-light">{c.current}</p>
      <div className="flex flex-col gap-xs">
        <label htmlFor={`${id}-date`} className="text-xsm font-semiBold text-text-default">
          {c.dateLabel}
        </label>
        <p id={`${id}-hint`} className="text-xxsm text-text-light">
          {c.dateHint}
        </p>
        <input
          ref={inputRef}
          id={`${id}-date`}
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-invalid={error || undefined}
          aria-describedby={error ? `${id}-hint ${id}-error` : `${id}-hint`}
          className={cx(inputClass, error ? 'border-2 border-stroke-error' : 'border-stroke-light')}
        />
        {error && (
          <p id={`${id}-error`} className="text-xsm font-semiBold text-text-error">
            {c.dateError}
          </p>
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={confirm}
          className={cx(confirmClass, 'hover:bg-primaryBtn-hover')}
        >
          {c.confirm}
        </button>
      </div>
      <p role="status" className="text-xsm text-text-success">
        {doneDate && c.fixedDone(doneDate)}
      </p>
    </div>
  );
};

/** 01.5의 준비된 화면. 결함 버전과 수정 버전을 바꿔 가며 같은 과업을 해 본다. 상태는 저장하지 않는다. */
export const PracticeScreen = () => {
  const c = useLang(content);
  const headingId = useId();
  const [version, setVersion] = useState<Version>('defect');
  const [resetCount, setResetCount] = useState(0);
  const [status, setStatus] = useState('');

  const reset = () => {
    setResetCount((count) => count + 1);
    setStatus(c.resetDone);
  };

  const changeVersion = (value: string) => {
    setVersion(value as Version);
    setStatus('');
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.versionLabel}
        value={version}
        onValueChange={changeVersion}
        className="flex-row flex-wrap gap-x-xl"
      >
        <Radio value="defect" className="text-xsm">
          {c.defectOption}
        </Radio>
        <Radio value="fixed" className="text-xsm">
          {c.fixedOption}
        </Radio>
      </RadioGroup>

      <section
        aria-labelledby={headingId}
        className={cx(
          'rounded-md border-2 border-dashed p-lg',
          version === 'defect' ? 'border-stroke-warning' : 'border-stroke-success',
        )}
      >
        <p className="mb-md text-xxsm font-semiBold text-text-light">
          {version === 'defect' ? c.defectBanner : c.fixedBanner}
        </p>
        <h3 id={headingId} className="mb-md text-md font-bold text-text-default">
          {c.heading}
        </h3>
        {version === 'defect' ? (
          <DefectScreen key={`defect-${resetCount}`} c={c} />
        ) : (
          <FixedScreen key={`fixed-${resetCount}`} c={c} />
        )}
      </section>

      <div className="flex flex-wrap items-center gap-md">
        <Button type="button" variant="outlined" size="sm" onClick={reset}>
          {c.reset}
        </Button>
        <p role="status" className="text-xxsm text-text-light">
          {status && <span key={resetCount}>{status}</span>}
        </p>
      </div>
    </PracticeFrame>
  );
};
