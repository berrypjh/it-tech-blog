import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CompleteWorkContent } from '../content';
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CompleteWorkContent['direction'] };

export const CompleteWorkMoveDirection = ({ content }: Props) => (
  <section id="direction" aria-labelledby="heading-direction" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="direction"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-violet-50/25',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Top node */}
        <article
          className={cn(
            'inline-flex w-full max-w-[460px] items-center justify-center gap-3 rounded-2xl border-2 p-md',
            'border-sky-300/80 bg-sky-50/60 text-sky-900',
            'dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-100',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-sm sm:text-md font-bold leading-tight">{content.topTitle}</h3>
            <code className="font-mono text-xsm sm:text-sm text-sky-700 dark:text-sky-300">
              {content.topSubtitle}
            </code>
          </div>
        </article>

        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
        />

        {/* Decision diamond */}
        <div className="relative flex h-28 w-[min(360px,100%)] items-center justify-center">
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-0 m-auto rotate-45',
              'h-[78%] w-[78%] rounded-xl border-2',
              'border-violet-400/80 bg-gradient-to-br from-sky-100 to-violet-100',
              'dark:border-violet-600/70 dark:from-sky-950/40 dark:to-violet-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          />
          <div className="relative flex flex-col items-center justify-center gap-1 text-center">
            <HelpCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-violet-700 dark:text-violet-200"
            />
            <span className="text-sm sm:text-md font-bold text-violet-900 dark:text-violet-100 break-keep">
              {content.decision}
            </span>
          </div>
        </div>

        {/* Branches */}
        <div className="mt-3 grid w-full grid-cols-1 md:grid-cols-2 gap-md">
          <BranchCard
            kind="yes"
            label={content.yes.label}
            title={content.yes.title}
            code={content.yes.code}
          />
          <BranchCard
            kind="no"
            label={content.no.label}
            title={content.no.title}
            code={content.no.code}
          />
        </div>

        <p className="mt-md max-w-[60ch] text-center text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.description}
        </p>
      </div>
    </article>
  </section>
);

const BranchCard = ({
  kind,
  label,
  title,
  code,
}: {
  kind: 'yes' | 'no';
  label: string;
  title: string;
  code: string;
}) => {
  const isYes = kind === 'yes';
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 p-md',
        isYes
          ? 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/25'
          : 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/25',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isYes
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60 font-bold'
              : 'border-amber-300/70 bg-white/70 text-amber-700 dark:bg-slate-950/60 dark:text-amber-200 dark:border-amber-700/60 font-bold',
          )}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            isYes
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          {isYes ? <ArrowRightIcon className="h-4 w-4" /> : <ArrowUpIcon className="h-4 w-4" />}
        </span>
      </header>
      <h4
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          isYes ? 'text-teal-800 dark:text-teal-100' : 'text-amber-800 dark:text-amber-100',
        )}
      >
        {title}
      </h4>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
          'border-slate-800 bg-slate-950',
          isYes ? 'text-teal-300' : 'text-amber-300',
        )}
      >
        {code}
      </code>
    </article>
  );
};
