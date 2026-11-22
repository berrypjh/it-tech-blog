import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { SplitterDemo } from '../demos/SplitterDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '안내 목록은 전체 너비의 40%에서 시작합니다. 결과를 먼저 예상한 뒤 조작하고, 값과 측정한 너비를 견주어 보세요.',
    steps: [
      '경계에 Tab으로 초점을 두고 오른쪽 화살표를 두 번 눌러 50이 되는지 봅니다.',
      '“안내 목록 5 줄이기”를 두 번 눌러 40으로 돌아오는지, 측정한 너비도 같이 바뀌는지 확인합니다.',
      '경계에서 Enter를 눌러 접고, 안내 목록의 내용이 감춰지는지 봅니다. 다시 Enter를 눌러 복원합니다.',
      '접기와 복원을 여러 번 되풀이해 같은 위치로 돌아오는지 확인합니다.',
      'Home과 End로 양 끝에 간 뒤 같은 방향 화살표를 더 눌러 값이 그대로인지 봅니다.',
      '화면을 좁히거나 글자를 키운 뒤에도 두 영역의 내용을 스크롤해 읽을 수 있는지 확인합니다.',
    ],
  },
  en: {
    intro:
      'The guide list starts at 40% of the whole width. Predict each result first, then operate and compare the value with the measured width.',
    steps: [
      'Tab to the boundary and press the right arrow twice to see it become 50.',
      'Press “Decrease guide list by 5” twice and check that it returns to 40 and that the measured width changes with it.',
      'Press Enter on the boundary to collapse, and see the guide list content hidden. Press Enter again to restore.',
      'Repeat collapse and restore several times and check that it returns to the same position.',
      'Go to both ends with Home and End, then press the arrow in the same direction and see the value stay.',
      'Narrow the screen or enlarge the text and check that the content of both panes can still be scrolled and read.',
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
      <SplitterDemo />
    </section>
  );
};
