import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ResponseCheckMatrix } from '../diagrams/ResponseCheckMatrix';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01-01에서 모델 출력은 검증을 거쳐야 실행으로 넘어간다고 했습니다. 이 장은 그 검증이 일반 소프트웨어의 검사와 어떻게 달라야 하는지 다룹니다.',
    setup:
      '모델이 오류 없이 응답을 돌려줘도 그 내용은 틀릴 수 있고, 앱은 오류 신호만으로는 이를 알 수 없습니다. 아래 표는 세 경우가 앱의 검사를 어디까지 통과하는지 보여 줍니다.',
    after:
      '첫 번째 응답은 앱이 코드로 검사하는 세 단계를 모두 통과하지만 내용은 틀렸습니다. 두 번째는 표현이 달라도 정답이므로 문제가 아닙니다. 오류 신호가 있는 것은 세 번째뿐이라 일반 예외 처리는 그것만 잡습니다. HTTP 200은 요청이 처리되었다는 뜻이지 내용이 맞다는 뜻이 아닙니다.',
  },
  en: {
    intro:
      'In 01-01 we said model output must pass validation before moving on to execution. This chapter covers how that validation has to differ from checks in regular software.',
    setup:
      'A model can return a response without an error and still be wrong in content, and the app cannot tell from error signals alone. The table below shows how far each of three cases gets through the app’s checks.',
    after:
      'The first response passes all three checks the app runs in code, yet its content is wrong. The second is right despite different wording, so it is not a problem. Only the third carries an error signal, so ordinary exception handling catches only that one. HTTP 200 means the request was processed, not that the content is right.',
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
      <ResponseCheckMatrix locale={locale} />
      <p>{c.after}</p>
    </section>
  );
};
