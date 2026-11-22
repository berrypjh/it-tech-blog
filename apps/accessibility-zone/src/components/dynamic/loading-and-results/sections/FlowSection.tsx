import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        상태마다 결과 영역에 무엇을 남기고, 무엇을 알리고, busy를 어떻게 둘지 먼저 표로 정합니다.
        알림 문구와 결과 영역의 요약은 같은 결정에서 나옵니다. 끝난 요청의 응답은 어느 상태에서든
        아무것도 바꾸지 않습니다.
      </>
    ),
    caption: '교육용 검색의 상태 전이',
    head: ['현재', '사건', '다음', '결과 영역', '알림 (status)', 'aria-busy'],
    rows: [
      ['초기', '검색', '대기', '비우고 “검색 중” 요약', '“자막” 검색 중', 'true'],
      [
        '대기',
        '활성 요청 성공 (1건 이상)',
        '성공',
        '목록과 “3건 찾음” 요약',
        '“자막” 3건 찾음',
        'false',
      ],
      [
        '대기',
        '활성 요청 성공 (0건)',
        '빈 결과',
        '“결과 없음” 요약',
        '“없는말” 결과 없음',
        'false',
      ],
      [
        '대기',
        '활성 요청 오류',
        '오류',
        '오류 요약과 다시 시도 버튼',
        '“자막” 검색하지 못했습니다…',
        'false',
      ],
      ['대기', '취소', '취소됨', '취소 요약', '“자막” 검색을 취소했습니다.', 'false'],
      ['오류', '다시 시도', '대기', '“검색 중” 요약, 초점은 입력으로', '“자막” 검색 중', 'true'],
      ['어느 상태든', '끝났거나 지난 요청의 응답', '그대로', '그대로', '없음', '그대로'],
    ],
  },
  en: {
    intro: (
      <>
        First decide in a table what the results area keeps, what is announced, and how busy is set
        for each state. The announcement text and the results summary come from the same decision. A
        response to a finished request changes nothing in any state.
      </>
    ),
    caption: 'State transitions of the teaching search',
    head: ['Current', 'Event', 'Next', 'Results area', 'Announcement (status)', 'aria-busy'],
    rows: [
      [
        'Initial',
        'Search',
        'Waiting',
        'Cleared, summary “Searching”',
        'Searching for “caption”',
        'true',
      ],
      [
        'Waiting',
        'Active request succeeds (1 or more)',
        'Success',
        'List and summary “3 found”',
        '3 found for “caption”',
        'false',
      ],
      [
        'Waiting',
        'Active request succeeds (0)',
        'Empty',
        'Summary “No results”',
        'No results for “nothing”',
        'false',
      ],
      [
        'Waiting',
        'Active request fails',
        'Error',
        'Error summary and a Try again button',
        'Could not search for “caption”…',
        'false',
      ],
      [
        'Waiting',
        'Cancel',
        'Canceled',
        'Canceled summary',
        'Search for “caption” canceled.',
        'false',
      ],
      [
        'Error',
        'Try again',
        'Waiting',
        'Summary “Searching”; focus to the input',
        'Searching for “caption”',
        'true',
      ],
      [
        'Any',
        'Response to a finished or old request',
        'Unchanged',
        'Unchanged',
        'None',
        'Unchanged',
      ],
    ],
  },
};

export const FlowSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flow.id}>
      <DocH2 {...toc.flow} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
