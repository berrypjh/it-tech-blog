import { cn } from '@it-tech-blog/utils';

import type { BranchKind, WhyFailableRenderContent } from '../content';
import {
  ArrowDownIcon,
  HourglassIcon,
  LoaderIcon,
  PlugZapIcon,
  ServerCrashIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
} from '../icons';
import { branchAccent } from '../tone';

type Props = { content: WhyFailableRenderContent['threeBranches'] };

const branchIcon: Record<BranchKind, React.ComponentType<{ className?: string }>> = {
  suspense: HourglassIcon,
  error: TriangleAlertIcon,
  hydration: PlugZapIcon,
};

const branchFooterIcon: Record<BranchKind, React.ComponentType<{ className?: string }>> = {
  suspense: LoaderIcon,
  error: ServerCrashIcon,
  hydration: ShieldCheckIcon,
};

export const ThreeBranchSection = ({ content }: Props) => (
  <section
    aria-labelledby="branches-heading"
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/80 bg-gradient-to-b from-blue-50/30 to-white',
      'dark:border-blue-800/60 dark:from-blue-950/20 dark:to-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex flex-col items-center gap-2 text-center">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        {content.eyebrow}
      </span>
      <h2
        id="branches-heading"
        className="text-xl sm:text-xxl lg:text-[1.75rem] font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
      <p className="max-w-[60ch] text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
        {content.description}
      </p>
    </header>

    {/* Render Phase root box */}
    <div className="mt-lg flex flex-col items-center gap-2">
      <div
        className={cn(
          'inline-flex flex-col items-center gap-0.5 rounded-2xl border-2 px-5 py-3',
          'border-blue-400/80 bg-white text-blue-700 shadow-[0_4px_0_rgba(59,130,246,0.15)]',
          'dark:border-blue-600/70 dark:bg-blue-950/50 dark:text-blue-200',
        )}
      >
        <span className="text-md font-bold font-mono">{content.rootLabel}</span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 dark:text-blue-300">
          {content.rootSublabel}
        </span>
      </div>

      {/* connector line */}
      <div aria-hidden="true" className="h-6 w-px bg-blue-300/80 dark:bg-blue-700/60" />

      {/* horizontal connector for desktop */}
      <div
        aria-hidden="true"
        className="hidden md:block h-px w-[70%] max-w-[640px] bg-blue-300/80 dark:bg-blue-700/60"
      />
    </div>

    {/* 3 branch cards */}
    <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
      {content.branches.map((branch, index) => {
        const accent = branchAccent[branch.kind];
        const Icon = branchIcon[branch.kind];
        const FooterIcon = branchFooterIcon[branch.kind];
        return (
          <article
            key={branch.kind}
            className={cn(
              'relative flex flex-col gap-md rounded-2xl border-2 p-md',
              'bg-white dark:bg-[var(--term-bg)]',
              accent.border,
              'shadow-[0_2px_0_var(--term-border)]',
              'transition-transform motion-safe:hover:-translate-y-0.5',
            )}
          >
            {/* connector down arrow on mobile */}
            {index > 0 && (
              <span
                aria-hidden="true"
                className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 dark:border-blue-800/60 dark:bg-slate-900 dark:text-blue-300"
              >
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}

            <header className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                  accent.chip,
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    accent.text,
                  )}
                >
                  {branch.label}
                </span>
                <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep">
                  {branch.title}
                </h3>
              </div>
            </header>

            {/* steps */}
            <div className={cn('rounded-xl border border-dashed p-3', accent.border, accent.bg)}>
              <ol className="flex flex-col gap-1.5">
                {branch.steps.map((step, i) => (
                  <li key={step.label} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        'text-[10px] font-mono font-bold tabular-nums text-white',
                        branch.kind === 'suspense' && 'bg-blue-500',
                        branch.kind === 'error' && 'bg-rose-500',
                        branch.kind === 'hydration' && 'bg-emerald-500',
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="text-xsm font-mono text-[var(--term-fg)] break-keep">
                      {step.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <footer className="flex items-center gap-2 text-xsm">
              <FooterIcon aria-hidden="true" className={cn('h-4 w-4 shrink-0', accent.text)} />
              <p className="text-[var(--term-muted)] break-keep">{branch.caption}</p>
            </footer>
          </article>
        );
      })}
    </div>
  </section>
);
