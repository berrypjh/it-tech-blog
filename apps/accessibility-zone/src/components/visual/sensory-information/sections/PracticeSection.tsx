import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { StatusTaskDemo } from '../demos/StatusTaskDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      실습은 고친 상태로 시작합니다. 의도한 결함을 켜고 흑백 보기와 세로 배치를 더해, 같은 안내를
      따라 할 수 있는지 비교합니다. 흑백 보기는 색 정보를 뺀 간단한 모형이며 색각 이상의
      시뮬레이션이 아닙니다.
    </>
  ),
  en: (
    <>
      The exercise starts fixed. Turn on the intentional defect, add grayscale and a stacked layout,
      and compare whether the same instructions can be followed. Grayscale is a simple model that
      removes color; it is not a simulation of color vision deficiency.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <StatusTaskDemo />
    </section>
  );
};
