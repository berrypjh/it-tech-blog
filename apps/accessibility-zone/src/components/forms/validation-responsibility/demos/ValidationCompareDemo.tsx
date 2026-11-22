'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import {
  emptyApplication,
  type FieldError,
  fieldText,
  validateField,
} from '@/components/forms/shared/application';
import { Field } from '@/components/forms/shared/Field';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const WRONG_VALUE = 'kim@';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '두 폼에서 각각 보내기를 눌러 관찰 값을 비교하세요. 값을 비우거나 고쳐서 다시 보내 보세요. 아무것도 전송하지 않습니다.',
    required: '필수',
    send: '보내기',
    error: '오류',
    none: '없음',
    passed: '검사를 통과했습니다. 값은 전송하지 않았습니다.',
    native: {
      title: '브라우저 기본 제약',
      form: '기본 제약으로 검사하는 폼',
      observed: '브라우저가 알려 준 것',
      invalid: 'invalid 이벤트',
      submit: 'submit 이벤트',
      flags: '참인 validity 항목',
      message: 'validationMessage (브라우저의 문구)',
      dom: '페이지 DOM의 오류 글',
    },
    custom: {
      title: '사용자 정의 검증',
      form: '페이지가 검사하는 폼',
      observed: '페이지 DOM에서 읽은 것',
      submit: 'submit 이벤트',
      invalid: '입력 칸의 aria-invalid',
      text: '입력 칸에 연결된 오류 글',
    },
    times: (n: number) => `${n}회`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press send on each form and compare the observed values. Empty or fix the value and send again. Nothing is sent.',
    required: 'required',
    send: 'Send',
    error: 'Error',
    none: 'none',
    passed: 'The check passed. No values were sent.',
    native: {
      title: 'Built-in constraints',
      form: 'Form checked by built-in constraints',
      observed: 'What the browser reported',
      invalid: 'invalid events',
      submit: 'submit events',
      flags: 'validity entries that are true',
      message: 'validationMessage (the browser’s wording)',
      dom: 'Error text in the page DOM',
    },
    custom: {
      title: 'Custom validation',
      form: 'Form checked by the page',
      observed: 'What was read from the page DOM',
      submit: 'submit events',
      invalid: 'aria-invalid on the field',
      text: 'Error text connected to the field',
    },
    times: (n: number) => `${n}`,
  },
};

const flagNames = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooLong',
  'tooShort',
  'badInput',
  'customError',
] as const;

const cardClass = 'flex flex-col gap-md rounded-sm border border-stroke-light p-md';
const titleClass = 'text-xsm font-semiBold text-text-default';

/** 브라우저 기본 제약만 쓰는 폼. 제출이 멈추면 invalid 이벤트의 대상에서 validity와 문구를 읽는다. */
const NativeCard = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const [value, setValue] = useState(WRONG_VALUE);
  const [log, setLog] = useState({ invalid: 0, submit: 0, flags: '', message: '' });

  return (
    <div className={cardClass}>
      <h3 className={titleClass}>{c.native.title}</h3>
      <form
        method="post"
        aria-label={c.native.form}
        className="flex flex-col gap-md"
        onInvalidCapture={(e) => {
          const el = e.target as HTMLInputElement;
          setLog((previous) => ({
            ...previous,
            invalid: previous.invalid + 1,
            flags: flagNames.filter((name) => el.validity[name]).join(', '),
            message: el.validationMessage,
          }));
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setLog((previous) => ({
            ...previous,
            submit: previous.submit + 1,
            flags: '',
            message: '',
          }));
        }}
      >
        <Field
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          label={fieldText[locale].email.label}
          requiredText={c.required}
          hint={fieldText[locale].email.hint}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <Button type="submit" size="sm">
            {c.send}
          </Button>
        </div>
      </form>
      <ObservedPanel
        title={c.native.observed}
        rows={[
          [c.native.invalid, c.times(log.invalid)],
          [c.native.submit, c.times(log.submit)],
          [c.native.flags, <code key="f">{log.flags || c.none}</code>],
          [c.native.message, log.message || c.none],
          [c.native.dom, c.none],
        ]}
      />
      <p role="status" className="text-xsm">
        {log.submit > 0 && !log.message ? c.passed : ''}
      </p>
    </div>
  );
};

/** 기본 알림을 끄고 페이지가 검사하는 폼. 매번 새로 검사해 이전 오류를 지우고, 틀리면 그 칸으로 초점을 옮긴다. */
const CustomCard = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(WRONG_VALUE);
  const [submits, setSubmits] = useState(0);
  const [error, setError] = useState<FieldError | null>(null);
  const [read, setRead] = useState({ invalid: '', text: '' });

  useEffect(() => {
    const el = input.current;
    if (!el) return;
    setRead({
      invalid: el.getAttribute('aria-invalid') ?? '',
      text: document.getElementById(`${el.id}-error`)?.textContent ?? '',
    });
  }, [error, submits]);

  return (
    <div className={cardClass}>
      <h3 className={titleClass}>{c.custom.title}</h3>
      <form
        noValidate
        method="post"
        aria-label={c.custom.form}
        className="flex flex-col gap-md"
        onSubmit={(e) => {
          e.preventDefault();
          const next = validateField(locale, 'email', { ...emptyApplication, email: value });
          setError(next);
          setSubmits((n) => n + 1);
          if (next) input.current?.focus();
        }}
      >
        <Field
          ref={input}
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          label={fieldText[locale].email.label}
          requiredText={c.required}
          hint={fieldText[locale].email.hint}
          error={
            error && (
              <>
                {c.error}: {error.message} {error.suggestion}
              </>
            )
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <Button type="submit" size="sm">
            {c.send}
          </Button>
        </div>
      </form>
      <ObservedPanel
        title={c.custom.observed}
        rows={[
          [c.custom.submit, c.times(submits)],
          [c.custom.invalid, <code key="i">{read.invalid || c.none}</code>],
          [c.custom.text, read.text || c.none],
        ]}
      />
      <p role="status" className="text-xsm">
        {submits > 0 && !error ? c.passed : ''}
      </p>
    </div>
  );
};

/** 같은 잘못된 값을 브라우저 기본 제약과 사용자 정의 검증으로 각각 검사해 제출이 멈춘 이유를 비교한다. */
export const ValidationCompareDemo = () => {
  const c = useLang(content);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-lg md:grid-cols-2">
        <NativeCard />
        <CustomCard />
      </div>
    </PracticeFrame>
  );
};
