import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { PromiseVsErrorSplitContent } from '../content';
import { ArrowDownIcon, HourglassIcon, LoaderIcon, TriangleAlertIcon } from '../icons';
import { sectionNumberBadge } from '../tone';

import { CodeBlock } from './_CodeBlock';

type Props = { content: PromiseVsErrorSplitContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/ReactFiberThrow.js"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // throwException → thenable | regular error'}
        </span>
      }
    />

    {/* Title block */}
    <div className="mt-md flex items-start gap-3">
      <span aria-hidden="true" className={cn(sectionNumberBadge, 'h-10 w-10 text-sm')}>
        {content.number}
      </span>
      <div className="flex flex-col gap-2">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
          {content.description}
        </p>
      </div>
    </div>

    {/* 3-area panel */}
    <div className="mt-lg grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,4fr)] items-stretch">
      {/* LEFT: Promise code */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md',
          'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
          {content.promiseCode.label}
        </span>
        <CodeBlock
          code={content.promiseCode.code}
          fileLabel={content.promiseCode.fileLabel}
          withLineNumbers={false}
        />
        <p
          className={cn(
            'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-[11px] font-bold',
            'border-emerald-200 bg-emerald-50 text-emerald-700',
            'dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200',
          )}
        >
          <HourglassIcon className="h-3 w-3" aria-hidden="true" />
          {content.promiseCode.pill}
        </p>
      </article>

      {/* CENTER: classifier diagram */}
      <article
        className={cn(
          'relative flex flex-col items-center gap-2 rounded-2xl border-2 p-md',
          'border-blue-200/70 bg-gradient-to-b from-blue-50/40 to-white',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Root */}
        <div
          className={cn(
            'inline-flex items-center rounded-xl border-2 px-4 py-2 mt-1',
            'border-slate-700 bg-slate-900 text-white',
            'dark:border-slate-600 dark:bg-slate-900',
            'font-mono text-xsm font-bold',
          )}
        >
          {content.diagram.rootLabel}
        </div>
        <div aria-hidden="true" className="h-3 w-px bg-blue-400/70 dark:bg-blue-500/60" />

        {/* Diamond */}
        <div
          className={cn(
            'relative flex items-center justify-center w-32 h-32',
            'rotate-45 rounded-2xl border-2',
            'border-blue-400 bg-white',
            'dark:border-blue-500 dark:bg-blue-950/40',
            'shadow-[0_2px_0_rgba(59,130,246,0.18)]',
          )}
        >
          <div className="-rotate-45 flex flex-col items-center text-center">
            <span className="text-sm font-mono font-bold text-blue-700 dark:text-blue-300">
              {content.diagram.diamondTitle}
            </span>
            <span className="text-[10px] font-mono text-blue-500/80 dark:text-blue-300/80">
              {content.diagram.diamondSubtitle}
            </span>
          </div>
        </div>

        {/* Branch arrows */}
        <div aria-hidden="true" className="grid grid-cols-2 gap-md w-full max-w-[260px] mt-1">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-300">
              {content.diagram.yesLabel}
            </span>
            <ArrowDownIcon className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono font-bold text-rose-600 dark:text-rose-300">
              {content.diagram.noLabel}
            </span>
            <ArrowDownIcon className="h-4 w-4 text-rose-500 dark:text-rose-400" />
          </div>
        </div>

        {/* Branch results */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-[260px]">
          <div
            className={cn(
              'flex flex-col items-center gap-0.5 rounded-xl border-2 p-2',
              'border-emerald-300/80 bg-emerald-50/70 text-emerald-700',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30 dark:text-emerald-200',
            )}
          >
            <LoaderIcon className="h-4 w-4" aria-hidden="true" />
            <span className="text-xsm font-bold">{content.diagram.yesTitle}</span>
            <span className="text-[10px] text-emerald-600/80 dark:text-emerald-300/80 text-center break-keep">
              {content.diagram.yesSubtitle}
            </span>
          </div>
          <div
            className={cn(
              'flex flex-col items-center gap-0.5 rounded-xl border-2 p-2',
              'border-rose-300/80 bg-rose-50/70 text-rose-700',
              'dark:border-rose-700/70 dark:bg-rose-950/30 dark:text-rose-200',
            )}
          >
            <TriangleAlertIcon className="h-4 w-4" aria-hidden="true" />
            <span className="text-xsm font-bold">{content.diagram.noTitle}</span>
            <span className="text-[10px] text-rose-600/80 dark:text-rose-300/80 text-center break-keep">
              {content.diagram.noSubtitle}
            </span>
          </div>
        </div>
      </article>

      {/* RIGHT: Error code */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md',
          'border-rose-200/80 bg-white dark:border-rose-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
          {content.errorCode.label}
        </span>
        <CodeBlock
          code={content.errorCode.code}
          fileLabel={content.errorCode.fileLabel}
          withLineNumbers={false}
        />
        <p
          className={cn(
            'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-[11px] font-bold',
            'border-rose-200 bg-rose-50 text-rose-700',
            'dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200',
          )}
        >
          <TriangleAlertIcon className="h-3 w-3" aria-hidden="true" />
          {content.errorCode.pill}
        </p>
      </article>
    </div>
  </section>
);
