import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="navigation-and-current" />의 사이트 메뉴는 링크의
        목록이었습니다. Tab으로 링크마다 멈추고 Enter로 이동합니다. ARIA의 <code>menu</code>는
        그것과 다른 것으로, 데스크톱 프로그램의 메뉴처럼 명령을 고르는 위젯입니다. 역할을 붙이면
        사용자는 그 역할의 키가 동작하리라 기대하므로, 과업에 맞는 쪽을 고릅니다.
      </>
    ),
    caption: '네 묶음의 과업과 키',
    head: ['묶음', '과업', 'Tab', '안에서 옮기는 키', '닫기 · 나가기'],
    rows: [
      ['nav 안의 링크 목록', '페이지로 이동', '링크마다 멈춤', 'Tab', '해당 없음'],
      [
        '메뉴 버튼 + menu',
        '명령 하나를 골라 실행',
        '버튼에 한 번',
        '위아래 화살표',
        'Escape로 닫고 버튼으로',
      ],
      [
        'toolbar',
        '가까이 둔 컨트롤 여럿을 조작',
        '도구 모음에 한 번',
        '축에 맞는 화살표',
        'Tab으로 나감',
      ],
      [
        'menubar',
        '늘 보이는 메뉴 줄에서 명령 실행',
        '메뉴바에 한 번',
        '가로와 세로 두 축',
        'Escape로 하위 메뉴를 닫음',
      ],
    ],
    after: (locale: Locale) => (
      <>
        표의 키는 패턴마다 다릅니다. 모든 복합 위젯에 같은 화살표 규칙을 적용하지 않습니다.
        Listbox는 끝에서 멈췄고(
        <PageLink locale={locale} id="composite-focus" />
        ), 이 페이지의 메뉴와 도구 모음은 끝에서 처음으로 돌아갑니다. 어느 키를 위젯이 맡고 어느
        키를 브라우저에 남길지는 <PageLink locale={locale} id="keys-and-defaults" />의 원칙을
        따릅니다.
      </>
    ),
    pitfallTitle: '사이트 링크 묶음을 menu로 만들지 않습니다',
    pitfall: (
      <>
        링크 목록에 <code>role=&quot;menu&quot;</code>를 붙이면 Tab으로 링크를 하나씩 지나던
        사용자는 길을 잃고, 화살표와 Escape를 기대한 사용자는 동작하지 않는 메뉴를 만납니다. 사이트
        탐색은 <code>nav</code>와 링크로 충분합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        The site menu on <PageLink locale={locale} id="navigation-and-current" /> was a list of
        links: Tab stops on each link and Enter follows it. ARIA’s <code>menu</code> is something
        else, a widget for choosing a command like a menu in a desktop program. Adding a role makes
        users expect its keys to work, so choose the one that fits the task.
      </>
    ),
    caption: 'Task and keys of four groupings',
    head: ['Grouping', 'Task', 'Tab', 'Keys to move inside', 'Closing or leaving'],
    rows: [
      ['A list of links in nav', 'Go to pages', 'Stops on each link', 'Tab', 'Not applicable'],
      [
        'Menu button + menu',
        'Choose and run one command',
        'Once, on the button',
        'Up and down arrows',
        'Escape closes and returns to the button',
      ],
      [
        'toolbar',
        'Operate several controls kept together',
        'Once, on the toolbar',
        'Arrows along its axis',
        'Tab leaves',
      ],
      [
        'menubar',
        'Run commands from an always-visible menu row',
        'Once, on the menubar',
        'Two axes, horizontal and vertical',
        'Escape closes a submenu',
      ],
    ],
    after: (locale: Locale) => (
      <>
        The keys in the table differ by pattern. Do not apply one arrow rule to every composite
        widget. The listbox stopped at its ends (
        <PageLink locale={locale} id="composite-focus" />
        ), while the menu and toolbar on this page wrap from the end to the start. Which keys the
        widget takes and which it leaves to the browser follows{' '}
        <PageLink locale={locale} id="keys-and-defaults" />.
      </>
    ),
    pitfallTitle: 'Do not make a set of site links a menu',
    pitfall: (
      <>
        Adding <code>role=&quot;menu&quot;</code> to a list of links loses users who pass links one
        by one with Tab, and gives users who expect arrows and Escape a menu that does not work.{' '}
        <code>nav</code> and links are enough for site navigation.
      </>
    ),
  },
};

export const KindsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.kinds.id}>
      <DocH2 {...toc.kinds} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after(locale)}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall}
      </Callout>
    </section>
  );
};
