import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MlVsLlmConditions } from '../diagrams/MlVsLlmConditions';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '조건이 맞으면 기존 ML 분류기도 후보에 올라야 합니다. 어느 조건에서 무엇이 맞는지 나눠 봅니다.',
    after:
      '어느 쪽이 낫다고 단정하지 않고, 같은 평가 데이터로 규칙 baseline(가장 단순한 기준 방식), ML, LLM을 비교하며 품질과 함께 비용, 지연, 유지보수 부담을 봅니다.',
  },
  en: {
    intro:
      'An existing ML classifier should be among the candidates when the conditions fit. Here is which conditions favor which.',
    after:
      'We do not assert which is better: compare a rules baseline (the simplest reference approach), ML, and an LLM on the same evaluation data, and look at cost, latency, and maintenance burden along with quality.',
  },
};

export const MlSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.ml.id}>
      <DocH2 {...toc.ml} />
      <p>{c.intro}</p>
      <MlVsLlmConditions locale={locale} />
      <p>{c.after}</p>
    </section>
  );
};
