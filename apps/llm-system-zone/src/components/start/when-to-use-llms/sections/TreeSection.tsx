import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { TaskDecisionTree } from '../diagrams/TaskDecisionTree';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '질문은 기능 전체가 아니라 작업 하나마다 던집니다. 위에서 아래로 따라가며, 한 작업이 여러 갈래에 걸리면 조합으로 설계합니다.',
  },
  en: {
    intro:
      'Ask these questions per task, not for the whole feature. Follow them top to bottom, and when one task spans several branches, design a combination.',
  },
};

export const TreeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.tree.id}>
      <DocH2 {...toc.tree} />
      <p>{content[locale].intro}</p>
      <TaskDecisionTree locale={locale} />
    </section>
  );
};
