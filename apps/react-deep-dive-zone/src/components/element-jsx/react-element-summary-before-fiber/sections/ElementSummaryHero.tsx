import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowItem, ReactElementSummaryBeforeFiberContent } from '../content';
import {
  ArrowRightIcon,
  BoxIcon,
  CodeIcon,
  FileTextIcon,
  MapIcon,
  NetworkIcon,
  StarIcon,
} from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['hero'] };

const iconMap = {
  code: CodeIcon,
  cube: BoxIcon,
  document: FileTextIcon,
  tree: NetworkIcon,
} as const;

export const ElementSummaryHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/CHAPTER_WRAPUP.md" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left column */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <StarIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.12] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">
            <span className="text-[var(--term-fg)]">{content.title.line2}</span>
          </span>
          <span className="block">
            <span className="bg-gradient-to-r from-sky-600 via-violet-500 to-teal-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-teal-300">
              {content.title.line3}
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
            <MapIcon className="h-4 w-4" aria-hidden="true" />
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
              'border border-teal-300/80 bg-[var(--term-bg)] text-teal-700 text-xsm font-bold',
              'transition-colors hover:bg-teal-50',
              'dark:border-teal-700/70 dark:text-teal-200 dark:hover:bg-teal-950/30',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
            )}
          >
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Right flow */}
      <div className="order-first lg:order-none min-w-0">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-sm">
            <h2
              id="heading-hero-flow"
              className="text-xsm font-bold tracking-tight text-[var(--term-fg)]"
            >
              {content.flowTitle}
            </h2>
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
              chapter flow
            </span>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm items-stretch">
            {content.flowItems.map((item, idx) => (
              <li key={item.id} className="relative flex">
                <FlowCard item={item} />
                {idx < content.flowItems.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'pointer-events-none absolute hidden lg:flex items-center justify-center',
                      'top-1/2 -right-2 -translate-y-1/2 w-5 h-5 rounded-full z-10',
                      'bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300',
                    )}
                  >
                    <ArrowRightIcon className="h-3 w-3" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </div>
  </section>
);

const FlowCard = ({ item }: { item: HeroFlowItem }) => {
  const t = toneTokens[item.tone];
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        item.highlighted
          ? cn('ring-2 ring-sky-400/60 ring-offset-2 ring-offset-[var(--term-bg)]', t.border)
          : t.border,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        {item.highlighted && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300"
            aria-hidden="true"
          >
            <StarIcon className="h-3 w-3" />
            here
          </span>
        )}
      </header>
      <code className={cn('font-mono text-md font-bold tracking-tight', t.text)}>{item.title}</code>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
        {item.iconHint}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};
