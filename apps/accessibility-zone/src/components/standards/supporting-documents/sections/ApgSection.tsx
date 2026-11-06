import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: (
    <>
      ARIA Authoring Practices Guide(APG)는 여러 명세의 요구를 묶어 위젯 패턴과 키보드 상호작용으로
      안내합니다. APG 소개 문서는 APG가 규범 요구를 정하지 않아 적합성 모델이 없고, 예제는 개념을
      익히기 위한 것이지 완성된 제품 코드가 아니라고 적습니다. 그래서 APG 패턴을 따랐다는 것은
      적합성 근거가 아니고, 패턴을 쓴 뒤에도 실제 브라우저와 보조기술에서{' '}
      <PageLink locale="ko" id="screen-reader-start" />
      처럼 확인해야 합니다.
    </>
  ),
  en: (
    <>
      The ARIA Authoring Practices Guide (APG) combines requirements from several specs into widget
      patterns and keyboard interaction guidance. Its introduction says the APG does not specify
      normative requirements and has no conformance model, and that its examples are for learning
      the concepts, not production-ready code. So following an APG pattern is not a basis for
      conformance, and after using a pattern you still check it in real browsers and assistive
      technology, as in <PageLink locale="en" id="screen-reader-start" />.
    </>
  ),
};

export const ApgSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.apg.id}>
      <DocH2 {...toc.apg} />
      <p>{content[locale]}</p>
    </section>
  );
};
