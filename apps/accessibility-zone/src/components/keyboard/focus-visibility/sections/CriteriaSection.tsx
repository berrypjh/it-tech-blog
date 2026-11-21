import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        아래 다섯 기준은 모두 포커스를 보는 일과 관련 있지만 묻는 것이 다릅니다. 하나를 통과했다고
        다른 기준까지 통과한 것은 아닙니다.
      </>
    ),
    caption: '포커스와 관련된 WCAG 2.2 기준',
    head: ['기준', '수준', '묻는 것', '실패의 모양'],
    rows: [
      ['2.4.7 Focus Visible', 'AA', '포커스 표시가 보이는 동작 방식이 있는가', '표시를 없앰'],
      [
        '2.4.11 Focus Not Obscured (Minimum)',
        'AA',
        '컴포넌트가 작성자 콘텐츠에 완전히 가려지지 않는가',
        '고정 영역 뒤에 전부 숨음',
      ],
      [
        '2.4.12 Focus Not Obscured (Enhanced)',
        'AAA',
        '컴포넌트의 어느 부분도 가려지지 않는가',
        '일부라도 숨음',
      ],
      [
        '2.4.13 Focus Appearance',
        'AAA',
        '표시의 면적과, 포커스 전후 같은 픽셀의 대비 3:1',
        '너무 얇거나 전후 변화가 작음',
      ],
      [
        '1.4.11 Non-text Contrast',
        'AA',
        '상태를 알아보는 데 필요한 시각 정보와 인접 색의 대비 3:1',
        '표시가 주변 색에 묻힘',
      ],
    ],
    visibleCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.7 Focus Visible (AA)',
    minimumCite:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.11 Focus Not Obscured (Minimum) (AA)',
    enhancedCite:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.12 Focus Not Obscured (Enhanced) (AAA)',
    appearanceCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.13 Focus Appearance (AAA)',
    calloutTitle: '"entirely"와 "no part"의 차이',
    callout: (
      <>
        일부만 가려진 컴포넌트는 2.4.11의 실패 조건에 들지 않지만 2.4.12에는 실패합니다. 2.4.11을
        통과했다고 가림이 없다는 뜻은 아닙니다.
      </>
    ),
    contrast: (
      <>
        대비도 기준마다 비교 대상이 다릅니다. 1.4.11은 한 상태에서 <strong>인접한 색</strong>과
        비교하고, 2.4.13은 <strong>같은 픽셀의 포커스 전과 후</strong>를 비교합니다. 작성자가 표시를
        바꿀 수 없는 사용자 에이전트의 표시, 그리고 표시와 그 배경색을 모두 바꾸지 않은 경우는
        2.4.13의 예외입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The five criteria below all relate to seeing focus, but they ask different questions.
        Passing one does not mean passing another.
      </>
    ),
    caption: 'WCAG 2.2 criteria related to focus',
    head: ['Criterion', 'Level', 'What it asks', 'What failure looks like'],
    rows: [
      [
        '2.4.7 Focus Visible',
        'AA',
        'Is there a mode of operation where the indicator is visible?',
        'The indicator was removed',
      ],
      [
        '2.4.11 Focus Not Obscured (Minimum)',
        'AA',
        'Is the component not entirely hidden by author content?',
        'Completely behind a fixed area',
      ],
      [
        '2.4.12 Focus Not Obscured (Enhanced)',
        'AAA',
        'Is no part of the component hidden?',
        'Even partly hidden',
      ],
      [
        '2.4.13 Focus Appearance',
        'AAA',
        'The indicator’s area, and 3:1 between the same pixels before and after focus',
        'Too thin, or too little change',
      ],
      [
        '1.4.11 Non-text Contrast',
        'AA',
        '3:1 between visual information needed to identify states and adjacent colors',
        'The indicator blends into its surroundings',
      ],
    ],
    visibleCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.7 Focus Visible (AA)',
    minimumCite:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.11 Focus Not Obscured (Minimum) (AA)',
    enhancedCite:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.12 Focus Not Obscured (Enhanced) (AAA)',
    appearanceCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.13 Focus Appearance (AAA)',
    calloutTitle: 'The difference between "entirely" and "no part"',
    callout: (
      <>
        A partly hidden component does not meet the failure condition of 2.4.11, but it fails
        2.4.12. Passing 2.4.11 does not mean nothing is hidden.
      </>
    ),
    contrast: (
      <>
        Contrast also compares different things. 1.4.11 compares with{' '}
        <strong>adjacent colors</strong> in one state, and 2.4.13 compares{' '}
        <strong>the same pixels before and after focus</strong>. 2.4.13 excepts an indicator the
        user agent determines and the author cannot adjust, and an indicator whose own color and
        background color the author has not modified.
      </>
    ),
  },
};

export const CriteriaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const quote = { locale, checkedOn: KEYBOARD_CHECKED_ON };

  return (
    <section aria-labelledby={toc.criteria.id}>
      <DocH2 {...toc.criteria} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="normative" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote {...quote} href={wcag22('focus-visible')} cite={c.visibleCite}>
        Any keyboard operable user interface has a mode of operation where the keyboard focus
        indicator is visible.
      </NormativeQuote>
      <NormativeQuote {...quote} href={wcag22('focus-not-obscured-minimum')} cite={c.minimumCite}>
        When a user interface component receives keyboard focus, the component is not entirely
        hidden due to author-created content.
      </NormativeQuote>
      <NormativeQuote {...quote} href={wcag22('focus-not-obscured-enhanced')} cite={c.enhancedCite}>
        When a user interface component receives keyboard focus, no part of the component is hidden
        by author-created content.
      </NormativeQuote>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <NormativeQuote {...quote} href={wcag22('focus-appearance')} cite={c.appearanceCite}>
        When the keyboard focus indicator is visible, an area of the focus indicator meets all the
        following: is at least as large as the area of a 2 CSS pixel thick perimeter of the
        unfocused component or sub-component, and has a contrast ratio of at least 3:1 between the
        same pixels in the focused and unfocused states.
      </NormativeQuote>
      <p>{c.contrast}</p>
    </section>
  );
};
