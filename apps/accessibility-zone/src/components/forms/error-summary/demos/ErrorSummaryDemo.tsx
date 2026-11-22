'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { type Application, validateApplication } from '@/components/forms/shared/application';
import { ApplicationForm, useApplicationForm } from '@/components/forms/shared/ApplicationForm';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '두 오류를 내고, 요약의 링크로 칸에 가서 고친 뒤 다시 보내세요. 아무것도 전송하지 않습니다.',
    observed: '페이지가 읽은 DOM',
    links: '오류 요약의 링크',
    invalid: 'aria-invalid="true"인 칸',
    focus: 'document.activeElement',
    none: '없음',
    passed: '검사를 통과했습니다. 값은 전송하지 않았습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Cause two errors, follow a summary link to the field, fix it, and send again. Nothing is sent.',
    observed: 'DOM the page read',
    links: 'Links in the error summary',
    invalid: 'Fields with aria-invalid="true"',
    focus: 'document.activeElement',
    none: 'None',
    passed: 'The check passed. No values were sent.',
  },
};

/** 오류 요약 → 칸 → 수정 → 재제출의 경로. 요약과 칸의 상태는 렌더링된 DOM에서 그대로 읽는다. */
export const ErrorSummaryDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const form = useApplicationForm();
  const [active] = useActiveElement();
  const box = useRef<HTMLDivElement>(null);
  const [passed, setPassed] = useState(false);
  const [read, setRead] = useState({ links: '', invalid: '' });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    setRead({
      links: [...el.querySelectorAll('h3 + ul a')].map((a) => a.textContent).join(' / '),
      invalid: [...el.querySelectorAll<HTMLInputElement>('[aria-invalid="true"]')]
        .map((input) => input.name)
        .join(', '),
    });
  }, [form.errors]);

  const submit = (values: Application) => {
    const errors = validateApplication(locale, values);
    form.showErrors(errors);
    setPassed(errors.length === 0);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box}>
        <ApplicationForm form={form} onSubmit={submit} />
      </div>
      <p role="status" className="text-xsm">
        {passed ? c.passed : ''}
      </p>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.links, read.links || c.none],
          [c.invalid, <code key="i">{read.invalid || c.none}</code>],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
