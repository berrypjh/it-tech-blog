import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { MismatchDetectRecoverContent } from '../content';
import { ArrowRightIcon, AtomIcon, ServerIcon, TriangleAlertIcon } from '../icons';

type Props = { content: MismatchDetectRecoverContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/ReactFiberHydrationContext.js"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // mismatch → throwOnHydrationMismatch → onRecoverableError'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-stretch">
      {/* LEFT: title */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[2]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[42ch]">
          {content.description}
        </p>
      </div>

      {/* RIGHT: server → mismatch → client */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
        {/* server card */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <ServerIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.serverCard.title}
            </h3>
          </header>
          <code className="rounded bg-slate-950 px-2 py-1 text-[11px] font-mono font-bold text-sky-300 inline-block">
            {content.serverCard.code}
          </code>
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/60 px-3 py-3 dark:border-blue-700 dark:bg-blue-950/30">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-blue-700 dark:text-blue-200 tabular-nums">
              {content.serverCard.value}
            </span>
          </div>
          <p className="text-[11px] text-[var(--term-muted)] break-keep text-center">
            {content.serverCard.caption}
          </p>
        </article>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="self-center inline-flex items-center justify-center text-rose-500 dark:text-rose-400"
        >
          <ArrowRightIcon className="hidden sm:block h-5 w-5" />
          <ArrowRightIcon className="sm:hidden h-4 w-4 rotate-90 mx-auto" />
        </span>

        {/* mismatch card */}
        <article
          className={cn(
            'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md text-center',
            'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <TriangleAlertIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm font-bold text-rose-700 dark:text-rose-200 break-keep">
            {content.mismatchCard.title}
          </h3>
          <p className="text-[11px] text-rose-700/80 dark:text-rose-200/80 break-keep">
            {content.mismatchCard.body}
          </p>
        </article>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="self-center inline-flex items-center justify-center text-rose-500 dark:text-rose-400"
        >
          <ArrowRightIcon className="hidden sm:block h-5 w-5" />
          <ArrowRightIcon className="sm:hidden h-4 w-4 rotate-90 mx-auto" />
        </span>

        {/* client card */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-violet-200/80 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
            >
              <AtomIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm font-bold text-violet-700 dark:text-violet-200 break-keep">
              {content.clientCard.title}
            </h3>
          </header>
          <code className="rounded bg-slate-950 px-2 py-1 text-[11px] font-mono font-bold text-sky-300 inline-block">
            {content.clientCard.code}
          </code>
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-violet-300 bg-violet-50/60 px-3 py-3 dark:border-violet-700 dark:bg-violet-950/30">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-violet-700 dark:text-violet-200 tabular-nums">
              {content.clientCard.value}
            </span>
          </div>
          <p className="text-[11px] text-[var(--term-muted)] break-keep text-center">
            {content.clientCard.caption}
          </p>
        </article>
      </div>
    </div>
  </section>
);
