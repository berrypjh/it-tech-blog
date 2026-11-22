import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        분수가 화면에 바르게 그려졌다는 것은 브라우저가 MathML을 그렸다는 뜻일 뿐입니다. 화면
        낭독기가 수식을 어떻게 읽는지, 분자와 분모로 옮겨 다닐 수 있는지, 점자 정보 단말기에 수학
        점자로 나오는지는 각각 다른 프로그램과 설정이 정합니다.
      </>
    ),
    caption: '수식에서 따로 확인할 것',
    head: ['확인할 것', '어디서', '이 페이지에서의 판정'],
    rows: [
      ['화면 표시', '이 브라우저 화면', '직접 보고 적음 (브라우저 이름 · 판 함께)'],
      ['DOM 구조', '실습의 DOM 읽기 · 개발자 도구', '실습에서 확인 가능'],
      ['낭독', '실제 화면 낭독기', '미확인 — 사람과 환경 기록이 있을 때만 확인'],
      ['구조 탐색', '화면 낭독기의 수식 탐색 기능', '미확인'],
      ['점자 출력', '점자 정보 단말기와 수학 점자 설정', '미확인'],
    ],
    after: (
      <>
        그래서 수식에는 MathML과 함께 문장 대안을 둡니다. 문장 대안은 수식을 지원하지 않는
        환경에서도 관계를 전하지만, MathML의 구조 탐색을 대신하지는 못합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A fraction drawn correctly on screen only means the browser rendered the MathML. How a
        screen reader speaks it, whether you can move between numerator and denominator, and whether
        a braille display shows math braille are each decided by other programs and settings.
      </>
    ),
    caption: 'What to check separately for math',
    head: ['Check', 'Where', 'Verdict on this page'],
    rows: [
      [
        'Screen display',
        'This browser’s screen',
        'Look and record it (with browser name and version)',
      ],
      ['DOM structure', 'The exercise’s DOM reading and devtools', 'Checkable in the exercise'],
      [
        'Speech',
        'A real screen reader',
        'Unconfirmed: only confirmed with a record of person and environment',
      ],
      ['Structural navigation', 'The screen reader’s math navigation', 'Unconfirmed'],
      ['Braille output', 'A braille display with math braille settings', 'Unconfirmed'],
    ],
    after: (
      <>
        So math gets a sentence alternative next to the MathML. The sentence carries the
        relationship where math is not supported, but it does not replace MathML’s structural
        navigation.
      </>
    ),
  },
};

export const OutputSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.output.id}>
      <DocH2 {...toc.output} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
