'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Field } from '@/components/forms/shared/Field';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { controlClass } from '@/components/widgets/shared/styles';

const MIN = 1;
const MAX = 8;

type Problem = 'empty' | 'notNumber' | 'range' | 'decimal';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '칸을 비우거나 틀린 값을 넣고 떠난 뒤, 다시 고치거나 버튼으로 복구하세요. 값은 어디에도 보내지 않습니다.',
    label: '참가 인원',
    required: '필수',
    hint: `${MIN}부터 ${MAX} 사이의 정수입니다. 예: 2`,
    decrease: '참가 인원 1 줄이기',
    increase: '참가 인원 1 늘리기',
    error: '오류',
    problems: {
      empty: `참가 인원이 비어 있습니다. ${MIN}부터 ${MAX} 사이의 숫자를 입력하세요.`,
      notNumber: `숫자로 읽을 수 없는 값입니다. ${MIN}부터 ${MAX} 사이의 숫자를 입력하세요.`,
      range: `참가 인원은 ${MIN}부터 ${MAX} 사이여야 합니다. 값을 고치거나 증감 버튼으로 가까운 값에 맞추세요.`,
      decimal: '참가 인원은 소수 없이 정수로 입력하세요.',
    },
    committed: (value: string) => `확정한 참가 인원: ${value}명`,
    observed: '페이지가 읽은 DOM',
    value: '칸의 value (글자)',
    number: 'valueAsNumber',
    flags: '참인 validity 항목',
    invalid: 'aria-invalid',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Empty the field or enter a wrong value and leave, then fix it or recover with the buttons. The value is not sent anywhere.',
    label: 'Number of people',
    required: 'required',
    hint: `A whole number from ${MIN} to ${MAX}. Example: 2`,
    decrease: 'Decrease number of people by 1',
    increase: 'Increase number of people by 1',
    error: 'Error',
    problems: {
      empty: `The number of people is empty. Enter a number from ${MIN} to ${MAX}.`,
      notNumber: `This value cannot be read as a number. Enter a number from ${MIN} to ${MAX}.`,
      range: `The number of people must be from ${MIN} to ${MAX}. Fix the value or use the stepping buttons to go to a nearby value.`,
      decimal: 'Enter the number of people as a whole number without decimals.',
    },
    committed: (value: string) => `Committed number of people: ${value}`,
    observed: 'DOM the page read',
    value: 'value of the field (characters)',
    number: 'valueAsNumber',
    flags: 'validity entries that are true',
    invalid: 'aria-invalid',
    focus: 'document.activeElement',
    none: 'none',
  },
};

const flagNames = [
  'valueMissing',
  'badInput',
  'rangeUnderflow',
  'rangeOverflow',
  'stepMismatch',
] as const;

/** 브라우저의 제약 검사 결과를 이 예제의 오류 종류로 바꾼다. 숫자가 아닌 입력을 빈 값보다 먼저 본다. */
const problemOf = (validity: ValidityState): Problem | null => {
  if (validity.badInput) return 'notNumber';
  if (validity.valueMissing) return 'empty';
  if (validity.rangeUnderflow || validity.rangeOverflow) return 'range';
  if (validity.stepMismatch) return 'decimal';
  return null;
};

/**
 * 네이티브 number 칸과 이름을 가진 증감 버튼. 치는 동안에는 검사하지 않고 칸을 떠날 때 검사하며, 틀린 글자는 지우지 않는다.
 * 버튼은 칸의 stepUp() · stepDown()을 불러 범위와 단계의 규칙을 브라우저에 맡긴다. 이 메서드들은 빈 값이나 범위 밖 값에서
 * 반대 방향으로는 움직이지 않으므로, 그때는 어느 버튼이든 가장 가까운 한계 값으로 맞춘다. 키는 가로채지 않는다.
 */
export const SpinbuttonDemo = () => {
  const c = useLang(content);
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const stepping = useRef(false);
  const [active] = useActiveElement();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [committed, setCommitted] = useState('2');
  const [tick, setTick] = useState(0);
  const [read, setRead] = useState({ value: '', number: '', flags: '', invalid: '' });

  useEffect(() => {
    const el = input.current;
    if (!el) return;
    setRead({
      value: el.value,
      number: String(el.valueAsNumber),
      flags: flagNames.filter((name) => el.validity[name]).join(', '),
      invalid: el.getAttribute('aria-invalid') ?? '',
    });
  }, [tick, problem]);

  const commit = () => {
    const el = input.current;
    if (!el) return;
    const next = problemOf(el.validity);
    setProblem(next);
    if (!next) setCommitted(el.value);
    setTick((n) => n + 1);
  };

  /** 증감 버튼을 누르려고 칸을 떠난 것이면 여기서 검사하지 않는다. 오류 글이 먼저 생기면 버튼이 밀려 클릭이 빗나간다. */
  const leave = () => {
    if (stepping.current) stepping.current = false;
    else commit();
  };

  const step = (direction: 'up' | 'down') => {
    stepping.current = false;
    const el = input.current;
    if (!el) return;
    const current = el.valueAsNumber;
    if (el.value === '' || current < MIN) el.value = String(MIN);
    else if (current > MAX) el.value = String(MAX);
    else if (direction === 'up') el.stepUp();
    else el.stepDown();
    commit();
  };

  const atMin = !problem && Number(committed) <= MIN;
  const atMax = !problem && Number(committed) >= MAX;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md">
        <Field
          ref={input}
          id={`${id}-people`}
          name="people"
          type="number"
          min={MIN}
          max={MAX}
          step={1}
          required
          inputMode="numeric"
          defaultValue="2"
          label={c.label}
          requiredText={c.required}
          hint={c.hint}
          error={
            problem && (
              <>
                {c.error}: {c.problems[problem]}
              </>
            )
          }
          onInput={() => setTick((n) => n + 1)}
          onBlur={leave}
        />
        <div className="flex flex-wrap gap-sm">
          <button
            type="button"
            aria-disabled={atMin ? true : undefined}
            onPointerDown={() => (stepping.current = true)}
            onClick={() => step('down')}
            className={`${controlClass} aria-disabled:opacity-60`}
          >
            {c.decrease}
          </button>
          <button
            type="button"
            aria-disabled={atMax ? true : undefined}
            onPointerDown={() => (stepping.current = true)}
            onClick={() => step('up')}
            className={`${controlClass} aria-disabled:opacity-60`}
          >
            {c.increase}
          </button>
        </div>
        <p role="status" className="text-xsm">
          {c.committed(committed)}
        </p>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.value, <code key="v">{read.value || c.none}</code>],
          [c.number, <code key="n">{read.number}</code>],
          [c.flags, <code key="f">{read.flags || c.none}</code>],
          [c.invalid, <code key="i">{read.invalid || c.none}</code>],
          [c.focus, <code key="a">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
