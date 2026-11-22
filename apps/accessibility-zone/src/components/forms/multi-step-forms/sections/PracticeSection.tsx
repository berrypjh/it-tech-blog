import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { StepsDemo } from '../demos/StepsDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: '익명 행사 신청(가상의 자료)을 두 단계로 나눈 폼입니다.',
    steps: [
      '1단계에서 이름을 넣고 “현장 참석”을 골라 식사 선택이 나타나는지 봅니다.',
      '식사를 고른 뒤 “온라인 참석”으로 바꿔, 칸은 사라지고 기억하는 값은 남는지 확인합니다.',
      '다음을 눌러 2단계의 받는 사람 이름이 채워져 있는지 봅니다.',
      '이전으로 돌아가 값이 남아 있는지 확인하고, 다시 다음으로 갑니다.',
      '이메일을 넣고 신청 내용을 확인해, 보이지 않던 식사 선택이 제출 값에 없는지 봅니다.',
    ],
  },
  en: {
    intro: 'This form splits an anonymous event application (fictional data) into two steps.',
    steps: [
      'In step 1, enter a name and choose “On site” to see the meal choice appear.',
      'Pick a meal, then switch to “Online” and check that the field is gone while the remembered value stays.',
      'Press next and see that the recipient name in step 2 is filled in.',
      'Go back to check the values are still there, then go next again.',
      'Enter an email and check the application to see that the invisible meal choice is not among the submitted values.',
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
      <StepsDemo />
    </section>
  );
};
