import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { WIDGETS_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        자동으로 넘어가는 내용은 <PageLink locale={locale} id="motion-and-updates" />
        에서 본 자동 갱신과 같은 요구를 받습니다. 저절로 시작해 다른 내용과 나란히 보이는 갱신에는
        멈추거나 숨기거나 빈도를 조절할 수단이 있어야 합니다.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.2 Pause, Stop, Hide (Level A)',
    caption: '자동 넘김에 대한 APG의 권고와 이 예제의 정책',
    head: ['항목', 'APG의 권고', '이 예제'],
    rows: [
      [
        '시작',
        '페이지를 열 때 저절로 시작하는 구현도 있음',
        '저절로 시작하지 않음. 사용자가 버튼으로 시작',
      ],
      ['넘김 버튼', '멈추고 다시 시작하는 버튼을 둠', '조작 버튼 가운데 맨 앞에 둠'],
      [
        '키보드 초점',
        '초점이 캐러셀에 들어오면 멈추고, 사용자가 요청하기 전에는 다시 시작하지 않음',
        '넘김 버튼 밖의 요소가 초점을 받으면 멈춘 채로 남음',
      ],
      ['포인터', '포인터가 캐러셀 위에 있는 동안 멈춤', '포인터가 안내 위에 있는 동안 잠시 멈춤'],
      ['이전 · 다음', '초점을 옮기지 않음', '누르면 자동 넘김도 멈춤'],
      ['알림', '도는 동안 live 영역을 끔', '도는 동안 aria-live="off"'],
      [
        '모션 줄이기',
        '패턴에 따로 적혀 있지 않음',
        '사이트 설정이나 운영체제 설정이 켜져 있으면 넘김 버튼을 내놓지 않음',
      ],
    ],
    tag: '가운데 열은 APG 원문(권고, 규범 아님)이고 오른쪽 열은 예제의 정책입니다. 이 예제의 안내는 넘어갈 때 움직이는 효과 없이 바로 바뀝니다.',
    pitfallTitle: '도는 동안 넘어갈 때마다 알리지 않습니다',
    pitfall: (locale: Locale) => (
      <>
        자동으로 넘어갈 때마다 live 영역이 새 안내를 읽으면, 다른 곳을 읽던 사용자의 낭독이 몇
        초마다 끊깁니다(
        <PageLink locale={locale} id="live-region-roles" />
        ). 사용자가 직접 넘겼을 때만 바뀐 안내를 알립니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Content that moves on automatically falls under the same requirement as the auto-updating
        seen on <PageLink locale={locale} id="motion-and-updates" />. An update that starts by
        itself and shows alongside other content needs a way to pause, stop, or hide it, or to
        control its frequency.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.2 Pause, Stop, Hide (Level A)',
    caption: 'APG’s advice on rotation and this example’s policy',
    head: ['Item', 'APG’s advice', 'This example'],
    rows: [
      [
        'Starting',
        'Some implementations start on page load',
        'Does not start by itself; the user starts it with a button',
      ],
      ['Rotation control', 'A button to stop and restart', 'Placed first among the controls'],
      [
        'Keyboard focus',
        'Stops when focus enters the carousel and does not restart unless the user requests it',
        'Stays stopped once any element other than the rotation control gets focus',
      ],
      [
        'Pointer',
        'Stops while the pointer hovers over the carousel',
        'Pauses while the pointer is over the guide',
      ],
      ['Previous and next', 'Do not move focus', 'Pressing them also stops rotation'],
      ['Announcing', 'Live region off while rotating', 'aria-live="off" while rotating'],
      [
        'Reduced motion',
        'Not stated in the pattern',
        'The rotation control is not offered when the site setting or the OS setting is on',
      ],
    ],
    tag: 'The middle column is the APG text (a recommendation, not normative) and the right column is this example’s policy. Guides here change instantly, with no moving effect.',
    pitfallTitle: 'Do not announce every automatic change',
    pitfall: (locale: Locale) => (
      <>
        If a live region reads each new guide while rotating, speech for a user reading elsewhere is
        interrupted every few seconds (<PageLink locale={locale} id="live-region-roles" />
        ). Announce the changed guide only when the user moved it by hand.
      </>
    ),
  },
};

export const RotationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.rotation.id}>
      <DocH2 {...toc.rotation} />
      <p>{c.intro(locale)}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('pause-stop-hide')}
        cite={c.cite}
        checkedOn={WIDGETS_CHECKED_ON}
      >
        Auto-updating: For any auto-updating information that (1) starts automatically and (2) is
        presented in parallel with other content, there is a mechanism for the user to pause, stop,
        or hide it or to control the frequency of the update unless the auto-updating is part of an
        activity where it is essential.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall(locale)}
      </Callout>
    </section>
  );
};
