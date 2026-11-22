import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        이 페이지의 두 방식은 모두 브라우저 안에서 일어납니다. 사용자가 틀린 곳을 빨리 알고 고치게
        돕는 일이고, 서버가 받을 값을 보장하는 일이 아닙니다. 폼을 거치지 않은 요청도 서버에 닿을 수
        있으므로, 서버는 같은 규칙을 다시 확인합니다.
      </>
    ),
    caption: '검증하는 곳마다 맡는 책임',
    head: ['검증하는 곳', '맡는 일', '맡지 않는 일'],
    rows: [
      ['브라우저 기본 제약', '보내기 전에 빠르게 알림', '오류 글을 페이지에 남기기'],
      ['페이지의 사용자 정의 검증', '오류 식별 · 수정 제안 · 초점 안내', '서버가 받을 값의 보장'],
      ['서버', '받은 값의 최종 확인과 거절', '입력하는 동안의 안내'],
    ],
    noteTitle: '이 실습에는 서버가 없습니다',
    note: (locale: Locale) => (
      <>
        이 페이지의 실습은 아무것도 전송하지 않으므로 서버 검증이나 보안을 확인한 것이 아닙니다.
        서버가 거절한 뒤의 복구는 <PageLink locale={locale} id="server-errors" />
        에서 교육용 응답으로 이어 갑니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Both approaches on this page happen inside the browser. They help the user notice and fix a
        mistake quickly; they do not guarantee what the server receives. A request that bypasses the
        form can still reach the server, so the server checks the same rules again.
      </>
    ),
    caption: 'Responsibility of each place that validates',
    head: ['Where', 'What it takes on', 'What it does not'],
    rows: [
      ['Built-in constraints', 'A quick notice before sending', 'Leaving error text on the page'],
      [
        'Custom validation in the page',
        'Identifying errors, suggestions, guiding focus',
        'Guaranteeing what the server receives',
      ],
      ['Server', 'Final check and rejection of received values', 'Guidance while typing'],
    ],
    noteTitle: 'This exercise has no server',
    note: (locale: Locale) => (
      <>
        The exercise on this page sends nothing, so it does not confirm server-side validation or
        security. Recovery after the server rejects a value continues on{' '}
        <PageLink locale={locale} id="server-errors" /> with teaching responses.
      </>
    ),
  },
};

export const BoundarySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.boundary.id}>
      <DocH2 {...toc.boundary} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.noteTitle}>
        {c.note(locale)}
      </Callout>
    </section>
  );
};
