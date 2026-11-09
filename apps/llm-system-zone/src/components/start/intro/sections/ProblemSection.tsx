import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { ResponseVsTaskList } from '../diagrams/ResponseVsTaskList';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01장의 공통 예시는 가상의 사내 IT 문의 접수입니다. 직원이 "VPN이 연결되지 않아요"라고 적으면 담당 큐(문의를 맡는 팀의 대기열)를 정해 티켓 시스템에 기록합니다. LLM 기능을 붙이면 모델이 응답을 돌려주는 순간 일이 끝난 것처럼 보입니다. 아래 세 경우에서 모델 호출은 모두 오류 없이 끝났습니다.',
    after:
      '세 경우 모두 모델 호출 자체에는 오류 신호가 없습니다. 제안이 맞는지 확인하고, 티켓 시스템에 기록하고, 기록이 실제로 남았는지 확인하는 일은 모델이 아니라 모델 바깥의 앱이 맡습니다. 이 페이지는 그 구성 요소와 책임을 나눕니다.',
    fictional: '01장의 문의 · 큐 · 접수 ID · 로그는 모두 가상의 교육 예시입니다.',
    keyTitle: '핵심 명제',
    key: '모델이 응답을 생성하는 것과 사용자의 업무가 완료되는 것은 다릅니다. 업무 완료는 모델 바깥의 앱이 업무 시스템의 기록으로 확인하는 사실입니다.',
  },
  en: {
    intro:
      'Chapter 01’s running example is filing a fictional internal IT request. An employee writes "My VPN won’t connect", and the request is assigned a support queue (the waiting line of the team that handles it) and recorded in the ticket system. Once you add an LLM feature, the work seems finished the moment the model returns a response. In the three cases below, the model call ended without an error every time.',
    after:
      'In all three cases the model call itself shows no error. Checking whether the suggestion is right, recording it in the ticket system, and confirming the record actually exists is the job of the app outside the model. This page divides those components and responsibilities.',
    fictional:
      'Every request, queue, ticket ID, and log in chapter 01 is a fictional teaching example.',
    keyTitle: 'Key claim',
    key: 'A model generating a response and a user’s task being finished are different things. Task completion is a fact the app, outside the model, confirms from the business system’s record.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <p className="text-xxsm text-text-light">{c.fictional}</p>
      <ResponseVsTaskList locale={locale} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.keyTitle}>
        <p>{c.key}</p>
      </Callout>
    </section>
  );
};
