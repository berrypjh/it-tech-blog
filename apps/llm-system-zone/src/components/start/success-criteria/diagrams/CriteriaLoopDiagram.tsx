import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    mainHeading: '목표에서 결정까지',
    stepLabel: '단계',
    steps: [
      { title: 'User Goal', detail: '누구의 어떤 일을 어떤 조건에서 끝내려 하는가' },
      { title: 'Success Criteria', detail: '대상, 출력, 판정 기준, 측정 방법, 실패 처리를 적는다' },
      { title: 'Test Cases', detail: '정상 · 경계 · 실패 · 정보 부족 사례와 허용 출력을 만든다' },
      { title: 'Measurement', detail: '기준대로 계산한다. 지표마다 분모와 누락값 정책을 둔다' },
      { title: 'Decision', detail: '구현 · 수정 · 보류를 정한다' },
    ],
    backHeading: '되돌아가는 길',
    atLabel: '시점',
    pathLabel: '경로',
    back: [
      {
        title: '기준을 만족하지 못함',
        at: '4단계 측정',
        path: '실패한 조건이 가리키는 곳(입력, 지시문, 검색, 검증, 모델 구성, 예산)을 수정한 뒤 3단계 사례를 다시 실행합니다',
      },
      {
        title: '기준이 모호하거나 사례가 목표를 대표하지 못함',
        at: '4단계 측정 이후',
        path: '2단계 기준이나 3단계 사례로 돌아가 고칩니다. 기준을 바꿀 때는 기준 버전을 올려 이전 결과와 섞지 않습니다',
      },
    ],
  },
  en: {
    mainHeading: 'From goal to decision',
    stepLabel: 'Step',
    steps: [
      { title: 'User Goal', detail: 'Whose task, finished under what conditions' },
      {
        title: 'Success Criteria',
        detail: 'Write target, output, judging criteria, measurement, and failure handling',
      },
      {
        title: 'Test Cases',
        detail:
          'Build normal, boundary, failure, and insufficient-information cases with allowed outputs',
      },
      {
        title: 'Measurement',
        detail:
          'Compute per the criteria. Give each metric a denominator and a missing-value policy',
      },
      { title: 'Decision', detail: 'Decide to build, revise, or hold' },
    ],
    backHeading: 'Paths that loop back',
    atLabel: 'When',
    pathLabel: 'Path',
    back: [
      {
        title: 'The criteria are not met',
        at: 'Step 4, measurement',
        path: 'Fix what the failed condition points to (input, instruction, retrieval, validation, model setup, budget), then rerun the step 3 cases',
      },
      {
        title: 'The criteria are vague or the cases do not represent the goal',
        at: 'After step 4, measurement',
        path: 'Go back to the step 2 criteria or step 3 cases and fix them. When you change criteria, bump the criteria version so results are not mixed with earlier ones',
      },
    ],
  },
};

/** 목표에서 결정까지의 흐름과 기준 미충족 시 되돌아가는 두 경로. 정적 서버 컴포넌트다. */
export const CriteriaLoopDiagram = ({ locale }: { locale: Locale }) => {
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
