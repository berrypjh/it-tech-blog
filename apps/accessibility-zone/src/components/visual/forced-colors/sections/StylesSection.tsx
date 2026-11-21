import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { VISUAL_CHECKED_ON } from '@/components/shared/wcag';

import { ForcedColorsDemo } from '../demos/ForcedColorsDemo';
import { CSS_COLOR_ADJUST } from '../specs';
import { getToc } from '../toc';

const before = `.choice {
  background: var(--surface);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.3);
}
.choice[aria-pressed='true'] {
  background: var(--selected);
}`;

const after = `.choice {
  border: 2px solid transparent;
}
.choice[aria-pressed='true'] {
  border-color: var(--primary);
}
@media (forced-colors: active) {
  .choice[aria-pressed='true'] {
    border-color: Highlight;
  }
}`;

const content = {
  ko: {
    intro: (
      <>
        투명한 테두리는 평소에 보이지 않지만 Forced Colors에서는 색이 강제되어 경계로 나타납니다.
        선택 상태는 테두리에 더해 체크 표시 같은 형태로도 남깁니다. 필요한 곳에만{' '}
        <code>Highlight</code> 같은 시스템 색을 씁니다.
      </>
    ),
    calloutTitle: 'forced-color-adjust: none을 페이지 전체에 쓰지 않습니다',
    callout: (
      <>
        이 값은 사용자가 고른 색을 그 요소에서 꺼 버립니다. 색 자체가 뜻인 색상 견본처럼 좁은
        부분에만, 대비를 직접 책임질 때 씁니다.
      </>
    ),
    cite: 'CSS Color Adjustment Module Level 1 — forced-color-adjust',
  },
  en: {
    intro: (
      <>
        A transparent border is normally invisible, but forced colors give it a color and it appears
        as a boundary. Keep selection in a form such as a check mark as well as the border. Use
        system colors such as <code>Highlight</code> only where needed.
      </>
    ),
    calloutTitle: 'Do not apply forced-color-adjust: none to the whole page',
    callout: (
      <>
        This value turns off the user&apos;s colors for that element. Use it only on narrow parts
        where the color itself is the meaning, such as color swatches, while taking responsibility
        for contrast.
      </>
    ),
    cite: 'CSS Color Adjustment Module Level 1 — forced-color-adjust',
  },
};

export const StylesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.styles.id}>
      <DocH2 {...toc.styles} />
      <p>{c.intro}</p>
      <CodeCompare before={before} after={after} />
      <ForcedColorsDemo />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <NormativeQuote
        locale={locale}
        href={`${CSS_COLOR_ADJUST}#forced-color-adjust-prop`}
        cite={c.cite}
        checkedOn={VISUAL_CHECKED_ON}
      >
        Authors should only use this value when they are themselves adjusting the colors to support
        the user’s color and contrast needs and need to make changes to the UA’s default adjustments
        to provide a more appropriate user experience for those elements.
      </NormativeQuote>
    </section>
  );
};
