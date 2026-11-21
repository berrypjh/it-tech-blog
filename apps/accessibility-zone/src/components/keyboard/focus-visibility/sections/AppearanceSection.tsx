import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { IndicatorDemo } from '../demos/IndicatorDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      실습의 두 버튼은 같은 페이지에 있지만 표시가 다릅니다. 둘째 버튼만 그 요소의 인라인 스타일로
      색과 두께를 바꿨고, 페이지의 전역 포커스 표시는 그대로입니다. Tab으로 가면서 눈으로 먼저 찾고,
      아래 값을 봅니다.
    </>
  ),
  en: (
    <>
      The two buttons in the exercise share a page but have different indicators. Only the second
      changes its color and thickness, through that element&apos;s inline style; the page&apos;s
      global focus indicator stays as it is. Tab to them, look for the indicator first, then read
      the values below.
    </>
  ),
};

export const AppearanceSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.appearance.id}>
      <DocH2 {...toc.appearance} />
      <p>{content[locale]}</p>
      <IndicatorDemo />
    </section>
  );
};
