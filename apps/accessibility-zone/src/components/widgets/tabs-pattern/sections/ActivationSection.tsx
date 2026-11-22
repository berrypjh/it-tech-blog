import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        방향키로 탭에 초점이 가는 순간 패널까지 바꾸는 것을 자동 활성화, 초점만 옮기고 Enter나
        Space를 눌러야 패널이 바뀌는 것을 수동 활성화라고 합니다. APG는 패널의 내용이 지연 없이
        나타날 때에만 자동 활성화를 권합니다. 패널을 불러오는 데 시간이 걸리면, 지나가는 탭마다
        요청이 나가고 화면이 흔들립니다.
      </>
    ),
    caption: '수동 활성화에서 조작마다 기대하는 값',
    head: ['조작', '초점이 있는 곳', '선택된 탭', '보이는 패널'],
    rows: [
      ['Tab으로 탭 목록에 들어옴', '일정 탭', '일정', '일정'],
      ['오른쪽 화살표', '장소 탭', '일정', '일정'],
      ['Enter', '장소 탭', '장소', '장소'],
      ['End', '준비물 탭', '장소', '장소'],
      ['Tab', '장소 패널', '장소', '장소'],
    ],
    tag: '이 표는 계약에서 낸 기대값입니다. 같은 순서를 실습에서 실행해 관찰 값과 견줍니다. 자동 활성화에서는 둘째 줄에서 선택과 패널이 함께 “장소”로 바뀝니다.',
    noteTitle: 'aria-selected와 aria-current를 섞지 않습니다',
    note: (
      <>
        탭에서 지금 보이는 패널의 탭은 <code>aria-selected</code>로 알립니다. WAI-ARIA 1.2는{' '}
        <code>aria-selected</code>가 같은 뜻을 갖는 위젯에서 <code>aria-current</code>를 대신 쓰지
        말라고 합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Changing the panel the moment focus reaches a tab by arrow key is automatic activation;
        moving only focus and changing the panel on Enter or Space is manual activation. APG
        recommends automatic activation only when the panel’s content appears without delay. If
        loading a panel takes time, every tab passed sends a request and the screen churns.
      </>
    ),
    caption: 'Expected values for each action in manual activation',
    head: ['Action', 'Where focus is', 'Selected tab', 'Visible panel'],
    rows: [
      ['Tab into the tab list', 'Schedule tab', 'Schedule', 'Schedule'],
      ['Right arrow', 'Venue tab', 'Schedule', 'Schedule'],
      ['Enter', 'Venue tab', 'Venue', 'Venue'],
      ['End', 'What to bring tab', 'Venue', 'Venue'],
      ['Tab', 'Venue panel', 'Venue', 'Venue'],
    ],
    tag: 'This table holds expectations derived from the contract. Run the same sequence in the exercise and compare with the observed values. In automatic activation, selection and panel both change to “Venue” on the second row.',
    noteTitle: 'Do not mix aria-selected and aria-current',
    note: (
      <>
        In tabs, the tab of the panel now shown is conveyed with <code>aria-selected</code>.
        WAI-ARIA 1.2 says not to use <code>aria-current</code> as a substitute in widgets where{' '}
        <code>aria-selected</code> has the same meaning.
      </>
    ),
  },
};

export const ActivationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.activation.id}>
      <DocH2 {...toc.activation} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="model" /> {c.tag}
      </p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
