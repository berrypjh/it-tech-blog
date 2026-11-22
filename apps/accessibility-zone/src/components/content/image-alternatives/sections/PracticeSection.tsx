import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { AltChoiceDemo } from '../demos/AltChoiceDemo';
import { getToc } from '../toc';

const content = {
  ko: '네 자리마다 대체 텍스트를 고르면 아래 예시가 그 값으로 다시 그려지고, 페이지가 실제 img의 alt 속성을 읽어 보여 줍니다. 그다음 확인을 눌러 예제의 의도와 비교합니다.',
  en: 'Choose a text alternative for each place. The example below redraws with that value, and the page reads the real alt attribute of each img. Then press Check to compare with the example’s intent.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <AltChoiceDemo />
    </section>
  );
};
