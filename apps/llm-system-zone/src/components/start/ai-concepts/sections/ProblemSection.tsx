import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ImplementationCards } from '../diagrams/ImplementationCards';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '앞 장이 모델 출력을 어떻게 믿을지 다뤘다면, 이 장은 그 모델과 기능을 가리키는 용어를 정리합니다. 01-01에서 앱이 텍스트를 넣고 텍스트를 받는 대규모 언어 모델을 LLM이라고 불렀습니다. 그런데 현장에서는 "우리 기능은 AI인가요, LLM인가요?" 같은 질문이 하나의 답을 기대하며 나옵니다. 같은 이름 아래 아주 다른 구현이 있기 때문에 이 질문은 그대로 답할 수 없습니다.',
    after:
      '질문을 답할 수 있게 바꾸면 "무엇을 기준으로 나누는가"가 됩니다. 이 장은 그 기준들을 하나씩 분리합니다.',
  },
  en: {
    intro:
      'The previous chapter covered how far to trust model output; this chapter sorts out the terms that name the model and the feature. In 01-01 we called a large language model that an app feeds text and reads text from an LLM. In the field, though, questions like "Is our feature AI, or an LLM?" arrive expecting a single answer. Very different implementations sit under the same name, so the question cannot be answered as asked.',
    after:
      'Rephrased so it can be answered, the question becomes "by which criterion do we split?". This chapter separates those criteria one by one.',
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
