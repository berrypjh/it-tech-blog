import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { toneTokens } from '../../../shared/tones';
import type { HeroDiagramItem, ReactElementTypeMeaningContent } from '../content';
import {
  ArrowRightIcon,
  BookOpenIcon,
  ScanSearchIcon,
  SparklesIcon,
  TagIcon,
  UserIcon,
} from '../icons';

type Props = { content: ReactElementTypeMeaningContent['hero'] };

const iconMap = {
  tag: TagIcon,
  user: UserIcon,
  sparkles: SparklesIcon,
} as const;

export const ElementTypeHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/src/jsx/ReactJSXElement.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-xl lg:gap-2xl items-start">
      {/* Left column */}
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
          <span className="block">
            <span className="font-mono bg-gradient-to-r from-sky-600 via-violet-500 to-amber-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-amber-300">
              type
            </span>
            <span>{content.title.line1.replace('type', '')}</span>
          </span>
          <span className="block">
            <span className="text-[var(--term-fg)]">{content.title.line2Accent}</span>
            <span>{content.title.line2After}</span>
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

      {/* Right column: classification diagram */}
      <div className="order-first lg:order-none min-w-0">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-sm">
            <h2
              id="heading-hero-diagram"
              className="text-xsm font-bold tracking-tight text-[var(--term-fg)]"
            >
              {content.diagramTitle}
            </h2>
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
              diagram
            </span>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm items-stretch">
            {content.diagramItems.map((item) => (
              <li key={item.id} className="flex">
                <DiagramCard item={item} />
              </li>
            ))}
          </ul>

          {/* navy bottom note */}
          <div
            className={cn(
              'rounded-xl px-md py-3 mt-2',
              'bg-slate-900 text-slate-100 dark:bg-slate-950',
              'shadow-[0_2px_8px_-4px_rgba(15,23,42,0.6)]',
            )}
          >
            <p className="text-xsm font-bold tracking-tight text-sky-300">
              {content.bottomNoteTitle}
            </p>
            <p className="text-xsm leading-relaxed text-slate-300 break-keep">
              {content.bottomNoteBody}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const DiagramCard = ({ item }: { item: HeroDiagramItem }) => {
  const t = toneTokens[item.tone];
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-2 rounded-xl border p-sm',
        'bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-9 h-9 rounded-lg border', t.chip)}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
        {item.value}
      </code>
      <p className="text-[11px] font-bold text-[var(--term-fg)] break-keep">{item.title}</p>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        {item.category}
      </span>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};
