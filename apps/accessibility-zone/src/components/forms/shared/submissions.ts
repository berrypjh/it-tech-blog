import type { Locale } from '@it-tech-blog/preferences';

import type { Application } from './application';

export type ResponseKind = 'accepted' | 'field-error' | 'service-error';
export type SubmitPhase = 'idle' | 'sending' | 'duplicate' | ResponseKind;

/** 제출 상태. seq는 상태 문구를 새로 정한 횟수, accepted는 접수가 반영된 횟수, result는 마지막으로 접수된 값이다. */
export type SubmitState = {
  phase: SubmitPhase;
  activeId: number | null;
  sent: Application | null;
  result: Application | null;
  seq: number;
  accepted: number;
};

export type SubmitEvent =
  | { type: 'start'; id: number; values: Application }
  | { type: 'duplicate' }
  | { type: 'respond'; id: number; kind: ResponseKind }
  | { type: 'reset' };

export const initialSubmit: SubmitState = {
  phase: 'idle',
  activeId: null,
  sent: null,
  result: null,
  seq: 0,
  accepted: 0,
};

/**
 * 현재 제출의 응답만 오류 · busy · 알림을 바꾼다(10.5의 활성 요청 규칙).
 * 이전 요청의 늦은 응답과 같은 응답의 반복은 상태를 그대로 둔다.
 */
export const reduceSubmit = (state: SubmitState, event: SubmitEvent): SubmitState => {
  switch (event.type) {
    case 'start':
      return {
        ...state,
        phase: 'sending',
        activeId: event.id,
        sent: event.values,
        seq: state.seq + 1,
      };
    case 'duplicate':
      return { ...state, phase: 'duplicate', seq: state.seq + 1 };
    case 'respond':
      if (event.id !== state.activeId) return state;
      return {
        ...state,
        phase: event.kind,
        activeId: null,
        seq: state.seq + 1,
        accepted: state.accepted + (event.kind === 'accepted' ? 1 : 0),
        result: event.kind === 'accepted' ? state.sent : state.result,
      };
    case 'reset':
      return initialSubmit;
  }
};

const messages: Record<Locale, Record<SubmitPhase, string>> = {
  ko: {
    idle: '',
    sending: '신청 내용을 보내는 중입니다.',
    duplicate: '같은 내용을 이미 보내는 중입니다. 새 요청을 만들지 않았습니다.',
    accepted: '신청 내용을 접수했습니다.',
    'field-error': '',
    'service-error': '일시적인 오류로 접수하지 못했습니다. 입력한 값은 그대로 있습니다.',
  },
  en: {
    idle: '',
    sending: 'Sending the application.',
    duplicate: 'The same content is already being sent. No new request was made.',
    accepted: 'The application was accepted.',
    'field-error': '',
    'service-error': 'A temporary error stopped the application. Your input is unchanged.',
  },
};

/** 상태 메시지 문구. 필드 오류는 초점이 오류 요약으로 가므로 여기서 다시 알리지 않는다. */
export const submitMessage = (locale: Locale, phase: SubmitPhase) => messages[locale][phase];
