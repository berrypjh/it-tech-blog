import { cn } from '@it-tech-blog/utils';

import { Lightbulb } from 'lucide-react';
import type { ComponentType, ReactNode, SVGProps } from 'react';

import { toneTokens } from '../tones';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export type CheckpointRow = {
  label: string;
  value: ReactNode;
  /** 라벨 옆 아이콘. 색은 위치별로 자동 적용된다(파일 → 코드 → 설명). */
  icon: LucideLike;
};

type Props = {
  rows: CheckpointRow[];
  /** 하단 학습 질문(인사이트) 콜아웃 본문 */
  question: string;
  className?: string;
};

/** 라벨 아이콘 톤 순서: 파일(accent) → 코드(sky) → 설명(violet). */
const rowToneClass = ['text-[var(--term-accent)]', toneTokens.sky.text, toneTokens.violet.text];

/**
 * 체크포인트 섹션의 좌측 정보 카드.
 * 라벨 옆 아이콘이 달린 InfoRow들 + 하단 학습 질문 콜아웃(전구 아이콘).
 */
export const CheckpointInfoCard = ({ rows, question, className }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
      className,
    )}
  >
    {rows.map((row, i) => (
      <div key={row.label} className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
          <span aria-hidden="true" className="inline-flex items-center justify-center">
            <row.icon className={cn('h-4 w-4', rowToneClass[i] ?? toneTokens.sky.text)} />
          </span>
          {row.label}
        </span>
        <div className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{row.value}</div>
      </div>
    ))}

    <div className="mt-auto flex items-start gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-3 text-[var(--term-fg)]">
      <Lightbulb
        className={cn('mt-0.5 h-4 w-4 shrink-0', toneTokens.sky.text)}
        aria-hidden="true"
      />
      <p className="text-xsm leading-relaxed font-medium break-keep whitespace-pre-line">
        {question}
      </p>
    </div>
  </article>
);
