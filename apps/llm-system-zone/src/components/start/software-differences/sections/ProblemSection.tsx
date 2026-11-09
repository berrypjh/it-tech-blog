import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const response = '{"queue": "network", "evidence": "LOG-9999"}';

const content = {
  ko: {
    intro:
      '01.2에서 01.1의 라우팅 모델은 원문으로 다음 토큰을 학습한 LLM이라고 정리했습니다. 그 모델이 내놓는 큐 제안은 확률적으로 생성된 텍스트입니다. 이 페이지는 그 텍스트를 받는 앱이 무엇을 결정적으로 확인해야 하는지 다룹니다.',
    setup:
      '아래 응답은 오류 없이 도착했고(HTTP 200) JSON으로도 깔끔하게 읽힙니다. 그런데 근거로 인용한 로그 LOG-9999는 이 요청의 기록에 없습니다.',
    label: '가상 응답 · HTTP 200',
    after:
      '일반 예외 처리는 이 응답을 잡지 못합니다. 오류 신호가 없기 때문입니다. 그래서 앱은 응답이 도착했다는 사실과 별개로 모양, 근거, 업무 규칙, 권한을 하나씩 확인하는 계약을 둡니다. HTTP 200은 요청이 처리되었다는 뜻이지 내용이 맞다는 뜻이 아닙니다.',
  },
  en: {
    intro:
      'In 01.2 we found that the routing model from 01.1 is an LLM that learned next tokens from raw text. The queue suggestion it puts out is text generated probabilistically. This page covers what the app receiving that text has to check deterministically.',
    setup:
      'The response below arrived without an error (HTTP 200) and reads cleanly as JSON. But the log it cites as evidence, LOG-9999, is not in this request’s records.',
    label: 'Fictional response · HTTP 200',
    after:
      'Ordinary exception handling does not catch this response, because there is no error signal. So, apart from the fact that a response arrived, the app keeps a contract that checks shape, evidence, business rules, and permission one by one. HTTP 200 means the request was processed, not that the content is right.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <p>{c.setup}</p>
      <div className="my-lg">
        <CodeBlock tone="bad" label={c.label} code={response} />
      </div>
      <p>{c.after}</p>
    </section>
  );
};
