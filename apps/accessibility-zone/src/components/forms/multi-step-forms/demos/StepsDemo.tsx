'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { Field, fieldClass } from '@/components/forms/shared/Field';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

type Values = { name: string; mode: string; meal: string; contact: string; email: string };
type Key = keyof Values;
type Step = 1 | 2 | 'done';

const initial: Values = { name: '', mode: '', meal: '', contact: '', email: '' };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '두 단계를 오가며 값이 남는지, 조건부 칸이 검증과 제출에서 빠지는지 확인하세요. 아무것도 전송하지 않습니다.',
    form: '두 단계 행사 신청 (교육 예시)',
    required: '필수',
    error: '오류',
    stepTitle: { 1: '1 / 2단계: 참석 정보', 2: '2 / 2단계: 확인 메일' },
    labels: {
      name: '이름',
      mode: '참석 방식',
      meal: '식사 선택',
      contact: '받는 사람 이름',
      email: '이메일',
    },
    hints: {
      name: '신청 확인서에 표시할 이름입니다. 예: 김하늘',
      contact: '1단계의 이름으로 채웠습니다. 다른 사람이 받으면 고치세요.',
      email: '확인 메일을 받을 주소입니다. 예: name@example.com',
    },
    modes: { onsite: '현장 참석', online: '온라인 참석' },
    choose: '선택하세요',
    meals: { regular: '일반식', vegetarian: '채식', none: '식사 안 함' },
    empty: (label: string) => `${label} 항목이 비어 있습니다.`,
    emailFormat: '이메일이 주소 형식이 아닙니다. 예: name@example.com',
    next: '다음',
    back: '이전',
    submit: '신청 내용 확인',
    doneTitle: '제출될 값 (전송하지 않음)',
    restart: '처음부터 다시',
    observed: '페이지가 읽은 DOM과 상태',
    step: '현재 단계',
    remembered: '기억하는 식사 선택 (페이지 상태)',
    inDom: 'DOM에 있는 입력 칸',
    focus: 'document.activeElement',
    none: '없음',
    done: '완료',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Move between the two steps and check that values stay and that the conditional field drops out of validation and submission. Nothing is sent.',
    form: 'Two-step event application (teaching example)',
    required: 'required',
    error: 'Error',
    stepTitle: { 1: 'Step 1 of 2: Attendance', 2: 'Step 2 of 2: Confirmation email' },
    labels: {
      name: 'Name',
      mode: 'Attendance',
      meal: 'Meal choice',
      contact: 'Recipient name',
      email: 'Email',
    },
    hints: {
      name: 'The name shown on the confirmation. Example: Sky Kim',
      contact: 'Filled with the name from step 1. Change it if someone else receives it.',
      email: 'Where the confirmation is sent. Example: name@example.com',
    },
    modes: { onsite: 'On site', online: 'Online' },
    choose: 'Choose one',
    meals: { regular: 'Regular', vegetarian: 'Vegetarian', none: 'No meal' },
    empty: (label: string) => `${label} is empty.`,
    emailFormat: 'The email is not in address format. Example: name@example.com',
    next: 'Next',
    back: 'Back',
    submit: 'Check the application',
    doneTitle: 'Values that would be submitted (not sent)',
    restart: 'Start over',
    observed: 'DOM and state the page read',
    step: 'Current step',
    remembered: 'Remembered meal choice (page state)',
    inDom: 'Fields present in the DOM',
    focus: 'document.activeElement',
    none: 'None',
    done: 'Done',
  },
};

/** 지금 조건에서 화면에 있고, 검증하고, 제출하는 칸. 세 정책이 같은 목록 하나를 쓴다. */
const fieldsOf = (values: Values): Record<1 | 2, Key[]> => ({
  1: values.mode === 'onsite' ? ['name', 'mode', 'meal'] : ['name', 'mode'],
  2: ['contact', 'email'],
});

/**
 * 두 단계 신청. 단계가 바뀌면 초점을 새 단계의 제목으로, 다음에서 실패하면 첫 오류 칸으로 옮긴다.
 * 조건부 칸은 DOM에서 빼되 값은 기억하고, 검증과 제출에서는 뺀다. 받는 사람 이름은 고치기 전까지 1단계의 이름을 따른다.
 */
