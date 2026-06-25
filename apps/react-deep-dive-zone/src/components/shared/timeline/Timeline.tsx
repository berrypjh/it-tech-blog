import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import { type ToneKey, toneTokens } from '../tones';

export type TimelineEntry = {
  id: string;
  /** 노드 점 톤. */
  tone: ToneKey;
  /** 카드 본문(버전/설명/태그 등). 섹션마다 자유롭게 구성. */
  body: ReactNode;
};

type Props = {
  entries: TimelineEntry[];
  className?: string;
};

/**
 * 세로 타임라인: 좌측 축 선 + 톤 노드 점 + box hover 카드.
 * 노드 점은 축 위에 얹히고(페이지 배경색 ring), 카드 본문은 호출부가 entry.body로 주입한다.
 */
export const Timeline = ({ entries, className }: Props) => (
  <ol className={cn('relative pl-6 sm:pl-8 flex flex-col gap-md', className)}>
    {/* 세로 축 */}
    <span
      aria-hidden="true"
      className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-[var(--term-border)]"
    />

    {entries.map((entry) => (
      <li key={entry.id} className="relative">
        {/* 노드 */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute -left-[1.4rem] sm:-left-[1.6rem] top-md inline-flex items-center justify-center',
            'w-4 h-4 rounded-full ring-4 ring-[var(--color-canvas)]',
            toneTokens[entry.tone].dot,
          )}
        />

        <article
          className={cn(
            'group rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
            'border-[var(--term-border)] hover:-translate-y-px hover:shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          {entry.body}
        </article>
      </li>
    ))}
  </ol>
);
