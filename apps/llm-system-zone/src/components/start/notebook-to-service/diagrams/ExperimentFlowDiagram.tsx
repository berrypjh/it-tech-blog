import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    mainHeading: '데이터에서 모니터링까지',
    stepLabel: '단계',
    steps: [
      { title: 'Dataset', detail: '버전이 있는 평가 데이터. 결측, 중복, 라벨, 분포를 확인한다' },
      { title: 'Notebook Experiment', detail: '바꿀 요인을 정해 실험하고 결과를 비교한다' },
      { title: 'Evaluation', detail: '01-06의 기준으로 필수 조건과 지표를 계산한다' },
      {
        title: 'Decision',
        detail: '선택 근거를 남기고 계약(스키마, 임계값, 실패 정책)으로 정한다',
      },
      {
        title: 'Service Implementation',
        detail: '계약을 코드로 옮기고 같은 확인 사례로 테스트한다',
      },
      { title: 'Monitoring', detail: '운영에서 실패 사례와 분포 변화를 관찰한다' },
    ],
    backHeading: '환류',
    atLabel: '시점',
    pathLabel: '경로',
    back: [
      {
        title: 'Monitoring에서 실패 사례를 찾음',
        at: 'Monitoring',
        path: '다음 Dataset에 추가하거나 새 실험의 가설로 삼고, 데이터 버전을 올립니다',
      },
      {
        title: 'Evaluation이 기준을 만족하지 못하거나 확인 사례가 실패함',
        at: 'Evaluation 또는 Service Implementation',
        path: 'Notebook Experiment로 돌아가 요인을 하나씩 바꿉니다',
      },
    ],
    note: '이 순서는 하나의 예시입니다. 모든 프로젝트가 이 순서만 따르는 것은 아니며, 서비스에서 먼저 시작해 로그에서 데이터를 만드는 경우도 있습니다.',
  },
  en: {
    mainHeading: 'From data to monitoring',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Dataset',
        detail:
          'Versioned evaluation data. Check missing values, duplicates, labels, and distribution',
      },
      {
        title: 'Notebook Experiment',
        detail: 'Decide the factor to change, run experiments, and compare results',
      },
      {
        title: 'Evaluation',
        detail: 'Compute mandatory conditions and metrics with the 01-06 criteria',
      },
      {
        title: 'Decision',
        detail: 'Record the rationale and fix it as a contract (schema, threshold, failure policy)',
      },
      {
        title: 'Service Implementation',
        detail: 'Carry the contract into code and test it with the same confirmation cases',
      },
      { title: 'Monitoring', detail: 'Observe failure cases and distribution shift in operation' },
    ],
    backHeading: 'Feedback',
    atLabel: 'When',
    pathLabel: 'Path',
    back: [
      {
        title: 'Failure cases are found in Monitoring',
        at: 'Monitoring',
        path: 'Add them to the next Dataset or make them hypotheses for a new experiment, and bump the data version',
      },
      {
        title: 'Evaluation does not meet the criteria or the confirmation cases fail',
        at: 'Evaluation or Service Implementation',
        path: 'Return to the Notebook Experiment and change one factor at a time',
      },
    ],
    note: 'This order is one example. Not every project follows only this order; some start in the service and build data from logs.',
  },
};

/** 데이터에서 모니터링까지의 흐름과 앞 단계로 돌아가는 두 환류. 정적 서버 컴포넌트다. */
export const ExperimentFlowDiagram = ({ locale }: { locale: Locale }) => {
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
      <p className="mt-md break-keep text-xxsm text-text-light">{c.note}</p>
    </figure>
  );
};
