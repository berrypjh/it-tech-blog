import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import type { HeroFlowStep, ReactElementRefReact19Content } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BookOpenIcon, NetworkIcon, ScanSearchIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['hero'] };

export const React19RefHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/src/ReactBaseClasses.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text column */}
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center min-w-[2.5rem] px-2 py-1',
              'rounded-md text-xsm font-bold tabular-nums tracking-wider',
              'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            )}
          >
            {content.badge}
          </span>
          <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {content.eyebrow}
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.12] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">
            <span className="bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 bg-clip-text text-transparent dark:from-violet-300 dark:via-sky-300 dark:to-teal-300">
              {content.title.line2}
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            <ScanSearchIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={content.secondaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
            )}
          >
            <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Right column: comparison diagram */}
      <div className="order-first lg:order-none min-w-0">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
            >
              <NetworkIcon className="h-4 w-4" />
            </span>
            <h2
              id="heading-hero-diagram"
              className="text-xsm font-bold tracking-tight text-[var(--term-fg)]"
            >
              {content.diagramTitle}
            </h2>
          </header>

          <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-start">
            <FlowColumn title={content.leftColumnTitle} steps={content.leftFlow} variant="legacy" />
            <FlowColumn
              title={content.rightColumnTitle}
              steps={content.rightFlow}
              variant="modern"
            />

            {/* center arrow */}
            <span
              aria-hidden="true"
              className="hidden sm:inline-flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-white shadow-md"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <span aria-hidden="true" className="sm:hidden flex justify-center -my-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow-md">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const variantClass = {
  legacy: {
    title:
      'border-slate-300/80 bg-slate-100 text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200',
    card: 'border-slate-300/70 dark:border-slate-700/70',
    text: 'text-slate-700 dark:text-slate-200',
    dot: 'bg-slate-400',
  },
  modern: {
    title:
      'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200',
    card: 'border-teal-300/70 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-200',
    dot: 'bg-teal-500',
  },
} as const;

const FlowColumn = ({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: HeroFlowStep[];
  variant: keyof typeof variantClass;
}) => {
  const v = variantClass[variant];
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          v.title,
        )}
      >
        {title}
      </span>
      <ol className="flex flex-col gap-1.5">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col">
            <article
              className={cn(
                'flex items-center gap-2 rounded-xl border p-2.5 bg-[var(--term-bg)]',
                v.card,
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block w-1.5 h-1.5 rounded-full', v.dot)}
              />
              <span className={cn('text-[11px] font-bold tracking-tight', v.text)}>
                {step.label}
              </span>
            </article>
            {idx < steps.length - 1 && (
              <span className="flex justify-center py-0.5" aria-hidden="true">
                <ArrowDownIcon className="h-3 w-3 text-[var(--term-muted)]" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
