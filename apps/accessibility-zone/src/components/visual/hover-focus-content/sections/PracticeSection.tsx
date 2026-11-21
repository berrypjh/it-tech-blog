import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { HelpTipDemo } from '../demos/HelpTipDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      고친 도움말을 마우스 · Tab · 터치로 열어 봅니다. Escape 처리는 내용이 열려 있는 동안에만
      등록되고 닫히면 사라집니다. 그다음 의도한 결함을 켜고 같은 조작을 비교합니다.
    </>
  ),
  en: (
    <>
      Open the fixed help with mouse, Tab, and touch. Escape handling is registered only while the
      content is open and removed when it closes. Then turn on the intentional defect and compare
      the same actions.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <HelpTipDemo />
    </section>
  );
};
