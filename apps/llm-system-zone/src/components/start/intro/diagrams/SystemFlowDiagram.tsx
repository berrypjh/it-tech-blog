import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    main: [
      {
        title: '입력',
        gist: '직원이 문의를 적고 앱이 빈 값 · 길이를 확인',
        output: '문의 텍스트와 요청 ID',
        owner: '사용자 · 앱',
      },
      {
        title: '라우팅 제안',
        gist: '담당 큐 이름을 텍스트로 생성',
        output: '큐 이름 텍스트 (제안)',
        owner: '모델 (추론 API 경유)',
      },
      {
        title: '검증',
        gist: '허용된 큐 목록 · 형식 확인',
        output: '통과 또는 실패 판정과 이유',
        owner: '앱',
      },
      {
        title: '업무 시스템 기록',
        gist: '통과했을 때만 티켓 생성 요청',
        output: '접수 ID 또는 거절 응답',
        owner: '앱의 실행 계층 · 티켓 시스템',
      },
      {
        title: '사용자 확인',
        gist: '티켓 시스템이 돌려준 기록을 표시',
        output: '접수 ID와 담당 큐',
        owner: '앱',
      },
    ],
    stepLabel: '단계',
    outputLabel: '출력',
    ownerLabel: '책임',
    mainHeading: '주 흐름 (요청이 지나는 순서)',
    branchHeading: '분기 (기록하지 않는 경로도 정상 흐름입니다)',
    atLabel: '분기점',
    pathLabel: '경로',
    branches: [
      {
        title: '검증 실패',
        at: '3단계 검증',
        path: '4단계 없이 사람이 분류하는 대기열로 보류. 이유는 5단계에 표시',
      },
      {
        title: '기록 거절',
        at: '4단계 티켓 시스템 응답',
        path: '완료로 표시하지 않음. 접수되지 않았다는 사실과 다음 행동을 5단계에 표시',
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
        title: 'Input',
        gist: 'An employee writes the request; the app checks for empty or overlong text',
        output: 'Request text and request ID',
        owner: 'User · App',
      },
      {
        title: 'Routing suggestion',
        gist: 'Generates a queue name as text',
        output: 'Queue name text (a suggestion)',
        owner: 'Model (via the inference API)',
      },
      {
        title: 'Validation',
        gist: 'Checks the allowed queue list and format',
        output: 'Pass or fail verdict and reason',
        owner: 'App',
      },
      {
        title: 'Business system record',
        gist: 'Asks for a ticket only if it passed',
        output: 'Ticket ID or a rejection',
        owner: 'App execution layer · Ticket system',
      },
      {
        title: 'User confirmation',
        gist: 'Shows the record the ticket system returned',
        output: 'Ticket ID and queue',
        owner: 'App',
      },
    ],
    stepLabel: 'STEP',
    outputLabel: 'Output',
    ownerLabel: 'Responsible',
    mainHeading: 'Main flow (the order a request passes through)',
    branchHeading: 'Branches (paths that record nothing are normal flow too)',
    atLabel: 'At',
    pathLabel: 'Then',
    branches: [
      {
        title: 'Validation fails',
        at: 'Step 3, validation',
        path: 'Held for a person to triage, without step 4. Reason shown in step 5',
      },
      {
        title: 'Write rejected',
        at: 'Step 4, ticket system response',
        path: 'Not shown as done. Step 5 says it was not filed and what to do next',
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

/** IT 문의가 라우팅 제안 · 검증 · 티켓 기록을 거쳐 사용자에게 확인되는 흐름. 정적 서버 컴포넌트다. */
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
