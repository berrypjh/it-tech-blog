import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ContrastDemo } from '../demos/ContrastDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      아래 계산기는 WCAG의 대비 공식을 불투명한 <code>#RRGGBB</code> 두 값에 적용합니다. 어떤 기준을
      쓸지는 위 표처럼 사람이 먼저 정합니다. 표시값은 소수 셋째 자리에서 버리고, 통과 여부는 버리기
      전 값으로 판정합니다.
    </>
  ),
  en: (
    <>
      The calculator below applies the WCAG contrast formula to two opaque <code>#RRGGBB</code>{' '}
      values. You decide first which requirement applies, as in the table above. The displayed value
      is cut at two decimal places, and pass or fail uses the value before cutting.
    </>
  ),
};

export const CalculatorSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.calculator.id}>
      <DocH2 {...toc.calculator} />
      <p>{content[locale]}</p>
      <ContrastDemo />
    </section>
  );
};
