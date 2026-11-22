import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="focus-after-changes" hash="focus-destination-rules" />의 목록
        삭제는 포커스를 받던 요소가 사라지는 경우였습니다. 그때는 위치를 이어 주려고 포커스를
        옮기고, 결과는 상태 메시지로 따로 알렸습니다. 배경에서 일어난 갱신은 다릅니다. 사용자의
        위치는 그대로이므로 포커스를 건드리지 않고, 알릴 가치가 있을 때만 상태 메시지를 씁니다.
      </>
    ),
    caption: '포커스와 알림을 따로 정하기',
    head: ['동작', '포커스', '알림'],
    rows: [
      ['포커스된 행을 삭제 (07.4)', '이웃 행으로 복구', '“배 삭제됨” 상태 메시지'],
      [
        '다른 사람이 목록에 항목을 추가 (배경 갱신)',
        '그대로',
        '필요할 때만 상태 메시지, 잦으면 갱신 시각만 표시',
      ],
      ['검색 결과 목록 갱신', '그대로 (입력에 남음)', '결과 수 상태 메시지'],
      ['새 작업 화면 열기', '새 화면 제목으로', '포커스 이동이 알림을 대신함'],
    ],
    after: (
      <>
        포커스 이동과 상태 메시지는 한쪽이 다른 쪽을 대신하지 않습니다. 포커스를 옮길 이유가 있는지,
        알릴 내용이 있는지를 따로 묻습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Deleting from the list on{' '}
        <PageLink locale={locale} id="focus-after-changes" hash="focus-destination-rules" /> removed
        the element holding focus. Focus moved to keep the position, and the result was reported
        separately with a status message. A background update is different: the user’s position is
        unchanged, so focus is left alone, and a status message is used only when it is worth
        reporting.
      </>
    ),
    caption: 'Deciding focus and notice separately',
    head: ['Action', 'Focus', 'Notice'],
    rows: [
      [
        'Deleting the focused row (07.4)',
        'Recovered to a neighbor row',
        'Status message “Pear deleted”',
      ],
      [
        'Someone else adds an item (background update)',
        'Stays',
        'Status message only when needed; if frequent, show the update time only',
      ],
      ['The search result list updates', 'Stays (in the input)', 'Status message with the count'],
      [
        'Opening a new task screen',
        'To the new screen’s heading',
        'The focus move serves as the notice',
      ],
    ],
    after: (
      <>
        Moving focus and a status message do not stand in for each other. Ask separately whether
        there is a reason to move focus and whether there is something to report.
      </>
    ),
  },
};

export const FocusSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.focus.id}>
      <DocH2 {...toc.focus} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
