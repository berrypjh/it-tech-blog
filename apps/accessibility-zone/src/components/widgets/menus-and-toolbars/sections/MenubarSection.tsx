import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<ul role="menubar" aria-label="메모 편집">
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu"
            aria-expanded="true" tabindex="0">파일</button>
    <ul role="menu" aria-label="파일">
      <li role="none"><button type="button" role="menuitem" tabindex="-1">새 메모</button></li>
      <li role="none"><button type="button" role="menuitem" tabindex="-1">내보내기</button></li>
    </ul>
  </li>
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu"
            aria-expanded="false" tabindex="-1">편집</button>
  </li>
</ul>`,
  en: `<ul role="menubar" aria-label="Edit note">
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu"
            aria-expanded="true" tabindex="0">File</button>
    <ul role="menu" aria-label="File">
      <li role="none"><button type="button" role="menuitem" tabindex="-1">New note</button></li>
      <li role="none"><button type="button" role="menuitem" tabindex="-1">Export</button></li>
    </ul>
  </li>
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu"
            aria-expanded="false" tabindex="-1">Edit</button>
  </li>
</ul>`,
};

const content = {
  ko: {
    intro: (
      <>
        메뉴바는 늘 보이는 메뉴 줄입니다. 가로줄의 항목마다 세로로 펼쳐지는 하위 메뉴가 있어, 한
        위젯 안에서 화살표가 두 축으로 움직입니다. 이 페이지는 메뉴바를 실행 예제로 만들지 않고,
        읽을 수 있는 코드와 키 표로 다룹니다. 웹 페이지에서 메뉴바가 꼭 필요한 경우는 문서
        편집기처럼 드뭅니다.
      </>
    ),
    label: '“파일” 하위 메뉴가 열린 메뉴바의 코드',
    caption: '가로 메뉴바와 세로 하위 메뉴의 키',
    head: ['키', '메뉴바의 항목에서', '하위 메뉴의 항목에서'],
    rows: [
      [
        '좌우 화살표',
        '이전 · 다음 항목으로. 끝에서 반대쪽 끝으로 가는 것은 선택 사항',
        '하위 메뉴를 닫고 메뉴바의 이전 · 다음 항목으로',
      ],
      ['아래 화살표', '하위 메뉴를 열고 첫 항목으로', '다음 항목으로'],
      ['위 화살표', '하위 메뉴를 열고 마지막 항목으로 (선택 사항)', '이전 항목으로'],
      ['Enter (Space는 선택 사항)', '하위 메뉴를 열고 첫 항목으로', '명령을 실행하고 메뉴를 닫음'],
      ['Escape', '해당 없음', '하위 메뉴를 닫고 그것을 연 메뉴바 항목으로 복귀'],
      ['Tab', '메뉴바 밖으로 나감', '모든 메뉴를 닫고 메뉴바 밖으로 나감'],
    ],
    tag: '표는 APG의 Menu and Menubar 패턴을 가로 메뉴바와 한 단계 하위 메뉴에 맞춰 줄인 것입니다. 하위 메뉴 안에 또 하위 메뉴가 있으면 오른쪽 화살표가 그것을 엽니다. 규범이 아니고, 이 페이지에서 실행해 확인한 것도 아닙니다.',
  },
  en: {
    intro: (
      <>
        A menubar is an always-visible row of menus. Each item in the horizontal row has a submenu
        that opens vertically, so within one widget the arrows move along two axes. This page does
        not build a running menubar; it covers it with readable code and a key table. A web page
        truly needing a menubar, as a document editor does, is rare.
      </>
    ),
    label: 'Code of a menubar with the “File” submenu open',
    caption: 'Keys of a horizontal menubar and its vertical submenu',
    head: ['Key', 'On an item of the menubar', 'On an item of a submenu'],
    rows: [
      [
        'Left and right arrows',
        'Previous or next item; wrapping at the ends is optional',
        'Closes the submenu and moves to the previous or next menubar item',
      ],
      ['Down arrow', 'Opens the submenu and focuses its first item', 'Next item'],
      ['Up arrow', 'Opens the submenu and focuses its last item (optional)', 'Previous item'],
      [
        'Enter (Space is optional)',
        'Opens the submenu and focuses its first item',
        'Runs the command and closes the menu',
      ],
      [
        'Escape',
        'Not applicable',
        'Closes the submenu and returns to the menubar item that opened it',
      ],
      ['Tab', 'Leaves the menubar', 'Closes all menus and leaves the menubar'],
    ],
    tag: 'The table condenses APG’s Menu and Menubar pattern to a horizontal menubar with one level of submenu. If a submenu holds another submenu, the right arrow opens it. It is not normative, and it was not run and verified on this page.',
  },
};

export const MenubarSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.menubar.id}>
      <DocH2 {...toc.menubar} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
    </section>
  );
};
