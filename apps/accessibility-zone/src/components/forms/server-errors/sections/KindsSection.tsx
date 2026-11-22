import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        서버의 실패는 두 가지로 나뉩니다. 사용자가 값을 고쳐야 풀리는{' '}
        <strong className="text-text-default">필드 오류</strong>와, 값은 그대로 두고 다시 보내면
        되는 <strong className="text-text-default">서비스 오류</strong>입니다. 필드 오류는{' '}
        <PageLink locale={locale} id="error-summary" />의 경로를 그대로 탑니다. 어느 쪽이든 입력한
        값은 지우지 않습니다.
      </>
    ),
    caption: '서버 실패의 종류마다 지킬 것',
    head: ['종류', '사용자가 할 일', '입력값', '초점', '알림'],
    rows: [
      [
        '필드 오류 (예: 이미 신청된 이메일)',
        '그 칸의 값을 고침',
        '모두 그대로',
        '오류 요약의 제목으로 이동',
        '요약과 칸의 오류 글. 따로 알리지 않음',
      ],
      [
        '서비스 오류 (예: 일시적인 실패)',
        '같은 값으로 다시 시도',
        '모두 그대로',
        '옮기지 않음',
        '상태 메시지 하나와 다시 시도 버튼',
      ],
    ],
    noteTitle: '다시 시도 버튼을 누른 뒤의 초점',
    note: (
      <>
        다시 시도 버튼은 누르면 사라집니다. 사라지는 요소에 초점이 남지 않도록, 이 예제는 초점을
        보내기 버튼으로 옮깁니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Server failures come in two kinds: a{' '}
        <strong className="text-text-default">field error</strong>, resolved only when the user
        changes a value, and a <strong className="text-text-default">service error</strong>,
        resolved by sending the same values again. A field error takes the path on{' '}
        <PageLink locale={locale} id="error-summary" />. Either way, entered values are not cleared.
      </>
    ),
    caption: 'What to keep for each kind of server failure',
    head: ['Kind', 'What the user does', 'Input', 'Focus', 'Announcement'],
    rows: [
      [
        'Field error (e.g. email already applied)',
        'Fix the value of that field',
        'All kept',
        'Moves to the heading of the error summary',
        'The summary and the field’s error text; nothing extra',
      ],
      [
        'Service error (e.g. a temporary failure)',
        'Retry with the same values',
        'All kept',
        'Not moved',
        'One status message and a retry button',
      ],
    ],
    noteTitle: 'Focus after pressing retry',
    note: (
      <>
        The retry button disappears when pressed. So that focus is not left on a removed element,
        this example moves focus to the send button.
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
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
