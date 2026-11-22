'use client';

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { type Application, sameApplication } from './application';
import { initialSubmit, reduceSubmit, type ResponseKind } from './submissions';

/** 가상 서버가 들고 있는 제출. 응답 순서와 종류만 시뮬레이션이고, 중단 신호는 실제 AbortController다. */
export type Submission = {
  id: number;
  values: Application;
  controller: AbortController;
  responses: number;
};

/**
 * 제출 상태(reduceSubmit)와 가상 서버의 요청 목록을 묶는다. 응답은 사람이 버튼으로 보내므로
 * 고정 대기 시간 없이 지연 · 역전 · 중복을 재현한다. 실제 네트워크 요청은 없다.
 */
export const useSubmissions = () => {
  const [state, dispatch] = useReducer(reduceSubmit, initialSubmit);
  const [requests, setRequests] = useState<Submission[]>([]);
  const nextId = useRef(1);
  const live = useRef<Submission[]>([]);
  const active = useRef<Submission | null>(null);

  const update = (next: Submission[]) => {
    live.current = next;
    setRequests(next);
  };

  /** 같은 값을 보내는 중이면 새 요청을 만들지 않는다. 값이 바뀌었으면 이전 요청을 중단하고 새로 보낸다. */
  const submit = (values: Application) => {
    if (active.current && sameApplication(active.current.values, values)) {
      dispatch({ type: 'duplicate' });
      return;
    }
    active.current?.controller.abort();
    const request = {
      id: nextId.current++,
      values,
      controller: new AbortController(),
      responses: 0,
    };
    active.current = request;
    update([...live.current, request]);
    dispatch({ type: 'start', id: request.id, values });
  };

  /** 서버가 응답을 보낸다. 현재 제출의 응답이었는지를 돌려준다. */
  const respond = (id: number, kind: ResponseKind) => {
    update(live.current.map((r) => (r.id === id ? { ...r, responses: r.responses + 1 } : r)));
    const applied = active.current?.id === id;
    if (applied) active.current = null;
    dispatch({ type: 'respond', id, kind });
    return applied;
  };

  const reset = () => {
    live.current.forEach((r) => r.controller.abort());
    active.current = null;
    update([]);
    dispatch({ type: 'reset' });
  };

  const abortAll = useCallback(() => live.current.forEach((r) => r.controller.abort()), []);
  useEffect(() => abortAll, [abortAll]);

  return { state, requests, submit, respond, reset };
};
