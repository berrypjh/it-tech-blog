import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { FunctionComponentContent } from '../content';
import {
  ChevronDownIcon,
  CodeIcon,
  FunctionSquareIcon,
  LightbulbIcon,
  SettingsIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FunctionComponentContent['hero'] };

export const FunctionComponentHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/function-component-process.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// function component flow'}</span>}
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

const HeroPreview = ({ diagram }: { diagram: FunctionComponentContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// code → renderWithHooks → nextChildren → reconcile'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        4 steps
      </span>
    </header>

    <h2 className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] text-center break-keep">
      {diagram.title}
    </h2>

    <div className="flex flex-col items-center gap-2">
      {/* Step 1: code card */}
      <article
        className={cn(
          'w-full max-w-[460px] overflow-hidden rounded-2xl border-2',
          'border-sky-300/80 bg-white',
          'dark:border-sky-700/70 dark:bg-slate-950/40',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2 border-b border-[var(--term-border)] bg-sky-50/60 dark:bg-sky-950/30 px-md py-1.5">
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200"
          >
            <FunctionSquareIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xsm font-bold text-sky-800 dark:text-sky-100">
            {diagram.codeStep.title}
          </span>
        </header>
        <pre className="overflow-x-auto px-md py-2 text-[11px] sm:text-xsm leading-[1.6] font-mono text-slate-800 dark:text-slate-100">
          <code className="whitespace-pre">{diagram.codeStep.code}</code>
        </pre>
      </article>

      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 text-teal-500/80 dark:text-teal-300/80"
      />

      {/* Step 2: renderWithHooks */}
      <article
        className={cn(
          'inline-flex w-full max-w-[460px] items-center gap-3 rounded-2xl border-2 p-md',
          'border-teal-300/80 bg-teal-50/60 text-teal-900',
          'dark:border-teal-700/70 dark:bg-teal-950/30 dark:text-teal-100',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            'bg-teal-100 text-teal-700 border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <SettingsIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className="font-mono text-sm font-bold leading-tight">
            {diagram.hooksStep.title}
          </code>
          <p className="text-[10px] sm:text-xsm leading-snug text-teal-800/85 dark:text-teal-100/85 break-keep">
            {diagram.hooksStep.description}
          </p>
        </div>
      </article>

      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
      />

      {/* Step 3: nextChildren */}
      <article
        className={cn(
          'w-full max-w-[460px] overflow-hidden rounded-2xl border-2',
          'border-violet-300/80 bg-violet-50/40',
          'dark:border-violet-700/70 dark:bg-violet-950/20',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] bg-violet-50/60 dark:bg-violet-950/30 px-md py-1.5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200"
            >
              <CodeIcon className="h-3.5 w-3.5" />
            </span>
            <code className="font-mono text-xsm font-bold text-violet-800 dark:text-violet-100">
              {diagram.nextChildrenStep.title}
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80">
            element tree
          </span>
        </header>
        <pre className="overflow-x-auto px-md py-2 text-[11px] sm:text-xsm leading-[1.6] font-mono text-slate-800 dark:text-slate-100">
          <code className="whitespace-pre">{diagram.nextChildrenStep.code}</code>
        </pre>
        <p className="px-md py-1.5 text-[10px] sm:text-xsm leading-snug text-violet-800/85 dark:text-violet-100/85 break-keep border-t border-[var(--term-border)]">
          {diagram.nextChildrenStep.description}
        </p>
      </article>

      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 text-sky-500/80 dark:text-sky-300/80"
      />

      {/* Step 4: reconcileChildren */}
      <article
        className={cn(
          'inline-flex w-full max-w-[460px] items-center gap-3 rounded-2xl border-2 p-md',
          'border-sky-300/80 bg-sky-50/60 text-sky-900',
          'dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-100',
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
          <WorkflowIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className="font-mono text-sm font-bold leading-tight">
            {diagram.reconcileStep.title}
          </code>
          <p className="text-[10px] sm:text-xsm leading-snug text-sky-800/85 dark:text-sky-100/85 break-keep">
            {diagram.reconcileStep.description}
          </p>
        </div>
      </article>
    </div>
  </div>
);
