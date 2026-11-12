import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<span id="search-label" hidden>배송지 검색</span>
<button type="button" aria-labelledby="search-label">
  <svg aria-hidden="true">…</svg>
</button>`,
  en: `<span id="search-label" hidden>Search addresses</span>
<button type="button" aria-labelledby="search-label">
  <svg aria-hidden="true">…</svg>
</button>`,
};

const content = {
  ko: {
    intro: (
      <>
        숨긴 요소는 접근성 트리에서 빠집니다. 그런데 빠진 요소의 글자가 다른 요소의 이름에 쓰일 수는
        있습니다. 아래 코드의 <code>span</code>은 <code>hidden</code>이라 트리에 없지만, 버튼이{' '}
        <code>aria-labelledby</code>로 직접 가리키므로 버튼 이름 계산에는 참조될 수 있습니다.
      </>
    ),
    label: '트리에 없는 글자를 이름으로 가리키기',
    after: (
      <>
        그러니까 &quot;트리에 노출되는가&quot;와 &quot;이름 계산에서 참조되는가&quot;는 서로 다른
        규칙이 정합니다. 한쪽 결과로 다른 쪽을 단정하지 않습니다.
      </>
    ),
    laterTitle: '이름 계산의 세부 규칙은 06장에서 다룹니다',
    later: (
      <>
        어떤 경우에 숨긴 글자가 이름에 들어가고 어떤 경우에 빠지는지는 접근 가능한 이름 계산 명세가
        단계별로 정합니다. 이 장에서는 두 질문을 나눠 묻는 데까지만 보고, 이 예제는{' '}
        <PageLink locale="ko" id="reference-edge-cases" hash="hidden-references" />
        에서 다시 출발점으로 씁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Hidden elements are removed from the accessibility tree. But a removed element&apos;s text
        can still be used in another element&apos;s name. The <code>span</code> below is{' '}
        <code>hidden</code>, so it is not in the tree; but because the button points to it directly
        with <code>aria-labelledby</code>, it can be referenced when the button&apos;s name is
        computed.
      </>
    ),
    label: 'Pointing to text that is not in the tree for a name',
    after: (
      <>
        In other words, &quot;is it exposed in the tree?&quot; and &quot;is it referenced in name
        computation?&quot; are decided by different rules. Do not conclude one from the other.
      </>
    ),
    laterTitle: 'Chapter 06 covers the detailed name computation rules',
    later: (
      <>
        When hidden text goes into a name and when it does not is defined step by step by the
        accessible name computation spec. This chapter only goes as far as asking the two questions
        separately, and this example is the starting point again on{' '}
        <PageLink locale="en" id="reference-edge-cases" hash="hidden-references" />.
      </>
    ),
  },
};

export const HiddenNameSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.hiddenName.id}>
      <DocH2 {...toc.hiddenName} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.laterTitle}>
        <p>{c.later}</p>
      </Callout>
    </section>
  );
};
