'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import {
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  HelpCircle as HelpCircleIcon,
} from 'lucide-react';

import { type ToneKey, toneTokens } from '../../shared/tones';

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

export const QuizAccordionCard = ({ card }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const toneText = toneTokens[card.tone].text;

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-sm rounded-lg border shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'p-md sm:p-lg',
        'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
      )}
    >
      <h3
        className={cn(
          'flex items-start gap-2 text-md sm:text-lg font-bold tracking-tight break-keep',
          'text-[var(--term-fg)]',
        )}
      >
        <HelpCircleIcon className={cn('mt-0.5 h-5 w-5 shrink-0', toneText)} aria-hidden="true" />
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
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180', toneText)}
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
          <div className="mt-xs rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-md flex flex-col gap-2">
            <p className={cn('inline-flex items-center gap-2 text-sm font-bold', toneText)}>
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
