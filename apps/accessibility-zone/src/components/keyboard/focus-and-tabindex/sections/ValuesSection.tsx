import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON, whatwg } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <code>tabindex</code>는 요소를 포커스 영역으로 만들고, 순차 이동에 넣을지와 상대 순서를
        정합니다. 아래 표는 HTML 표준의 요약을 옮긴 것입니다. 표준은 값마다 작성자의
        &quot;선호&quot;로 적고, 사용자 에이전트가 플랫폼 관례에 따라 다르게 처리할 여지를 둡니다.
      </>
    ),
    caption: 'tabindex 값과 기대 동작',
    head: ['값', '프로그램 포커스', '순차 이동', '쓰는 곳'],
    rows: [
      [
        '없음',
        '요소에 따라 다름',
        'button · a[href] · input 등은 대체로 포함',
        '네이티브 컨트롤의 기본값',
      ],
      [<code key="a">0</code>, '가능', '포함 (DOM 순서)', '직접 만든 위젯의 진입점'],
      [
        <code key="a">-1</code>,
        '가능',
        '빼려는 값',
        '포커스 도착지 제목, 위젯 내부 항목. 클릭 포커스도 막지 않음',
      ],
      [
        <code key="a">1</code>,
        '가능',
        '포함, 값이 0인 요소들보다 먼저',
        '권장하지 않음. 페이지 전체 순서가 바뀜',
      ],
    ],
    cite: 'HTML Living Standard (2026-11-17 갱신) — 6.6.3 The tabindex attribute',
    calloutTitle: '-1은 포커스 금지가 아닙니다',
    callout: (
      <>
        <code>tabindex=&quot;-1&quot;</code>은 Tab 순서에서 빼려는 값일 뿐, 클릭이나{' '}
        <code>focus()</code>를 막지 않고 click 이벤트도 그대로 받습니다. 포커스를 정말 막으려면
        요소를 비활성화하거나 inert로 만듭니다.
      </>
    ),
    positive: (
      <>
        양수 값은 그 요소를 페이지의 다른 모든 요소보다 앞으로 끌어옵니다. DOM 순서가 틀렸다면
        tabindex를 더하지 말고 DOM 순서를 고칩니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <code>tabindex</code> makes an element a focusable area and decides whether it joins
        sequential navigation and in what relative order. The table below follows the HTML
        Standard&apos;s summary. The standard words each value as the author&apos;s
        &quot;preference&quot; and lets the user agent follow platform conventions.
      </>
    ),
    caption: 'tabindex values and the expected behavior',
    head: ['Value', 'Programmatic focus', 'Sequential navigation', 'Used for'],
    rows: [
      [
        'None',
        'Depends on the element',
        'button, a[href], input, and so on are generally included',
        'The default of native controls',
      ],
      [<code key="a">0</code>, 'Yes', 'Included (DOM order)', 'The entry point of a custom widget'],
      [
        <code key="a">-1</code>,
        'Yes',
        'Asks to be left out',
        'Headings that receive focus, items inside a widget. Click focus is not blocked',
      ],
      [
        <code key="a">1</code>,
        'Yes',
        'Included, before elements with 0',
        'Not recommended. It changes the order of the whole page',
      ],
    ],
    cite: 'HTML Living Standard (updated 2026-11-17) — 6.6.3 The tabindex attribute',
    calloutTitle: '-1 does not forbid focus',
    callout: (
      <>
        <code>tabindex=&quot;-1&quot;</code> only asks to leave the Tab order. It blocks neither
        clicks nor <code>focus()</code>, and click events still arrive. To really prevent focus,
        disable the element or make it inert.
      </>
    ),
    positive: (
      <>
        A positive value pulls the element ahead of everything else on the page. If the DOM order is
        wrong, fix the DOM order instead of adding tabindex.
      </>
    ),
  },
};

export const ValuesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.values.id}>
      <DocH2 {...toc.values} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="normative" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={whatwg('interaction', 'attr-tabindex')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        Developers should use caution when using values other than 0 or −1 for their tabindex
        attributes as this is complicated to do correctly.
      </NormativeQuote>
      <p>{c.positive}</p>
      <NormativeQuote
        locale={locale}
        href={whatwg('interaction', 'attr-tabindex')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        Note that the tabindex attribute cannot be used to make an element non-focusable. The only
        way a page author can do that is by disabling the element, or making it inert.
      </NormativeQuote>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
