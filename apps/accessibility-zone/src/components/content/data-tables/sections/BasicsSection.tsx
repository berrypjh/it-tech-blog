import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { eventFacts } from '@/components/content/shared/event';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="document-structure" />
        에서 제목이 문서의 구조를 이루었듯, 표에서는 <code>caption</code>이 표의 이름이고{' '}
        <code>th</code>가 헤더입니다. <code>scope=&quot;col&quot;</code>은 그 열,{' '}
        <code>scope=&quot;row&quot;</code>는 그 행의 헤더라는 뜻입니다. 아래는 같은 일정을 헤더 한
        줄로 단순화한 표입니다.
      </>
    ),
    caption: '워크숍 일정 (단순화한 표, 교육 예시)',
    head: ['요일', '장소', '회차', '시각', '주제'],
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.2 Meaningful Sequence (A)',
    order: (
      <>
        보조기술은 표를 DOM 순서대로, 행마다 왼쪽에서 오른쪽으로 읽습니다. CSS로 칸의 위치를 바꾸면
        보이는 순서와 읽는 순서가 어긋나므로 표의 순서는 마크업에서 정합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        As headings built the structure of a document on{' '}
        <PageLink locale={locale} id="document-structure" />, in a table <code>caption</code> is the
        table’s name and <code>th</code> marks headers. <code>scope=&quot;col&quot;</code> means a
        header for its column and <code>scope=&quot;row&quot;</code> for its row. Below is the same
        schedule simplified to one header row.
      </>
    ),
    caption: 'Workshop schedule (simplified table, teaching example)',
    head: ['Day', 'Hall', 'Session', 'Time', 'Topic'],
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.2 Meaningful Sequence (A)',
    order: (
      <>
        Assistive technology reads a table in DOM order, each row from left to right. Moving cells
        with CSS makes the visual and reading orders differ, so the table’s order is set in the
        markup.
      </>
    ),
  },
};

export const BasicsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const e = eventFacts[locale];
  const toc = getToc(locale);
  const rows = e.days.flatMap((day, d) =>
    e.halls.flatMap((hall, h) =>
      e.sessions.map((session, s) => [day, hall, session.label, session.time, e.program[d][h][s]]),
    ),
  );

  return (
    <section aria-labelledby={toc.basics.id}>
      <DocH2 {...toc.basics} />
      <p>{c.intro(locale)}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <NormativeQuote
        locale={locale}
        href={wcag22('meaningful-sequence')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        When the sequence in which content is presented affects its meaning, a correct reading
        sequence can be programmatically determined.
      </NormativeQuote>
      <p>{c.order}</p>
    </section>
  );
};
