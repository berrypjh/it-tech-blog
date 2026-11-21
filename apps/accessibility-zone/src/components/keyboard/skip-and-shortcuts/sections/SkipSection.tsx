import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON, whatwg } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { SkipLinkDemo } from '../demos/SkipLinkDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        메뉴처럼 페이지마다 반복되는 블록을 키보드로 매번 지나가지 않게 하는 수단이 필요합니다.
        건너뛰기 링크는 그 대표적인 방법이고, 제목 · 랜드마크 구조도 우회를 돕습니다.
      </>
    ),
    bypassCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.1 Bypass Blocks (A)',
    start: (
      <>
        링크를 누르면 화면만 움직이는 것으로 끝나면 안 됩니다. 다음 Tab이 도착한 곳에서 이어져야
        합니다. HTML은 조각으로 이동할 때 순차 포커스 탐색의 시작점을 대상 요소로 두라고 정합니다.
        대상이 포커스를 받을 수 있는지와는 별개입니다.
      </>
    ),
    startCite: 'HTML Living Standard (2026-11-17 갱신) — 6.6.5 Sequential focus navigation',
    shellTitle: '이 사이트의 건너뛰기 링크도 확인해 보세요',
    shell: (
      <>
        공통 셸의 첫 Tab 위치에는 본문으로 가는 링크가 있고, 대상은 <code>main</code>입니다.{' '}
        <code>main</code>에는 <code>tabindex</code>가 없어 활성 요소가 그쪽으로 옮겨진다고 단정할 수
        없습니다. 페이지를 새로 연 뒤 링크를 누르고, 다음 Tab이 본문 안에서 이어지는지 봅니다.
        문제가 보이면 재현 환경과 영향을 적어 공통 셸의 별도 변경으로 다룹니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Keyboard users need a way not to pass through blocks repeated on every page, such as menus.
        A skip link is the typical way, and heading and landmark structure also help.
      </>
    ),
    bypassCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.4.1 Bypass Blocks (A)',
    start: (
      <>
        Activating the link must do more than move the view. The next Tab should continue from where
        it landed. HTML says navigating to a fragment sets the sequential focus navigation starting
        point to the target, whether or not the target can take focus.
      </>
    ),
    startCite: 'HTML Living Standard (updated 2026-11-17) — 6.6.5 Sequential focus navigation',
    shellTitle: 'Check this site’s skip link too',
    shell: (
      <>
        The first Tab stop of the shared shell is a link to the content, and its target is{' '}
        <code>main</code>. <code>main</code> has no <code>tabindex</code>, so do not assume the
        active element moves there. Open a page fresh, activate the link, and see whether the next
        Tab continues inside the content. If you see a problem, record the environment and impact
        and treat it as a separate change to the shell.
      </>
    ),
  },
};

export const SkipSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.skip.id}>
      <DocH2 {...toc.skip} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('bypass-blocks')}
        cite={c.bypassCite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        A mechanism is available to bypass blocks of content that are repeated on multiple web
        pages.
      </NormativeQuote>
      <p>{c.start}</p>
      <NormativeQuote
        locale={locale}
        href={whatwg('interaction', 'sequential-focus-navigation-starting-point')}
        cite={c.startCite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        User agents are required to set the sequential focus navigation starting point to the target
        element when navigating to a fragment.
      </NormativeQuote>
      <SkipLinkDemo />
      <Callout variant="practice" title={c.shellTitle}>
        {c.shell}
      </Callout>
    </section>
  );
};
