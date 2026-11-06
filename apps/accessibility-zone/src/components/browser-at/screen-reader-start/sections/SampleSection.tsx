import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PracticeSample } from '../demos/PracticeSample';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      두 경로 모두 아래 예제 하나로 같은 일곱 과업을 합니다. 예제에는 이름이 있는 영역, 제목,
      입력란, 체크박스, 링크가 하나씩 있습니다.
    </>
  ),
  en: (
    <>
      Both paths do the same seven tasks on the one sample below. It has one named region, a
      heading, a text field, a checkbox, and a link.
    </>
  ),
};

export const SampleSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.sample.id}>
      <DocH2 {...toc.sample} />
      <p>{content[locale]}</p>
      <PracticeSample locale={locale} />
    </section>
  );
};
