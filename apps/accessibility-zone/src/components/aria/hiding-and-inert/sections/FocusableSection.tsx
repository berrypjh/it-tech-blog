import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<div class="banner" aria-hidden="true">
  <p>오늘만 무료 배송</p>
  <a href="/event">자세히 보기</a>
</div>`,
    after: `<!-- 장식만 숨기고 링크는 남긴다 -->
<div class="banner">
  <svg class="icon" aria-hidden="true">…</svg>
  <p>오늘만 무료 배송</p>
  <a href="/event">자세히 보기</a>
</div>`,
  },
  en: {
    before: `<div class="banner" aria-hidden="true">
  <p>Free shipping today only</p>
  <a href="/event">Learn more</a>
</div>`,
    after: `<!-- Hide only the decoration and keep the link -->
<div class="banner">
  <svg class="icon" aria-hidden="true">…</svg>
  <p>Free shipping today only</p>
  <a href="/event">Learn more</a>
</div>`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        <code>aria-hidden=&quot;true&quot;</code>는 요소와 그 자손을 접근성 API에서 뺍니다. 하지만
        화면에서 지우지도, 포커스를 막지도 않습니다. 그래서 아래 고치기 전 코드의 링크는 Tab으로
        닿는데, 보조기술에는 이름도 역할도 전해지지 않을 수 있습니다. 화면 낭독기 사용자는
        &quot;무엇인지 모를 곳&quot;에 포커스가 머무는 것을 겪습니다.
      </>
    ),
    hiddenCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-hidden',
    focusCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-hidden',
    fix: (
      <>
        aria-hidden 아래에 링크를 두면 그 링크의 기능이 보조기술에 전해지지 않으므로, 이 요구를 지킬
        수 없습니다. 원문에 &quot;자손에 두지 말라&quot;는 문장이 따로 있는 것은 아니고, 위 요구에서
        나오는 결론입니다. 고치는 방향은 둘입니다. 보이는 내용이 모두에게 필요하면{' '}
        <code>aria-hidden</code>을 지우고 장식만 숨깁니다. 모두에게서 숨겨야 하면{' '}
        <code>hidden</code>이나 <code>inert</code>처럼 조작까지 막는 방법을 씁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <code>aria-hidden=&quot;true&quot;</code> removes the element and its descendants from the
        accessibility API. But it neither removes them from the screen nor blocks focus. So the link
        in the before code below can be reached with Tab, yet assistive technology may receive no
        name and no role for it. A screen reader user ends up with focus on &quot;something
        unknown.&quot;
      </>
    ),
    hiddenCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-hidden',
    focusCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-hidden',
    fix: (
      <>
        With a link under aria-hidden, the link&apos;s function does not reach assistive technology,
        so this requirement cannot be met. The text has no separate sentence saying &quot;do not put
        it in descendants&quot;; that follows from the requirement above. There are two ways to fix
        it. If the visible content is needed by everyone, remove <code>aria-hidden</code> and hide
        only the decoration. If it must be hidden from everyone, use a method that also blocks
        interaction, such as <code>hidden</code> or <code>inert</code>.
      </>
    ),
  },
};

export const FocusableSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.focusable.id}>
      <DocH2 {...toc.focusable} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-hidden')}
        cite={c.hiddenCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        An element is considered hidden if it, or any of its ancestors are not rendered or have
        their aria-hidden attribute value set to true.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-hidden')}
        cite={c.focusCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Authors using aria-hidden to hide visible content from screen readers MUST ensure that
        identical or equivalent meaning and functionality is exposed to assistive technologies.
      </NormativeQuote>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.fix}</p>
    </section>
  );
};
