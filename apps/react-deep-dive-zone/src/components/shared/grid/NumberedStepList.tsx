import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import { type ToneKey, toneTokens } from '../tones';

/** 중립 칩 크롬(surface bg + border). 색은 tone(text)으로 합성. */
export const stepChip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

export type StepRow = {
  id: string;
  num: string;
  tone: ToneKey;
  /** 아이콘 박스에 담길 아이콘(`h-[1.125rem]` 권장). */
  icon: ReactNode;
  title: string;
  description: string;
  /** 우측 추가 컬럼(예: 핵심 파일). 자체 `col-span-full md:col-auto` 래퍼 포함. 없으면 생략. */
  extra?: ReactNode;
};

type Props = {
  rows: StepRow[];
  /** 행 그리드에 더할 className(예: md 4열 템플릿). extra가 있을 때 전달. */
  rowClassName?: string;
};

/**
 * 번호 스텝 행 리스트: 둥근 테두리 박스 안에 번호 배지 + 아이콘 배지 + 제목/설명 행을 나눠 담는다.
 * 행 hover 시 surface로 강조. 우측 추가 컬럼은 extra 슬롯으로 주입.
 */
export const NumberedStepList = ({ rows, rowClassName }: Props) => (
  <ol className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] divide-y divide-[var(--term-border)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
    {rows.map((row) => {
      const tone = toneTokens[row.tone].text;
      return (
        <li key={row.id} className="group transition-colors hover:bg-[var(--term-surface)]">
          <div
            className={cn(
              'grid grid-cols-[auto_auto_1fr] gap-sm md:gap-md items-center px-md sm:px-lg py-md sm:py-lg',
              rowClassName,
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md text-sm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)] shrink-0',
                stepChip,
                tone,
              )}
            >
              {row.num}
            </span>

            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
                stepChip,
                tone,
              )}
            >
              {row.icon}
            </span>

            <div className="flex flex-col gap-0.5 min-w-0">
              <h3
                className={cn(
                  'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
                  tone,
                )}
              >
                {row.title}
              </h3>
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                {row.description}
              </p>
            </div>

            {row.extra}
          </div>
        </li>
      );
    })}
  </ol>
);
