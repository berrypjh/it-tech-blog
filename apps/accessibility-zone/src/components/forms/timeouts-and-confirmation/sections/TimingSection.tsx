import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        읽고 입력하는 데 걸리는 시간은 사람마다 다릅니다. WCAG 2.2는 콘텐츠가 정한 시간제한마다 끄기
        · 조절 · 연장 가운데 하나를 제공하거나, 정해진 예외에 해당해야 한다고 요구합니다.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.1 Timing Adjustable (Level A)',
    caption: '2.2.1의 조절 수단과 예외',
    head: ['구분', '조건'],
    rows: [
      ['끄기', '시간제한을 만나기 전에 끌 수 있음'],
      ['조절', '만나기 전에 기본값의 열 배 이상까지 넓게 조절할 수 있음'],
      [
        '연장',
        '끝나기 전에 경고하고, 간단한 조작으로 연장할 시간을 20초 이상 주며, 열 번 이상 연장할 수 있음',
      ],
      ['예외: 실시간', '경매처럼 실시간 사건에 꼭 필요하고 대안이 없음'],
      ['예외: 필수', '시간제한이 필수이고 연장하면 활동이 무효가 됨'],
      ['예외: 20시간', '시간제한이 20시간보다 김'],
    ],
    noteTitle: '이 실습은 시간이 흐르지 않습니다',
    note: (
      <>
        학습자를 실제 타이머로 몰지 않기 위해, 이 페이지의 실습은 만료 상황을 버튼으로 직접
        시작합니다. 그래서 경고가 충분히 일찍 나오는지, 연장할 시간이 20초 이상인지는 이 실습으로
        확인할 수 없습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The time needed to read and type differs from person to person. For each time limit set by
        the content, WCAG 2.2 requires one of turn off, adjust, or extend, or that a defined
        exception applies.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.1 Timing Adjustable (Level A)',
    caption: 'The means and exceptions of 2.2.1',
    head: ['Item', 'Condition'],
    rows: [
      ['Turn off', 'The limit can be turned off before encountering it'],
      ['Adjust', 'It can be adjusted beforehand over a wide range, at least ten times the default'],
      [
        'Extend',
        'A warning before expiry, at least 20 seconds to extend with a simple action, and at least ten extensions',
      ],
      [
        'Exception: real-time',
        'Required for a real-time event such as an auction, with no alternative',
      ],
      [
        'Exception: essential',
        'The limit is essential and extending it would invalidate the activity',
      ],
      ['Exception: 20 hours', 'The limit is longer than 20 hours'],
    ],
    noteTitle: 'No time passes in this exercise',
    note: (
      <>
        So that learners are not pushed by a real timer, the exercise on this page starts the expiry
        with a button. It therefore cannot verify that the warning comes early enough or that the
        time to extend is at least 20 seconds.
      </>
    ),
  },
};

export const TimingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.timing.id}>
      <DocH2 {...toc.timing} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('timing-adjustable')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        For each time limit that is set by the content, at least one of the following is true: Turn
        off; Adjust; Extend; Real-time Exception; Essential Exception; 20 Hour Exception.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
