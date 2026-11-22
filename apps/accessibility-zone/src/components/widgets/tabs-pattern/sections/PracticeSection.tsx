import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { TabsDemo } from '../demos/TabsDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '같은 내용의 탭 목록 두 개입니다. 패널의 내용은 이미 화면에 있어 지연이 없으므로 두 방식을 그대로 비교할 수 있습니다.',
    steps: [
      '수동 활성화 탭에 Tab으로 들어가 오른쪽 화살표를 누릅니다. 선택된 탭과 패널이 그대로인지 봅니다.',
      'Enter를 눌러 선택이 초점을 따라오는지 확인합니다.',
      'End, 오른쪽 화살표, Home을 차례로 눌러 끝에서 어디로 가는지 봅니다.',
      'Tab을 눌러 탭 목록을 나가고, Shift+Tab으로 돌아와 어느 탭에 닿는지 봅니다.',
      '자동 활성화 탭에서 같은 순서를 되풀이해 차이를 적습니다.',
      '“탭을 하나만 두기”를 켜고 화살표 · Home · End를 눌러 봅니다.',
    ],
  },
  en: {
    intro:
      'Two tab lists hold the same content. The panel content is already on screen with no delay, so the two modes can be compared as they are.',
    steps: [
      'Tab into the manual tabs and press the right arrow. Check that the selected tab and panel stay the same.',
      'Press Enter and confirm that selection follows focus.',
      'Press End, the right arrow, and Home in turn and see where focus goes at the ends.',
      'Press Tab to leave the tab list, then Shift+Tab to return, and see which tab you land on.',
      'Repeat the same sequence on the automatic tabs and note the difference.',
      'Turn on “Keep only one tab” and press the arrows, Home, and End.',
    ],
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <TabsDemo />
    </section>
  );
};
