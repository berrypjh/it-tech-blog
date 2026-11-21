import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        포커스는 키 입력을 받는 지점입니다.{' '}
        <PageLink locale="ko" id="focus-and-cursor" hash="focus-cursor-mode" />
        에서 본 것처럼 화면 낭독기의 읽기 위치와는 다릅니다. 포커스를 옮기는 길은 크게 둘이고, 맡는
        과업이 다릅니다.
      </>
    ),
    caption: '순차 이동과 프로그램 포커스',
    head: ['구분', '누가 시작하나', '맡는 과업', '잘못 쓰면'],
    rows: [
      [
        'Tab · Shift+Tab',
        '사용자',
        '페이지의 컨트롤을 차례로 지나가기',
        '순서가 뜻과 어긋나면 과업을 이어 가기 어렵습니다',
      ],
      [
        <code key="a">element.focus()</code>,
        '사용자 동작에 반응한 스크립트',
        '지운 항목 · 닫힌 창처럼 화면이 바뀐 뒤 위치를 이어 주기',
        '이유 없이 옮기면 사용자의 위치를 빼앗습니다',
      ],
    ],
    after: (
      <>
        순차 이동의 기본 순서는 DOM 순서입니다. 화면 순서와의 관계는{' '}
        <PageLink locale="ko" id="dom-order" hash="three-orders" />
        에서 다뤘습니다. WCAG는 특정 순서를 정하지 않고, 뜻과 조작을 지키는 순서를 요구합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.3 Focus Order (A)',
  },
  en: {
    intro: (
      <>
        Focus is the point that receives key input. As{' '}
        <PageLink locale="en" id="focus-and-cursor" hash="focus-cursor-mode" /> showed, it is not
        the same as a screen reader&apos;s reading position. There are two main ways to move it, and
        they serve different tasks.
      </>
    ),
    caption: 'Sequential navigation and programmatic focus',
    head: ['Kind', 'Who starts it', 'Task it serves', 'When misused'],
    rows: [
      [
        'Tab and Shift+Tab',
        'The user',
        'Passing through the controls on a page in turn',
        'An order that disagrees with the meaning makes the task hard to continue',
      ],
      [
        <code key="a">element.focus()</code>,
        'A script responding to a user action',
        'Carrying the position after the screen changes, such as a deleted item or closed dialog',
        'Moving it without a reason takes the user’s place away',
      ],
    ],
    after: (
      <>
        The default sequential order is DOM order;{' '}
        <PageLink locale="en" id="dom-order" hash="three-orders" /> covered how it relates to visual
        order. WCAG does not prescribe one order. It requires an order that preserves meaning and
        operation.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.3 Focus Order (A)',
  },
};

export const TasksSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.tasks.id}>
      <DocH2 {...toc.tasks} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('focus-order')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        If a web page can be navigated sequentially and the navigation sequences affect meaning or
        operation, focusable components receive focus in an order that preserves meaning and
        operability.
      </NormativeQuote>
    </section>
  );
};
