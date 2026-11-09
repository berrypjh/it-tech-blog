'use client';

import { useReducer } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, cx, List, ListItem } from '@berrypjh/react-ui';
import { Check, CircleCheck, CircleHelp, CircleX, type LucideIcon } from 'lucide-react';

import {
  assess,
  events,
  hypotheses,
  type HypothesisId,
  type HypothesisStatus,
  type Layer,
  selectionReducer,
} from './trace';

const content = {
  ko: {
    practice: '실습',
    badge:
      '증거를 하나씩 골라 세 가설을 가려 보세요. 요청 req-0458의 trace는 이 페이지가 만든 교육 예시이며, 실제 시스템을 조회하지 않습니다.',
    symptom: '증상: 사용자는 "접수 확인 없음"을 봤습니다.',
    pick: '증거를 하나씩 골라 보세요. 고른 순서와 관계없이 시간 순서로 정리됩니다.',
    seconds: (value: number) => `${value}초`,
    after: '요청 이후',
    summary: (picked: number, ruledOut: number, consistent: number, open: number) =>
      `증거 ${picked}개 확인 · 어긋남 ${ruledOut} · 맞음 ${consistent} · 미확인 ${open}`,
    layers: {
      input: '입력',
      data: '데이터 (정책 조회)',
      model: '모델',
      validation: '검증',
      tool: '도구 (티켓 생성)',
      state: '앱 상태',
      ui: 'UI',
      lookup: '진단 중 조회',
    } satisfies Record<Layer, string>,
    facts: {
      input: '문의 수신. 길이 · 형식 정상',
      data: '정책 항목 NET-03 조회 성공',
      model: 'queue=network, evidence=LOG-6610 제안',
      validation: '네 경계 모두 통과',
      tool: 'ticket.create 호출 뒤 10초 동안 응답 없음 (시간 초과)',
      state: '접수 상태를 "확인 안 됨"으로 저장',
      ui: '"접수 확인 없음" 표시. 사용자가 본 증상 그대로',
      lookup: 'request_id로 티켓 시스템 조회: INC-0077이 network 큐에 있음 (제출 후 4.1초에 생성)',
    } satisfies Record<Layer, string>,
    hypotheses: {
      'validation-rejected': '검증이 쓰기를 거절했다',
      'response-lost': '도구 응답이 유실됐지만 기록은 있다',
      'ui-mislabel': 'UI가 상태를 잘못 표기했다',
    } satisfies Record<HypothesisId, string>,
    statuses: {
      open: '미확인',
      consistent: '고른 증거와 맞음',
      'ruled-out': '고른 증거와 어긋남',
    } satisfies Record<HypothesisStatus, string>,
    observed: '관찰한 것',
    unchecked: '아직 확인하지 않은 것',
    none: '없음',
    hypothesesHeading: '가설',
    next: '다음 검사',
    nextDone:
      '가설을 가를 증거를 모두 봤습니다. 남은 일은 원인을 고치는 것이지, 티켓을 다시 만드는 것이 아닙니다.',
    reset: '처음부터',
  },
  en: {
    practice: 'Exercise',
    badge:
      'Pick evidence one item at a time to sort out the three hypotheses. The trace of request req-0458 is a teaching example made for this page; no real system is queried.',
    symptom: 'Symptom: the user saw "no filing confirmation".',
    pick: 'Pick evidence one item at a time. It is arranged in time order, whatever order you pick it in.',
    seconds: (value: number) => `${value} s`,
    after: 'After the request',
    summary: (picked: number, ruledOut: number, consistent: number, open: number) =>
      `${picked} evidence checked · contradicted ${ruledOut} · consistent ${consistent} · unconfirmed ${open}`,
    layers: {
      input: 'Input',
      data: 'Data (policy lookup)',
      model: 'Model',
      validation: 'Validation',
      tool: 'Tool (ticket create)',
      state: 'App state',
      ui: 'UI',
      lookup: 'Lookup during diagnosis',
    } satisfies Record<Layer, string>,
    facts: {
      input: 'Request received. Length and format normal',
      data: 'Policy item NET-03 looked up successfully',
      model: 'Suggested queue=network, evidence=LOG-6610',
      validation: 'All four boundaries passed',
      tool: 'No response for 10 s after calling ticket.create (timeout)',
      state: 'Filing state saved as "not confirmed"',
      ui: 'Showed "no filing confirmation". Exactly the symptom the user saw',
      lookup:
        'Ticket system looked up by request_id: INC-0077 is in the network queue (created 4.1 s after submit)',
    } satisfies Record<Layer, string>,
    hypotheses: {
      'validation-rejected': 'Validation refused the write',
      'response-lost': 'The tool response was lost, but the record exists',
      'ui-mislabel': 'The UI mislabeled the state',
    } satisfies Record<HypothesisId, string>,
    statuses: {
      open: 'Unconfirmed',
      consistent: 'Consistent with the picked evidence',
      'ruled-out': 'Contradicted by the picked evidence',
    } satisfies Record<HypothesisStatus, string>,
    observed: 'Observed',
    unchecked: 'Not checked yet',
    none: 'None',
    hypothesesHeading: 'Hypotheses',
    next: 'Next checks',
    nextDone:
      'You have seen all the evidence that separates the hypotheses. What remains is fixing the cause, not creating the ticket again.',
    reset: 'Start over',
  },
};

