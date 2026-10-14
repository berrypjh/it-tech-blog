import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    mainHeading: '조사 순서',
    stepLabel: '단계',
    steps: [
      { title: 'Observed Failure', detail: '관측한 실패: 증상과 재현 조건. 원인이 아니라 사실' },
      { title: 'Failure Category 후보', detail: '가능한 범주를 여러 개 세운다. 가설이다' },
      { title: 'Evidence', detail: '각 가설을 지지하거나 반증할 수 있는 증거를 확인한다' },
      { title: 'Corrective Action', detail: '증거가 지지하는 가설 하나에 대한 조치를 정한다' },
      { title: '재검증', detail: '같은 실패 사례와 정상 사례를 다시 확인한다' },
    ],
    backHeading: '되돌아가는 길 (한 번에 끝나지 않는 경우)',
    atLabel: '시점',
    pathLabel: '경로',
    back: [
      {
        title: '증거가 부족하거나 가설을 약화시킴',
        at: '3단계 증거 확인',
        path: '2단계 범주 후보로 돌아가 가설을 고치고 증거를 다시 모읍니다',
      },
      {
        title: '재검증에서 실패가 남거나 정상 사례가 깨짐',
        at: '5단계 재검증',
        path: '2단계로 돌아갑니다. 조치가 틀렸거나 다른 원인이 겹쳐 있을 수 있습니다',
      },
    ],
  },
  en: {
    mainHeading: 'Investigation order',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Observed Failure',
        detail: 'Symptom and reproduction conditions. A fact, not a cause',
      },
      {
        title: 'Failure Category candidates',
        detail: 'Set up several possible categories. They are hypotheses',
      },
      { title: 'Evidence', detail: 'Check evidence that supports or refutes each hypothesis' },
      {
        title: 'Corrective Action',
        detail: 'Decide the action for one hypothesis the evidence supports',
      },
      { title: 'Re-verify', detail: 'Recheck the same failing case and a normal case' },
    ],
    backHeading: 'Paths that loop back (when one pass is not enough)',
    atLabel: 'When',
    pathLabel: 'Path',
    back: [
      {
        title: 'Evidence is lacking or weakens a hypothesis',
        at: 'Step 3, evidence',
        path: 'Return to the step 2 candidates, revise the hypotheses, and collect evidence again',
      },
      {
        title: 'The failure remains or a normal case breaks on re-verification',
        at: 'Step 5, re-verify',
        path: 'Return to step 2. The action may be wrong or another cause may overlap',
      },
    ],
  },
};

/** 관측한 실패에서 재검증까지의 조사 흐름과 가설로 되돌아오는 두 경로. 정적 서버 컴포넌트다. */
export const FailureLoopDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.mainHeading}</p>
      <List ordered className="grid grid-cols-1 gap-sm sm:grid-cols-3">
        {c.steps.map((step, i) => (
          <ListItem
            key={step.title}
            className="flex flex-col gap-2xs rounded-md border border-stroke-light bg-background-surface p-md"
          >
            <span className="flex items-center justify-between text-xxsm font-semiBold tracking-xsm text-text-primary">
              {c.stepLabel} {i + 1}
              {i < c.steps.length - 1 && <ArrowRight className="h-3 w-3" aria-hidden="true" />}
            </span>
            <span className="text-xsm font-semiBold text-text-default">{step.title}</span>
            <span className="break-keep text-xxsm text-text-light">{step.detail}</span>
          </ListItem>
        ))}
      </List>

      <p className="mb-sm mt-lg text-xxsm font-semiBold text-text-light">{c.backHeading}</p>
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-2">
        {c.back.map((item) => (
          <ListItem
            key={item.title}
            className="flex flex-col gap-sm rounded-md border border-l-2 border-stroke-light border-l-stroke-warning bg-background-surface px-lg py-md"
          >
            <span className="text-xxsm font-semiBold text-text-default">{item.title}</span>
            <dl className="grid grid-cols-[3rem_1fr] gap-x-sm gap-y-xs text-xxsm">
              <dt className="text-text-light">{c.atLabel}</dt>
              <dd className="break-keep text-text-light">{item.at}</dd>
              <dt className="text-text-light">{c.pathLabel}</dt>
              <dd className="break-keep text-text-light">{item.path}</dd>
            </dl>
          </ListItem>
        ))}
      </List>
    </figure>
  );
};
