'use client';

import { useId, useState } from 'react';

import { type Locale, useLocale } from '@it-tech-blog/preferences';
import { CodeBlock, ExternalLink, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

/** 명세상 계산 경로의 한 단계. href는 채택 판본의 그 단계 앵커다. */
export type PathStep = { step: string; href: string; result: string };

/**
 * 검토를 마친 이름 계산 사례 하나. expected는 AccName 1.2 초안의 결과,
 * expected11은 1.1 확정 규격의 결과가 다를 때만 둔다. specimen은 검사용 예제를 그리며, id()로 페이지 안에서 겹치지 않는 id를 만든다.
 */
export type NameCase = {
  id: string;
  label: string;
  code: string;
  path: PathStep[];
  expected: string;
  expected11?: string;
  note?: string;
  specimen: (id: (name: string) => string) => React.ReactNode;
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      '사례를 하나 고르고, 계산 경로를 따라 이름을 먼저 예상해 보세요. 그다음 개발자 도구의 접근성 탭에서 검사용 예제의 이름을 찾아 관찰값 칸에 적고 예상과 비교합니다.',
    legend: '사례',
    code: '코드',
    path: '명세상 계산 경로 (AccName 1.2 초안의 단계)',
    expected: '예상 이름',
    expected12: 'AccName 1.2 초안',
    expected11: 'AccName 1.1 확정 규격',
    empty: '(빈 이름)',
    specimen: '검사용 예제',
    specimenNote:
      '검사용 예제의 컨트롤은 Tab 순서에서 뺐습니다. 실제 id에는 페이지 안에서 겹치지 않도록 앞말이 붙습니다.',
    observed: '내 브라우저 도구에 나온 이름',
    observedHint: '사이트는 브라우저가 계산한 이름을 읽을 수 없습니다. 직접 보고 적습니다.',
    same: '예상과 같습니다.',
    differs: '예상과 다릅니다. 브라우저 · 버전과 함께 기록합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Pick a case and predict the name by following the computation path first. Then find the name of the inspection sample in the Accessibility tab of developer tools, write it in the observed field, and compare.',
    legend: 'Case',
    code: 'Code',
    path: 'Computation path in the specs (steps of the AccName 1.2 draft)',
    expected: 'Expected name',
    expected12: 'AccName 1.2 draft',
    expected11: 'AccName 1.1 Recommendation',
    empty: '(empty name)',
    specimen: 'Inspection sample',
    specimenNote:
      'Controls in the inspection sample are taken out of the Tab order. Real ids get a prefix so they do not repeat on the page.',
    observed: 'Name shown in my browser tools',
    observedHint: 'The site cannot read the name the browser computed. Look and write it yourself.',
    same: 'Matches the expectation.',
    differs: 'Differs from the expectation. Record it with the browser and version.',
  },
};

const flat = (text: string) => text.replace(/\s+/g, ' ').trim();

/** 정해 둔 사례만 고르는 이름 계산 실습. 임의 HTML을 받지 않고, 계산된 이름은 학습자가 브라우저 도구에서 직접 읽는다. */
export const CaseExplorer = ({ cases }: { cases: Record<Locale, NameCase[]> }) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const uid = useId();
  const list = cases[locale];
  const [caseId, setCaseId] = useState(list[0].id);
  const [observed, setObserved] = useState('');
  const current = list.find((item) => item.id === caseId) ?? list[0];
  const show = (name: string) => (name === '' ? c.empty : `"${name}"`);

  const choose = (value: string) => {
    setCaseId(value);
    setObserved('');
  };

  const comparison =
    observed.trim() === '' ? null : flat(observed) === flat(current.expected) ? c.same : c.differs;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={current.id}
        onValueChange={choose}
        className="flex-row flex-wrap gap-x-xl gap-y-xs"
      >
        {list.map((item) => (
          <Radio key={item.id} value={item.id} className="text-xsm">
            {item.label}
          </Radio>
        ))}
      </RadioGroup>

      <div className="flex flex-col gap-xs">
        <p className="flex flex-wrap items-center gap-sm text-xsm font-semiBold text-text-default">
          {c.code} <SourceTag locale={locale} id="example" />
        </p>
        <CodeBlock code={current.code} label={current.label} />
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.path} <SourceTag locale={locale} id="normative" />
        </p>
        <ol className="flex list-decimal flex-col gap-xs pl-xl">
          {current.path.map((step, i) => (
            <li key={`${i}-${step.step}`}>
              <ExternalLink href={step.href}>{step.step}</ExternalLink> — {step.result}
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.expected} <SourceTag locale={locale} id="model" />
        </p>
        <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[12rem_1fr]">
          <dt className="text-text-light">{c.expected12}</dt>
          <dd>{show(current.expected)}</dd>
          {current.expected11 !== undefined && (
            <>
              <dt className="text-text-light">{c.expected11}</dt>
              <dd>{show(current.expected11)}</dd>
            </>
          )}
        </dl>
        {current.note && <p className="mt-sm text-xxsm text-text-light">{current.note}</p>}
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.specimen} <SourceTag locale={locale} id="devtools" />
        </p>
        <div className="mb-sm flex flex-wrap items-center gap-sm">
          {current.specimen((name) => `${uid}-${current.id}-${name}`)}
        </div>
        <p className="mb-md text-xxsm text-text-light">{c.specimenNote}</p>
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${uid}-observed`}>{c.observed}</label>
          <input
            id={`${uid}-observed`}
            value={observed}
            onChange={(e) => setObserved(e.target.value)}
            aria-describedby={`${uid}-observed-hint`}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
          />
          <p id={`${uid}-observed-hint`} className="text-xxsm text-text-light">
            {c.observedHint}
          </p>
          <p role="status" className="text-xsm">
            {comparison}
          </p>
        </div>
      </div>
    </PracticeFrame>
  );
};
