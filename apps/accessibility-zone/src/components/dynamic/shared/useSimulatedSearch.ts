'use client';

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';

import { initialSearch, reduceSearch, searchCatalog } from './search';

/** 가상 서버가 들고 있는 요청. 응답 순서만 시뮬레이션이고, 중단 신호는 실제 AbortController다. */
export type ServerRequest = {
  id: number;
  query: string;
  controller: AbortController;
  responses: number;
};

/**
 * 검색 상태(reduceSearch)와 가상 서버의 요청 목록을 묶는다. 서버 응답은 사람이 버튼으로 보내므로
 * 고정 대기 시간 없이 순서를 재현한다. 화면을 떠나면 남은 요청에 중단 신호를 보낸다.
 */
export const useSimulatedSearch = () => {
  const { locale } = useLocale();
  const [state, dispatch] = useReducer(reduceSearch, initialSearch);
  const [requests, setRequests] = useState<ServerRequest[]>([]);
  const nextId = useRef(1);
  const live = useRef<ServerRequest[]>([]);
  const active = useRef<number | null>(null);

  const update = (next: ServerRequest[]) => {
    live.current = next;
    setRequests(next);
  };

  const abortActive = () => {
    live.current.find((r) => r.id === active.current)?.controller.abort();
    active.current = null;
  };

  const search = (query: string) => {
    abortActive();
    const request = {
      id: nextId.current++,
      query,
      controller: new AbortController(),
      responses: 0,
    };
    active.current = request.id;
    update([...live.current, request]);
    dispatch({ type: 'start', id: request.id, query });
  };

  /** 서버가 응답을 보낸다. 중단 신호를 받은 요청도 서버는 늦게 답할 수 있다. */
  const respond = (id: number, kind: 'success' | 'failure') => {
    const request = live.current.find((r) => r.id === id);
    if (!request) return;
    update(live.current.map((r) => (r.id === id ? { ...r, responses: r.responses + 1 } : r)));
    if (active.current === id) active.current = null;
    if (kind === 'failure') dispatch({ type: 'failure', id });
    else dispatch({ type: 'success', id, items: searchCatalog(locale, request.query) });
  };

  const cancel = () => {
    abortActive();
    setRequests([...live.current]);
    dispatch({ type: 'cancel' });
  };

  const reset = () => {
    live.current.forEach((r) => r.controller.abort());
    active.current = null;
    update([]);
    dispatch({ type: 'reset' });
  };

  const abortAll = useCallback(() => live.current.forEach((r) => r.controller.abort()), []);
  useEffect(() => abortAll, [abortAll]);

  return { state, requests, search, respond, cancel, reset };
};
