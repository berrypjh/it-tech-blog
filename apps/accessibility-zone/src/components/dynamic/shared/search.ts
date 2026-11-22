import type { Locale } from '@it-tech-blog/preferences';

/** 10장 교육용 검색의 문서 목록(가상의 자료). 서버 없이 이 목록에서 찾는다. */
export type Item = { id: string; title: string };

export const catalog: Record<Locale, Item[]> = {
  ko: [
    { id: 'c1', title: '자막 만들기' },
    { id: 'c2', title: '실시간 자막 점검' },
    { id: 'c3', title: '자막 품질 기준' },
    { id: 'c4', title: '설명 대본 쓰기' },
    { id: 'c5', title: '오디오 설명 녹음' },
    { id: 'c6', title: '수어 통역 안내' },
  ],
  en: [
    { id: 'c1', title: 'Making captions' },
    { id: 'c2', title: 'Checking live captions' },
    { id: 'c3', title: 'Caption quality criteria' },
    { id: 'c4', title: 'Writing a descriptive transcript' },
    { id: 'c5', title: 'Recording audio description' },
    { id: 'c6', title: 'Sign language interpreting' },
  ],
};

export const searchCatalog = (locale: Locale, query: string) => {
  const q = query.trim().toLowerCase();
  return q ? catalog[locale].filter((item) => item.title.toLowerCase().includes(q)) : [];
};

export type Phase = 'idle' | 'loading' | 'success' | 'empty' | 'error' | 'canceled';

/** 알림 결정. seq가 바뀔 때만 새 알림이고, 문구는 렌더링 때 locale로 만든다. */
export type Announcement = { seq: number; phase: Phase; query: string; count: number };

export type SearchState = {
  phase: Phase;
  query: string;
  activeId: number | null;
  results: Item[];
  busy: boolean;
  announcement: Announcement | null;
};

export type SearchEvent =
  | { type: 'start'; id: number; query: string }
  | { type: 'success'; id: number; items: Item[] }
  | { type: 'failure'; id: number }
  | { type: 'cancel' }
  | { type: 'reset' };

export const initialSearch: SearchState = {
  phase: 'idle',
  query: '',
  activeId: null,
  results: [],
  busy: false,
  announcement: null,
};

const announce = (state: SearchState, phase: Phase, count = 0): Announcement => ({
  seq: (state.announcement?.seq ?? 0) + 1,
  phase,
  query: state.query,
  count,
});

/**
 * 활성 요청의 응답만 결과 · 알림 · busy를 바꾼다. 끝난 요청은 activeId에서 빠지므로
 * 늦은 응답 · 취소된 요청의 응답 · 같은 응답의 중복 완료는 모두 무시된다.
 * 같은 검색어라도 새로 시작한 요청은 새 id라 정상으로 반영된다.
 */
export const reduceSearch = (state: SearchState, event: SearchEvent): SearchState => {
  switch (event.type) {
    case 'start': {
      const next = { ...state, query: event.query, activeId: event.id, results: [], busy: true };
      return { ...next, phase: 'loading', announcement: announce(next, 'loading') };
    }
    case 'success': {
      if (event.id !== state.activeId) return state;
      const phase = event.items.length ? 'success' : 'empty';
      return {
        ...state,
        phase,
        activeId: null,
        results: event.items,
        busy: false,
        announcement: announce(state, phase, event.items.length),
      };
    }
    case 'failure':
      if (event.id !== state.activeId) return state;
      return {
        ...state,
        phase: 'error',
        activeId: null,
        busy: false,
        announcement: announce(state, 'error'),
      };
    case 'cancel':
      if (state.activeId === null) return state;
      return {
        ...state,
        phase: 'canceled',
        activeId: null,
        busy: false,
        announcement: announce(state, 'canceled'),
      };
    case 'reset':
      return initialSearch;
  }
};

/**
 * 의도한 결함: 요청 id를 확인하지 않아 마지막에 도착한 응답이 이긴다. 취소 뒤의 늦은 응답도 반영한다.
 * 화면에서는 실행하지 않고, 같은 입력을 두 함수에 넣은 정적 전후 비교에만 쓴다.
 */
export const reduceNaive = (state: SearchState, event: SearchEvent): SearchState => {
  switch (event.type) {
    case 'success': {
      const phase = event.items.length ? 'success' : 'empty';
      return {
        ...state,
        phase,
        results: event.items,
        busy: false,
        announcement: announce(state, phase, event.items.length),
      };
    }
    case 'failure':
      return { ...state, phase: 'error', busy: false, announcement: announce(state, 'error') };
    default:
      return reduceSearch(state, event);
  }
};

const messages: Record<Locale, Record<Phase, (q: string, n: number) => string>> = {
  ko: {
    idle: () => '',
    loading: (q) => `“${q}” 검색 중`,
    success: (q, n) => `“${q}” ${n}건 찾음`,
    empty: (q) => `“${q}” 결과 없음`,
    error: (q) => `“${q}” 검색하지 못했습니다. 다시 시도할 수 있습니다.`,
    canceled: (q) => `“${q}” 검색을 취소했습니다.`,
  },
  en: {
    idle: () => '',
    loading: (q) => `Searching for “${q}”`,
    success: (q, n) => `${n} found for “${q}”`,
    empty: (q) => `No results for “${q}”`,
    error: (q) => `Could not search for “${q}”. You can try again.`,
    canceled: (q) => `Search for “${q}” canceled.`,
  },
};

/** 알림 원문. 화면의 결과 요약도 같은 문구를 쓴다. */
export const messageOf = (locale: Locale, announcement: Announcement | null) =>
  announcement ? messages[locale][announcement.phase](announcement.query, announcement.count) : '';