/** 시간 축의 끝. tool 호출의 시간 초과가 끝나는 시각에 맞췄다. */
const SPAN = 11000;

/** 축 눈금(밀리초). 막대와 같은 비율로 놓는다. */
const TICKS = [0, 5000, 10000];

const marks: Record<HypothesisStatus, { icon: LucideIcon; tone: string }> = {
  open: { icon: CircleHelp, tone: 'text-text-light' },
  consistent: { icon: CircleCheck, tone: 'text-text-success' },
  'ruled-out': { icon: CircleX, tone: 'text-text-error' },
};

const heading = 'mb-xs text-xxsm font-semiBold text-text-light';

/**
 * 같은 증상에 대한 세 가설을, 고정 trace의 증거를 골라 가르는 2D 타임라인.
 * 가로축은 제출 뒤 시간, 세로축은 계층이다. 판정은 순수 함수 assess가 내고 여기는 선택 상태만 가진다.
 */
export const TraceTimeline = () => {
  const c = useLang(content);
  const [selected, dispatch] = useReducer(selectionReducer, []);
  const result = assess(selected);
  const count = (status: HypothesisStatus) =>
    hypotheses.filter((id) => result.status[id] === status).length;
  const list = (ids: Layer[]) => (ids.length ? ids.map((id) => c.layers[id]).join(' · ') : c.none);

  return (
    <PracticeFrame label={c.practice} instructions={c.badge}>
      <div>
        <p className="text-xsm font-semiBold text-text-default">{c.symptom}</p>
        <p className="mt-2xs text-xxsm text-text-light">{c.pick}</p>
      </div>

      <div>
        <div
          className="hidden grid-cols-[9rem_1fr] gap-xs text-xxsm text-text-light sm:grid"
          aria-hidden="true"
        >
          <span />
          <span className="relative block h-4">
            {TICKS.map((tick) => (
              <span
                key={tick}
                className="absolute top-0 -translate-x-1/2 first:translate-x-0"
                style={{ left: `${(tick / SPAN) * 100}%` }}
              >
                {c.seconds(tick / 1000)}
              </span>
            ))}
          </span>
        </div>
        <List className="flex flex-col gap-xs">
          {events.map((event) => {
            const pressed = selected.includes(event.id);
            const { start, end } = event;

            return (
              <ListItem key={event.id} className="flex flex-col gap-2xs">
                <div className="grid grid-cols-1 items-center gap-xs sm:grid-cols-[9rem_1fr]">
                  <Button
                    variant={pressed ? 'contained' : 'outlined'}
                    size="sm"
                    aria-pressed={pressed}
                    onClick={() => dispatch({ type: 'toggle', id: event.id })}
                  >
                    {pressed && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                    {c.layers[event.id]}
                  </Button>
                  {start !== undefined && end !== undefined ? (
                    <span
                      className="relative block h-3 rounded-xs bg-background-grey/20"
                      aria-hidden="true"
                    >
                      <span
                        className={cx(
                          'absolute top-0 block h-3 rounded-xs',
                          pressed ? 'bg-primaryBtn-default' : 'bg-stroke-default',
                        )}
                        style={{
                          left: `${(start / SPAN) * 100}%`,
                          width: `${Math.max(((end - start) / SPAN) * 100, 1)}%`,
                        }}
                      />
                    </span>
                  ) : (
                    <span className="text-xxsm text-text-light">{c.after}</span>
                  )}
                </div>
                {pressed && (
                  <p className="text-xxsm text-text-default sm:ml-[9.5rem]">{c.facts[event.id]}</p>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>

      <p role="status" className="text-xsm font-semiBold text-text-default">
        {c.summary(selected.length, count('ruled-out'), count('consistent'), count('open'))}
      </p>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div>
          <p className={heading}>{c.observed}</p>
          <p className="text-xsm text-text-default">{list(result.observed)}</p>
          <p className={`${heading} mt-sm`}>{c.unchecked}</p>
          <p className="text-xsm text-text-default">{list(result.unchecked)}</p>
        </div>
        <div>
          <p className={heading}>{c.hypothesesHeading}</p>
          <List className="flex flex-col gap-2xs text-xsm">
            {hypotheses.map((id) => {
              const status = result.status[id];
              const { icon: Icon, tone } = marks[status];
              return (
                <ListItem key={id} className="flex items-start gap-xs">
                  <Icon className={cx('mt-2xs h-4 w-4 shrink-0', tone)} aria-hidden="true" />
                  <span>
                    {c.hypotheses[id]}
                    <span className="text-text-light"> · {c.statuses[status]}</span>
                  </span>
                </ListItem>
              );
            })}
          </List>
          <p className={`${heading} mt-sm`}>{c.next}</p>
          <p className="text-xsm text-text-default">
            {result.nextChecks.length ? list(result.nextChecks) : c.nextDone}
          </p>
        </div>
      </div>

      <div>
        <Button variant="text" size="sm" onClick={() => dispatch({ type: 'reset' })}>
          {c.reset}
        </Button>
      </div>
    </PracticeFrame>
  );
};
