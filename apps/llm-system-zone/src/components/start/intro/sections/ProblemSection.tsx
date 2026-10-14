import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { ResponseVsTaskList } from '../diagrams/ResponseVsTaskList';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      'LLM 기능을 만들면 모델이 응답을 돌려주는 순간 일이 끝난 것처럼 보입니다. 그러나 응답이 생성되었다는 사실과 사용자의 업무가 끝났다는 사실은 서로 다른 사실입니다. 아래 세 경우에서 모델 호출은 모두 오류 없이 끝났습니다.',
    after:
      '세 경우 모두 오류 신호가 없거나 모델 바깥에서 생깁니다. 응답이 맞는지 확인하고, 저장과 같은 동작을 실행하고, 그 결과를 확인하는 일은 모델이 아니라 모델 바깥의 앱이 맡습니다. 이 장은 그 구성 요소와 책임을 나눕니다.',
    keyTitle: '핵심 명제',
    key: '모델이 응답을 생성하는 것과 사용자의 업무가 완료되는 것은 다릅니다. 업무 완료는 모델 바깥의 앱이 확인하는 사실입니다.',
  },
  en: {
    intro:
      'When you build an LLM feature, the work seems finished the moment the model returns a response. But that a response was generated and that the user’s task is finished are different facts. In the three cases below, the model call ended without an error in every one.',
    after:
      'In all three cases there is no error signal, or the failure arises outside the model. Checking whether the response is right, running an action such as storing, and confirming its result is the job of the app outside the model. This chapter divides those components and responsibilities.',
    keyTitle: 'Key claim',
    key: 'A model generating a response and a user’s task being finished are different things. Task completion is a fact the app, outside the model, has to confirm.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <ResponseVsTaskList locale={locale} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.keyTitle}>
        <p>{c.key}</p>
      </Callout>
    </section>
  );
};
