import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { LiveRolesDemo } from '../demos/LiveRolesDemo';
import { getToc } from '../toc';

const content = {
  ko: 'status는 같은 요소의 글자가 바뀌고, log는 끝에 항목이 붙으며 오래된 항목이 빠지고, alert는 저장을 시도한 뒤에만 채워집니다. 페이지가 읽는 값은 DOM 관찰이며, 실제로 어떻게 읽히는지는 보조기술에서 따로 확인합니다.',
  en: 'status changes the text of the same element, log adds entries at the end and drops old ones, and alert fills only after you try to save. The values the page reads are DOM observations; how they are actually spoken is checked separately with assistive technology.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <LiveRolesDemo />
    </section>
  );
};
