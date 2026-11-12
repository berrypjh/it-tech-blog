import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria13 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 보이는 도움말을 가리킴 -->
<button type="button" aria-describedby="cancel-note">예약 취소</button>
<p id="cancel-note">체크인 3일 전까지 무료로 취소할 수 있습니다.</p>

<!-- 화면에 없는 설명을 직접 적음 -->
<button type="button" aria-description="체크인 3일 전까지 무료">예약 취소</button>`,
  en: `<!-- Points to visible help -->
<button type="button" aria-describedby="cancel-note">Cancel booking</button>
<p id="cancel-note">Free cancellation until 3 days before check-in.</p>

<!-- Writes a description that is not on screen -->
<button type="button" aria-description="Free until 3 days before check-in">Cancel booking</button>`,
};

const content = {
  ko: {
    intro: (
      <>
        aria-describedby는 화면에 있는 요소를 가리키고, aria-description은 설명 문자열을 직접
        적습니다. 두 속성은 문서 상태부터 다릅니다.
      </>
    ),
    label: '같은 설명을 주는 두 방법',
    caption: '두 속성의 문서 상태와 확인 범위',
    head: ['', 'aria-describedby', 'aria-description'],
    rows: [
      [
        '정의된 문서',
        'WAI-ARIA 1.2 (W3C Recommendation)',
        'WAI-ARIA 1.3 (Working Draft) — 1.2에는 없음',
      ],
      ['설명 계산의 순서', 'AccName 1.2 초안 4.2의 첫째', 'AccName 1.2 초안 4.2의 둘째'],
      ['화면을 보는 사용자', '같은 글자를 봅니다', '보지 못합니다'],
      [
        '브라우저 · 보조기술 지원',
        '이 사이트가 확인하지 않음 — 미확인',
        '이 사이트가 확인하지 않음 — 미확인',
      ],
    ],
    cite: 'WAI-ARIA 1.3 (Working Draft, 2026-06-04) — aria-description',
    after: (
      <>
        설명 글이 화면에 있다면 aria-describedby로 가리킵니다. aria-description은 초안 단계의
        속성이라, 쓰기 전에 대상 브라우저와 보조기술에서 실제로 전해지는지 확인하고 그 결과를
        관찰값으로 기록합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        aria-describedby points to an element on screen, and aria-description writes the description
        string directly. The two differ even in document status.
      </>
    ),
    label: 'Two ways to give the same description',
    caption: 'Document status and verification scope of the two attributes',
    head: ['', 'aria-describedby', 'aria-description'],
    rows: [
      [
        'Defined in',
        'WAI-ARIA 1.2 (W3C Recommendation)',
        'WAI-ARIA 1.3 (Working Draft) — not in 1.2',
      ],
      [
        'Order in description computation',
        'First in AccName 1.2 draft 4.2',
        'Second in AccName 1.2 draft 4.2',
      ],
      ['Sighted users', 'See the same text', 'Do not see it'],
      [
        'Browser and AT support',
        'Not checked by this site — unconfirmed',
        'Not checked by this site — unconfirmed',
      ],
    ],
    cite: 'WAI-ARIA 1.3 (Working Draft, 2026-06-04) — aria-description',
    after: (
      <>
        If the description text is on screen, point to it with aria-describedby. aria-description is
        an attribute at the draft stage, so before using it, check that it actually reaches users in
        your target browsers and assistive technologies, and record the result as an observed value.
      </>
    ),
  },
};

export const DirectSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.direct.id}>
      <DocH2 {...toc.direct} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={aria13('aria-description')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        In cases where providing a visible description is not the desired user experience, authors
        MAY set the accessible description of the element using aria-description. However, if the
        description text is available in the DOM, authors SHOULD NOT use aria-description
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};
