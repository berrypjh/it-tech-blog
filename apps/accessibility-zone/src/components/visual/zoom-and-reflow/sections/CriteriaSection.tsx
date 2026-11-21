import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { VISUAL_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    resizeCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.4 Resize Text (AA)',
    reflowCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.10 Reflow (AA)',
    caption: '1.4.4와 1.4.10 비교',
    head: ['항목', '1.4.4 Resize Text', '1.4.10 Reflow'],
    rows: [
      ['목표', '텍스트를 200%까지 키워도 내용 · 기능 유지', '좁은 폭에서 두 방향 스크롤 없이 사용'],
      ['조건', '보조기술 없이', '세로 스크롤은 320 CSS px 폭, 가로 스크롤은 256 CSS px 높이'],
      ['예외', '자막, 텍스트 이미지', '사용이나 의미에 2차원 배치가 필요한 부분'],
      ['두 방향 스크롤', '기준에 금지 문구 없음', '예외 부분 밖에서는 요구하지 않아야 함'],
    ],
    relation: (
      <>
        1280 CSS px 폭의 창을 400%로 확대하면 레이아웃에 쓸 수 있는 폭은 1280 ÷ 4 = 320 CSS
        px입니다. 일반적인 세로 스크롤 문서에서 두 조건이 같은 폭을 가리키는 이유입니다. 데이터 표가
        예외여도 표만 자기 스크롤 영역에 두고, 주변 문단은 줄바꿈되어야 합니다.
      </>
    ),
  },
  en: {
    resizeCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.4 Resize Text (AA)',
    reflowCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.10 Reflow (AA)',
    caption: '1.4.4 compared with 1.4.10',
    head: ['Item', '1.4.4 Resize Text', '1.4.10 Reflow'],
    rows: [
      [
        'Goal',
        'Keep content and function with text at 200%',
        'Use at narrow widths without two-dimensional scrolling',
      ],
      [
        'Condition',
        'Without assistive technology',
        '320 CSS pixels wide for vertical scrolling, 256 CSS pixels high for horizontal',
      ],
      ['Exceptions', 'Captions, images of text', 'Parts that need two-dimensional layout'],
      [
        'Two-dimensional scrolling',
        'Not addressed by the criterion',
        'Must not be required outside excepted parts',
      ],
    ],
    relation: (
      <>
        Zooming a 1280 CSS pixel wide window to 400% leaves 1280 ÷ 4 = 320 CSS pixels for layout.
        That is why both conditions point to the same width for a typical vertically scrolling
        document. Even when a data table is excepted, only the table gets its own scroll area, and
        surrounding paragraphs must still wrap.
      </>
    ),
  },
};

export const CriteriaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const quote = { locale, checkedOn: VISUAL_CHECKED_ON };

  return (
    <section aria-labelledby={toc.criteria.id}>
      <DocH2 {...toc.criteria} />
      <NormativeQuote {...quote} href={wcag22('resize-text')} cite={c.resizeCite}>
        Except for captions and images of text, text can be resized without assistive technology up
        to 200 percent without loss of content or functionality.
      </NormativeQuote>
      <NormativeQuote {...quote} href={wcag22('reflow')} cite={c.reflowCite}>
        Content can be presented without loss of information or functionality, and without requiring
        scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS
        pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for
        parts of the content which require two-dimensional layout for usage or meaning.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.relation}</p>
    </section>
  );
};
