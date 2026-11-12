import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, whatwg } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="accessibility-tree" hash="hiding-and-style" />
        에서는 숨기는 방법마다 화면과 접근성 트리의 결과를 비교했습니다. 여기서는 축을 하나 더해,
        키보드 포커스와 클릭이 닿는지도 함께 봅니다.
      </>
    ),
    caption: '다섯 방법의 세 축',
    head: ['방법', '화면 표시', '포커스와 조작', '접근성 노출 (명세상 예상)'],
    rows: [
      [<code key="m">hidden</code>, '안 보임, 자리 없음', '닿지 않습니다', '빠집니다'],
      [<code key="m">display: none</code>, '안 보임, 자리 없음', '닿지 않습니다', '빠집니다'],
      [<code key="m">visibility: hidden</code>, '안 보임, 자리 남음', '닿지 않습니다', '빠집니다'],
      [
        <code key="m">aria-hidden=&quot;true&quot;</code>,
        '그대로 보임',
        '그대로 닿습니다',
        '자손까지 빠집니다',
      ],
      [
        <code key="m">inert</code>,
        '그대로 보임 — 작성자가 가려야 함',
        '포커스 · 클릭 · 찾기가 닿지 않습니다',
        '자손까지 빠집니다',
      ],
    ],
    columns: (
      <>
        앞의 두 열은 화면과 키보드로 직접 관찰할 수 있습니다. 마지막 열은 명세가 기대하는 노출이라,
        실제 노출은 브라우저 도구의 접근성 트리에서 확인합니다.
      </>
    ),
    inertIntro: (
      <>
        <code>inert</code>는 조작과 노출을 함께 막지만 화면은 그대로 둡니다. 그래서 HTML은
        화면에서도 가려진 콘텐츠에만 쓰라고 합니다.
      </>
    ),
    cite: 'HTML Living Standard (2026-11-06 갱신) — 6.3.2 The inert attribute',
    laterTitle: '숨긴 요소를 이름에 참조하는 경우는 06장에서 다룹니다',
    later: (
      <>
        숨긴 요소도 <code>aria-labelledby</code>로 가리키면 이름 계산에 쓰일 수 있습니다. 그 세부
        규칙은 <PageLink locale="ko" id="reference-edge-cases" hash="hidden-references" />
        에서 다루고, 이 페이지는 세 축의 차이까지만 봅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        On <PageLink locale="en" id="accessibility-tree" hash="hiding-and-style" />, we compared
        what each hiding method does to the screen and the accessibility tree. Here we add one more
        axis: whether keyboard focus and clicks still reach the content.
      </>
    ),
    caption: 'The five methods on three axes',
    head: ['Method', 'Display', 'Focus and interaction', 'Exposure (expected by the specs)'],
    rows: [
      [<code key="m">hidden</code>, 'Not shown, no space', 'Does not reach', 'Removed'],
      [<code key="m">display: none</code>, 'Not shown, no space', 'Does not reach', 'Removed'],
      [
        <code key="m">visibility: hidden</code>,
        'Not shown, space kept',
        'Does not reach',
        'Removed',
      ],
      [
        <code key="m">aria-hidden=&quot;true&quot;</code>,
        'Still shown',
        'Still reaches',
        'Removed with descendants',
      ],
      [
        <code key="m">inert</code>,
        'Still shown — the author must obscure it',
        'Focus, clicks, and find-in-page do not reach',
        'Removed with descendants',
      ],
    ],
    columns: (
      <>
        The first two columns can be observed directly on screen and with the keyboard. The last
        column is the exposure the specs expect; check real exposure in the accessibility tree in
        browser tools.
      </>
    ),
    inertIntro: (
      <>
        <code>inert</code> blocks interaction and exposure together but leaves the screen as is. So
        HTML says to use it only on content that is also visually obscured.
      </>
    ),
    cite: 'HTML Living Standard (updated 2026-11-06) — 6.3.2 The inert attribute',
    laterTitle: 'Chapter 06 covers referencing hidden elements in names',
    later: (
      <>
        A hidden element can still be used in name computation when pointed to with{' '}
        <code>aria-labelledby</code>. The detailed rules are on{' '}
        <PageLink locale="en" id="reference-edge-cases" hash="hidden-references" />; this page stops
        at the differences on the three axes.
      </>
    ),
  },
};

export const AxesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.axes.id}>
      <DocH2 {...toc.axes} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap gap-sm">
        <SourceTag locale={locale} id="normative" />
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.columns}</p>
      <p>{c.inertIntro}</p>
      <NormativeQuote
        locale={locale}
        href={whatwg('interaction', 'the-inert-attribute')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Authors should not specify elements as inert unless the content they represent are also
        visually obscured in some way. In most cases, authors should not specify the inert attribute
        on individual form controls. In these instances, the disabled attribute is probably more
        appropriate.
      </NormativeQuote>
      <Callout variant="note" title={c.laterTitle}>
        {c.later}
      </Callout>
    </section>
  );
};
