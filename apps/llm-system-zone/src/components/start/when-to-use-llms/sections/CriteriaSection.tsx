import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { CriteriaCards } from '../diagrams/CriteriaCards';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '작업 하나를 정할 때 확인하는 기준입니다. 어느 기준도 단독으로 답을 정하지 않으며, 기준끼리 부딪히면 그 충돌을 드러내고 설계로 풉니다.',
  },
  en: {
    intro:
      'These are the criteria to check when deciding one task. No single criterion decides the answer, and when criteria collide you surface the conflict and resolve it by design.',
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
