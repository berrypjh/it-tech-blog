import type { Locale } from '@it-tech-blog/preferences';

import {
  initialSearch,
  messageOf,
  reduceNaive,
  reduceSearch,
  searchCatalog,
  type SearchEvent,
  type SearchState,
} from '@/components/dynamic/shared/search';

type Step = { label: Record<Locale, string>; event: (locale: Locale) => SearchEvent };

const A = { ko: '자막', en: 'caption' };
const B = { ko: '대본', en: 'transcript' };

const start = (id: number, q: Record<Locale, string>, name: string): Step => ({
  label: { ko: `${name} “${q.ko}” 검색 (#${id})`, en: `${name} search “${q.en}” (#${id})` },
  event: (locale) => ({ type: 'start', id, query: q[locale] }),
});
const success = (id: number, q: Record<Locale, string>): Step => ({
  label: { ko: `#${id} 성공 응답`, en: `#${id} success` },
  event: (locale) => ({ type: 'success', id, items: searchCatalog(locale, q[locale]) }),
});
const failure = (id: number): Step => ({
  label: { ko: `#${id} 오류 응답`, en: `#${id} error` },
  event: () => ({ type: 'failure', id }),
});
const cancel: Step = { label: { ko: '취소', en: 'Cancel' }, event: () => ({ type: 'cancel' }) };

/** 정적 전후 비교와 최종 과업이 함께 쓰는 입력 순서. */
export const scenarios: { id: string; title: Record<Locale, string>; steps: Step[] }[] = [
  {
    id: 'reversal',
    title: { ko: 'A/B 역전', en: 'A/B reversal' },
    steps: [start(1, A, 'A'), start(2, B, 'B'), success(2, B), success(1, A)],
  },
  {
    id: 'late-after-cancel',
    title: { ko: 'B 취소 후 늦은 성공', en: 'Late success after canceling B' },
    steps: [start(1, A, 'A'), start(2, B, 'B'), cancel, success(2, B)],
  },
  {
    id: 'old-error',
    title: { ko: 'B 대기 중 A 오류', en: 'A fails while B waits' },
    steps: [start(1, A, 'A'), start(2, B, 'B'), failure(1)],
  },
  {
    id: 'duplicate',
    title: { ko: '같은 응답의 중복 완료', en: 'The same response completing twice' },
    steps: [start(1, B, 'B'), success(1, B), success(1, B)],
  },
  {
    id: 'same-query-again',
    title: { ko: '같은 검색을 새로 시작', en: 'Starting the same search again' },
    steps: [start(1, B, 'B'), success(1, B), start(2, B, 'B'), success(2, B)],
  },
];

export type Outcome = { results: string; message: string; busy: boolean; decisions: number };

const outcomeOf = (locale: Locale, state: SearchState): Outcome => ({
  results: state.results.map((item) => item.title).join(', '),
  message: messageOf(locale, state.announcement),
  busy: state.busy,
  decisions: state.announcement?.seq ?? 0,
});

/** 같은 입력을 수정 전(reduceNaive) · 수정 후(reduceSearch)에 넣어 마지막 결과를 낸다. 화면에서 실행하지 않는다. */
export const compare = (locale: Locale, steps: Step[]) => {
  const events = steps.map((step) => step.event(locale));
  return {
    before: outcomeOf(locale, events.reduce(reduceNaive, initialSearch)),
    after: outcomeOf(locale, events.reduce(reduceSearch, initialSearch)),
  };
};
