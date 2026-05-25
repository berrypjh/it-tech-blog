import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { CompletionButton, ReconstructContent } from '../content';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CircleCheckIcon,
  GitBranchIcon,
  NotebookIcon,
  RouteIcon,
} from '../icons';

type Props = { content: ReconstructContent['completion'] };

const buttonIcon = {
  route: RouteIcon,
  notebook: NotebookIcon,
  gitBranch: GitBranchIcon,
} as const;

export const CompletionCTASection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-completion" className="space-y-md">
      <article
        className={cn(
          'relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
          'border-violet-300 bg-gradient-to-br from-blue-50/80 via-violet-50/40 to-emerald-50/30',
          'dark:border-violet-700/70 dark:from-blue-950/40 dark:via-violet-950/40 dark:to-emerald-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        {/* Decorative completion badge */}
        <span
          aria-hidden="true"
          className="absolute -top-3 -right-3 text-violet-200 dark:text-violet-900/40 rotate-12"
        >
          <BadgeCheckIcon className="h-28 w-28" />
        </span>

        <div className="relative flex flex-col gap-md">
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-full border-2',
                'border-emerald-400 bg-emerald-50 text-emerald-700',
                'dark:border-emerald-600/80 dark:bg-emerald-950/40 dark:text-emerald-200',
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <CircleCheckIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              {content.eyebrow}
            </span>
          </header>

          <h2
            id="heading-completion"
            className={cn(
              'text-xxl sm:text-3xl lg:text-[2rem] font-bold leading-tight tracking-tight break-keep',
              'bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent',
              'dark:from-blue-400 dark:via-violet-400 dark:to-emerald-400',
            )}
          >
            {content.title}
          </h2>

          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[68ch]">
            {content.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-sm">
            {content.buttons.map((btn) => (
              <CompletionButtonLink key={btn.id} button={btn} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

const CompletionButtonLink = ({ button }: { button: CompletionButton }) => {
  const Icon = buttonIcon[button.iconKey];
  const isExternal = button.href.startsWith('http');
  const baseClass = cn(
    'group inline-flex items-center justify-center gap-2 rounded-md px-md py-3 sm:py-3.5',
    'text-xsm font-bold',
    'transition-all motion-safe:hover:-translate-y-0.5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
    button.variant === 'primary' &&
      cn(
        'bg-blue-600 text-white hover:bg-blue-700',
        'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
        'focus-visible:ring-blue-400',
        'shadow-[0_2px_0_var(--term-border)]',
      ),
    button.variant === 'secondary' &&
      cn(
        'border-2 border-violet-400 bg-white text-violet-800',
        'dark:border-violet-600/80 dark:bg-[var(--term-bg)] dark:text-violet-100',
        'hover:bg-violet-50 dark:hover:bg-violet-950/40',
        'focus-visible:ring-violet-400',
      ),
    button.variant === 'tertiary' &&
      cn(
        'border-2 border-emerald-400 bg-white text-emerald-800',
        'dark:border-emerald-600/80 dark:bg-[var(--term-bg)] dark:text-emerald-100',
        'hover:bg-emerald-50 dark:hover:bg-emerald-950/40',
        'focus-visible:ring-emerald-400',
      ),
  );

  if (isExternal) {
    return (
      <a href={button.href} target="_blank" rel="noreferrer noopener" className={baseClass}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span>{button.label}</span>
        <ArrowRightIcon
          className="h-3.5 w-3.5 motion-safe:group-hover:translate-x-0.5 transition-transform"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <Link href={button.href} className={baseClass}>
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{button.label}</span>
      <ArrowRightIcon
        className="h-3.5 w-3.5 motion-safe:group-hover:translate-x-0.5 transition-transform"
        aria-hidden="true"
      />
    </Link>
  );
};
