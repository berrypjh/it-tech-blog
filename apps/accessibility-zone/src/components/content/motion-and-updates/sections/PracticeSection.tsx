import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { AutoUpdateDemo } from '../demos/AutoUpdateDemo';
import { getToc } from '../toc';

const content = {
  ko: '좌석 현황이 정해진 순서로 바뀝니다. 갱신은 직접 시작하고, 언제든 멈추고, 빈도를 고를 수 있습니다. 바뀔 때마다 화면 낭독기가 읽지 않도록 알림 영역을 두지 않았고, 필요할 때 사용자가 값을 읽으러 옵니다.',
  en: 'The seat status changes in a fixed order. You start the update, stop it at any time, and choose its frequency. There is no live region, so a screen reader does not read every change; users come to read the value when they need it.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <AutoUpdateDemo />
    </section>
  );
};
