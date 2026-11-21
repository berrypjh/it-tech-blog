import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="text-and-controls" hash="link-or-button" />
        에서 링크와 버튼의 키 차이를,{' '}
        <PageLink locale="ko" id="events-and-state" hash="default-actions" />
        에서 기본 동작을 봤습니다. 키 처리를 짜기 전에 그 키의 주인부터 정합니다.
      </>
    ),
    caption: '포커스 위치에 따른 키의 주인',
    head: ['포커스 위치', '키', '주인', '작성자가 할 일'],
    rows: [
      ['링크', 'Enter', '브라우저', 'href만 둡니다'],
      ['버튼', 'Enter · Space', '브라우저', 'click 처리 하나만 둡니다'],
      ['텍스트 입력', '글자 · 방향키 · Space · Home · End', '텍스트 입력', '가로채지 않습니다'],
      ['문서', '방향키 · Space · PageDown', '브라우저(스크롤)', '가로채지 않습니다'],
      ['직접 만든 위젯', '패턴이 정한 키', '위젯', '그 키만 처리하고 그 키의 기본 동작만 막습니다'],
      ['어디서나', 'Tab · Shift+Tab', '브라우저', '위젯을 드나드는 길로 남깁니다'],
    ],
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.1 Keyboard (A)',
    after: (
      <>
        WCAG는 키보드로 조작할 수 있기를 요구할 뿐 어떤 키를 쓸지는 정하지 않습니다. 위젯의 키
        배치는 APG 같은 패턴의 권장 사항이고, 실습의 수량 위젯은 APG Spinbutton을 따릅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <PageLink locale="en" id="text-and-controls" hash="link-or-button" /> showed how keys differ
        on links and buttons, and{' '}
        <PageLink locale="en" id="events-and-state" hash="default-actions" /> covered default
        actions. Before writing key handling, decide who owns the key.
      </>
    ),
    caption: 'Who owns a key, by where focus is',
    head: ['Focus is on', 'Key', 'Owner', 'What the author does'],
    rows: [
      ['Link', 'Enter', 'Browser', 'Provide only the href'],
      ['Button', 'Enter, Space', 'Browser', 'Provide one click handler'],
      ['Text input', 'Characters, arrows, Space, Home, End', 'Text input', 'Do not intercept'],
      ['Document', 'Arrows, Space, PageDown', 'Browser (scrolling)', 'Do not intercept'],
      [
        'Custom widget',
        'Keys its pattern defines',
        'Widget',
        'Handle those keys and block only their defaults',
      ],
      ['Anywhere', 'Tab, Shift+Tab', 'Browser', 'Keep them as the way in and out of widgets'],
    ],
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.1 Keyboard (A)',
    after: (
      <>
        WCAG requires keyboard operation but does not say which keys. A widget&apos;s key layout is
        a recommendation from patterns such as the APG, and the quantity widget in the exercise
        follows the APG Spinbutton.
      </>
    ),
  },
};

export const OwnersSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.owners.id}>
      <DocH2 {...toc.owners} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={wcag22('keyboard')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        All functionality of the content is operable through a keyboard interface without requiring
        specific timings for individual keystrokes, except where the underlying function requires
        input that depends on the path of the user&apos;s movement and not just the endpoints.
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};
