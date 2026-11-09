import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { CriteriaCards } from '../diagrams/CriteriaCards';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '방식을 고를 때 확인하는 일곱 기준입니다. 어느 기준도 단독으로 답을 정하지 않으며, 기준끼리 부딪히면 그 충돌을 드러내고 설계로 풉니다. 각 기준은 비LLM Baseline을 무엇으로 둘지, 언제 LLM 도입을 보류할지에 영향을 줍니다.',
  },
  en: {
    intro:
      'These are the seven criteria to check when choosing an approach. No single criterion decides the answer, and when criteria collide you surface the conflict and resolve it by design. Each one bears on what the non-LLM baseline is and when to hold off on an LLM.',
  },
};

export const CriteriaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.criteria.id}>
      <DocH2 {...toc.criteria} />
      <p>{c.intro}</p>
      <CriteriaCards locale={locale} />
    </section>
  );
};
