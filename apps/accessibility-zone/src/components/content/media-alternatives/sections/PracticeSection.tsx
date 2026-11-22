import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ClassifyDemo } from '../demos/ClassifyDemo';
import { getToc } from '../toc';

const content = {
  ko: '위 표를 다시 보지 않고 먼저 골라 봅니다. 기준은 “이 정보가 없으면 과업을 마칠 수 있는가”입니다.',
  en: 'Choose before looking back at the table. The test is whether the task can be finished without this information.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <ClassifyDemo />
    </section>
  );
};
