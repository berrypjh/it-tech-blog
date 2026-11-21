import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { CoveredFormDemo } from '../demos/CoveredFormDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      실습 폼은 이 상자 안에서만 스크롤합니다. 처음에는 scroll-padding을 적용한 상태입니다. 수정안을
      바꾸고 Tab으로 입력 칸을 지나가며 가려진 면적을 비교합니다.
    </>
  ),
  en: (
    <>
      The exercise form scrolls only inside its box. It starts with scroll-padding applied. Change
      the fix, Tab through the inputs, and compare the area hidden.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <CoveredFormDemo />
    </section>
  );
};
