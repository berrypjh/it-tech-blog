import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { SpinbuttonDemo } from '../demos/SpinbuttonDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '익명 행사 신청의 참가 인원(가상의 자료)입니다. 값은 2에서 시작합니다. 결과를 먼저 예상한 뒤 조작하고 관찰 값과 견주어 보세요.',
    steps: [
      '값을 지워 칸을 비우고, 아직 칸 안에 있는 동안 오류가 뜨지 않는지 봅니다.',
      'Tab으로 칸을 떠나 오류 글과 aria-invalid를 확인합니다.',
      '칸으로 돌아가 “3”을 넣고 떠나 오류가 사라지는지 봅니다.',
      '“12”와 “2.5”를 차례로 넣고 떠나, 서로 다른 오류가 나오는지 확인합니다.',
      '틀린 값이 남은 채로 “참가 인원 1 늘리기”를 눌러 가까운 허용 값으로 복구되는지 봅니다.',
      '8이 될 때까지 늘린 뒤 한 번 더 눌러 값이 그대로인지 확인합니다.',
    ],
  },
  en: {
    intro:
      'This is the number of people for an anonymous event application (fictional data). The value starts at 2. Predict each result first, then operate and compare with the observed values.',
    steps: [
      'Delete the value to empty the field, and see that no error appears while you are still in it.',
      'Leave the field with Tab and check the error text and aria-invalid.',
      'Go back, enter “3”, and leave to see the error disappear.',
      'Enter “12” and then “2.5”, leaving each time, and check that different errors appear.',
      'With a wrong value still there, press “Increase number of people by 1” and see it recover to a nearby allowed value.',
      'Increase until it is 8, then press once more and check that the value stays.',
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
      <SpinbuttonDemo />
    </section>
  );
};
