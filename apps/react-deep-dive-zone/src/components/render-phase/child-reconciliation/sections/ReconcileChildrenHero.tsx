import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { ReconcileChildrenContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  FileTextIcon,
  HexagonIcon,
  LayersIcon,
  LightbulbIcon,
  NetworkIcon,
} from '../icons';

type Props = { content: ReconcileChildrenContent['hero'] };

export const ReconcileChildrenHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/child-reconciliation.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// reconciler entry'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroPreview diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroPreview = ({ diagram }: { diagram: ReconcileChildrenContent['hero']['diagram'] }) => (
  <div
    className={cn(
      '@container relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// current.child + nextChildren → reconcile → workInProgress.child'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        preview
      </span>
    </header>

    <h2 className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] text-center break-keep">
      {diagram.title}
    </h2>

    {/* Top row: 3 cards */}
    <div className="grid grid-cols-1 @2xl:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
      {/* current.child */}
      <article
        className={cn(
          'flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md',
          'border-sky-300/80 bg-sky-50/60',
          'dark:border-sky-700/70 dark:bg-sky-950/30',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            'bg-sky-100 text-sky-700 border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <NetworkIcon className="h-5 w-5" />
        </span>
        <h3 className="text-xsm sm:text-sm font-bold leading-tight text-sky-800 dark:text-sky-100 text-center break-keep">
          {diagram.currentCard.title}
        </h3>
        <code className="font-mono text-[10px] sm:text-xsm leading-snug text-sky-700/80 dark:text-sky-200/80 text-center break-all">
          {diagram.currentCard.subtitle}
        </code>
      </article>

      <span
        aria-hidden="true"
        className="hidden @2xl:flex items-center justify-center text-teal-500/80 dark:text-teal-300/80"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </span>
      <span
        aria-hidden="true"
        className="@2xl:hidden flex justify-center text-teal-500/80 dark:text-teal-300/80"
      >
        <ChevronDownIcon className="h-5 w-5" />
      </span>

      {/* Center: reconcileChildren */}
      <article
        className={cn(
          'flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md',
          'border-teal-400/80 bg-teal-100/70',
          'dark:border-teal-600/70 dark:bg-teal-950/40',
          'shadow-[0_2px_0_rgba(0,0,0,0.06)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border-2',
            'bg-teal-200 text-teal-800 border-teal-300/80',
            'dark:bg-teal-900/70 dark:text-teal-100 dark:border-teal-700/60',
          )}
        >
          <HexagonIcon className="h-5 w-5" />
        </span>
        <code className="font-mono text-sm sm:text-md font-bold leading-tight text-teal-900 dark:text-teal-50 text-center">
          {diagram.centerCard.title}
        </code>
        <code className="font-mono text-[10px] leading-snug text-teal-800/80 dark:text-teal-200/80 text-center break-all max-w-[260px]">
          {diagram.centerCard.signature}
        </code>
      </article>

      <span
        aria-hidden="true"
        className="hidden @2xl:flex items-center justify-center text-violet-500/80 dark:text-violet-300/80"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </span>
      <span
        aria-hidden="true"
        className="@2xl:hidden flex justify-center text-violet-500/80 dark:text-violet-300/80"
      >
        <ChevronDownIcon className="h-5 w-5" />
      </span>

      {/* workInProgress.child */}
      <article
        className={cn(
          'flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md',
          'border-violet-300/80 bg-violet-50/60',
          'dark:border-violet-700/70 dark:bg-violet-950/30',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            'bg-violet-100 text-violet-700 border-violet-200/80',
            'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <LayersIcon className="h-5 w-5" />
        </span>
        <h3 className="text-xsm sm:text-sm font-bold leading-tight text-violet-800 dark:text-violet-100 text-center break-keep">
          {diagram.newCard.title}
        </h3>
        <code className="font-mono text-[10px] sm:text-xsm leading-snug text-violet-700/80 dark:text-violet-200/80 text-center break-all">
          {diagram.newCard.subtitle}
        </code>
      </article>
    </div>

    {/* Up arrow from input */}
    <div className="my-2 flex flex-col items-center" aria-hidden="true">
      <ArrowDownIcon className="h-5 w-5 text-[var(--term-dim)] rotate-180" />
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        input
      </span>
    </div>

    {/* nextChildren input */}
    <article
      className={cn(
        'mx-auto flex w-full max-w-[420px] items-center gap-3 rounded-2xl border-2 border-dashed p-md',
        'border-sky-300/80 bg-white',
        'dark:border-sky-700/70 dark:bg-slate-950/40',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          'bg-sky-100 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        <FileTextIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-sm font-bold leading-tight text-sky-900 dark:text-sky-100">
          {diagram.inputCard.title}
        </code>
        <p className="text-[10px] sm:text-xsm leading-snug text-sky-800/85 dark:text-sky-100/85 break-keep">
          {diagram.inputCard.description}
        </p>
      </div>
    </article>
  </div>
);
