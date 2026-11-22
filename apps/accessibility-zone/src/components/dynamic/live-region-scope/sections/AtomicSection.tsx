import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { aria12, DYNAMIC_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <code>aria-atomic</code>은 영역이 바뀔 때 바뀐 노드만 넘길지, 영역 전체를 넘길지를 정합니다.
        “1회차 남은 좌석 10석”에서 숫자만 바뀌어도 atomic이 true면 문장 전체가 맥락이 됩니다.{' '}
        <code>aria-relevant</code>는 어떤 종류의 변경을 알릴지 정합니다. 지정하지 않으면 추가와 글자
        변경만 알리고 제거는 알리지 않습니다.
      </>
    ),
    citeAtomic: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-atomic',
    citeRelevant: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-relevant',
    caption: '두 속성이 정하는 것',
    head: ['속성', '값', '정하는 것'],
    rows: [
      ['aria-atomic', 'false (기본) / true', '바뀐 노드만 / 영역 전체를 넘김'],
      ['aria-relevant', 'additions text (기본)', '추가와 글자 변경을 알림'],
      [
        'aria-relevant',
        'additions removals text 또는 all',
        '제거도 알림. 제거가 뜻을 가질 때만 아껴 씀',
      ],
    ],
  },
  en: {
    intro: (
      <>
        <code>aria-atomic</code> decides whether to pass only the changed node or the whole region
        when the region changes. Even if only the number changes in “Session 1: 10 seats left,”
        atomic true makes the whole sentence the context. <code>aria-relevant</code> decides which
        kinds of change to report. Without it, additions and text changes are reported, and removals
        are not.
      </>
    ),
    citeAtomic: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-atomic',
    citeRelevant: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-relevant',
    caption: 'What the two attributes decide',
    head: ['Attribute', 'Value', 'Decides'],
    rows: [
      ['aria-atomic', 'false (default) / true', 'Pass only the changed node / the whole region'],
      ['aria-relevant', 'additions text (default)', 'Report additions and text changes'],
      [
        'aria-relevant',
        'additions removals text, or all',
        'Also report removals; use sparingly, only when removal means something',
      ],
    ],
  },
};

export const AtomicSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.atomic.id}>
      <DocH2 {...toc.atomic} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-atomic')}
        cite={c.citeAtomic}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        If none of the ancestors have explicitly set aria-atomic, the default is that aria-atomic is
        false, and assistive technologies will only present the changed node to the user. […] If
        aria-atomic is explicitly set to true, assistive technologies will present the entire
        contents of the element, including the author-defined live region label if one exists.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-relevant')}
        cite={c.citeRelevant}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        When the aria-relevant attribute is not provided, the default value, additions text,
        indicates that text modifications and node additions are relevant, but that node removals
        are irrelevant.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
