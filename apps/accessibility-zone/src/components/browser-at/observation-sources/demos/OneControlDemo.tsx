'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { PracticeFrame } from '@/components/shared/PracticeFrame';
import { SourceTag } from '@/components/shared/SourceTag';

const content = {
  ko: {
    practice: '최종 과업',
    instructions:
      '이 체크박스 하나를 DOM · 개발자 도구 · 실제 보조기술 세 관점에서 관찰하고, 아래 기록 틀에 관점마다 한 줄씩 적습니다.',
    label: '주문 내역을 이메일로 받기',
    domHeading: 'DOM에서 읽은 값',
    property: (on: boolean) => `checked 속성값(property): ${on}`,
    attribute: (on: boolean) => `checked HTML 속성(attribute): ${on ? '있음' : '없음'}`,
  },
  en: {
    practice: 'Final task',
    instructions:
      'Observe this one checkbox from three points of view — DOM, developer tools, and real assistive technology — and write one line per point of view in the record template below.',
    label: 'Email me the order details',
    domHeading: 'Values read from the DOM',
    property: (on: boolean) => `checked property: ${on}`,
    attribute: (on: boolean) => `checked HTML attribute: ${on ? 'present' : 'absent'}`,
  },
};

type Reading = { property: boolean; attribute: boolean };

/** 체크박스의 checked 속성값(property)과 HTML 속성(attribute)을 실제 DOM에서 읽는다. */
const readBox = (el: HTMLInputElement): Reading => ({
  property: el.checked,
  attribute: el.hasAttribute('checked'),
});

/** 관찰 대상 컨트롤 하나와, 페이지 스크립트가 DOM에서 읽을 수 있는 값만 보여 준다. */
export const OneControlDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  const [reading, setReading] = useState<Reading | null>(null);

  const read = () => {
    if (ref.current) setReading(readBox(ref.current));
  };

  useEffect(read, []);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <label htmlFor={id} className="inline-flex items-center gap-sm">
          <input ref={ref} id={id} type="checkbox" onChange={read} className="h-4 w-4" />
          {c.label}
        </label>
      </div>
      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold">
          {c.domHeading} <SourceTag locale={locale} id="dom" />
        </p>
        {reading && (
          <>
            <p>
              <code>{c.property(reading.property)}</code>
            </p>
            <p>
              <code>{c.attribute(reading.attribute)}</code>
            </p>
          </>
        )}
      </div>
    </PracticeFrame>
  );
};
