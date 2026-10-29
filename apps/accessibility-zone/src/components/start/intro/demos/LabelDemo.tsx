'use client';

import { useEffect, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, List } from '@berrypjh/react-ui';

import { type CheckResult, CheckRow } from '@/components/shared/CheckRow';
import { PracticeFrame } from '@/components/shared/PracticeFrame';

type Field = 'placeholder' | 'label';

/** 라벨을 누른 뒤 이 시간(ms) 안에 입력 칸이 포커스를 받으면 라벨이 옮겨 준 것으로 본다. */
const LABEL_WINDOW = 1000;

const content = {
  ko: {
    practice: '실습',
    instructions: '두 칸에 이메일을 입력하고, 라벨 "이메일" 글자를 눌러 보세요.',
    placeholderOnly: 'placeholder만',
    labelAndInput: 'label + input',
    email: '이메일',
    checks: {
      linked: '라벨 연결',
      visible: '입력 중에도 칸 이름이 보임',
      labelFocus: '라벨을 눌러 입력 칸으로 이동',
    },
    linked: (count: number) => `있음 (labels ${count}개)`,
    unlinked: (count: number) => `없음 (labels ${count}개)`,
    done: '확인됨',
    failed: '안 됨',
    pending: '아직',
    note: '체크는 이 브라우저가 계산한 값과 실제로 일어난 일로만 채워집니다.',
    reset: '다시 하기',
    checked: (field: string, check: string, result: string) => `${field} — ${check}: ${result}`,
  },
  en: {
    practice: 'Exercise',
    instructions: 'Type an email into both fields, then press the "Email" label text.',
    placeholderOnly: 'placeholder only',
    labelAndInput: 'label + input',
    email: 'Email',
    checks: {
      linked: 'Label linked',
      visible: 'Field name visible while typing',
      labelFocus: 'Pressing the label moves to the field',
    },
    linked: (count: number) => `yes (labels: ${count})`,
    unlinked: (count: number) => `no (labels: ${count})`,
    done: 'confirmed',
    failed: 'failed',
    pending: 'not yet',
    note: 'Checks are filled only by values this browser computes and things that actually happened.',
    reset: 'Start over',
    checked: (field: string, check: string, result: string) => `${field} — ${check}: ${result}`,
  },
};

const inputClass =
  'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm';

/**
 * placeholder만 있는 입력과 label이 연결된 입력을 비교하는 실습. 라벨 연결은 브라우저의 input.labels,
 * 입력 중 이름 표시는 실제 입력값, 라벨 이동은 실제 포커스 이벤트로 체크한다. label이 input을 감싸 id가 없다.
 */
export const LabelDemo = () => {
  const c = useLang(content);
  const [values, setValues] = useState<Record<Field, string>>({ placeholder: '', label: '' });
  const [labelCount, setLabelCount] = useState<Record<Field, number> | null>(null);
  const [labelFocused, setLabelFocused] = useState(false);
  const [status, setStatus] = useState('');
  const labelPressedAt = useRef<number | null>(null);
  const placeholderRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLabelCount({
      placeholder: placeholderRef.current?.labels?.length ?? 0,
      label: labelRef.current?.labels?.length ?? 0,
    });
  }, []);

  const type = (field: Field, value: string) => {
    if (!values[field] && value) {
      const name = field === 'label' ? c.labelAndInput : c.placeholderOnly;
      setStatus(c.checked(name, c.checks.visible, field === 'label' ? c.done : c.failed));
    }
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const focusLabelled = (e: React.FocusEvent) => {
    const pressed = labelPressedAt.current;
    labelPressedAt.current = null;
    if (labelFocused || pressed === null || e.timeStamp - pressed >= LABEL_WINDOW) return;
    setLabelFocused(true);
    setStatus(c.checked(c.labelAndInput, c.checks.labelFocus, c.done));
  };

  const reset = () => {
    setValues({ placeholder: '', label: '' });
    setLabelFocused(false);
    setStatus('');
  };

  const linkedRow = (field: Field) => {
    const count = labelCount?.[field] ?? 0;
    return (
      <CheckRow
        label={`${c.checks.linked}: ${count > 0 ? c.linked(count) : c.unlinked(count)}`}
        result={count > 0 ? 'done' : 'fail'}
      />
    );
  };

  const visibleRow = (field: Field) => {
    const typed = Boolean(values[field]);
    const result: CheckResult = !typed ? 'pending' : field === 'label' ? 'done' : 'fail';
    const state = { done: c.done, fail: c.failed, pending: c.pending }[result];
    return <CheckRow label={c.checks.visible} result={result} state={state} />;
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md sm:grid-cols-2">
        <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md">
          <p className="text-xxsm font-semiBold text-text-error">{c.placeholderOnly}</p>
          <input
            ref={placeholderRef}
            type="email"
            placeholder={c.email}
            value={values.placeholder}
            onChange={(e) => type('placeholder', e.target.value)}
            className={inputClass}
          />
          <List className="flex flex-col gap-xs text-xsm">
            {linkedRow('placeholder')}
            {visibleRow('placeholder')}
          </List>
        </div>

        <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md">
          <p className="text-xxsm font-semiBold text-text-success">{c.labelAndInput}</p>
          <label className="flex flex-col gap-xs text-xsm">
            <span
              className="cursor-pointer"
              onPointerDown={(e) => {
                labelPressedAt.current = e.timeStamp;
              }}
            >
              {c.email}
            </span>
            <input
              ref={labelRef}
              type="email"
              value={values.label}
              onChange={(e) => type('label', e.target.value)}
              onFocus={focusLabelled}
              className={inputClass}
            />
          </label>
          <List className="flex flex-col gap-xs text-xsm">
            {linkedRow('label')}
            {visibleRow('label')}
            <CheckRow
              label={c.checks.labelFocus}
              result={labelFocused ? 'done' : 'pending'}
              state={labelFocused ? c.done : c.pending}
            />
          </List>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-md">
        <p className="text-xxsm text-text-light">{c.note}</p>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>
      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
