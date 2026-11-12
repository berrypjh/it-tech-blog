import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FormStatesDemo } from '../demos/FormStatesDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      실습 폼에는 다섯 속성이 한 칸씩 붙어 있습니다. 포커스가 어디에 머무는지, 어떤 버튼이 제출을
      일으키는지, 제출 데이터에 무엇이 들어가는지는 실제 이벤트와 FormData로 기록합니다. 보조기술에
      전해질 상태는 명세상 예상으로 따로 둡니다.
    </>
  ),
  en: (
    <>
      The practice form has one of the five attributes on each control. Where focus stops, which
      button causes submission, and what goes into the submitted data are recorded from real events
      and FormData. The states expected to reach assistive technology are kept separately as the
      exposure the specs expect.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <FormStatesDemo />
    </section>
  );
};
