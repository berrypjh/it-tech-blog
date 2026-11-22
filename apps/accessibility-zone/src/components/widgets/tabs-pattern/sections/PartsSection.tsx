import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<div role="tablist" aria-label="행사 안내">
  <button type="button" role="tab" id="tab-1" aria-selected="true"
          aria-controls="panel-1" tabindex="0">일정</button>
  <button type="button" role="tab" id="tab-2" aria-selected="false"
          aria-controls="panel-2" tabindex="-1">장소</button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1" tabindex="0">…</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" tabindex="0" hidden>…</div>`,
  en: `<div role="tablist" aria-label="Event guide">
  <button type="button" role="tab" id="tab-1" aria-selected="true"
          aria-controls="panel-1" tabindex="0">Schedule</button>
  <button type="button" role="tab" id="tab-2" aria-selected="false"
          aria-controls="panel-2" tabindex="-1">Venue</button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1" tabindex="0">…</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" tabindex="0" hidden>…</div>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        탭은 한 화면 안에서 패널을 바꿔 보여 주는 컴포넌트입니다. 다른 주소로 가는 메뉴가 아닙니다.
        탭 목록은 Tab 순서에 한 번만 들어가고 그 안은 방향키로 다니므로,{' '}
        <PageLink locale={locale} id="composite-focus" />의 roving tabindex를 그대로 씁니다. 선택된
        탭만 <code>tabindex=&quot;0&quot;</code>을 갖습니다.
      </>
    ),
    label: '탭 목록과 패널의 완성 코드',
    caption: '탭 예제의 의미 · 상태 · 키 · 초점 · 이탈',
    head: ['항목', '계약'],
    rows: [
      ['의미', 'tablist 안의 tab, 그리고 tab마다 하나의 tabpanel. 서로 id로 가리킴'],
      ['상태', '선택된 탭만 aria-selected="true"이고 그 패널만 hidden이 아님'],
      ['좌우 화살표', '다음 · 이전 탭으로 초점. 끝에서는 반대쪽 끝으로'],
      ['Home · End', '첫 탭 · 마지막 탭으로 초점'],
      ['Enter · Space', '초점이 있는 탭을 선택 (수동 활성화)'],
      ['Tab', '탭 목록을 나가 보이는 패널로. 다시 들어오면 선택된 탭으로'],
    ],
    tag: '키는 APG의 권고입니다. Home · End는 APG에서 선택 사항이고, 이 예제는 구현했으므로 표와 테스트에 함께 적었습니다. 패널에 tabindex="0"을 준 것은 패널 안에 초점을 받는 요소가 없기 때문입니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Tabs switch which panel is shown within one screen. They are not a menu that goes to another
        address. The tab list enters the Tab order once and is traversed with arrow keys inside, so
        it uses the roving tabindex from <PageLink locale={locale} id="composite-focus" /> as is.
        Only the selected tab has <code>tabindex=&quot;0&quot;</code>.
      </>
    ),
    label: 'Complete code of the tab list and panels',
    caption: 'Semantics, state, keys, focus, and leaving in the tabs example',
    head: ['Item', 'Contract'],
    rows: [
      ['Semantics', 'tab inside tablist, and one tabpanel per tab, pointing to each other by id'],
      ['State', 'Only the selected tab has aria-selected="true" and only its panel is not hidden'],
      ['Left and right arrows', 'Focus to the next or previous tab; wraps at the ends'],
      ['Home, End', 'Focus to the first or last tab'],
      ['Enter, Space', 'Select the focused tab (manual activation)'],
      ['Tab', 'Leaves the tab list to the visible panel; coming back lands on the selected tab'],
    ],
    tag: 'The keys are APG recommendations. Home and End are optional in APG; this example implements them, so they are in the table and the tests. The panel has tabindex="0" because it contains no focusable element.',
  },
};

export const PartsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.parts.id}>
      <DocH2 {...toc.parts} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
    </section>
  );
};
