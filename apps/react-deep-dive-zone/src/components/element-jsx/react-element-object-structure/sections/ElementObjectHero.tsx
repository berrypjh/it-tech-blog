import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { toneTokens } from '../../../start/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import type { HeroCallout, ReactElementObjectStructureContent } from '../content';
import { ArrowRightIcon, BookOpenIcon, ScanSearchIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['hero'] };

export const ElementObjectHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/src/jsx/ReactJSXElement.js" />

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
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-cyan-300 dark:to-violet-300">
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

      {/* Right code + callouts column */}
      <div className="order-first lg:order-none flex flex-col gap-md min-w-0">
        <div
          className={cn(
            'flex flex-col gap-sm rounded-2xl border p-md',
            'border-[var(--term-border)] bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span className="inline-flex w-fit items-center rounded-full border border-sky-300/80 bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200">
            {content.codeCardLabel}
          </span>
          <CodePanel code={content.code} language="JS" showWindowDots caption="ReactElement" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {content.callouts.map((callout) => (
            <li key={callout.id}>
              <CalloutPill callout={callout} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const CalloutPill = ({ callout }: { callout: HeroCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border p-2.5 bg-[var(--term-bg)]',
        'shadow-[0_1px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-md border px-2 py-1 text-[11px] font-mono font-bold tracking-tight shrink-0',
          t.chip,
        )}
      >
        {callout.field}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cn('text-xsm font-bold tracking-tight', t.text)}>{callout.label}</span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {callout.description}
        </p>
      </div>
    </article>
  );
};
