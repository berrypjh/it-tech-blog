import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { SliderDemo } from '../demos/SliderDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '교육용 설정입니다. 값은 25%에서 시작합니다. 결과를 먼저 예상한 뒤 조작하고 관찰 값과 견주어 보세요.',
    steps: [
      'Slider에 초점을 두고 오른쪽 화살표를 한 번 눌러 30%가 되는지 봅니다.',
      'End를 눌러 100%로 간 뒤 오른쪽 화살표를 여러 번 눌러 값과 화면의 글자가 그대로인지 봅니다.',
      '“5 줄이기”를 눌러 95%가 되는지, slider의 값도 함께 바뀌는지 확인합니다.',
      '“0%로 맞추기”를 누른 뒤 “5 줄이기”를 다시 눌러 값이 그대로인지 봅니다.',
    ],
  },
  en: {
    intro:
      'This is a teaching setting. The value starts at 25%. Predict each result first, then operate and compare with the observed values.',
    steps: [
      'Focus the slider and press the right arrow once to see it become 30%.',
      'Press End to go to 100%, then press the right arrow several times and check that the value and the text on screen stay the same.',
      'Press “Decrease by 5” and check that it becomes 95% and that the slider’s value changes with it.',
      'Press “Set to 0%”, then press “Decrease by 5” again and see the value stay.',
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
      <SliderDemo />
    </section>
  );
};
