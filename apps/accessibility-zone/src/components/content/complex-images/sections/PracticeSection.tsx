import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FindMatrixDemo } from '../demos/FindMatrixDemo';
import { getToc } from '../toc';

const content = {
  ko: '같은 세 질문을 차트 · 요약 · 표에서 각각 풀어 봅니다. 기록은 이 화면에만 있고 어디에도 보내지 않습니다.',
  en: 'Answer the same three questions from the chart, the summary, and the table. Your record stays on this screen and is sent nowhere.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <FindMatrixDemo />
    </section>
  );
};
