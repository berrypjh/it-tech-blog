import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, htmlAria } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <code>required</code>는 &quot;필수&quot;라는 의미와 빈 값일 때 제출을 막는 검사를 함께
        가져옵니다. <code>aria-required=&quot;true&quot;</code>는 의미만 알립니다. 브라우저는 그
        칸이 비어 있어도 제출을 막지 않습니다.
      </>
    ),
    caption: 'required와 aria-required의 차이',
    head: ['', 'required', 'aria-required="true"'],
    rows: [
      ['보조기술에 알리는 의미', '필수 (명세상 예상)', '필수 (명세상 예상)'],
      ['빈 값일 때 제출', '브라우저가 막습니다', '막지 않습니다 — 스크립트가 검사해야 함'],
      [
        '주로 쓰는 곳',
        'input · select · textarea',
        'ARIA로 만든 컨트롤(radiogroup · combobox 등). 네이티브 칸에도 쓸 수는 있음(MAY)',
      ],
    ],
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 4.2 aria-required',
    after: (
      <>
        네이티브 칸에 두 속성을 함께 적으면 중복입니다. 필수 표시는 보이는 라벨에도 글자로 적어,
        화면을 보는 사용자에게도 같은 정보를 줍니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <code>required</code> brings both the meaning &quot;required&quot; and a check that blocks
        submission when the value is empty. <code>aria-required=&quot;true&quot;</code> conveys only
        the meaning. The browser does not block submission even if the field is empty.
      </>
    ),
    caption: 'How required and aria-required differ',
    head: ['', 'required', 'aria-required="true"'],
    rows: [
      [
        'Meaning conveyed to assistive technology',
        'Required (expected by the specs)',
        'Required (expected by the specs)',
      ],
      ['Submission when empty', 'The browser blocks it', 'Not blocked — a script must check'],
      [
        'Mainly used on',
        'input, select, textarea',
        'Controls built with ARIA (radiogroup, combobox, and so on). Allowed on native fields too (MAY)',
      ],
    ],
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 4.2 aria-required',
    after: (
      <>
        Writing both on a native field is redundant. Also write the required mark as text in the
        visible label, so sighted users get the same information.
      </>
    ),
  },
};

export const AriaRequiredSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.ariaRequired.id}>
      <DocH2 {...toc.ariaRequired} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap gap-sm">
        <SourceTag locale={locale} id="normative" />
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={htmlAria('att-required')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Use the required attribute on any element that is allowed the required attribute in HTML. …
        Authors SHOULD NOT use the aria-required=&quot;true&quot; on any element which also has a
        required attribute.
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};
