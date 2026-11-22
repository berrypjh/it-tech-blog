import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ValidationCompareDemo } from '../demos/ValidationCompareDemo';
import { getToc } from '../toc';

const content = {
  ko: '두 폼에는 같은 잘못된 값 “kim@”이 들어 있습니다. 각각 보내기를 눌러 제출이 멈춘 이유를 비교하고, 값을 비우거나 고쳐서 다시 보내 보세요. 브라우저 말풍선의 문구는 페이지가 읽을 수 있지만, 그것이 실제로 어떻게 보이고 읽히는지는 직접 확인해야 합니다.',
  en: 'Both forms hold the same wrong value “kim@”. Press send on each to compare why submission stopped, then empty or fix the value and send again. The page can read the wording of the browser bubble, but how it actually looks and is spoken has to be checked directly.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <ValidationCompareDemo />
    </section>
  );
};
