import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12, htmlAria } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<button type="submit" aria-disabled="true">주문하기</button>
<!-- 비활성으로 알려지지만, 누르면 폼이 제출된다 -->`,
    after: `<button type="submit" aria-disabled="true"
        aria-describedby="why" onclick="guard(event)">주문하기</button>
<p id="why">배송지를 입력하면 주문할 수 있습니다.</p>
<script>
  // 실행 경로에서 같은 상태를 확인해 막는다
  const guard = (e) => {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') e.preventDefault();
  };
</script>`,
  },
  en: {
    before: `<button type="submit" aria-disabled="true">Place order</button>
<!-- Conveyed as disabled, but pressing it submits the form -->`,
    after: `<button type="submit" aria-disabled="true"
        aria-describedby="why" onclick="guard(event)">Place order</button>
<p id="why">You can order after entering a shipping address.</p>
<script>
  // Check the same state on the execution path and block it
  const guard = (e) => {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') e.preventDefault();
  };
</script>`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        <code>aria-disabled=&quot;true&quot;</code>는 보조기술에 &quot;지금은 쓸 수 없다&quot;는
        의미를 알립니다. 하지만 HTML의 disabled 개념을 켜지 않으므로, 포커스도 click도 제출도 그대로
        일어납니다.
      </>
    ),
    ariaCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-disabled',
    htmlAriaCite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 4.2 aria-disabled',
    when: (
      <>
        그래서 disabled를 쓸 수 있는 요소에는 disabled를 씁니다. 그래도 aria-disabled를 고르는
        경우는, 포커스를 남겨 &quot;왜 쓸 수 없는지&quot;를 읽게 하고 싶을 때입니다. 그때는 아래처럼
        실행 경로가 같은 상태를 확인해 막아야 합니다. 위 코드처럼 막지 않으면 의미와 동작이
        어긋납니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <code>aria-disabled=&quot;true&quot;</code> tells assistive technology &quot;this cannot be
        used right now.&quot; But it does not turn on HTML&apos;s disabled concept, so focus,
        clicks, and submission all still happen.
      </>
    ),
    ariaCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-disabled',
    htmlAriaCite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 4.2 aria-disabled',
    when: (
      <>
        So use disabled on elements that allow it. The case for choosing aria-disabled anyway is
        when you want to keep focus so that &quot;why it is unavailable&quot; can be read. Then the
        execution path must check the same state and block it, as below. Without that, as in the
        code above, meaning and behavior disagree.
      </>
    ),
  },
};

export const AriaDisabledSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.ariaDisabled.id}>
      <DocH2 {...toc.ariaDisabled} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-disabled')}
        cite={c.ariaCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Indicates that the element is perceivable but disabled, so it is not editable or otherwise
        operable.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={htmlAria('att-disabled')}
        cite={c.htmlAriaCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Use the disabled attribute on any element that is allowed the disabled attribute in HTML.
      </NormativeQuote>
      <p>{c.when}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
    </section>
  );
};
