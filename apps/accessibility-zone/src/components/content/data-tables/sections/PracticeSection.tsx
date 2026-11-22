import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { LayeredTableDemo } from '../demos/LayeredTableDemo';
import { getToc } from '../toc';

const content = {
  ko: '같은 일정을 요일 · 홀 두 층 헤더로 만든 표입니다. 칸마다 headers가 요일 · 홀 · 회차의 th를 가리킵니다. 페이지는 그 연결을 실제 DOM에서 따라가 검증합니다.',
  en: 'The same schedule as a table with two header layers, day and hall. Each cell’s headers point to the th elements for day, hall, and session. The page follows those connections in the real DOM to verify them.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <LayeredTableDemo />
    </section>
  );
};
