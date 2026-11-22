import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        2.2.2는 두 경우를 나눕니다. 움직이거나 깜박이거나 흐르는 정보는 저절로 시작하고, 5초 넘게
        이어지고, 다른 내용과 함께 보일 때 멈추거나 숨길 수단이 필요합니다. 자동 갱신 정보는 저절로
        시작하고 다른 내용과 함께 보이면 길이와 관계없이 멈추거나 숨기거나 빈도를 조절할 수단이
        필요합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.2.2 Pause, Stop, Hide (A)',
    caption: '2.2.2를 적용해 보는 예',
    head: ['예', '저절로 시작', '조건', '판단'],
    rows: [
      ['10초마다 넘어가는 공지 배너', '예', '5초 초과 · 다른 내용과 함께', '멈춤 수단 필요'],
      ['3초 동안만 도는 로딩 표시', '예', '5초 이하', '움직임 조건 해당 없음'],
      [
        '버튼을 눌러야 시작하는 좌석 갱신',
        '아니요',
        '사용자가 시작',
        '자동 시작 조건 해당 없음. 그래도 멈춤 제공',
      ],
    ],
  },
  en: {
    intro: (
      <>
        2.2.2 separates two cases. Moving, blinking, or scrolling information needs a way to pause,
        stop, or hide it when it starts automatically, lasts more than five seconds, and is shown
        with other content. Auto-updating information that starts automatically and is shown with
        other content needs a way to pause, stop, hide, or control its frequency, regardless of
        length.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.2.2 Pause, Stop, Hide (A)',
    caption: 'Examples of applying 2.2.2',
    head: ['Example', 'Starts by itself', 'Conditions', 'Judgment'],
    rows: [
      [
        'A notice banner that advances every 10 seconds',
        'Yes',
        'Over 5 s, with other content',
        'Needs a way to pause',
      ],
      [
        'A loading spinner that runs for only 3 seconds',
        'Yes',
        '5 s or less',
        'Movement condition does not apply',
      ],
      [
        'A seat update that starts only on a button press',
        'No',
        'User starts it',
        'Auto-start condition does not apply; still offer pause',
      ],
    ],
  },
};

export const PauseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.pause.id}>
      <DocH2 {...toc.pause} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('pause-stop-hide')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        For moving, blinking, scrolling, or auto-updating information, all of the following are
        true: <strong>Moving, blinking, scrolling</strong> For any moving, blinking or scrolling
        information that (1) starts automatically, (2) lasts more than five seconds, and (3) is
        presented in parallel with other content, there is a mechanism for the user to pause, stop,
        or hide it unless the movement, blinking, or scrolling is part of an activity where it is
        essential; and <strong>Auto-updating</strong> For any auto-updating information that (1)
        starts automatically and (2) is presented in parallel with other content, there is a
        mechanism for the user to pause, stop, or hide it or to control the frequency of the update
        unless the auto-updating is part of an activity where it is essential.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
