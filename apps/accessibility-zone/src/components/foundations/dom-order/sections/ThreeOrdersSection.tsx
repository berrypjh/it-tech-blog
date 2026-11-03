import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { Code, Keyboard, Monitor } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: DOM · 화면 · 포커스 순서. */
const rowIcons = [Code, Monitor, Keyboard];

const content = {
  ko: {
    intro: (
      <>
        한 화면에는 순서가 세 가지 있습니다. 대부분은 셋이 같아서 의식하지 않지만, CSS로 배치를
        바꾸면 서로 달라질 수 있습니다.
      </>
    ),
    caption: '세 가지 순서와 그것을 정하는 것',
    head: ['순서', '정하는 것', '누가 따르나'],
    rows: [
      ['DOM 순서', 'HTML에 적힌 순서(스크립트가 바꾼 뒤의 DOM)', '브라우저 · 보조기술의 기준'],
      ['화면 순서', 'CSS 배치(flex · grid · position 등)', '화면을 보는 사용자'],
      [
        '포커스 순서',
        <>
          DOM 순서. 단, <code>tabindex</code>가 양수인 요소가 먼저
        </>,
        'Tab · Shift+Tab으로 이동하는 사용자',
      ],
    ],
    reading: (
      <>
        화면 낭독기가 내용을 차례로 읽는 순서도 대개 DOM 순서를 따릅니다. 다만 브라우저가 만든
        접근성 트리를 보조기술이 어떻게 훑는지는 제품마다 다르므로, &quot;항상 DOM 순서와
        같다&quot;고 단정하지 않고 실제 환경에서 확인합니다.
      </>
    ),
    rules: (
      <>
        WCAG는 두 가지를 요구합니다. 순서가 뜻을 바꾸면 그 순서를 기계가 읽을 수 있어야 하고(WCAG
        2.2 성공 기준 1.3.2 의미 있는 순서(A)), 포커스는 뜻과 조작이 유지되는 순서로 이동해야
        합니다(WCAG 2.2 성공 기준 2.4.3 포커스 순서(A)). &quot;화면과 DOM 순서가 완전히 같아야
        한다&quot;는 문장은 요구가 아니지만, 어긋나면 이 두 요구를 어기기 쉽습니다.
      </>
    ),
    tabindexTitle: '양수 tabindex로 순서를 고치지 않습니다',
    tabindex: (
      <>
        <code>tabindex</code>를 양수로 주면 그 요소들이 DOM 순서보다 먼저 포커스를 받습니다. 페이지
        전체의 흐름이 깨지고 고치기 어려워지므로, 순서는 <code>tabindex</code>가 아니라 DOM 순서로
        정합니다. <code>0</code>은 &quot;DOM 순서대로 포커스 받기&quot;, <code>-1</code>은
        &quot;Tab으로는 닿지 않지만 스크립트로 포커스 가능&quot;입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        One screen has three orders. Usually all three are the same and you never notice, but they
        can drift apart once CSS rearranges the layout.
      </>
    ),
    caption: 'The three orders and what sets them',
    head: ['Order', 'Set by', 'Who follows it'],
    rows: [
      [
        'DOM order',
        'The order written in HTML (the DOM after scripts change it)',
        'The basis for browsers and assistive technology',
      ],
      ['Visual order', 'CSS layout (flex, grid, position, …)', 'Users looking at the screen'],
      [
        'Focus order',
        <>
          DOM order, except elements with a positive <code>tabindex</code> come first
        </>,
        'Users moving with Tab and Shift+Tab',
      ],
    ],
    reading: (
      <>
        The order in which a screen reader reads content usually follows the DOM order too. But how
        assistive technology walks the accessibility tree the browser builds differs by product, so
        do not assert it is &quot;always the DOM order&quot;; check in real environments.
      </>
    ),
    rules: (
      <>
        WCAG requires two things: when sequence affects meaning, that sequence must be
        programmatically determinable (1.3.2, A), and focus must move in an order that preserves
        meaning and operability (2.4.3, A). &quot;Visual and DOM order must be identical&quot; is
        not itself a requirement, but when they disagree it is easy to break these two.
      </>
    ),
    tabindexTitle: 'Do not fix the order with a positive tabindex',
    tabindex: (
      <>
        A positive <code>tabindex</code> makes those elements receive focus before the DOM order. It
        breaks the flow of the whole page and is hard to maintain, so set order with the DOM, not{' '}
        <code>tabindex</code>. <code>0</code> means &quot;focusable in DOM order&quot;;{' '}
        <code>-1</code> means &quot;not reachable with Tab, but focusable from script&quot;.
      </>
    ),
  },
};

export const ThreeOrdersSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.threeOrders.id}>
      <DocH2 {...toc.threeOrders} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.reading}</p>
      <p>{c.rules}</p>
      <Callout variant="pitfall" title={c.tabindexTitle}>
        <p>{c.tabindex}</p>
      </Callout>
    </section>
  );
};
