import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { TextSpacingDemo } from '../demos/TextSpacingDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      간격은 아래 데모 영역에만 적용되고, 문서의 나머지는 바뀌지 않습니다. 처음에는 유연한 배치로
      시작합니다. 문구와 간격을 바꾼 뒤 고정 배치와 비교하고, 끝나면 되돌립니다.
    </>
  ),
  en: (
    <>
      Spacing applies only to the demo area below; the rest of the document does not change. It
      starts with the flexible layout. Change the strings and spacing, compare with the rigid
      layout, and restore it when finished.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <TextSpacingDemo />
    </section>
  );
};
