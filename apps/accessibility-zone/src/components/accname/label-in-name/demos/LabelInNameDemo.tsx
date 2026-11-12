'use client';

import { useId, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { CodeBlock, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { SourceTag } from '@/components/shared/SourceTag';

type Version = 'before' | 'after';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '두 버튼을 개발자 도구의 접근성 탭에서 하나씩 고르고, 나온 이름을 각 칸에 적어 보세요. 아래 확인은 여러분이 적은 관찰값으로만 계산합니다.',
    visible: '예약 변경',
    date: '3월 12일 객실 A',
    titles: { before: '수정 전', after: '수정 후' },
    code: {
      before: `<button type="button" aria-label="예약 수정하기">예약 변경</button>`,
      after: `<button type="button" aria-describedby="when">예약 변경</button>
<p id="when">3월 12일 객실 A</p>`,
    },
    expected: {
      before: '예상 이름: "예약 수정하기"',
      after: '예상 이름: "예약 변경", 예상 설명: "3월 12일 객실 A"',
    },
    observed: (v: Version) => `${v === 'before' ? '수정 전' : '수정 후'} 버튼의 관찰한 이름`,
    contains: '보이는 라벨 "예약 변경"이 관찰한 이름에 들어 있습니다 (대소문자 · 문장 부호 무시).',
    missing: '보이는 라벨 "예약 변경"이 관찰한 이름에 없습니다.',
    note: '검사용 예제의 버튼은 Tab 순서에서 뺐고, 눌러도 아무 일이 없습니다. 사이트는 브라우저가 계산한 이름을 읽지 않습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Select each button in the Accessibility tab of developer tools and write the name shown in its field. The check below is computed only from the observed values you write.',
    visible: 'Change booking',
    date: 'March 12, Room A',
    titles: { before: 'Before', after: 'After' },
    code: {
      before: `<button type="button" aria-label="Edit reservation">Change booking</button>`,
      after: `<button type="button" aria-describedby="when">Change booking</button>
<p id="when">March 12, Room A</p>`,
    },
    expected: {
      before: 'Expected name: "Edit reservation"',
      after: 'Expected name: "Change booking", expected description: "March 12, Room A"',
    },
    observed: (v: Version) => `Observed name of the ${v === 'before' ? 'before' : 'after'} button`,
    contains:
      'The visible label "Change booking" is in the observed name (ignoring case and punctuation).',
    missing: 'The visible label "Change booking" is not in the observed name.',
    note: 'The inspection sample buttons are out of the Tab order and do nothing when pressed. The site does not read the name the browser computed.',
  },
};

/** 대소문자 · 문장 부호 · 공백 차이를 지운다. 2.5.3 Understanding이 이 차이를 판정과 무관하다고 본다. */
const normalize = (text: string) =>
  text
    .toLocaleLowerCase()
    .replace(/[\p{P}\p{S}]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** 수정 전 · 후 버튼의 이름을 학습자가 브라우저 도구에서 읽어 적고, 그 관찰값에 보이는 라벨이 들어 있는지 확인한다. */
export const LabelInNameDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const uid = useId();
  const [observed, setObserved] = useState<Record<Version, string>>({ before: '', after: '' });

  const check = (value: string) =>
    value.trim() === ''
      ? null
      : normalize(value).includes(normalize(c.visible))
        ? c.contains
        : c.missing;

  const specimen = (version: Version) =>
    version === 'before' ? (
      <button
        type="button"
        tabIndex={-1}
        aria-label={locale === 'ko' ? '예약 수정하기' : 'Edit reservation'}
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        {c.visible}
      </button>
    ) : (
      <>
        <button
          type="button"
          tabIndex={-1}
          aria-describedby={`${uid}-when`}
          className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
        >
          {c.visible}
        </button>
        <p id={`${uid}-when`} className="text-xxsm text-text-light">
          {c.date}
        </p>
      </>
    );

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md md:grid-cols-2">
        {(['before', 'after'] as const).map((version) => (
          <div
            key={version}
            className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
          >
            <p className="font-semiBold text-text-default">{c.titles[version]}</p>
            <CodeBlock code={c.code[version]} label={c.titles[version]} />
            <p className="flex flex-wrap items-center gap-sm text-xxsm text-text-light">
              <SourceTag locale={locale} id="model" /> {c.expected[version]}
            </p>
            <div className="flex flex-wrap items-center gap-sm">{specimen(version)}</div>
            <div className="flex flex-col gap-xs">
              <label htmlFor={`${uid}-${version}`}>{c.observed(version)}</label>
              <input
                id={`${uid}-${version}`}
                value={observed[version]}
                onChange={(e) => setObserved((prev) => ({ ...prev, [version]: e.target.value }))}
                className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
              />
              <p role="status" className="flex flex-wrap items-center gap-sm">
                {check(observed[version]) && (
                  <>
                    <SourceTag locale={locale} id="devtools" /> {check(observed[version])}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xxsm text-text-light">{c.note}</p>
    </PracticeFrame>
  );
};
