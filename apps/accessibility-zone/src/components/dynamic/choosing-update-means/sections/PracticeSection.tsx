import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ChooseMeansDemo } from '../demos/ChooseMeansDemo';
import { getToc } from '../toc';

const content = {
  ko: '“자막”으로 검색하면 목록이 바뀌고 “3건 찾음”이 생깁니다. 포커스는 입력에 남습니다. 새 작업을 시작하면 포커스가 새 제목으로 옮겨 갑니다. 관찰한 값을 보고 장면마다 수단을 고릅니다.',
  en: 'Search for “caption” and the list changes and “3 found” appears while focus stays in the input. Start a new task and focus moves to the new heading. Use the observed values to choose the means for each scene.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <ChooseMeansDemo />
    </section>
  );
};
