'use client';

import { useId } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button, TextField } from '@berrypjh/react-ui';

import { messageOf } from './search';
import type { useSimulatedSearch } from './useSimulatedSearch';

const content = {
  ko: {
    form: '교육용 문서 검색',
    field: '검색어',
    search: '검색',
    cancel: '취소',
    reset: '재설정',
    progress: '검색 중',
    results: '검색 결과',
    idle: '아직 검색하지 않았습니다.',
    retry: '다시 시도',
  },
  en: {
    form: 'Teaching document search',
    field: 'Search term',
    search: 'Search',
    cancel: 'Cancel',
    reset: 'Reset',
    progress: 'Searching',
    results: 'Search results',
    idle: 'No search yet.',
    retry: 'Try again',
  },
};

type Props = {
  sim: ReturnType<typeof useSimulatedSearch>;
  query: string;
  onQueryChange: (query: string) => void;
};

/**
 * 실제 폼 · 상태 메시지 · 결과 영역. 상태 메시지는 처음부터 마운트된 status 하나이고,
 * 결과 영역은 busy 동안만 aria-busy이며 알림은 그 밖에 둔다. 입력 초점은 옮기지 않는다.
 * 다시 시도 버튼은 누르면 사라지므로 그때만 초점을 입력으로 돌려보낸다.
 */
export const SearchPanel = ({ sim, query, onQueryChange }: Props) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const inputId = useId();
  const headingId = useId();
  const { state } = sim;
  const message = messageOf(locale, state.announcement);

  const run = (q: string) => {
    if (q.trim()) sim.search(q.trim());
  };

  const retry = () => {
    run(state.query);
    document.getElementById(inputId)?.focus();
  };

  return (
    <div className="flex flex-col gap-md">
      <form
        role="search"
        aria-label={c.form}
        className="flex flex-wrap items-end gap-sm"
        onSubmit={(e) => {
          e.preventDefault();
          run(query);
        }}
      >
        <TextField
          id={inputId}
          label={c.field}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <Button type="submit" variant="outlined" size="sm">
          {c.search}
        </Button>
        <Button type="button" variant="text" size="sm" onClick={sim.cancel}>
          {c.cancel}
        </Button>
        <Button type="button" variant="text" size="sm" onClick={sim.reset}>
          {c.reset}
        </Button>
      </form>
      <div className="flex flex-wrap items-center gap-sm text-xsm">
        {state.busy && <progress aria-label={c.progress} className="w-24" />}
        <p role="status">
          <span key={state.announcement?.seq}>{message}</span>
        </p>
      </div>
      <section
        aria-labelledby={headingId}
        aria-busy={state.busy}
        className="flex flex-col gap-xs rounded-sm border border-stroke-light p-md text-xsm"
      >
        <h3 id={headingId} className="font-semiBold text-text-default">
          {c.results}
        </h3>
        <p>{message || c.idle}</p>
        {state.results.length > 0 && (
          <ul className="list-disc pl-lg">
            {state.results.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
        {state.phase === 'error' && (
          <div>
            <Button type="button" variant="outlined" size="sm" onClick={retry}>
              {c.retry}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};
