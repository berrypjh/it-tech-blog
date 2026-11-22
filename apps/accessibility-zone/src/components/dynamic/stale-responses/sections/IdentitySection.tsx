import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `const reduceSearch = (state, event) => {
  switch (event.type) {
    case 'start':
      return { ...state, activeId: event.id, busy: true, phase: 'loading' };
    case 'success':
    case 'failure':
      if (event.id !== state.activeId) return state; // 지난 · 취소된 · 이미 끝난 요청
      return { ...state, activeId: null, busy: false, phase: resultOf(event) };
    case 'cancel':
      if (state.activeId === null) return state;
      return { ...state, activeId: null, busy: false, phase: 'canceled' };
  }
};`,
  en: `const reduceSearch = (state, event) => {
  switch (event.type) {
    case 'start':
      return { ...state, activeId: event.id, busy: true, phase: 'loading' };
    case 'success':
    case 'failure':
      if (event.id !== state.activeId) return state; // an old, canceled, or finished request
      return { ...state, activeId: null, busy: false, phase: resultOf(event) };
    case 'cancel':
      if (state.activeId === null) return state;
      return { ...state, activeId: null, busy: false, phase: 'canceled' };
  }
};`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        검색을 시작할 때마다 요청에 새 id를 주고, 그 id를 활성 요청으로 기억합니다. 응답이 오면 먼저
        “이 응답이 지금 활성 요청의 것인가”를 묻습니다. 아니면 결과 · 알림 · busy 어느 것도 바꾸지
        않습니다. 결과가 반영되면 활성 요청을 비우므로, 같은 응답이 두 번 와도 두 번째는 무시됩니다.
        상태 결정과 렌더링은 <PageLink locale={locale} id="loading-and-results" />의 상태 전이표를
        그대로 따릅니다.
      </>
    ),
    label: '활성 요청만 상태를 바꾸는 전이 (요약)',
    caption: '사건마다 확인하는 것',
    head: ['사건', '확인', '바뀌는 것'],
    rows: [
      ['새 검색', '사용자가 시작함', '새 id가 활성 요청, 이전 요청엔 중단 신호, busy true'],
      ['응답 (성공 · 오류)', '응답 id = 활성 요청 id', '같을 때만 결과 · 알림 · busy'],
      ['취소', '활성 요청이 있음', '활성 요청 비움, busy false, 취소 알림'],
      [
        '같은 검색어 다시',
        '새로 시작한 요청인가',
        '새 id라 정상 반영. 문구가 같아도 억제하지 않음',
      ],
      ['재설정 · 화면 이탈', '—', '모든 요청에 중단 신호, 남은 예약 작업 정리'],
    ],
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Each time a search starts, give the request a new id and remember it as the active request.
        When a response arrives, first ask whether it belongs to the active request. If not, change
        none of the results, announcement, or busy. Once a result is applied the active request is
        cleared, so if the same response arrives twice, the second is ignored. Decisions and
        rendering follow the state transition table on{' '}
        <PageLink locale={locale} id="loading-and-results" />.
      </>
    ),
    label: 'Transitions where only the active request changes state (summary)',
    caption: 'What each event checks',
    head: ['Event', 'Check', 'What changes'],
    rows: [
      [
        'New search',
        'The user started it',
        'New id becomes active, old request gets an abort signal, busy true',
      ],
      [
        'Response (success or error)',
        'Response id = active id',
        'Results, announcement, and busy only when equal',
      ],
      ['Cancel', 'There is an active request', 'Active cleared, busy false, cancel announcement'],
      [
        'Same term again',
        'Is it a newly started request',
        'A new id, so applied normally; not suppressed even if the text matches',
      ],
      [
        'Reset or leaving the screen',
        '—',
        'Abort signal to every request; pending work cleaned up',
      ],
    ],
  },
};

export const IdentitySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.identity.id}>
      <DocH2 {...toc.identity} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
    </section>
  );
};
