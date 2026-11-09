import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ImplementationCards } from '../diagrams/ImplementationCards';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01.1의 흐름에서 모델이 맡은 일은 하나였습니다. "VPN이 연결되지 않아요" 같은 문의를 받아 담당 큐 이름을 텍스트로 제안하는 일입니다. 그 모델은 어떤 종류였을까요? 현장에서는 "우리 기능은 AI인가요, LLM인가요?"처럼 하나의 답을 기대하는 질문이 나옵니다. 그러나 같은 "담당 큐 정하기"도 아래처럼 아주 다르게 만들 수 있어서, 이 질문은 그대로 답할 수 없습니다.',
    after:
      '질문을 답할 수 있게 바꾸면 "무엇을 기준으로 나누는가"가 됩니다. 이 페이지는 세 기준을 나눕니다. 접근이 어느 기술 범주에 속하는지, 모델이 무엇을 생성하고 어떻게 다시 쓰이는지, 그리고 무엇을 정답 삼아 학습했는지입니다.',
  },
  en: {
    intro:
      'In the 01.1 flow the model had one job: take a request such as "My VPN won’t connect" and suggest a queue name as text. What kind of model was it? In the field you hear questions like "Is our feature AI, or an LLM?" that expect a single answer. But the same "pick the queue" job can be built in very different ways, as below, so the question cannot be answered as asked.',
    after:
      'Rephrased so it can be answered, the question becomes "by which criterion do we split?". This page separates three: which technology category the approach belongs to, what the model generates and how it is reused, and what it learned to treat as the answer.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <ImplementationCards locale={locale} />
      <p>{c.after}</p>
    </section>
  );
};
