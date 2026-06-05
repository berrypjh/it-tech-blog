import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ChainCard, WhyOpenSourceContent } from '../content';
import { ArrowRightIcon, ExternalLinkIcon, FlaskIcon } from '../icons';

type Props = { content: WhyOpenSourceContent['chain'] };

type ChainTone = ChainCard['tone'];

const toneClasses: Record<
  ChainTone,
  { step: string; border: string; hoverBorder: string; cta: string; mono: string }
> = {
  blue: {
    step: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500',
    cta: 'text-sky-700 dark:text-sky-200 border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/40',
    mono: 'text-sky-700 dark:text-sky-200',
  },
  teal: {
    step: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
    cta: 'text-teal-700 dark:text-teal-200 border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950/40',
    mono: 'text-teal-700 dark:text-teal-200',
  },
  lavender: {
    step: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    cta: 'text-violet-700 dark:text-violet-200 border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/40',
    mono: 'text-violet-700 dark:text-violet-200',
  },
};

export const ApiToImplementationToTestFlow = ({ content }: Props) => {
  return (
    <section id="section-chain" aria-labelledby="heading-chain" className="space-y-lg">
      <SectionHeader
        id="chain"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FlaskIcon className="h-5 w-5" />}
      />

      {/* lg: 3 카드 + 사이 화살표 / 모바일: 세로 흐름 */}
      <ol className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-sm items-stretch">
        {content.cards.map((card, idx) => {
          const t = toneClasses[card.tone];
          const isLast = idx === content.cards.length - 1;
          return [
            <li key={card.id} className="flex min-w-0">
              <article
                className={cn(
                  'group flex flex-col w-full min-w-0 gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                )}
              >
                {/* step label */}
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-7 h-7 rounded-full text-xsm font-bold tabular-nums',
                      t.step,
                    )}
                  >
                    {card.stepNum}
                  </span>
                  <span className="text-xsm font-bold text-[var(--term-fg)] tracking-tight">
                    {card.stepLabel}
                  </span>
                </header>

                {/* title */}
                <h3
                  className={cn(
                    'text-md sm:text-lg font-bold font-mono tracking-tight break-all',
                    t.mono,
                  )}
                >
                  {card.title}
                </h3>

                {/* code preview */}
                <pre className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-2 text-[10.5px] sm:text-[11px] leading-[1.55] font-mono text-[var(--term-fg)] whitespace-pre overflow-x-auto">
                  <code>{card.code}</code>
                </pre>

                {/* description */}
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description}
                </p>

                {/* CTA */}
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-md py-2 rounded-md border text-xsm font-bold',
                    'transition-colors mt-auto',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                    t.cta,
                  )}
                >
                  {card.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                  <ExternalLinkIcon className="h-3 w-3 opacity-80" />
                </a>
              </article>
            </li>,
            !isLast && (
              <li
                key={`arrow-${card.id}`}
                aria-hidden="true"
                className="flex items-center justify-center text-[var(--term-dim)] lg:px-1"
              >
                {/* lg: 가로 화살표 / 모바일: 세로 chevron */}
                <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-sky-500 dark:text-sky-400">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
                <span className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-sky-500 dark:text-sky-400 rotate-90">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </li>
            ),
          ];
        })}
      </ol>
    </section>
  );
};
