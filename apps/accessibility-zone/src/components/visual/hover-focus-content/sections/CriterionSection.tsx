import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { VISUAL_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.13 Content on Hover or Focus (AA)',
    caption: '세 조건을 확인하는 방법',
    head: ['조건', '확인', '이 실습의 구현'],
    rows: [
      ['닫기 가능', '포인터 · 포커스를 옮기지 않고 닫히는가', '열려 있는 동안 Escape로 닫음'],
      [
        '호버 가능',
        '포인터를 내용 위로 옮겨도 남는가',
        '트리거와 내용 사이에 틈이 없고 함께 호버 영역',
      ],
      ['지속', '시간이 지나도 스스로 사라지지 않는가', '타이머 없이 벗어나거나 닫을 때까지 유지'],
    ],
    scope: (
      <>
        <code>title</code> 속성의 브라우저 툴팁처럼 표시를 사용자 에이전트가 정하고 작성자가 바꾸지
        않은 경우는 예외입니다. 포커스를 받을 때만 보이는 건너뛰기 링크는 트리거 자체가 나타나는
        것이라 이 기준의 추가 내용이 아닙니다.
      </>
    ),
  },
  en: {
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.13 Content on Hover or Focus (AA)',
    caption: 'How to check the three conditions',
    head: ['Condition', 'Check', 'In this exercise'],
    rows: [
      [
        'Dismissible',
        'Does it close without moving pointer or focus?',
        'Escape closes it while it is open',
      ],
      [
        'Hoverable',
        'Does it stay when the pointer moves onto it?',
        'No gap, and trigger and content share one hover area',
      ],
      [
        'Persistent',
        'Does it avoid disappearing on its own?',
        'No timer; it stays until you leave or dismiss',
      ],
    ],
    scope: (
      <>
        Content whose presentation the user agent controls without author changes, such as the
        browser tooltip of the <code>title</code> attribute, is excepted. A skip link that appears
        on focus is the trigger itself becoming visible, so it is not additional content here.
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
        href={wcag22('content-on-hover-or-focus')}
        cite={c.cite}
        checkedOn={VISUAL_CHECKED_ON}
      >
        Where receiving and then removing pointer hover or keyboard focus triggers additional
        content to become visible and then hidden, the following are true:{' '}
        <strong>Dismissible</strong> A mechanism is available to dismiss the additional content
        without moving pointer hover or keyboard focus, unless the additional content communicates
        an input error or does not obscure or replace other content; <strong>Hoverable</strong> If
        pointer hover can trigger the additional content, then the pointer can be moved over the
        additional content without the additional content disappearing; <strong>Persistent</strong>{' '}
        The additional content remains visible until the hover or focus trigger is removed, the user
        dismisses it, or its information is no longer valid.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.scope}</p>
    </section>
  );
};
