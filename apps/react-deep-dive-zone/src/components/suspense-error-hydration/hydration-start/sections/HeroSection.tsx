import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { HydrationStartContent } from '../content';
import { ArrowLeftRightIcon, AtomIcon, GlobeIcon, LinkIcon, SparklesIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';

type Props = { content: HydrationStartContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/ReactFiberHydrationContext.js"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // hydrateRoot → enterHydrationState → match'}
        </span>
      }
    />

    {/* Hero top: title + illustration */}
    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-start">
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
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[48ch]">
          {content.description}
        </p>
      </div>

      {/* illustration */}
      <div
        aria-hidden="true"
        className={cn(
          'relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[200px]',
          'rounded-3xl border-2 overflow-hidden',
          'border-blue-200/70 bg-gradient-to-br from-blue-50 via-teal-50/40 to-violet-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/50 dark:via-teal-950/30 dark:to-violet-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div
          className="absolute -top-10 -right-10 h-44 w-44 rounded-full opacity-60 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.3), transparent 70%)' }}
        />
        <SparklesIcon className="absolute top-4 right-6 h-3.5 w-3.5 text-violet-400 dark:text-violet-300 opacity-70" />
        <SparklesIcon className="absolute bottom-10 right-14 h-2.5 w-2.5 text-blue-400 dark:text-blue-300 opacity-70" />

        {/* back browser */}
        <div
          className={cn(
            'absolute top-[14%] left-[12%] right-[28%] h-[58%] rotate-[-4deg]',
            'rounded-2xl border-2 border-slate-200 bg-white/85 shadow-[0_8px_24px_rgba(15,23,42,0.08)]',
            'dark:border-slate-700 dark:bg-slate-900/70',
          )}
        >
          <div className="flex items-center gap-1 border-b border-slate-200 px-3 py-1.5 dark:border-slate-700">
            <span className="block h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="block h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="ml-2 inline-flex items-center gap-1 text-[9px] font-mono text-slate-500">
              <GlobeIcon className="h-2.5 w-2.5" />
              server html
            </span>
          </div>
          <div className="px-3 py-3 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-1.5 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-1.5 w-2/3 rounded bg-blue-200/80 dark:bg-blue-800/60" />
          </div>
        </div>

        {/* front react badge */}
        <div
          className={cn(
            'absolute bottom-[14%] right-[12%] rotate-[3deg] w-[60%]',
            'rounded-2xl border-2 border-teal-200 bg-white p-3 shadow-[0_10px_30px_rgba(20,184,166,0.2)]',
            'dark:border-teal-700 dark:bg-slate-900',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-full',
                'bg-teal-600 text-white shadow-[0_2px_0_rgba(13,148,136,0.35)]',
              )}
            >
              <AtomIcon className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200">
              React Fiber
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <LinkIcon className="h-3 w-3 text-blue-600 dark:text-blue-300" />
            <span className="text-[10px] font-mono text-blue-700 dark:text-blue-300">match</span>
          </div>
        </div>
      </div>
    </div>

    {/* Hero bottom: server HTML ↔ Fiber tree */}
    <div className="mt-md lg:mt-lg grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,5fr)] items-stretch">
      {/* Server HTML */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 overflow-hidden',
          'border-blue-200/70 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2 px-md pt-md">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
            {content.serverHtml.title}
          </h3>
        </header>
        <div className="px-md pb-md">
          <CodeBlock
            code={content.serverHtml.content}
            fileLabel={content.serverHtml.fileLabel}
            language="html"
          />
        </div>
      </article>

      {/* match arrow */}
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'hidden lg:block h-px w-12 border-t border-dashed border-blue-300 dark:border-blue-700',
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-full',
            'border-2 border-blue-300 bg-white text-blue-600',
            'dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300',
            'shadow-[0_2px_0_rgba(59,130,246,0.2)]',
          )}
        >
          <ArrowLeftRightIcon className="h-5 w-5" />
        </span>
        <span className="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 text-center leading-tight">
          {content.matchLabel}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'hidden lg:block h-px w-12 border-t border-dashed border-blue-300 dark:border-blue-700',
          )}
        />
      </div>

      {/* Fiber tree */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md',
          'border-teal-200/70 bg-white dark:border-teal-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <AtomIcon className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-xsm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.fiberTree.title}
          </h3>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.fiberTree.lines.map((line, i) => (
            <li key={line.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="text-[10px] font-mono text-slate-400 dark:text-slate-500"
                >
                  └─
                </span>
              )}
              <span
                className={cn(
                  'inline-flex items-center rounded-lg border-2 px-3 py-1.5',
                  'font-mono text-[11px] font-bold break-keep',
                  line.kind === 'root'
                    ? 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-200'
                    : 'border-blue-400 bg-blue-50 text-blue-700 dark:border-blue-600 dark:bg-blue-950/40 dark:text-blue-200',
                )}
              >
                {line.label}
              </span>
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);
