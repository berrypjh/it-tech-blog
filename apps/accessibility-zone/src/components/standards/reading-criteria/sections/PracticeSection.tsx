import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { TargetCaseDemo } from '../demos/TargetCaseDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      아래 네 사례의 관찰값은 이 페이지가 만든 교육 예시입니다. 실제 화면이라면 크기와 거리를 개발자
      도구에서 재고, 잰 환경(창 크기 · 확대 배율)을 함께 적습니다. 같은 컨트롤도 화면 폭에 따라
      다르게 그려질 수 있으므로, 재지 않은 폭은 미확인으로 남깁니다.
    </>
  ),
  en: (
    <>
      The observed values in the four cases below are teaching examples made by this page. On a real
      screen, measure sizes and distances in developer tools and note the environment (window size,
      zoom). The same control can be drawn differently at other widths, so leave widths you did not
      measure as unconfirmed.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <TargetCaseDemo />
    </section>
  );
};
