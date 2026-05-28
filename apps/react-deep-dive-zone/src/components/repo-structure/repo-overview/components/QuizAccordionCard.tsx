'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import { CheckCircleIcon, ChevronDownIcon, HelpCircleIcon } from '../icons';

/** QuizAccordionCard가 요구하는 최소 구조. id 등 다른 필드는 자유롭게 가능. */
export type QuizAccordionData = {
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

type Props = { card: QuizAccordionData };

const surfaceClassByTone: Partial<Record<ToneKey, string>> = {
  sky: 'bg-sky-50/70 dark:bg-sky-950/30',
  blue: 'bg-blue-50/70 dark:bg-blue-950/30',
  cyan: 'bg-cyan-50/70 dark:bg-cyan-950/30',
  emerald: 'bg-emerald-50/70 dark:bg-emerald-950/30',
  teal: 'bg-teal-50/70 dark:bg-teal-950/30',
  violet: 'bg-violet-50/70 dark:bg-violet-950/30',
  indigo: 'bg-indigo-50/70 dark:bg-indigo-950/30',
  amber: 'bg-amber-50/70 dark:bg-amber-950/30',
};

export const QuizAccordionCard = ({ card }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const tone = toneTokens[card.tone];
  const surfaceClass = surfaceClassByTone[card.tone] ?? 'bg-[var(--term-surface)]';

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-sm rounded-lg border shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        surfaceClass,
        'p-md sm:p-lg',
        'transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <h3
        className={cn(
          'flex items-start gap-2 text-md sm:text-lg font-bold tracking-tight break-keep',
          'text-[var(--term-fg)]',
        )}
      >
        <HelpCircleIcon className={cn('mt-0.5 h-5 w-5 shrink-0', tone.text)} aria-hidden="true" />
        {card.question}
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.hint}
      </p>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'mt-xs flex items-center justify-between gap-sm rounded-md border px-md py-2.5 text-left text-xsm font-bold',
          'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
          'transition-colors hover:border-[var(--term-accent)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        <span>{card.accordionLabel}</span>
        <ChevronDownIcon
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180', tone.text)}
          aria-hidden="true"
        />
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-hidden={!open}
        className={cn(
          'grid transition-all duration-200',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'mt-xs rounded-md border bg-[var(--term-bg)] p-md flex flex-col gap-2',
              tone.border,
            )}
          >
            <p className={cn('inline-flex items-center gap-2 text-sm font-bold', tone.text)}>
              <CheckCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {card.answer}
            </p>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.answerDescription}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
