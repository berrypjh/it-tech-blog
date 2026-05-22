import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { toneTokens } from '../../../start/_shared/tones';
import type { DiagramItem, ReactElementKeySeparatedContent } from '../content';
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  KeyIcon,
  NetworkIcon,
  ScanSearchIcon,
} from '../icons';

type Props = { content: ReactElementKeySeparatedContent['hero'] };

export const ElementKeyHero = ({ content }: Props) => (
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

      {/* Right: key tracking diagram */}
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

          <div className="flex flex-col gap-sm">
            <ListRow label={content.previousLabel} items={content.previousItems} />
            <ConnectorBlock />
            <ListRow label={content.nextLabel} items={content.nextItems} />
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border p-md mt-2',
              'border-teal-200/80 bg-teal-50/60',
              'dark:border-teal-800/70 dark:bg-teal-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-500/15 text-teal-700 dark:text-teal-300 shrink-0"
            >
              <CheckCircleIcon className="h-5 w-5" />
            </span>
            <p className="text-xsm sm:text-sm font-bold leading-snug text-teal-900 dark:text-teal-100 break-keep">
              {content.resultNote}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const ListRow = ({ label, items }: { label: string; items: DiagramItem[] }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <li key={`${item.id}-${item.label}`} className="flex">
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  </div>
);

const ItemCard = ({ item }: { item: DiagramItem }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex flex-1 items-center gap-2 rounded-xl border p-sm',
        'bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-full border font-bold',
          t.chip,
        )}
      >
        {item.label}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          item
        </span>
        <code className={cn('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {item.keyText}
        </code>
      </div>
    </article>
  );
};

const ConnectorBlock = () => (
  <div className="flex items-center justify-center py-1" aria-hidden="true">
    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      <KeyIcon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
      track by key
      <KeyIcon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
    </span>
  </div>
);
