import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { APG_DISCLOSURE, ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const afterCode = (name: string, comment: string) => `<button type="button" class="toggle"
        aria-expanded="false" aria-controls="order-details">
  <svg class="chevron" aria-hidden="true" focusable="false">…</svg>
  ${name}
</button>
<div id="order-details" class="panel" hidden>…</div>
<script>
  const button = document.querySelector('.toggle');
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  let open = false;

  // ${comment}
  const render = () => {
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };

  button.addEventListener('click', () => {
    open = !open;
    render();
  });
  render();
</script>`;

const content = {
  ko: {
    name: '상세 보기',
    comment: '화면(hidden)과 의미(aria-expanded)를 같은 값에서 만든다',
    intro: (
      <>
        고치는 방향은 세 가지입니다. 활성화는 네이티브 <code>button</code>에 맡기고, 이름은 보이는
        글자로 주고, 펼침 여부는 변수 하나에 두어 화면과 <code>aria-expanded</code>를 그 값에서 함께
        만듭니다.
      </>
    ),
    label: '고친 후 — 네이티브 버튼과 한 상태',
    caption: '고친 코드가 각 불일치를 푸는 방법',
    head: ['항목', '고친 방법'],
    rows: [
      ['의미 · 키보드', 'button 요소가 포커스와 Enter · Space 실행을 줍니다'],
      ['이름', '버튼 안의 글자 "상세 보기"가 이름이 됩니다. svg는 aria-hidden으로 뺍니다'],
      ['상태', 'open 하나에서 hidden과 aria-expanded를 함께 정합니다. 따로 바꾸는 코드가 없습니다'],
      [
        '관계',
        'aria-controls 값으로 패널을 찾습니다. 대상이 없으면 스크립트가 바로 실패해 드러납니다',
      ],
    ],
    expandedCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-expanded',
    apg: (
      <>
        이 구조는 APG의 Disclosure 패턴과 같습니다. 패턴은 Enter와 Space가 펼침을 바꾸고, 펼쳤을 때
        aria-expanded가 true, 접었을 때 false이며, aria-controls는 선택이라고 적습니다. 권장
        패턴이므로 따랐다는 사실만으로 충족을 단정하지 않습니다. 위 WAI-ARIA 문장은 SHOULD이고 APG는
        예시 패턴에서 선택으로 둡니다. 이 페이지는 규범의 SHOULD를 따라 aria-controls를 쓰고 대상
        ID를 확인합니다.
      </>
    ),
    apgLink: 'APG — Disclosure (Show/Hide) Pattern',
  },
  en: {
    name: 'Show details',
    comment: 'Make the screen (hidden) and the meaning (aria-expanded) from the same value',
    intro: (
      <>
        The fix has three parts. Leave activation to a native <code>button</code>, give the name as
        visible text, and keep expansion in one variable so the screen and{' '}
        <code>aria-expanded</code> are both made from that value.
      </>
    ),
    label: 'After — a native button and one state',
    caption: 'How the fixed code resolves each mismatch',
    head: ['Item', 'How it is fixed'],
    rows: [
      ['Meaning and keyboard', 'The button element gives focus and Enter and Space activation'],
      [
        'Name',
        'The text "Show details" inside the button becomes the name. The svg is removed with aria-hidden',
      ],
      ['State', 'hidden and aria-expanded are both set from open. No code changes them separately'],
      [
        'Relation',
        'The panel is found by the aria-controls value. If the target is missing, the script fails right away and shows it',
      ],
    ],
    expandedCite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-expanded',
    apg: (
      <>
        This structure matches the APG Disclosure pattern. The pattern says Enter and Space toggle
        the content, aria-expanded is true when shown and false when hidden, and aria-controls is
        optional. It is a recommended pattern, so following it does not by itself prove anything is
        met. The WAI-ARIA sentence above is a SHOULD, while the APG treats it as optional in its
        example pattern. This page follows the normative SHOULD, uses aria-controls, and checks the
        target ID.
      </>
    ),
    apgLink: 'APG — Disclosure (Show/Hide) Pattern',
  },
};

export const FixedSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.fixed.id}>
      <DocH2 {...toc.fixed} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={afterCode(c.name, c.comment)} label={c.label} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={aria12('aria-expanded')}
        cite={c.expandedCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        If a grouping container that can be expanded or collapsed is not owned by the element that
        has the aria-expanded attribute, the author SHOULD identify the controlling relationship by
        referencing the container from the element that has aria-expanded with the aria-controls
        property.
      </NormativeQuote>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="informative" />
        <ExternalLink href={APG_DISCLOSURE}>{c.apgLink}</ExternalLink>
      </p>
      <p>{c.apg}</p>
    </section>
  );
};
