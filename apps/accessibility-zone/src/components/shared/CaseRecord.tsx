import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import type { FailureStageId } from './failureStages';
import { StageLabel } from './StageLabel';

export type CaseFields = {
  user: React.ReactNode;
  task: React.ReactNode;
  context: React.ReactNode;
  barrier: React.ReactNode;
  condition: React.ReactNode;
  stage: FailureStageId;
  impact: React.ReactNode;
  recovery: React.ReactNode;
  observed: React.ReactNode;
  verify: React.ReactNode;
};

type Key = keyof CaseFields;

const labels: Record<Locale, Record<Key, string>> = {
  ko: {
    user: '사용자',
    task: '과업',
    context: '환경·사용 방식',
    barrier: '장벽',
    condition: '발생 조건',
    stage: '실패 단계',
    impact: '영향',
    recovery: '복구 경로',
    observed: '확인한 것',
    verify: '더 확인할 것',
  },
  en: {
    user: 'User',
    task: 'Task',
    context: 'Environment · way of use',
    barrier: 'Barrier',
    condition: 'When it happens',
    stage: 'Failure stage',
    impact: 'Impact',
    recovery: 'Recovery path',
    observed: 'Checked',
    verify: 'Still to verify',
  },
};

const groups: { name: Record<Locale, string>; keys: Key[] }[] = [
  { name: { ko: '상황', en: 'Situation' }, keys: ['user', 'task', 'context'] },
  { name: { ko: '막힌 곳', en: 'Where it fails' }, keys: ['barrier', 'condition', 'stage'] },
  { name: { ko: '결과', en: 'Outcome' }, keys: ['impact', 'recovery'] },
  { name: { ko: '확인', en: 'Verification' }, keys: ['observed', 'verify'] },
];

/** 사용자 · 과업 · 장벽 · 실패 단계 · 관찰의 한계를 상황 · 막힌 곳 · 결과 · 확인 네 묶음으로 보여주는 사례 기록. */
export const CaseRecord = ({
  locale,
  title,
  fields,
}: {
  locale: Locale;
  title: string;
  fields: CaseFields;
}) => (
  <div className="my-xl rounded-md border border-stroke-light bg-background-default p-lg">
    <p className="mb-md text-xsm font-bold text-text-default">{title}</p>
    <div className="flex flex-col divide-y divide-stroke-light">
      {groups.map((group) => (
        <div key={group.name.en} className="flex flex-col gap-sm py-md last:pb-0">
          <p className="text-xxsm font-semiBold tracking-xsm text-text-primary">
            {group.name[locale]}
          </p>
          <dl className="grid gap-x-lg gap-y-sm text-xsm sm:grid-cols-[8rem_1fr]">
            {group.keys.map((key) => (
              <Fragment key={key}>
                <dt className="font-semiBold text-text-default">{labels[locale][key]}</dt>
                {key === 'stage' ? (
                  <dd className="font-semiBold text-text-default">
                    <StageLabel locale={locale} id={fields.stage} />
                  </dd>
                ) : (
                  <dd className="text-text-light">{fields[key]}</dd>
                )}
              </Fragment>
            ))}
          </dl>
        </div>
      ))}
    </div>
  </div>
);
