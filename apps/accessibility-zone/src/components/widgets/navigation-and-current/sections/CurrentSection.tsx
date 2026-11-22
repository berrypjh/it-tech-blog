import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { aria12, WIDGETS_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        링크 묶음에서 “지금 여기”를 알리는 상태는 <code>aria-current</code>입니다.{' '}
        <PageLink locale={locale} id="tabs-pattern" />의 <code>aria-selected</code>와 헷갈리기
        쉽지만 뜻이 다릅니다. 선택은 사용자가 위젯 안에서 고른 것이고, 현재 위치는 사용자가 이미 와
        있는 곳입니다. 색이나 굵기만으로 표시하지 않는다는 원칙은{' '}
        <PageLink locale={locale} id="sensory-information" />와 같습니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 — aria-current',
    caption: 'aria-current의 값과 쓰는 곳',
    head: ['값', '뜻', '이 페이지의 예'],
    rows: [
      ['page', '링크 묶음 안의 현재 페이지', '사이트 메뉴 · 현재 경로 · 쪽 번호의 현재 링크'],
      ['step', '단계로 된 과정의 현재 단계', '신청 단계 표시 (이 페이지에서는 쓰지 않음)'],
      ['location', '흐름도 같은 환경 안의 현재 위치', '쓰지 않음'],
      ['date · time', '달력 · 시간표의 현재 날짜 · 시간', '쓰지 않음'],
      ['true', '묶음 안의 현재 항목 (위에 맞는 값이 없을 때)', '쓰지 않음'],
    ],
    after: (
      <>
        현재 페이지를 가리키는 항목은 링크로 남겨 둘 수도, 글자로만 둘 수도 있습니다. APG의
        breadcrumb 패턴은 현재 페이지가 링크일 때 <code>aria-current=&quot;page&quot;</code>를
        주라고 하고, 링크가 아니면 선택 사항으로 둡니다. 이 예제는 링크로 남겼습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        The state that says “you are here” in a set of links is <code>aria-current</code>. It is
        easily confused with <code>aria-selected</code> from{' '}
        <PageLink locale={locale} id="tabs-pattern" />, but the meaning differs: selection is what
        the user chose inside a widget, and current location is where the user already is. Not
        marking it with color or weight alone is the same principle as on{' '}
        <PageLink locale={locale} id="sensory-information" />.
      </>
    ),
    cite: 'WAI-ARIA 1.2 — aria-current',
    caption: 'Values of aria-current and where they are used',
    head: ['Value', 'Meaning', 'Example on this page'],
    rows: [
      [
        'page',
        'The current page within a set of links',
        'The current link of the site menu, breadcrumb, and page numbers',
      ],
      [
        'step',
        'The current step within a step-based process',
        'An application step indicator (not used on this page)',
      ],
      ['location', 'The current location within an environment such as a flow chart', 'Not used'],
      ['date, time', 'The current date or time in a calendar or timetable', 'Not used'],
      ['true', 'The current item within a set (when no value above fits)', 'Not used'],
    ],
    after: (
      <>
        The item for the current page can stay a link or be plain text. APG’s breadcrumb pattern
        says to give <code>aria-current=&quot;page&quot;</code> when the current page is a link, and
        leaves it optional otherwise. This example keeps it a link.
      </>
    ),
  },
};

export const CurrentSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.current.id}>
      <DocH2 {...toc.current} />
      <p>{c.intro(locale)}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-current')}
        cite={c.cite}
        checkedOn={WIDGETS_CHECKED_ON}
      >
        Authors SHOULD only mark one element in a set of elements as current with aria-current.
        Authors SHOULD NOT use the aria-current attribute as a substitute for aria-selected in
        widgets where aria-selected has the same meaning.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
