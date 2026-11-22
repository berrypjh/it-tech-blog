import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { SelectionContractsDemo } from '../demos/SelectionContractsDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '교육용 알림 설정입니다. 아래 순서의 결과를 먼저 예상한 뒤, 키보드로 조작하고 관찰 값과 견주어 보세요. 화면 낭독기가 실제로 무엇을 말하는지는 이 관찰 값이 알려 주지 않습니다.',
    steps: [
      '“댓글”만 고르고 “모든 알림”의 혼합 상태를 봅니다. “모든 알림”을 Space로 눌러 전부 고릅니다.',
      '“알림 빈도”에 Tab으로 들어가 아래 방향키를 누릅니다. 마지막으로 고를 수 있는 항목에서 한 번 더 눌러 어디로 가는지 봅니다.',
      '고른 radio에서 Space를 눌러 선택이 풀리는지 확인합니다.',
      '“방해 금지”와 “알림음 음소거”를 Space로 켜고 끄며 이름이 그대로인지 봅니다.',
    ],
  },
  en: {
    intro:
      'These are teaching notification settings. Predict the result of each step below first, then operate with the keyboard and compare with the observed values. The observed values do not tell you what a screen reader actually says.',
    steps: [
      'Choose only “Comments” and look at the mixed state of “All notifications”. Press Space on “All notifications” to choose everything.',
      'Tab into “Frequency” and press the down arrow. On the last item that can be chosen, press once more and see where it goes.',
      'Press Space on the chosen radio and check whether the choice is cleared.',
      'Turn “Do not disturb” and “Mute notification sound” on and off with Space and check that the names stay the same.',
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
      <SelectionContractsDemo />
    </section>
  );
};
