import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MathPathsDemo } from '../demos/MathPathsDemo';
import { getToc } from '../toc';

const content = {
  ko: '같은 분수를 세 가지로 표기해 봅니다. 화면 모양보다 DOM에 남은 구조를 봅니다.',
  en: 'Write the same fraction three ways. Look at the structure left in the DOM rather than the look on screen.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <MathPathsDemo />
    </section>
  );
};
