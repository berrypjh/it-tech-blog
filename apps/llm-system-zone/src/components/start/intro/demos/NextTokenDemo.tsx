'use client';

import { Fragment, useReducer } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';

import { Button, cx } from '@berrypjh/react-ui';

type Level = 1 | 2 | 3;

/** 응답의 끝을 뜻하는 토큰. 화면에는 locale별 문구로 보인다. */
const END = '\u0000end';

type Step = {
  /** 토큰은 앞 공백까지 포함한다. 띄어 쓸 토큰만 공백으로 시작해 ko · en 모두 맞춤법대로 이어진다. */
  candidates: { token: string; level: Level }[];
  /** 이 단계에서 이어 붙이는 토큰. 마지막 단계에서는 끝 표시다. */
  chosen: string;
};

const content = {
  ko: {
    practice: '실습',
    badge:
      '"다음 토큰 고르기"를 눌러 후보 가운데 하나씩 이어 붙여 보세요. 이 페이지가 만든 고정된 교육 예시이며 실제 모델의 확률이 아닙니다.',
    prefixLabel: '지금까지의 텍스트',
    candidatesLabel: '다음 토큰 후보와 그럴듯함의 정도',
    levels: { 3: '높음', 2: '중간', 1: '낮음' } satisfies Record<Level, string>,
    chosen: '선택됨',
    next: '다음 토큰 고르기',
    reset: '처음부터',
    end: '끝',
    done: '끝 표시가 선택되어 응답이 완성되었습니다. 이 문장은 아직 티켓 시스템에 기록되지 않았습니다.',
    rule: '이 그림은 가장 그럴듯한 후보를 고르는 규칙을 가정했습니다. 선택 규칙은 설정에 따라 달라질 수 있습니다.',
    prefix: '문의: "VPN이 연결되지 않아요." 추천 담당 큐는',
    steps: [
      {
        candidates: [
          { token: ' 네트워크', level: 3 },
          { token: ' 계정', level: 2 },
          { token: ' 장비', level: 1 },
        ],
        chosen: ' 네트워크',
      },
      {
        candidates: [
          { token: '입니다', level: 3 },
          { token: ' 팀', level: 2 },
          { token: '와', level: 1 },
        ],
        chosen: '입니다',
      },
      {
        candidates: [
          { token: '.', level: 3 },
          { token: '!', level: 1 },
        ],
        chosen: '.',
      },
      {
        candidates: [
          { token: END, level: 3 },
          { token: ' 다만', level: 1 },
        ],
        chosen: END,
      },
    ] satisfies Step[],
    announce: (total: number, chosen: string) =>
      `후보 ${total}개 중 "${chosen}"을 골라 이어 붙였습니다.`,
  },
  en: {
    practice: 'Exercise',
    badge:
      'Press "Pick the next token" to append one candidate at a time. This is a fixed teaching example made for this page, not a real model probability.',
    prefixLabel: 'Text so far',
    candidatesLabel: 'Next-token candidates and how plausible each is',
    levels: { 3: 'high', 2: 'medium', 1: 'low' } satisfies Record<Level, string>,
    chosen: 'chosen',
    next: 'Pick the next token',
    reset: 'Start over',
    end: 'end',
    done: 'The end marker was chosen, so the response is complete. This sentence is not yet recorded in the ticket system.',
    rule: 'This illustration assumes a rule that picks the most plausible candidate. The selection rule can differ by settings.',
    prefix: 'Request: "My VPN won’t connect." Suggested queue:',
    steps: [
      {
        candidates: [
          { token: ' Network', level: 3 },
          { token: ' Accounts', level: 2 },
          { token: ' Hardware', level: 1 },
        ],
        chosen: ' Network',
      },
      {
        candidates: [
          { token: '.', level: 3 },
          { token: ' team', level: 2 },
          { token: ',', level: 1 },
        ],
        chosen: '.',
      },
      {
        candidates: [
          { token: END, level: 3 },
          { token: ' Also', level: 1 },
        ],
        chosen: END,
      },
    ] satisfies Step[],
    announce: (total: number, chosen: string) =>
      `Picked "${chosen}" from ${total} candidates and appended it.`,
  },
};

const widthOf: Record<Level, string> = { 3: '100%', 2: '60%', 1: '25%' };

/** 다음 토큰 후보를 보고 하나를 이어 붙이는 과정을 단계별로 보는 그림. 자동 재생은 없다. */
export const NextTokenDemo = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const [step, dispatch] = useReducer(
    (state: number, action: 'next' | 'reset') =>
      action === 'reset' ? 0 : Math.min(state + 1, c.steps.length),
    0,
  );
  const finished = step >= c.steps.length;
  const current = finished ? null : c.steps[step];
  const appended = c.steps.slice(0, step).filter((s) => s.chosen !== END);
  const lastChosen = step > 0 ? c.steps[step - 1] : null;
  const show = (token: string) => (token === END ? `<${c.end}>` : token.trim());

  return (
    <PracticeFrame label={c.practice} instructions={c.badge}>
      <div>
        <p className="text-xxsm font-semiBold text-text-light">{c.prefixLabel}</p>
        <p className="mt-2xs text-md text-text-default">
          {c.prefix}
          {appended.map(({ chosen }, i) => (
            <Fragment key={`${chosen}-${i}`}>
              {chosen.startsWith(' ') && ' '}
              <span className="rounded-xs bg-primaryBtn-outlinedHover text-text-primary">
                {chosen.trim()}
              </span>
            </Fragment>
          ))}
          {finished && (
            <span className="ml-xs rounded-xs border border-stroke-light px-xs text-xxsm text-text-light">
              {`<${c.end}>`}
            </span>
          )}
        </p>
      </div>

      {current && (
        <div>
          <p className="text-xxsm font-semiBold text-text-light">{c.candidatesLabel}</p>
          <ul className="mt-xs flex flex-col gap-xs">
            {current.candidates.map((candidate) => {
              const isChosen = candidate.token === current.chosen;

              return (
                <li
                  key={candidate.token}
                  className="grid grid-cols-[5rem_1fr_6rem] items-center gap-sm text-xsm"
                >
                  <span className={cx('font-semiBold', isChosen && 'text-text-primary')}>
                    {show(candidate.token)}
                  </span>
                  <span className="block h-3 rounded-xs bg-background-grey/20" aria-hidden="true">
                    <span
                      className={cx(
                        'block h-3 rounded-xs motion-safe:transition-[width] motion-safe:duration-500',
                        isChosen ? 'bg-primaryBtn-default' : 'bg-stroke-default',
                      )}
                      style={{ width: widthOf[candidate.level] }}
                    />
                  </span>
                  <span className="text-xxsm text-text-light">
                    {c.levels[candidate.level]}
                    {isChosen ? ` · ${c.chosen}` : ''}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-sm">
        <Button
          variant="contained"
          size="sm"
          aria-disabled={finished}
          className={cx(finished && 'cursor-not-allowed opacity-50')}
          onClick={() => !finished && dispatch('next')}
        >
          {c.next}
        </Button>
        <Button variant="text" size="sm" onClick={() => dispatch('reset')}>
          {c.reset}
        </Button>
      </div>

      <p role="status" aria-live="polite" className="text-xxsm text-text-light">
        {finished
          ? c.done
          : lastChosen
            ? c.announce(lastChosen.candidates.length, show(lastChosen.chosen))
            : ''}
      </p>
      <p className="text-xxsm text-text-light">{c.rule}</p>
    </PracticeFrame>
  );
};
