import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        계산기의 두 칸은 화면의 픽셀이 그 두 색일 때만 의미가 있습니다. 아래 경우에는 입력한 두 색이
        실제 결과를 보장하지 않습니다.
      </>
    ),
    caption: '두 색 입력으로 보장할 수 없는 경우',
    head: ['경우', '이유', '확인 방법'],
    rows: [
      ['반투명 글자 · 배경', '보이는 색은 뒤의 색과 합성된 결과', '합성된 실제 색을 찾아 비교'],
      ['그라디언트 배경', '글자 위치마다 배경이 다름', '글자가 놓인 가장 불리한 부분을 확인'],
      [
        '이미지 위 글자',
        '픽셀마다 색이 다르고 이미지가 바뀔 수 있음',
        '실제 이미지와 화면 폭에서 확인',
      ],
      ['그림자 · 혼합 효과', '렌더링 결과가 선언한 색과 다름', '렌더링된 화면에서 확인'],
    ],
    calloutTitle: '예외는 원문의 범위까지만',
    callout: (
      <>
        비활성 컴포넌트, 순수한 장식, 아무에게도 보이지 않는 글자, 다른 시각 내용이 중요한 그림 속
        글자, 로고의 글자가 1.4.3의 예외입니다. &quot;연한 색이 디자인이라서&quot;나 &quot;보조
        문구라서&quot;는 예외가 아닙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The calculator&apos;s two fields mean something only when the pixels on screen are those two
        colors. In the cases below, the two entered colors do not guarantee the real result.
      </>
    ),
    caption: 'Cases two entered colors cannot guarantee',
    head: ['Case', 'Why', 'How to check'],
    rows: [
      [
        'Translucent text or background',
        'The visible color is composited with what is behind it',
        'Find the real composited color and compare',
      ],
      [
        'Gradient background',
        'The background differs under each part of the text',
        'Check the least favorable part under the text',
      ],
      [
        'Text over an image',
        'Pixels differ, and the image can change',
        'Check with the real image and screen widths',
      ],
      [
        'Shadows and blend effects',
        'The rendered result differs from the declared color',
        'Check the rendered screen',
      ],
    ],
    calloutTitle: 'Exceptions stop where the text stops',
    callout: (
      <>
        The 1.4.3 exceptions are inactive components, pure decoration, text not visible to anyone,
        text in a picture with significant other visual content, and text in logos. &quot;The pale
        color is the design&quot; or &quot;it is secondary text&quot; is not an exception.
      </>
    ),
  },
};

export const LimitsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.limits.id}>
      <DocH2 {...toc.limits} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
