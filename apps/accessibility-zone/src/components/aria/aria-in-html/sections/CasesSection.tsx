import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, htmlAria } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  redundant: `<button role="button">저장</button>
<nav role="navigation">…</nav>`,
  override: `<h2 role="button">배송 정보</h2>
<button role="heading">검색</button>
<input type="checkbox" checked aria-checked="false">`,
  complement: `<button type="button" aria-expanded="false">상세 보기</button>
<button type="button" aria-pressed="true">굵게</button>
<a href="/orders" aria-current="page">주문 내역</a>`,
};

const codeEn = {
  redundant: `<button role="button">Save</button>
<nav role="navigation">…</nav>`,
  override: `<h2 role="button">Shipping info</h2>
<button role="heading">Search</button>
<input type="checkbox" checked aria-checked="false">`,
  complement: `<button type="button" aria-expanded="false">Show details</button>
<button type="button" aria-pressed="true">Bold</button>
<a href="/orders" aria-current="page">Orders</a>`,
};

const content = {
  ko: {
    intro: (
      <>
        요소 행과 대조하면 붙인 선언은 세 가지 가운데 하나입니다. 아래 코드는 모두 교육 예시입니다.
      </>
    ),
    labels: {
      redundant: '중복 선언 — 이미 가진 의미를 다시 적음',
      override: '부적절한 덮어쓰기 — 허용되지 않거나 실제와 충돌함',
      complement: '필요한 보완 — 요소에 없는 상태를 더함',
    },
    caption: '세 가지 선언과 원문 근거',
    head: ['분류', '판단', '원문 근거'],
    rows: [
      [
        '중복 선언',
        '틀리지는 않지만 필요 없습니다. 지웁니다',
        '암시적 의미와 같은 값을 적는 것은 권장하지 않음(NOT RECOMMENDED)',
      ],
      [
        '부적절한 덮어쓰기',
        '적합하지 않습니다. 맞는 요소로 바꿉니다',
        'h1–h6 행에 button이 없음 · button에 heading은 기본 동작과 충돌 · checkbox에 aria-checked 금지(MUST NOT)',
      ],
      [
        '필요한 보완',
        '필요합니다. 실제 상태가 바뀔 때 함께 바꿉니다',
        'button · a 행이 허용하는 역할에 적용되는 aria-* 속성',
      ],
    ],
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 1. Author requirements',
    after: (
      <>
        셋째 줄의 체크박스는 화면에는 체크됐는데 aria-checked는 해제라고 말합니다. 네이티브 상태와
        ARIA 상태가 따로 있으면 이렇게 어긋날 수 있어서, 원문은 이 조합을 금지합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Checked against the element row, a declaration is one of three kinds. All the code below is
        a teaching example.
      </>
    ),
    labels: {
      redundant: 'Redundant declaration — restates meaning the element has',
      override: 'Inappropriate override — not allowed, or conflicts with reality',
      complement: 'Needed addition — adds a state the element lacks',
    },
    caption: 'Three kinds of declaration and the spec basis',
    head: ['Kind', 'Judgment', 'Spec basis'],
    rows: [
      [
        'Redundant declaration',
        'Not wrong, but unnecessary. Remove it',
        'Setting values that match the implicit semantics is NOT RECOMMENDED',
      ],
      [
        'Inappropriate override',
        'Non-conforming. Switch to the right element',
        'button is not in the h1–h6 row; heading on button conflicts with its default behavior; aria-checked on a checkbox is MUST NOT',
      ],
      [
        'Needed addition',
        'Needed. Change it whenever the real state changes',
        'aria-* attributes that apply to the roles the button and a rows allow',
      ],
    ],
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 1. Author requirements',
    after: (
      <>
        The checkbox in the third line is checked on screen while aria-checked says unchecked. When
        a native state and an ARIA state exist side by side they can disagree like this, so the spec
        prohibits the combination.
      </>
    ),
  },
};

export const CasesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const snippets = locale === 'ko' ? code : codeEn;

  return (
    <section aria-labelledby={toc.cases.id}>
      <DocH2 {...toc.cases} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={snippets.redundant} label={c.labels.redundant} />
      <CodeBlock code={snippets.override} label={c.labels.override} tone="bad" />
      <CodeBlock code={snippets.complement} label={c.labels.complement} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={htmlAria('author-requirements-for-use-of-aria-in-html')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        It is NOT RECOMMENDED for authors to set the ARIA role and aria-* attributes to values that
        match the implicit ARIA semantics defined in either table. Doing so is unnecessary and can
        potentially lead to unintended consequences.
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};
