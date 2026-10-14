'use client';

import { useReducer } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import { Button, cx } from '@berrypjh/react-ui';

type Level = 1 | 2 | 3;

/** 응답의 끝을 뜻하는 토큰. 화면에는 locale별 문구로 보인다. */
const END = '\u0000end';

type Step = {
  candidates: { token: string; level: Level }[];
  /** 이 단계에서 이어 붙이는 토큰. 마지막 단계에서는 끝 표시다. */
  chosen: string;
};

const content = {
  ko: {
    badge: '교육용 그림 · 실제 모델의 확률이 아닙니다',
    prefixLabel: '지금까지의 텍스트',
    candidatesLabel: '다음 토큰 후보와 그럴듯함의 정도',
    levels: { 3: '높음', 2: '중간', 1: '낮음' } satisfies Record<Level, string>,
    chosen: '선택됨',
    next: '다음 토큰 고르기',
    reset: '처음부터',
    end: '끝',
    done: '끝 표시가 선택되어 응답이 완성되었습니다.',
    rule: '이 그림은 가장 그럴듯한 후보를 고르는 규칙을 가정했습니다. 선택 규칙은 설정에 따라 달라질 수 있습니다.',
    prefix: '하늘이 맑아서 산책하기',
    steps: [
      {
        candidates: [
          { token: '좋다', level: 3 },
          { token: '편하다', level: 2 },
          { token: '어렵다', level: 1 },
        ],
        chosen: '좋다',
      },
      {
        candidates: [
          { token: '.', level: 3 },
          { token: '!', level: 2 },
          { token: '고', level: 1 },
        ],
        chosen: '.',
      },
      {
        candidates: [
          { token: END, level: 3 },
          { token: '다음', level: 1 },
        ],
        chosen: END,
      },
    ] satisfies Step[],
    announce: (total: number, chosen: string) =>
      `후보 ${total}개 중 "${chosen}"을 골라 이어 붙였습니다.`,
  },
  en: {
    badge: 'Teaching illustration · not a real model probability',
    prefixLabel: 'Text so far',
    candidatesLabel: 'Next-token candidates and how plausible each is',
    levels: { 3: 'high', 2: 'medium', 1: 'low' } satisfies Record<Level, string>,
    chosen: 'chosen',
    next: 'Pick the next token',
    reset: 'Start over',
    end: 'end',
    done: 'The end marker was chosen, so the response is complete.',
    rule: 'This illustration assumes a rule that picks the most plausible candidate. The selection rule can differ by settings.',
    prefix: 'The sky is clear, so a walk is',
    steps: [
      {
        candidates: [
          { token: 'nice', level: 3 },
          { token: 'easy', level: 2 },
          { token: 'hard', level: 1 },
        ],
        chosen: 'nice',
      },
      {
        candidates: [
          { token: '.', level: 3 },
          { token: '!', level: 2 },
          { token: ',', level: 1 },
        ],
        chosen: '.',
      },
      {
        candidates: [
          { token: END, level: 3 },
          { token: 'next', level: 1 },
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
  const joiner = locale === 'ko' ? '' : ' ';
  const appended = c.steps.slice(0, step).filter((s) => s.chosen !== END);
  const lastChosen = step > 0 ? c.steps[step - 1] : null;
  const show = (token: string) => (token === END ? `<${c.end}>` : token);

  return (
    <figure className="my-lg rounded-md border border-stroke-light">
      <p className="border-b border-stroke-light px-lg py-sm text-xxsm font-semiBold text-text-light">
        {c.badge}
      </p>

      <div className="flex flex-col gap-md p-lg">
        <div>
          <p className="text-xxsm font-semiBold text-text-light">{c.prefixLabel}</p>
          <p className="mt-2xs text-md text-text-default">
            {c.prefix}
            {appended.map(({ chosen }, i) => (
              <span
                key={`${chosen}-${i}`}
                className="rounded-xs bg-primaryBtn-outlinedHover px-2xs text-text-primary"
              >
                {joiner}
                {chosen}
              </span>
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
      </div>

      <figcaption className="border-t border-stroke-light px-lg py-sm text-xxsm text-text-light">
        {c.rule}
      </figcaption>
    </figure>
  );
};
