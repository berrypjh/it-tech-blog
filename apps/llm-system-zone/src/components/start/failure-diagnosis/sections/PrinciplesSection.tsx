import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    splitHeading: '모델 실패와 시스템 실패는 구별하되 함께 있을 수 있다',
    split:
      '조사하는 관점에서는 둘을 나눕니다. 모델 실패는 정확한 입력과 context를 받고도 틀린 출력을 낸 경우이고, 시스템 실패는 입력, 검색, context 구성, 도구, 검증, UI 같은 모델 바깥에서 생긴 경우입니다. 이렇게 나누면 어디를 고칠지 정하기 쉽습니다. 그러나 둘은 동시에 있을 수 있습니다. 낡은 문서가 context에 들어간 데다 모델이 그 문서마저 틀리게 요약했다면 두 실패가 겹친 것입니다.',
    successHeading: '성공을 이 세 가지로 판단하지 않는다',
    success: [
      'HTTP 성공: 요청이 처리되었다는 뜻이지 내용이 맞다는 뜻이 아닙니다.',
      '스키마 통과: 구조가 약속과 같다는 뜻이며 의미가 맞다는 뜻이 아닙니다(01.3).',
      '그럴듯한 문장: 유창함은 정확함의 증거가 아닙니다.',
    ],
    successAfter:
      '성공 여부는 정의된 기준으로 확인한 결과로 판단합니다. 그 기준이 아직 비어 있다면 그 공백도 조사 대상입니다. 기준을 정하는 방법은 01.5에서 다뤘습니다.',
  },
  en: {
    splitHeading: 'Model failure and system failure are distinguished, yet can coexist',
    split:
      'For investigation we separate them. A model failure is when the model received accurate input and context yet produced a wrong output; a system failure arises outside the model, in input, retrieval, context construction, tools, validation, or the UI. This tells you where to fix. But the two can exist at once. If a stale document entered the context and the model also summarized even that document wrongly, two failures overlap.',
    successHeading: 'Do not judge success by these three',
    success: [
      'HTTP success: the request was processed, not that the content is right.',
      'Passing the schema: the structure matches the promise, not that the meaning is right (01.3).',
      'A plausible sentence: fluency is not evidence of correctness.',
    ],
    successAfter:
      'Judge success by results checked against defined criteria. If those criteria are still empty, that gap is also something to investigate. We covered how to set those criteria in 01.5.',
  },
};

export const PrinciplesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.principles.id}>
      <DocH2 {...toc.principles} />
      <DocH3>{c.splitHeading}</DocH3>
      <p>{c.split}</p>
      <DocH3>{c.successHeading}</DocH3>
      <ul className="my-lg list-disc pl-xl">
        {c.success.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{c.successAfter}</p>
    </section>
  );
};
