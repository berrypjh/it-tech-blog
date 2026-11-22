import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { ToolbarDemo } from '../demos/ToolbarDemo';
import { getToc } from '../toc';

const code = {
  ko: `<div role="toolbar" aria-label="메모 서식" aria-controls="note">
  <button type="button" aria-pressed="true" tabindex="0">굵게</button>
  <button type="button" aria-pressed="false" tabindex="-1">기울임</button>
  <button type="button" aria-pressed="false" tabindex="-1">밑줄</button>
</div>

<label for="note">메모</label>
<textarea id="note"></textarea>`,
  en: `<div role="toolbar" aria-label="Note formatting" aria-controls="note">
  <button type="button" aria-pressed="true" tabindex="0">Bold</button>
  <button type="button" aria-pressed="false" tabindex="-1">Italic</button>
  <button type="button" aria-pressed="false" tabindex="-1">Underline</button>
</div>

<label for="note">Note</label>
<textarea id="note"></textarea>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        도구 모음은 컨트롤 여럿을 한 묶음으로 만들어 Tab 정지점을 하나로 줄입니다. 안의 버튼은{' '}
        <PageLink locale={locale} id="selection-controls" />의 toggle button 그대로이고, 묶음만
        더해집니다. 가로로 늘어선 도구 모음은 좌우 화살표로 옮기고, 세로라면{' '}
        <code>aria-orientation=&quot;vertical&quot;</code>을 주고 위아래 화살표로 옮깁니다.
      </>
    ),
    label: '도구 모음과 메모 칸의 완성 코드',
    caption: '도구 모음 예제의 의미 · 상태 · 키 · 초점 · 이탈',
    head: ['항목', '계약'],
    rows: [
      ['의미', '이름을 가진 toolbar 안의 button들'],
      ['상태', '버튼마다 aria-pressed. 한 버튼만 tabindex="0"'],
      ['진입', 'Tab으로 들어오면 마지막으로 초점이 있던 버튼. 처음이면 첫 버튼'],
      ['이동', '좌우 화살표. 끝에서는 반대쪽 끝으로. Home · End는 처음 · 끝으로'],
      ['실행', 'Space · Enter로 서식을 켜고 끔. 초점은 그대로'],
      ['이탈', 'Tab으로 도구 모음을 나가 메모 칸으로. 가로채지 않음'],
      [
        '편집 키',
        '메모 칸 안의 화살표 · Home · End는 글자 사이를 움직임. 도구 모음이 건드리지 않음',
      ],
    ],
    after: (
      <>
        키 처리는 도구 모음의 버튼에만 답니다. 문서 전체에서 화살표를 듣고 있으면 메모 칸에서 글자
        사이를 옮기려던 키까지 가로채게 됩니다. APG는 도구 모음을 컨트롤이 셋 이상일 때에만 쓰라고
        권합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A toolbar groups several controls and reduces them to one Tab stop. The buttons inside are
        the toggle buttons from <PageLink locale={locale} id="selection-controls" /> unchanged; only
        the grouping is added. A horizontal toolbar moves with left and right arrows; a vertical one
        takes <code>aria-orientation=&quot;vertical&quot;</code> and moves with up and down arrows.
      </>
    ),
    label: 'Complete code of the toolbar and the note field',
    caption: 'Semantics, state, keys, focus, and leaving in the toolbar example',
    head: ['Item', 'Contract'],
    rows: [
      ['Semantics', 'Buttons inside a named toolbar'],
      ['State', 'aria-pressed on each button; only one button has tabindex="0"'],
      ['Entering', 'Tab lands on the button that last had focus; the first button the first time'],
      ['Moving', 'Left and right arrows, wrapping at the ends; Home and End go to first and last'],
      ['Running', 'Space or Enter turns a format on or off; focus stays'],
      ['Leaving', 'Tab leaves the toolbar for the note field; not intercepted'],
      [
        'Editing keys',
        'Arrows, Home, and End inside the note field move among characters; the toolbar does not touch them',
      ],
    ],
    after: (
      <>
        Key handling is attached only to the toolbar’s buttons. Listening for arrows on the whole
        document would also intercept keys meant to move among characters in the note field. APG
        advises using a toolbar only when it holds three or more controls.
      </>
    ),
  },
};

export const ToolbarSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.toolbar.id}>
      <DocH2 {...toc.toolbar} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <ToolbarDemo />
    </section>
  );
};
