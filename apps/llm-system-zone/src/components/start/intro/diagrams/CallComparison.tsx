import type { Locale } from '@it-tech-blog/preferences';

import { ArrowRight } from 'lucide-react';

type Owner = 'app' | 'model';
type Step = { label: string; owner: Owner };

const content = {
  ko: {
    singleTitle: '단일 모델 호출',
    singleChain: ['요청', '모델', '결과로 간주'],
    singleNote: '응답이 생겼으니 끝났다고 가정합니다. 검증, 권한 확인, 저장 단계가 없습니다.',
    flowTitle: '시스템 흐름',
    flowSummary: (total: number, app: number) =>
      `${total}단계 중 모델이 하는 일은 1단계이고 나머지 ${app}단계는 앱의 일입니다.`,
    owners: { app: '앱', model: '모델' } satisfies Record<Owner, string>,
    steps: [
      { label: '입력 확인', owner: 'app' },
      { label: 'context 구성', owner: 'app' },
      { label: '모델 호출', owner: 'model' },
      { label: '출력 검증', owner: 'app' },
      {
        label: '실패하면 보류',
        owner: 'app',
      },
      { label: '사용자 확인', owner: 'app' },
      { label: '허용된 동작 실행', owner: 'app' },
      { label: '결과 확인', owner: 'app' },
    ] as Step[],
  },
  en: {
    singleTitle: 'A single model call',
    singleChain: ['Request', 'Model', 'Taken as the result'],
    singleNote:
      'It assumes it is done because a response exists. There is no validation, permission check, or save step.',
    flowTitle: 'A system flow',
    flowSummary: (total: number, app: number) =>
      `Of ${total} steps the model does 1, and the other ${app} are the app’s job.`,
    owners: { app: 'App', model: 'Model' } satisfies Record<Owner, string>,
    steps: [
      { label: 'Check input', owner: 'app' },
      { label: 'Build context', owner: 'app' },
      { label: 'Call the model', owner: 'model' },
      { label: 'Validate output', owner: 'app' },
      {
        label: 'Hold on failure',
        owner: 'app',
      },
      { label: 'User confirmation', owner: 'app' },
      {
        label: 'Run the allowed action',
        owner: 'app',
      },
      { label: 'Confirm the result', owner: 'app' },
    ] as Step[],
  },
};

const chip = 'rounded-md border px-md py-sm text-xxsm';
const appChip = `${chip} border-stroke-light bg-background-surface text-text-default`;
const modelChip = `${chip} border-stroke-primary bg-primaryBtn-outlinedHover font-semiBold text-text-primary`;

/** 단일 호출과 시스템 흐름을 칩의 연결로 보여 주고, 모델이 하는 일이 한 단계뿐임을 드러낸다. 서버 컴포넌트다. */
export const CallComparison = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const appCount = c.steps.filter((s) => s.owner === 'app').length;

  return (
    <figure className="my-lg flex flex-col gap-md leading-normal">
      <section className="rounded-md border border-stroke-light bg-background-surface px-lg py-lg">
        <h3 className="text-xsm font-semiBold text-text-default">{c.singleTitle}</h3>
        <ol className="mt-md flex flex-wrap items-center gap-sm">
          {c.singleChain.map((label, i) => (
            <li key={label} className="flex items-center gap-sm">
              <span
                className={
                  i === 1
                    ? modelChip
                    : i === 2
                      ? `${chip} border-dashed border-stroke-default text-text-light`
                      : appChip
                }
              >
                {label}
              </span>
              {i < c.singleChain.length - 1 && (
                <ArrowRight className="h-3 w-3 text-text-light" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-md text-xxsm text-text-light">{c.singleNote}</p>
      </section>

      <section className="rounded-md border border-stroke-light bg-background-surface px-lg py-lg">
        <h3 className="text-xsm font-semiBold text-text-default">{c.flowTitle}</h3>
        <ol className="mt-md flex flex-wrap items-center gap-sm">
          {c.steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-sm">
              <span className={step.owner === 'model' ? modelChip : appChip}>
                <span className="sr-only">{c.owners[step.owner]}: </span>
                {step.label}
              </span>
              {i < c.steps.length - 1 && (
                <ArrowRight className="h-3 w-3 text-text-light" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-md text-xxsm text-text-default">
          {c.flowSummary(c.steps.length, appCount)}
        </p>
      </section>
    </figure>
  );
};
