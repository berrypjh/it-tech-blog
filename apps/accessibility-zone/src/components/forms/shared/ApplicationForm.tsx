'use client';

import { useEffect, useId, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import {
  type Application,
  emptyApplication,
  type FieldError,
  type FieldName,
  fieldNames,
  fieldText,
} from './application';
import { Field } from './Field';

const content = {
  ko: {
    form: '행사 신청 (교육 예시)',
    required: '필수',
    summary: (n: number) => `입력을 확인해 주세요. 오류 ${n}개`,
    error: '오류',
    submit: '신청 내용 보내기',
  },
  en: {
    form: 'Event application (teaching example)',
    required: 'required',
    summary: (n: number) => `Please check your input. ${n} errors`,
    error: 'Error',
    submit: 'Send application',
  },
};

const inputProps: Record<FieldName, React.ComponentProps<'input'>> = {
  name: { autoComplete: 'name' },
  email: { type: 'email', autoComplete: 'email' },
  seats: { inputMode: 'numeric' },
};

/**
 * 신청서의 값 · 오류 · 초점 이동을 갖는다. moveFocus의 key는 id 뒤에 붙는 이름(summary · submit · 칸 이름 등)이다. 초점은 제출이 실패했을 때 오류 요약으로,
 * 요약의 링크나 검토 화면의 수정 버튼을 눌렀을 때 그 칸으로, 다시 시도했을 때 보내기 버튼으로만 옮긴다.
 */
export const useApplicationForm = () => {
  const id = useId();
  const [values, setValues] = useState<Application>(emptyApplication);
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [focus, setFocus] = useState<{ key: string; tick: number } | null>(null);

  useEffect(() => {
    if (focus) document.getElementById(`${id}-${focus.key}`)?.focus();
  }, [id, focus]);

  const moveFocus = (key: string) =>
    setFocus((previous) => ({ key, tick: (previous?.tick ?? 0) + 1 }));

  /** 이전 오류를 새 결과로 바꾼다. 오류가 남아 있으면 요약으로 초점을 옮긴다. */
  const showErrors = (next: FieldError[]) => {
    setErrors(next);
    if (next.length) moveFocus('summary');
  };

  return { id, values, setValues, errors, setErrors, showErrors, moveFocus };
};

type Props = {
  form: ReturnType<typeof useApplicationForm>;
  onSubmit: (values: Application) => void;
  children?: React.ReactNode;
};

/**
 * 오류 요약 · 칸별 오류 · 수정 제안을 연결한 신청서. 브라우저 기본 검사는 끄고(novalidate) 같은 규칙을 한 번만 알린다.
 * 오류는 보낼 때마다 새로 검사해 바꾼다. 입력하거나 칸을 옮기는 동안에는 검사도, 초점 이동도 하지 않는다.
 * (칸을 떠날 때 오류를 지우면 요약이 줄어들며 누르려던 링크나 버튼이 밀려 클릭이 빗나간다.)
 */
export const ApplicationForm = ({ form, onSubmit, children }: Props) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const { id, values, errors } = form;
  const text = fieldText[locale];
  const errorOf = (field: FieldName) => errors.find((error) => error.field === field);

  return (
    <form
      noValidate
      method="post"
      aria-label={c.form}
      className="flex flex-col gap-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      {errors.length > 0 && (
        <div className="rounded-sm border border-stroke-error p-md text-xsm">
          <h3 id={`${id}-summary`} tabIndex={-1} className="font-semiBold text-text-default">
            {c.summary(errors.length)}
          </h3>
          <ul className="mt-xs list-disc pl-lg">
            {errors.map((error) => (
              <li key={error.field}>
                <a
                  href={`#${id}-${error.field}`}
                  onClick={(e) => {
                    e.preventDefault();
                    form.moveFocus(error.field);
                  }}
                >
                  {text[error.field].label}: {error.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {fieldNames.map((field) => {
        const error = errorOf(field);
        return (
          <Field
            key={field}
            id={`${id}-${field}`}
            name={field}
            label={text[field].label}
            requiredText={c.required}
            required
            hint={text[field].hint}
            error={
              error && (
                <>
                  {c.error}: {error.message} {error.suggestion}
                </>
              )
            }
            value={values[field]}
            onChange={(e) => form.setValues({ ...values, [field]: e.target.value })}
            {...inputProps[field]}
          />
        );
      })}
      <div className="flex flex-wrap gap-sm">
        <Button id={`${id}-submit`} type="submit" size="sm">
          {c.submit}
        </Button>
        {children}
      </div>
    </form>
  );
};