export const StepsDemo = () => {
  const c = useLang(content);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState(initial);
  const [contactEdited, setContactEdited] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [focus, setFocus] = useState<{ key: string; tick: number } | null>(null);
  const [inDom, setInDom] = useState('');

  useEffect(() => {
    if (focus) document.getElementById(`${id}-${focus.key}`)?.focus();
  }, [id, focus]);

  useEffect(() => {
    const names = [...(box.current?.querySelectorAll('input, select') ?? [])].map(
      (el) => (el as HTMLInputElement).name,
    );
    setInDom([...new Set(names)].join(', '));
  }, [step, values.mode]);

  const moveFocus = (key: string) =>
    setFocus((previous) => ({ key, tick: (previous?.tick ?? 0) + 1 }));
  const set = (key: Key, value: string) => setValues((previous) => ({ ...previous, [key]: value }));
  const shown = step === 'done' ? [] : fieldsOf(values)[step];

  const validate = () => {
    const next: Partial<Record<Key, string>> = {};
    for (const key of shown) {
      if (!values[key].trim()) next[key] = c.empty(c.labels[key]);
      else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        next[key] = c.emailFormat;
    }
    setErrors(next);
    const first = shown.find((key) => next[key]);
    if (first) moveFocus(first);
    return !first;
  };

  const go = (target: Step) => {
    setErrors({});
    setStep(target);
    moveFocus('step');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (step === 1 && !contactEdited) set('contact', values.name);
    go(step === 1 ? 2 : 'done');
  };

  const restart = () => {
    setValues(initial);
    setContactEdited(false);
    go(1);
  };

  const errorText = (key: Key) =>
    errors[key] && (
      <p id={`${id}-${key}-error`} className="text-xxsm text-text-error">
        {c.error}: {errors[key]}
      </p>
    );
  const fieldError = (key: Key) =>
    errors[key] && (
      <>
        {c.error}: {errors[key]}
      </>
    );
  const submitted = [...fieldsOf(values)[1], ...fieldsOf(values)[2]];
  const display = (key: Key) =>
    key === 'mode'
      ? c.modes[values.mode as keyof typeof c.modes]
      : key === 'meal'
        ? c.meals[values.meal as keyof typeof c.meals]
        : values[key];

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box}>
        {step === 'done' ? (
          <div className="flex flex-col gap-md text-xsm">
            <h3 id={`${id}-step`} tabIndex={-1} className="font-semiBold text-text-default">
              {c.doneTitle}
            </h3>
            <dl className="grid gap-x-lg gap-y-2xs sm:grid-cols-[10rem_1fr]">
              {submitted.map((key) => (
                <div key={key} className="contents">
                  <dt className="text-text-light">{c.labels[key]}</dt>
                  <dd className="break-all">{display(key)}</dd>
                </div>
              ))}
            </dl>
            <div>
              <Button type="button" variant="outlined" size="sm" onClick={restart}>
                {c.restart}
              </Button>
            </div>
          </div>
        ) : (
          <form
            noValidate
            method="post"
            aria-label={c.form}
            className="flex flex-col gap-md"
            onSubmit={submit}
          >
            <h3
              id={`${id}-step`}
              tabIndex={-1}
              className="text-xsm font-semiBold text-text-default"
            >
              {c.stepTitle[step]}
            </h3>
            {step === 1 ? (
              <>
                <Field
                  id={`${id}-name`}
                  name="name"
                  autoComplete="name"
                  required
                  label={c.labels.name}
                  requiredText={c.required}
                  hint={c.hints.name}
                  error={fieldError('name')}
                  value={values.name}
                  onChange={(e) => set('name', e.target.value)}
                />
                <fieldset
                  aria-describedby={errors.mode ? `${id}-mode-error` : undefined}
                  className="flex flex-col gap-xs text-xsm"
                >
                  <legend className="mb-xs">
                    {c.labels.mode} <span className="text-text-light">({c.required})</span>
                  </legend>
                  {(Object.keys(c.modes) as (keyof typeof c.modes)[]).map((value, i) => (
                    <label key={value} className="flex items-center gap-sm">
                      <input
                        id={i === 0 ? `${id}-mode` : undefined}
                        type="radio"
                        name="mode"
                        value={value}
                        required
                        checked={values.mode === value}
                        onChange={() => set('mode', value)}
                      />
                      {c.modes[value]}
                    </label>
                  ))}
                  {errorText('mode')}
                </fieldset>
                {values.mode === 'onsite' && (
                  <div className="flex flex-col gap-xs text-xsm">
                    <label htmlFor={`${id}-meal`}>
                      {c.labels.meal} <span className="text-text-light">({c.required})</span>
                    </label>
                    <select
                      id={`${id}-meal`}
                      name="meal"
                      required
                      className={fieldClass}
                      aria-invalid={errors.meal ? 'true' : undefined}
                      aria-describedby={errors.meal ? `${id}-meal-error` : undefined}
                      value={values.meal}
                      onChange={(e) => set('meal', e.target.value)}
                    >
                      <option value="">{c.choose}</option>
                      {(Object.keys(c.meals) as (keyof typeof c.meals)[]).map((value) => (
                        <option key={value} value={value}>
                          {c.meals[value]}
                        </option>
                      ))}
                    </select>
                    {errorText('meal')}
                  </div>
                )}
              </>
            ) : (
              <>
                <Field
                  id={`${id}-contact`}
                  name="contact"
                  autoComplete="name"
                  required
                  label={c.labels.contact}
                  requiredText={c.required}
                  hint={c.hints.contact}
                  error={fieldError('contact')}
                  value={values.contact}
                  onChange={(e) => {
                    setContactEdited(true);
                    set('contact', e.target.value);
                  }}
                />
                <Field
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  label={c.labels.email}
                  requiredText={c.required}
                  hint={c.hints.email}
                  error={fieldError('email')}
                  value={values.email}
                  onChange={(e) => set('email', e.target.value)}
                />
              </>
            )}
            <div className="flex flex-wrap gap-sm">
              {step === 2 && (
                <Button type="button" variant="outlined" size="sm" onClick={() => go(1)}>
                  {c.back}
                </Button>
              )}
              <Button type="submit" size="sm">
                {step === 1 ? c.next : c.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.step, step === 'done' ? c.done : c.stepTitle[step]],
          [c.remembered, values.meal ? c.meals[values.meal as keyof typeof c.meals] : c.none],
          [c.inDom, <code key="d">{inDom || c.none}</code>],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
