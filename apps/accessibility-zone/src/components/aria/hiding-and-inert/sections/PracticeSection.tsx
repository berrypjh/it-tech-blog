import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { HidingInertDemo } from '../demos/HidingInertDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        실습은 같은 버튼을 감싼 요소에 다섯 방법을 하나씩 적용합니다. 화면 표시와 포커스 · 클릭은
        페이지가 직접 읽어 보여 주고, 접근성 노출은 읽을 수 없어 명세상 예상으로 따로 둡니다.
      </>
    ),
    caption: '관찰을 적을 때 나누는 칸',
    head: ['칸', '어디서 얻나', '출처'],
    rows: [
      [
        '속성 · 계산된 스타일 · 화면 표시',
        '실습 화면의 관찰 값 또는 Elements 패널',
        <SourceTag key="s" locale="ko" id="dom" />,
      ],
      [
        '포커스 · 클릭이 닿는가',
        '직접 Tab을 누르고 클릭한 결과',
        <SourceTag key="s" locale="ko" id="dom" />,
      ],
      [
        '접근성 트리에 남는가',
        '브라우저 도구의 접근성 트리',
        <SourceTag key="s" locale="ko" id="devtools" />,
      ],
      ['명세가 기대하는 노출', '실습 아래 예상 표', <SourceTag key="s" locale="ko" id="model" />],
    ],
  },
  en: {
    intro: (
      <>
        The exercise applies the five methods one at a time to the wrapper around one button. The
        page reads and shows display, focus, and clicks itself; exposure cannot be read, so the
        exposure the specs expect is kept separately.
      </>
    ),
    caption: 'Columns to keep apart when recording',
    head: ['Column', 'Where it comes from', 'Source'],
    rows: [
      [
        'Attributes, computed style, display',
        'The observed values in the exercise, or the Elements panel',
        <SourceTag key="s" locale="en" id="dom" />,
      ],
      [
        'Do focus and clicks reach it?',
        'The result of pressing Tab and clicking yourself',
        <SourceTag key="s" locale="en" id="dom" />,
      ],
      [
        'Does it stay in the accessibility tree?',
        'The accessibility tree in browser tools',
        <SourceTag key="s" locale="en" id="devtools" />,
      ],
      [
        'Exposure the specs expect',
        'The expectation table under the exercise',
        <SourceTag key="s" locale="en" id="model" />,
      ],
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
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <HidingInertDemo />
    </section>
  );
};
