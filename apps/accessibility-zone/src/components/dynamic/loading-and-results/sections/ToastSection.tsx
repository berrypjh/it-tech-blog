import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        Toast는 몇 초 뒤 사라집니다. 읽는 속도가 느리거나 다른 곳을 보던 사람은 그 안의 정보와
        버튼을 놓칩니다. 그래서 Toast에만 있는 중요한 결과나 조작을 두지 않습니다. 실습의 Toast는
        “최근 검색에 저장했다”는 확인일 뿐이고, 같은 검색을 다시 하는 조작은 최근 검색에 계속
        남습니다.
      </>
    ),
    caption: '사라지는 것과 남는 것',
    head: ['정보 · 조작', '사라지는 자리', '남는 자리'],
    rows: [
      ['검색 결과 수', 'status 알림 (한 번 지나감)', '결과 영역의 요약'],
      ['최근 검색에 저장됨', 'Toast', '최근 검색 목록'],
      ['같은 검색 다시 하기', '—', '최근 검색의 버튼'],
      ['오류 뒤 복구', '—', '결과 영역의 다시 시도 버튼'],
    ],
    focus: (
      <>
        Toast는 live 영역으로 다시 방송하지 않습니다. 결과는 이미 status가 알렸기 때문입니다.
        Toast를 닫거나 Toast가 사라질 때 그 안에 초점이 있었다면, 같은 정보가 남는 최근 검색
        제목으로 초점을 돌려보냅니다. 그 밖의 경우에는 입력의 초점을 옮기지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A toast disappears after a few seconds. People who read slowly or were looking elsewhere
        miss the information and buttons inside it. So do not put important results or actions only
        in a toast. The exercise’s toast is only a confirmation that the search was saved; the
        action to run the same search again stays in recent searches.
      </>
    ),
    caption: 'What disappears and what stays',
    head: ['Information or action', 'Where it disappears', 'Where it stays'],
    rows: [
      ['Number of results', 'The status announcement (passes once)', 'The results summary'],
      ['Saved to recent searches', 'The toast', 'The recent searches list'],
      ['Run the same search again', '—', 'Buttons in recent searches'],
      ['Recovering after an error', '—', 'The Try again button in the results'],
    ],
    focus: (
      <>
        The toast is not broadcast again as a live region, because status already announced the
        result. If focus was inside the toast when it is closed or disappears, it is returned to the
        recent searches heading, where the same information stays. Otherwise the input keeps focus.
      </>
    ),
  },
};

export const ToastSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.toast.id}>
      <DocH2 {...toc.toast} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.focus}</p>
    </section>
  );
};
