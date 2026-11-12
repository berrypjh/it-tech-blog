'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { SourceTag } from '@/components/shared/SourceTag';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '먼저 아래 관찰 값으로 label의 for와 입력 칸의 id가 맞는지 보고, 개발자 도구에서 입력 칸의 이름을 확인하세요. 그다음 "관계 고치기"를 체크하고 같은 값을 다시 봅니다.',
    label: '연락처',
    placeholder: '010-0000-0000',
    specimen: '검사용 예제 (교육 예시 · Tab 순서에서 뺌)',
    fix: '관계 고치기 (입력 칸 id를 for와 맞춤)',
    observed: '지금 관찰한 값',
    rows: {
      htmlFor: 'label의 for',
      id: '입력 칸의 id',
      found: 'for 값을 id로 가진 요소',
      labels: '입력 칸에 연결된 label 수 (input.labels)',
    },
    yes: '있음',
    no: '없음',
    expectedTitle: '예상 이름 (HTML-AAM 초안의 순서)',
    expectedBroken:
      '연결된 label이 없으므로 다음 후보로 내려갑니다. 초안은 title이 없을 때 placeholder(그다음 aria-placeholder)를 후보로 적지만, 브라우저마다 결과가 다를 수 있어 관찰값으로 확인합니다.',
    expectedFixed: '연결된 label의 글자 "연락처"가 이름이 될 것으로 예상합니다.',
    note: '관찰 값은 페이지가 DOM에서 읽은 관계입니다. 계산된 이름은 브라우저 도구에서 확인합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'First check in the observed values below whether the label’s for matches the input’s id, and check the input’s name in developer tools. Then check "Fix the relation" and look at the same values again.',
    label: 'Phone',
    placeholder: '555-0100',
    specimen: 'Inspection sample (teaching example; out of the Tab order)',
    fix: 'Fix the relation (match the input id to for)',
    observed: 'What you observe now',
    rows: {
      htmlFor: 'The label’s for',
      id: 'The input’s id',
      found: 'Element with the for value as its id',
      labels: 'Labels connected to the input (input.labels)',
    },
    yes: 'Found',
    no: 'None',
    expectedTitle: 'Expected name (order in the HTML-AAM draft)',
    expectedBroken:
      'With no connected label, the computation moves to the next candidates. The draft lists placeholder (then aria-placeholder) as candidates when there is no title, but results can differ by browser, so check the observed value.',
    expectedFixed: 'The connected label text "Phone" is expected to become the name.',
    note: 'The observed values are relations the page reads from the DOM. Check the computed name in browser tools.',
  },
};

type Reading = { htmlFor: string; id: string; found: boolean; labels: number };

/** 끊긴 for · id 관계를 DOM 값(htmlFor · id · input.labels)으로 보여 주고, 버튼으로 실제 관계를 고친다. */
export const LabelLinkDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const uid = useId();
  const [fixed, setFixed] = useState(false);
  const [reading, setReading] = useState<Reading | null>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const forId = `${uid}-phone`;

  useEffect(() => {
    const label = labelRef.current;
    const input = inputRef.current;
    if (!label || !input) return;
    setReading({
      htmlFor: label.htmlFor,
      id: input.id,
      found: document.getElementById(label.htmlFor) !== null,
      labels: input.labels?.length ?? 0,
    });
  }, [fixed]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="rounded-sm border border-stroke-light p-md">
        <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.specimen}</p>
        <div className="flex flex-col gap-xs text-xsm">
          <label ref={labelRef} htmlFor={forId}>
            {c.label}
          </label>
          <input
            ref={inputRef}
            id={fixed ? forId : `${uid}-tel`}
            type="tel"
            placeholder={c.placeholder}
            tabIndex={-1}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
          />
        </div>
      </div>

      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={fixed} onChange={(e) => setFixed(e.target.checked)} />
        {c.fix}
      </label>

      {reading && (
        <div className="rounded-sm border border-stroke-light p-md text-xsm">
          <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
            {c.observed} <SourceTag locale={locale} id="dom" />
          </p>
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[16rem_1fr]">
            <dt className="text-text-light">{c.rows.htmlFor}</dt>
            <dd className="break-all">
              <code>{reading.htmlFor}</code>
            </dd>
            <dt className="text-text-light">{c.rows.id}</dt>
            <dd className="break-all">
              <code>{reading.id}</code>
            </dd>
            <dt className="text-text-light">{c.rows.found}</dt>
            <dd>{reading.found ? c.yes : c.no}</dd>
            <dt className="text-text-light">{c.rows.labels}</dt>
            <dd>{reading.labels}</dd>
          </dl>
        </div>
      )}

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.expectedTitle} <SourceTag locale={locale} id="model" />
        </p>
        <p role="status">{fixed ? c.expectedFixed : c.expectedBroken}</p>
      </div>
      <p className="text-xxsm text-text-light">{c.note}</p>
    </PracticeFrame>
  );
};
