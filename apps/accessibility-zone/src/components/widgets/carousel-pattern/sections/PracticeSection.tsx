import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { CarouselDemo } from '../demos/CarouselDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '가상의 행사 안내 세 개입니다. 자동 넘김은 4초마다 넘어갑니다. 결과를 먼저 예상한 뒤 조작하고 관찰 값과 견주어 보세요.',
    steps: [
      '“다음 안내”를 눌러 둘째 안내로 가고, 초점이 그 버튼에 그대로인지 봅니다.',
      'Tab으로 지나가며 숨은 안내의 세부 설명에 닿지 않는지 확인합니다.',
      '“자동 넘김 시작”을 누르고 안내가 넘어가는지, 그동안 aria-live가 off인지 봅니다.',
      'Tab으로 “이전 안내”에 가서 넘김이 멈추는지 확인하고, 기다려도 다시 시작하지 않는지 봅니다.',
      '마지막 안내에서 “다음 안내”를 눌러 처음으로 돌아가는지 확인합니다.',
      '안내의 개수를 “한 개”와 “없음”으로 바꿔 남는 조작을 확인합니다.',
    ],
  },
  en: {
    intro:
      'These are three fictional event guides. Rotation moves every 4 seconds. Predict each result first, then operate and compare with the observed values.',
    steps: [
      'Press “Next guide” to go to the second guide and see focus stay on that button.',
      'Tab through and check that you do not reach the details of a hidden guide.',
      'Press “Start automatic rotation” and see the guide move on, with aria-live off meanwhile.',
      'Tab to “Previous guide” and check that rotation stops and does not restart however long you wait.',
      'On the last guide, press “Next guide” and check that it returns to the first.',
      'Change the number of guides to “One” and “None” and check which controls remain.',
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
      <CarouselDemo />
    </section>
  );
};
