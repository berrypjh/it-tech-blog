import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import { type VerdictId, VerdictLabel } from './VerdictLabel';

export type JudgmentKey =
  | 'standard'
  | 'clause'
  | 'scope'
  | 'conditions'
  | 'evidence'
  | 'verdict'
  | 'unconfirmed'
  | 'followUp';

export type JudgmentFields = Record<JudgmentKey, React.ReactNode>;

const keys: JudgmentKey[] = [
  'standard',
  'clause',
  'scope',
  'conditions',
  'evidence',
  'verdict',
  'unconfirmed',
  'followUp',
];

const labels: Record<Locale, Record<JudgmentKey, string>> = {
  ko: {
    standard: '기준 · 버전',
    clause: '조항',
    scope: '대상 범위',
    conditions: '적용 조건 · 예외',
    evidence: '관찰 증거',
    verdict: '판정',
    unconfirmed: '미확인',
    followUp: '후속 확인',
  },
  en: {
    standard: 'Standard · version',
    clause: 'Clause',
    scope: 'Scope',
    conditions: 'Conditions · exceptions',
    evidence: 'Observed evidence',
    verdict: 'Verdict',
    unconfirmed: 'Unconfirmed',
    followUp: 'Follow-up',
  },
};

/** 04.6에서 정한 판정 기록 한 장. 기준 · 버전 · 조항 · 범위 · 조건 · 증거 · 판정 · 미확인 · 후속 확인을 같은 순서로 보여 준다. */
export const JudgmentRecord = ({
  locale,
  title,
  fields,
  verdict,
}: {
  locale: Locale;
  title: string;
  fields: JudgmentFields;
  verdict: VerdictId;
}) => (
  <div className="my-lg rounded-md border border-stroke-light bg-background-default p-lg">
    <p className="mb-md text-xsm font-bold text-text-default">{title}</p>
    <dl className="grid gap-x-lg gap-y-sm text-xsm sm:grid-cols-[9rem_1fr]">
      {keys.map((key) => (
        <Fragment key={key}>
          <dt className="font-semiBold text-text-default">{labels[locale][key]}</dt>
          <dd className={key === 'verdict' ? 'font-semiBold text-text-default' : 'text-text-light'}>
            {key === 'verdict' ? (
              <VerdictLabel id={verdict}>{fields[key]}</VerdictLabel>
            ) : (
              fields[key]
            )}
          </dd>
        </Fragment>
      ))}
    </dl>
  </div>
);
