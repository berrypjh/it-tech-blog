'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { SearchPanel } from '@/components/dynamic/shared/SearchPanel';
import { ServerPanel } from '@/components/dynamic/shared/ServerPanel';
import { useSimulatedSearch } from '@/components/dynamic/shared/useSimulatedSearch';

/** Toast가 보이는 시간. 사라져도 같은 정보와 조작은 최근 검색에 남는다. */
export const TOAST_MS = 6000;
const RECENT_LIMIT = 5;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '“자막”을 검색한 뒤 가상 서버에서 결과 · 오류로 응답해 보고, 오류에서는 다시 시도하세요. “없는말”로 빈 결과도 확인합니다. Toast가 사라진 뒤 최근 검색에서 같은 검색을 다시 할 수 있습니다.',
    toast: (q: string) => `“${q}” 검색을 최근 검색에 저장했습니다.`,
    close: 'Toast 닫기',
    recent: '최근 검색',
    noRecent: '아직 없습니다.',
    again: (q: string) => `“${q}” 다시 검색`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Search for “caption,” then respond from the simulated server with results or an error, and try again after an error. Also check an empty result with “nothing.” After the toast disappears, you can run the same search again from recent searches.',
    toast: (q: string) => `Saved “${q}” to recent searches.`,
    close: 'Close toast',
    recent: 'Recent searches',
    noRecent: 'None yet.',
    again: (q: string) => `Search “${q}” again`,
  },
};

/**
 * 교육용 로컬 검색의 초기 → 대기 → 성공 · 빈 결과 · 오류 → 재시도. 결과가 나오면 잠시 Toast를 보이지만
 * Toast는 live 영역이 아니고(알림은 status 하나), 같은 정보와 다시 검색 조작은 최근 검색에 남는다.
 */
export const LoadingResultsDemo = () => {
  const c = useLang(content);
  const sim = useSimulatedSearch();
  const recentId = useId();
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const { announcement } = sim.state;
  const toastBox = useRef<HTMLDivElement>(null);

  /** Toast 안에 초점이 있었다면 같은 정보가 남는 최근 검색으로 돌려보낸다. */
  const hideToast = useCallback(() => {
    if (toastBox.current?.contains(document.activeElement))
      document.getElementById(recentId)?.focus();
    setToast(null);
  }, [recentId]);

  useEffect(() => {
    if (announcement?.phase !== 'success' && announcement?.phase !== 'empty') return;
    const q = announcement.query;
    setRecent((prev) => [q, ...prev.filter((p) => p !== q)].slice(0, RECENT_LIMIT));
    setToast(q);
    const timer = setTimeout(hideToast, TOAST_MS);
    return () => clearTimeout(timer);
  }, [announcement, hideToast]);

  const again = (q: string) => {
    setQuery(q);
    sim.search(q);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <SearchPanel sim={sim} query={query} onQueryChange={setQuery} />
      {toast && (
        <div
          ref={toastBox}
          className="flex flex-wrap items-center gap-sm rounded-sm border border-stroke-default bg-background-surface p-sm text-xsm"
        >
          <span>{c.toast(toast)}</span>
          <Button type="button" variant="text" size="sm" onClick={hideToast}>
            {c.close}
          </Button>
        </div>
      )}
      <section aria-labelledby={recentId} className="flex flex-col gap-xs text-xsm">
        <h3 id={recentId} tabIndex={-1} className="font-semiBold text-text-default">
          {c.recent}
        </h3>
        {recent.length === 0 ? (
          <p className="text-text-light">{c.noRecent}</p>
        ) : (
          <ul className="flex flex-wrap gap-sm">
            {recent.map((q) => (
              <li key={q}>
                <Button type="button" variant="outlined" size="sm" onClick={() => again(q)}>
                  {c.again(q)}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <ServerPanel sim={sim} />
    </PracticeFrame>
  );
};
