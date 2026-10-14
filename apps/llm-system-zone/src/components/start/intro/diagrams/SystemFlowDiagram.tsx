import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    main: [
      {
        title: '사용자',
        gist: '요청을 시작',
        output: '요청 텍스트',
        owner: '사용자',
      },
      {
        title: '앱',
        gist: '입력 확인 · context 구성',
        output: '모델에 보낼 입력',
        owner: '앱',
      },
      {
        title: '모델',
        gist: '응답 생성',
        output: '결과 텍스트',
        owner: '모델 (추론 API 경유)',
      },
      {
        title: '검증',
        gist: '형식 · 규칙 확인',
        output: '통과 또는 실패 판정과 이유',
        owner: '앱',
      },
      {
        title: '조건부 실행',
        gist: '통과했고 필요할 때만',
        output: '허용된 동작 하나의 결과',
        owner: '앱의 실행 계층',
      },
      {
        title: '결과',
        gist: '사용자에게 상태 표시',
        output: '사용자에게 보이는 상태',
        owner: '앱',
      },
    ],
    stepLabel: '단계',
    outputLabel: '출력',
    ownerLabel: '책임',
    mainHeading: '주 흐름 (요청이 지나는 순서)',
    branchHeading: '분기 (실행하지 않는 경로도 정상 흐름입니다)',
    atLabel: '분기점',
    pathLabel: '경로',
    branches: [
      {
        title: '검증 실패',
        at: '4단계 검증',
        path: '5단계 없이 보류하거나 수정을 요청. 이유는 6단계에 표시',
      },
      {
        title: '사용자 확인 거절',
        at: '5단계 실행 직전',
        path: '실행 없이 보류. 이유는 6단계에 표시',
      },
    ],
    auxHeading: '보조 관계 (필요할 때만, 요청의 직렬 단계가 아님)',
    aux: [
      { title: 'Retrieval', detail: '앱이 모델 호출 전에 근거를 찾아 context에 넣습니다.' },
      { title: 'Tools', detail: '모델이 요청할 수 있지만 호출은 앱의 실행 계층이 합니다.' },
      {
        title: 'Evaluation',
        detail: '사례 집합으로 품질을 측정합니다. 요청 경로 밖에서 반복합니다.',
      },
    ],
  },
  en: {
    main: [
      {
        title: 'User',
        gist: 'Starts the request',
        output: 'Request text',
        owner: 'User',
      },
      {
        title: 'App',
        gist: 'Checks input, builds context',
        output: 'Input for the model',
        owner: 'App',
      },
      {
        title: 'Model',
        gist: 'Generates the response',
        output: 'Result text',
        owner: 'Model (via the inference API)',
      },
      {
        title: 'Validation',
        gist: 'Checks format and rules',
        output: 'Pass or fail verdict and reason',
        owner: 'App',
      },
      {
        title: 'Conditional action',
        gist: 'Only if it passed and is needed',
        output: 'Result of one allowed action',
        owner: 'App execution layer',
      },
      {
        title: 'Result',
        gist: 'Shows the state to the user',
        output: 'State shown to the user',
        owner: 'App',
      },
    ],
    stepLabel: 'STEP',
    outputLabel: 'Output',
    ownerLabel: 'Responsible',
    mainHeading: 'Main flow (the order a request passes through)',
    branchHeading: 'Branches (paths that do not execute are normal flow too)',
    atLabel: 'At',
    pathLabel: 'Then',
    branches: [
      {
        title: 'Validation fails',
        at: 'Step 4, validation',
        path: 'Holds or asks for a revision without step 5. Reason shown in step 6',
      },
      {
        title: 'User confirmation rejected',
        at: 'Right before step 5',
        path: 'Holds without executing. Reason shown in step 6',
      },
    ],
    auxHeading: 'Supporting relations (only when needed, not serial steps of a request)',
    aux: [
      {
        title: 'Retrieval',
        detail: 'The app finds evidence before the model call and puts it into the context.',
      },
      {
        title: 'Tools',
        detail: 'The model may request one, but the app execution layer makes the call.',
      },
      {
        title: 'Evaluation',
        detail: 'Measures quality on a set of cases, repeated outside the request path.',
      },
    ],
  },
};

/** 사용자 요청이 검증과 조건부 실행을 거쳐 결과가 되는 흐름. 정적 서버 컴포넌트다. */
export const SystemFlowDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.mainHeading}</p>
      <List ordered className="grid grid-cols-1 gap-sm sm:grid-cols-3">
        {c.main.map((step, i) => (
          <ListItem
            key={step.title}
            className="flex flex-col gap-2xs rounded-md border border-stroke-light bg-background-surface p-md"
          >
            <span className="flex items-center justify-between text-xxsm font-semiBold tracking-xsm text-text-primary">
              {c.stepLabel} {i + 1}
              {i < c.main.length - 1 && <ArrowRight className="h-3 w-3" aria-hidden="true" />}
            </span>
            <span className="text-xsm font-semiBold text-text-default">{step.title}</span>
            <span className="text-xxsm text-text-light">{step.gist}</span>
            <dl className="mt-sm grid grow grid-cols-[2.5rem_1fr] content-start gap-x-sm gap-y-xs border-t border-stroke-light pt-sm text-xxsm">
              <dt className="text-text-light">{c.outputLabel}</dt>
              <dd className="break-keep text-text-default">{step.output}</dd>
            </dl>
            <p className="mt-xs flex gap-sm text-xxsm">
              <span className="w-10 shrink-0 text-text-light">{c.ownerLabel}</span>
              <span className="break-keep font-semiBold text-text-primary">{step.owner}</span>
            </p>
          </ListItem>
        ))}
      </List>

      <p className="mb-sm mt-lg text-xxsm font-semiBold text-text-light">{c.branchHeading}</p>
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-2">
        {c.branches.map((item) => (
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

      <p className="mb-sm mt-lg text-xxsm font-semiBold text-text-light">{c.auxHeading}</p>
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-3">
        {c.aux.map((item) => (
          <ListItem
            key={item.title}
            className="flex flex-col gap-2xs rounded-md border border-dashed border-stroke-default p-md"
          >
            <span className="text-xsm font-semiBold text-text-default">{item.title}</span>
            <span className="text-xxsm text-text-light">{item.detail}</span>
          </ListItem>
        ))}
      </List>
    </figure>
  );
};
