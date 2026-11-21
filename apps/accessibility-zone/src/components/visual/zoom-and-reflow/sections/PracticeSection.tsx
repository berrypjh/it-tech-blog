import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { ReflowPanelDemo } from '../demos/ReflowPanelDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      이 패널은 폭과 글자 크기를 영역 안에서만 바꾸는 모형입니다. 어떤 코드가 깨지는지 찾는
      용도이고, 이 결과만으로 1.4.4나 1.4.10의 충족을 판정하지 않습니다. 표는 자기 스크롤 영역을
      갖는 2차원 콘텐츠의 예입니다.
    </>
  ),
  en: (
    <>
      This panel is a model that changes width and text size only inside the area. It helps find
      which code breaks; this result alone does not establish 1.4.4 or 1.4.10. The table is an
      example of two-dimensional content with its own scroll area.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <p>{content[locale]}</p>
      <ReflowPanelDemo />
    </section>
  );
};
