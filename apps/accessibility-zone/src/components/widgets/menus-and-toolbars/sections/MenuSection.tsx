import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { MenuButtonDemo } from '../demos/MenuButtonDemo';
import { getToc } from '../toc';

const code = {
  ko: `<button type="button" id="actions" aria-haspopup="menu"
        aria-expanded="true" aria-controls="actions-menu">“행사 안내문” 작업</button>

<ul id="actions-menu" role="menu" aria-labelledby="actions">
  <li role="none"><button type="button" role="menuitem" tabindex="-1">복사</button></li>
  <li role="none"><button type="button" role="menuitem" tabindex="-1">이름 바꾸기</button></li>
  <li role="none"><button type="button" role="menuitem" tabindex="-1">삭제</button></li>
</ul>
<!-- 닫혀 있을 때는 aria-expanded="false"이고 목록은 DOM에 없다 -->`,
  en: `<button type="button" id="actions" aria-haspopup="menu"
        aria-expanded="true" aria-controls="actions-menu">Actions for “Event notice”</button>

<ul id="actions-menu" role="menu" aria-labelledby="actions">
  <li role="none"><button type="button" role="menuitem" tabindex="-1">Copy</button></li>
  <li role="none"><button type="button" role="menuitem" tabindex="-1">Rename</button></li>
  <li role="none"><button type="button" role="menuitem" tabindex="-1">Delete</button></li>
</ul>
<!-- When closed, aria-expanded="false" and the list is not in the DOM -->`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        메뉴 버튼은 누르면 명령 목록이 나타나는 버튼입니다. 열리는 순간 초점이 목록 안으로 들어가고,
        명령을 실행하거나 Escape로 닫으면 반드시 버튼으로 돌아옵니다. 열고 닫는 상태는{' '}
        <PageLink locale={locale} id="disclosure-and-accordion" />와 같은 <code>aria-expanded</code>
        이고, 실행한 결과는 초점을 옮기지 않고 상태 메시지로 알립니다(
        <PageLink locale={locale} id="choosing-update-means" />
        ).
      </>
    ),
    label: '열려 있는 메뉴 버튼의 완성 코드',
    caption: '메뉴 버튼 예제의 의미 · 상태 · 키 · 초점 · 취소',
    head: ['항목', '계약'],
    rows: [
      ['의미', 'aria-haspopup="menu"인 button과, 그 버튼이 이름을 주는 menu 안의 menuitem'],
      ['상태', '버튼의 aria-expanded. 닫히면 목록은 DOM에 없음'],
      ['열기', 'Enter · Space · 아래 화살표는 첫 항목으로, 위 화살표는 마지막 항목으로 초점'],
      ['이동', '위아래 화살표. 끝에서는 반대쪽 끝으로. Home · End는 처음 · 끝으로'],
      ['실행', 'Enter · Space. 메뉴를 닫고 초점은 버튼으로, 결과는 상태 메시지로'],
      ['취소', 'Escape는 아무것도 실행하지 않고 닫은 뒤 초점을 버튼으로'],
      ['Tab', '메뉴를 닫고 버튼의 다음 요소로. 가로채지 않음'],
    ],
    tag: '키는 APG의 권고입니다. APG에서 화살표로 여는 것, 끝에서 반대쪽으로 돌아가는 것, Space로 실행하는 것은 선택 사항이고, Home · End는 끝에서 돌아가지 않을 때의 키로 적혀 있습니다. 돌아가기와 Home · End를 함께 넣은 것은 이 예제의 정책입니다. 글자 키로 항목을 찾는 기능은 넣지 않았습니다. 예제가 모든 브라우저와 보조기술 조합에서의 동작을 보증하지는 않습니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A menu button is a button that shows a list of commands when pressed. Focus enters the list
        the moment it opens, and must return to the button when a command runs or Escape closes it.
        The open state is <code>aria-expanded</code>, as on{' '}
        <PageLink locale={locale} id="disclosure-and-accordion" />
        , and the result of running a command is conveyed by a status message without moving focus (
        <PageLink locale={locale} id="choosing-update-means" />
        ).
      </>
    ),
    label: 'Complete code of an open menu button',
    caption: 'Semantics, state, keys, focus, and cancel in the menu button example',
    head: ['Item', 'Contract'],
    rows: [
      [
        'Semantics',
        'A button with aria-haspopup="menu", and menuitems in a menu named by that button',
      ],
      ['State', 'aria-expanded on the button; when closed the list is not in the DOM'],
      ['Open', 'Enter, Space, and down arrow focus the first item; up arrow the last'],
      ['Move', 'Up and down arrows, wrapping at the ends; Home and End go to first and last'],
      [
        'Run',
        'Enter or Space; closes the menu, focus returns to the button, result as a status message',
      ],
      ['Cancel', 'Escape runs nothing, closes, and returns focus to the button'],
      ['Tab', 'Closes the menu and moves to the element after the button; not intercepted'],
    ],
    tag: 'The keys are APG recommendations. In APG, opening with arrows, wrapping at the ends, and running with Space are optional, and Home and End are listed for when wrapping is not supported. Having both wrapping and Home and End is this example’s policy. Type-ahead is not included. The example does not guarantee behavior across every browser and assistive technology pairing.',
  },
};

export const MenuSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.menu.id}>
      <DocH2 {...toc.menu} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
      <MenuButtonDemo />
    </section>
  );
};
