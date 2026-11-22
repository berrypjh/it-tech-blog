import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        응답이 늦어지는 동안 사용자는 값을 바꿔 다시 보낼 수 있고, 같은 버튼을 거듭 누를 수도
        있습니다. <PageLink locale={locale} id="stale-responses" />의 원리를 제출에 그대로 씁니다.
        제출마다 번호를 주고, 응답이 <strong className="text-text-default">현재 제출</strong>의 것일
        때만 오류 · busy · 알림을 바꿉니다. 상태 메시지와 busy의 표현은{' '}
        <PageLink locale={locale} id="loading-and-results" />와 같습니다.
      </>
    ),
    caption: '제출에서 일어나는 사건과 반영 규칙',
    head: ['사건', '확인', '바뀌는 것'],
    rows: [
      [
        '값을 보냄',
        '검사를 통과했고, 같은 값을 보내는 중이 아님',
        '새 번호가 현재 제출, busy true',
      ],
      ['같은 값을 다시 보냄', '같은 값을 이미 보내는 중', '새 요청 없음. 그 사실만 상태 메시지로'],
      ['값을 바꿔 보냄', '보내는 중인 값과 다름', '이전 제출에 중단 신호, 새 번호가 현재 제출'],
      ['응답 (접수 · 오류)', '응답 번호 = 현재 제출 번호', '같을 때만 결과 · 오류 · busy · 알림'],
      ['이전 제출의 늦은 응답', '번호가 다름', '아무것도 바뀌지 않음'],
    ],
    after: (
      <>
        그래서 A를 보낸 뒤 값을 B로 바꿔 보냈다면, 늦게 도착한 A의 실패는 B의 값도, B의 결과도, B가
        보내는 중이라는 표시도 건드리지 않습니다. 보내기 버튼은 보내는 동안에도 비활성으로 바꾸지
        않습니다. 초점이 있던 버튼이 비활성이 되면 초점을 잃을 수 있기 때문입니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        While a response is delayed, the user may change a value and send again, or press the same
        button repeatedly. The principle on <PageLink locale={locale} id="stale-responses" />{' '}
        applies to submissions as is. Number each submission, and change errors, busy, and
        announcements only when the response belongs to the{' '}
        <strong className="text-text-default">current submission</strong>. The status message and
        busy are expressed as on <PageLink locale={locale} id="loading-and-results" />.
      </>
    ),
    caption: 'Events in a submission and how they are applied',
    head: ['Event', 'Check', 'What changes'],
    rows: [
      [
        'Values sent',
        'The check passed and the same values are not already being sent',
        'A new number becomes the current submission, busy true',
      ],
      [
        'Same values sent again',
        'The same values are already being sent',
        'No new request; only that fact as a status message',
      ],
      [
        'Changed values sent',
        'They differ from the values being sent',
        'Abort signal to the old submission; a new number becomes current',
      ],
      [
        'Response (accepted or error)',
        'Response number = current number',
        'Result, errors, busy, and announcement only when equal',
      ],
      ['Late response of an old submission', 'The number differs', 'Nothing changes'],
    ],
    after: (
      <>
        So if you send A, change the values to B, and send again, a late failure of A touches
        neither B’s values, nor B’s result, nor the indication that B is being sent. The send button
        is not disabled while sending, because a focused button that becomes disabled can lose
        focus.
      </>
    ),
  },
};

export const CurrentSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.current.id}>
      <DocH2 {...toc.current} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
