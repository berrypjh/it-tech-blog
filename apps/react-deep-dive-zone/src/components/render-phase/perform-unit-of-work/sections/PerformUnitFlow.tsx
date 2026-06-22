import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { PerformUnitContent } from '../content';
import { ChevronDownIcon, HelpCircleIcon, WorkflowIcon } from '../icons';

type Props = { content: PerformUnitContent['fullFlow'] };

export const PerformUnitFlow = ({ content }: Props) => (
  <section id="full-flow" aria-labelledby="heading-full-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="full-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
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
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// performUnitOfWork() — branching flow'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          full flow
        </span>
      </header>

      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-2">
        {/* 3 top steps */}
        {content.flow.steps.map((step, idx) => (
          <div key={step.title} className="flex w-full flex-col items-center">
            <CodeStep title={step.title} mono={step.mono} />
            {idx < content.flow.steps.length - 1 && (
              <ChevronDownIcon
                aria-hidden="true"
                className="my-1 h-5 w-5 text-sky-500/80 dark:text-sky-300/80"
              />
            )}
          </div>
        ))}

        {/* Decision */}
        <ChevronDownIcon
          aria-hidden="true"
          className="my-1 h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
        />
        <Diamond title={content.flow.decision} />

        {/* Branches */}
        <div className="mt-3 grid w-full grid-cols-1 md:grid-cols-2 gap-md">
          <BranchPanel
            kind="yes"
            label={content.flow.yes.label}
            title={content.flow.yes.title}
            description={content.flow.yes.description}
          />
          <BranchPanel
            kind="no"
            label={content.flow.no.label}
            title={content.flow.no.title}
            description={content.flow.no.description}
          />
        </div>
      </div>
    </article>
  </section>
);

const CodeStep = ({ title, mono }: { title: string; mono?: boolean }) => (
  <article
    className={cn(
      'inline-flex w-full max-w-[640px] items-center justify-center rounded-2xl border-2 px-md py-3',
      'border-sky-300/80 bg-white text-sky-900',
      'dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <code
      className={cn('text-xsm sm:text-sm font-bold break-all text-center', mono && 'font-mono')}
    >
      {title}
    </code>
  </article>
);

const Diamond = ({ title }: { title: string }) => (
  <div className="relative flex h-28 sm:h-32 w-[min(360px,100%)] items-center justify-center">
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
      <HelpCircleIcon aria-hidden="true" className="h-5 w-5 text-violet-700 dark:text-violet-200" />
      <span className="text-sm sm:text-md font-bold text-violet-900 dark:text-violet-100 break-keep">
        {title}
      </span>
    </div>
  </div>
);

const BranchPanel = ({
  kind,
  label,
  title,
  description,
}: {
  kind: 'yes' | 'no';
  label: string[];
  title: string;
  description: string[];
}) => {
  const isYes = kind === 'yes';
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        isYes
          ? 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/25'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/25',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        {label.map((line, idx) => (
          <span
            key={`${line}-${idx}`}
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              idx === 0
                ? isYes
                  ? 'border-teal-300/70 bg-teal-100/70 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-700/60 font-bold'
                  : 'border-violet-300/70 bg-violet-100/70 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/60 font-bold'
                : isYes
                  ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
                  : 'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
            )}
          >
            {line}
          </span>
        ))}
      </header>
      <code
        className={cn(
          'mt-1 inline-flex items-center self-start rounded-md border px-2 py-1 font-mono text-xsm sm:text-sm font-bold break-all',
          'border-slate-800 bg-slate-950',
          isYes ? 'text-teal-300' : 'text-violet-300',
        )}
      >
        {title}
      </code>
      <ul className="mt-1 flex flex-col gap-0.5">
        {description.map((line) => (
          <li
            key={line}
            className={cn(
              'text-xsm sm:text-sm leading-snug break-keep',
              isYes ? 'text-teal-900 dark:text-teal-100' : 'text-violet-900 dark:text-violet-100',
            )}
          >
            {line}
          </li>
        ))}
      </ul>
    </article>
  );
};
