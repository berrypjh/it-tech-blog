import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { ObscuredDemo } from '../demos/ObscuredDemo';
import { getToc } from '../toc';

const code = `.scroller {
  overflow-y: auto;
  /* 고정 영역 높이만큼 스크롤 멈춤 위치를 띄운다 */
  scroll-padding-bottom: 3.5rem;
}
.sticky-bar {
  position: sticky;
  bottom: 0;
  height: 3rem;
}`;

const content = {
  ko: {
    intro: (
      <>
        Tab으로 이동하면 브라우저가 포커스 받은 요소를 보이도록 스크롤합니다. 그런데 고정 영역은
        스크롤 영역 안쪽을 덮고 있어, 요소가 그 뒤에 멈출 수 있습니다. 아래 실습의 고정 영역은 이
        상자 안에만 있습니다.
      </>
    ),
    fix: (
      <>
        Understanding 문서는 <code>scroll-padding</code>으로 포커스 받은 요소를 고정 영역 밖에
        멈추게 하는 예를 듭니다. 값은 고정 영역 높이에 맞춥니다.
      </>
    ),
    label: 'scroll-padding으로 띄우기',
  },
  en: {
    intro: (
      <>
        When you Tab, the browser scrolls the focused element into view. But a fixed area covers the
        inside of the scroll area, so the element can stop behind it. The fixed area in the exercise
        below exists only inside its box.
      </>
    ),
    fix: (
      <>
        The Understanding document gives an example of using <code>scroll-padding</code> so the
        focused element stops clear of the fixed area. Match the value to the height of that area.
      </>
    ),
    label: 'Offsetting with scroll-padding',
  },
};

export const ObscuredSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.obscured.id}>
      <DocH2 {...toc.obscured} />
      <p>{c.intro}</p>
      <ObscuredDemo />
      <p>{c.fix}</p>
      <CodeBlock code={code} label={c.label} />
    </section>
  );
};
