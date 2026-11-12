import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12, htmlAam } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const INPUT_RULE =
  'input-type-text-input-type-password-input-type-number-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-elements-accessible-name-computation';

const code = {
  ko: `<label for="guest">투숙객 이름</label>
<input id="guest" type="text">

<button type="button">예약 변경</button>

<img src="room-a.jpg" alt="객실 A 전경">`,
  en: `<label for="guest">Guest name</label>
<input id="guest" type="text">

<button type="button">Change booking</button>

<img src="room-a.jpg" alt="View of room A">`,
};

const rules = [
  { element: 'input type="text"', anchor: INPUT_RULE, section: '4.1.1' },
  { element: 'button', anchor: 'button-element-accessible-name-computation', section: '4.1.4' },
  { element: 'img', anchor: 'img-element-accessible-name-computation', section: '4.1.10' },
];

const content = {
  ko: {
    intro: <>아래 세 요소는 모두 이름을 가집니다. 하지만 그 이름을 찾는 곳은 다릅니다.</>,
    label: '세 요소의 이름 출처',
    caption: 'HTML-AAM이 요소마다 정한 이름 후보 순서 (초안, 2026-10-26)',
    head: ['요소 (원문 절로)', '후보를 보는 순서', '이 예제의 예상 이름'],
    orders: [
      'aria-labelledby · aria-label → 연결된 label → title → placeholder → aria-placeholder',
      'aria-labelledby · aria-label → 연결된 label → 안의 내용 → title',
      'aria-labelledby · aria-label → alt → (alt가 없을 때) title → 조건에 맞는 figcaption',
    ],
    names: ['"투숙객 이름"', '"예약 변경"', '"객실 A 전경"'],
    role: (
      <>
        버튼이 안의 글자로 이름을 얻을 수 있는 것은 button 역할이 &quot;내용에서 이름&quot;을
        허용하기 때문입니다. 입력 칸의 역할(textbox)은 이를 허용하지 않아, 라벨을 연결해야 합니다.
        역할마다 허용 여부는 WAI-ARIA의{' '}
        <ExternalLink href={aria12('namefromcontent')}>
          Roles Supporting Name from Content
        </ExternalLink>
        에 있습니다.
      </>
    ),
    altCite:
      'HTML-AAM 1.0 (Working Draft, 2026-10-26) — 4.1.10 img Element Accessible Name Computation',
  },
  en: {
    intro: <>All three elements below have names. But they look for them in different places.</>,
    label: 'Name sources of three elements',
    caption: 'The order of name candidates HTML-AAM sets per element (draft, 2026-10-26)',
    head: ['Element (to the spec section)', 'Order of candidates', 'Expected name in this example'],
    orders: [
      'aria-labelledby, aria-label → connected label → title → placeholder → aria-placeholder',
      'aria-labelledby, aria-label → connected label → content inside → title',
      'aria-labelledby, aria-label → alt → (if no alt) title → a qualifying figcaption',
    ],
    names: ['"Guest name"', '"Change booking"', '"View of room A"'],
    role: (
      <>
        A button can get its name from the text inside because the button role allows &quot;name
        from content.&quot; The input&apos;s role (textbox) does not, so a label has to be
        connected. Which roles allow it is listed in WAI-ARIA&apos;s{' '}
        <ExternalLink href={aria12('namefromcontent')}>
          Roles Supporting Name from Content
        </ExternalLink>
        .
      </>
    ),
    altCite:
      'HTML-AAM 1.0 (Working Draft, 2026-10-26) — 4.1.10 img Element Accessible Name Computation',
  },
};

export const SourcesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.sources.id}>
      <DocH2 {...toc.sources} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={rules.map((rule, i) => [
          <ExternalLink key="r" href={htmlAam(rule.anchor)}>
            <code>{rule.element}</code> ({rule.section})
          </ExternalLink>,
          c.orders[i],
          c.names[i],
        ])}
      />
      <p>{c.role}</p>
      <NormativeQuote
        locale={locale}
        href={htmlAam('img-element-accessible-name-computation')}
        cite={c.altCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        An img with an alt attribute whose value, when trimmed of whitespace, is the empty string is
        mapped to the presentation role. It has no accessible name.
      </NormativeQuote>
    </section>
  );
};
