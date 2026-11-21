import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { VISUAL_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.12 Text Spacing (AA)',
    caption: '1.4.12의 값과 CSS 표현',
    head: ['항목', '최소 값', 'CSS 예'],
    rows: [
      ['줄 높이', '글자 크기의 1.5배', <code key="a">line-height: 1.5</code>],
      ['문단 뒤 간격', '글자 크기의 2배', <code key="a">margin-block-end: 2em</code>],
      ['글자 간격', '글자 크기의 0.12배', <code key="a">letter-spacing: 0.12em</code>],
      ['단어 간격', '글자 크기의 0.16배', <code key="a">word-spacing: 0.16em</code>],
    ],
    calloutTitle: '기본 스타일을 이 값으로 바꾸라는 뜻이 아닙니다',
    callout: (
      <>
        원문의 Note 1은 콘텐츠가 이 값을 쓸 필요는 없고, 사용자가 덮어써도 내용과 기능을 잃지 않아야
        한다고 설명합니다. 그 언어와 문자에 없는 속성은 예외입니다.
      </>
    ),
  },
  en: {
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.12 Text Spacing (AA)',
    caption: 'The values of 1.4.12 in CSS',
    head: ['Item', 'Minimum', 'CSS example'],
    rows: [
      ['Line height', '1.5 times the font size', <code key="a">line-height: 1.5</code>],
      ['After paragraphs', '2 times the font size', <code key="a">margin-block-end: 2em</code>],
      ['Letter spacing', '0.12 times the font size', <code key="a">letter-spacing: 0.12em</code>],
      ['Word spacing', '0.16 times the font size', <code key="a">word-spacing: 0.16em</code>],
    ],
    calloutTitle: 'This does not change your default style',
    callout: (
      <>
        Note 1 in the text says content need not use these values; content and functionality must
        survive when a user overrides spacing. Properties a language or script does not use are
        excepted.
      </>
    ),
  },
};

export const CriterionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.criterion.id}>
      <DocH2 {...toc.criterion} />
      <NormativeQuote
        locale={locale}
        href={wcag22('text-spacing')}
        cite={c.cite}
        checkedOn={VISUAL_CHECKED_ON}
      >
        In content implemented using markup languages that support the following text style
        properties, no loss of content or functionality occurs by setting all of the following and
        by changing no other style property: Line height (line spacing) to at least 1.5 times the
        font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing
        (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the
        font size.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
