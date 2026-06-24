import { cn } from '@it-tech-blog/utils';

import { CheckCircle2, Lightbulb } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import { SectionNote } from '../note';
import { type ToneKey, toneTokens } from '../tones';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

type Props = {
  tone: ToneKey;
  /** 헤더 아이콘. 색은 tone으로 자동 적용. */
  icon: LucideLike;
  title: string;
  /** 헤더 우측 배지. 없으면 생략. */
  badge?: string;
  /** 제목 아래 보조 설명. 없으면 생략. */
  description?: string;
  bullets: string[];
  /** 하단 추천/학습 노트. 없으면 생략. */
  note?: string;
};

export const ToneDetailPanel = ({
  tone,
  icon: Icon,
  title,
  badge,
  description,
  bullets,
  note,
}: Props) => {
  const t = toneTokens[tone];
  return (
    <>
      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-sm min-w-0">
          <span
            aria-hidden="true"
            className="inline-flex w-11 h-11 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]"
          >
            <Icon className={cn('h-5 w-5', t.text)} aria-hidden="true" />
          </span>
          <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', t.text)}>{title}</h3>
        </div>
        {badge && (
          <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-medium text-[var(--term-muted)]">
            <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', t.dot)} />
            {badge}
          </span>
        )}
      </header>

      {description && (
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {description}
        </p>
      )}

      <ul className="flex flex-col gap-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {note && (
        <SectionNote className="mt-auto" icon={<Lightbulb className="h-4 w-4" />}>
          {note}
        </SectionNote>
      )}
    </>
  );
};
