import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { RowFocusDemo } from '../demos/RowFocusDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      위 규칙을 그대로 구현한 목록입니다. 복구를 끈 결함 상태와 번갈아 보면서, 같은 조작 뒤{' '}
      <code>document.activeElement</code>가 어디에 있는지 비교합니다.
    </>
  ),
  en: (
    <>
      This list implements the rules above. Switch between it and the defect state with recovery
      turned off, and compare where <code>document.activeElement</code> is after the same action.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <RowFocusDemo />
    </section>
  );
};
