import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { AccordionDemo } from '../demos/AccordionDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '가상의 행사 안내입니다. 결과를 먼저 예상한 뒤 키보드로 조작하고 관찰 값과 견주어 보세요.',
    steps: [
      '“환불 기준 보기”를 Enter로 열고 닫습니다. 직접 만든 코드 없이 동작하는지 봅니다.',
      '“하나만 열림”에서 “주차 안내”를 엽니다. 열려 있던 “입장 시간”이 닫히는지 봅니다.',
      'Tab으로 지나가며 닫힌 패널의 “이 안내 닫기” 버튼에 닿지 않는지 확인합니다.',
      '열린 패널의 “이 안내 닫기”를 눌러 초점이 그 제목 버튼으로 돌아오는지 봅니다.',
      '“여러 개 열림”으로 바꿔 두 패널을 함께 열고, 다시 “하나만 열림”으로 바꿔 봅니다.',
    ],
  },
  en: {
    intro:
      'This is a guide for a fictional event. Predict each result first, then operate with the keyboard and compare with the observed values.',
    steps: [
      'Open and close “See the refund policy” with Enter. Notice that it works without any hand-written script.',
      'In “Only one open”, open “Parking”. See whether the open “Entry time” closes.',
      'Tab through and check that you do not reach the “Close this guide” button of a closed panel.',
      'Press “Close this guide” in an open panel and see focus return to its heading button.',
      'Switch to “Several open” and open two panels together, then switch back to “Only one open”.',
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
      <AccordionDemo />
    </section>
  );
};
