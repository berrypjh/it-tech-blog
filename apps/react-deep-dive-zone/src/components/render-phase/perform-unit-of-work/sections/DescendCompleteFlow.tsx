import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { PerformUnitContent } from '../content';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  RotateCwIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: PerformUnitContent['descendComplete'] };

const explainIconMap = {
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  rotate: RotateCwIcon,
} as const;

export const DescendCompleteFlow = ({ content }: Props) => (
  <section
    id="descend-complete"
    aria-labelledby="heading-descend-complete"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="descend-complete"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] gap-md lg:gap-lg">
      {/* Left: branch flowchart */}
      <article
        className={cn(
          'rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-violet-50/25',
          'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-violet-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col items-center gap-2">
          {content.flow.topSteps.map((step, idx) => (
            <div key={step} className="flex w-full flex-col items-center">
              <article
                className={cn(
                  'inline-flex w-full max-w-[420px] items-center justify-center rounded-2xl border-2 px-md py-2.5',
                  'border-sky-300/80 bg-sky-50/60 text-sky-900',
                  'dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-100',
                  'shadow-[0_1px_0_var(--term-border)]',
                )}
              >
                <span className="text-xsm sm:text-sm font-bold leading-tight text-center break-keep">
                  {step}
                </span>
              </article>
              {idx < content.flow.topSteps.length - 1 && (
                <ChevronDownIcon
                  aria-hidden="true"
                  className="my-1 h-5 w-5 text-sky-500/80 dark:text-sky-300/80"
                />
              )}
            </div>
          ))}

          <ChevronDownIcon
            aria-hidden="true"
            className="my-1 h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
          />

          {/* Decision */}
          <div className="relative flex h-24 w-[min(280px,100%)] items-center justify-center">
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-0 m-auto rotate-45',
                'h-[80%] w-[80%] rounded-xl border-2',
                'border-violet-400/80 bg-gradient-to-br from-sky-100 to-violet-100',
                'dark:border-violet-600/70 dark:from-sky-950/40 dark:to-violet-950/40',
              )}
            />
            <div className="relative flex flex-col items-center justify-center gap-1 text-center">
              <HelpCircleIcon
                aria-hidden="true"
                className="h-4 w-4 text-violet-700 dark:text-violet-200"
              />
              <span className="text-xsm sm:text-sm font-bold text-violet-900 dark:text-violet-100 break-keep">
                {content.flow.decision}
              </span>
            </div>
          </div>

          {/* Branches */}
          <div className="mt-2 grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
            <SmallBranch
              kind="yes"
              labels={content.flow.yes.label}
              title={content.flow.yes.title}
              description={content.flow.yes.description}
            />
            <SmallBranch
              kind="no"
              labels={content.flow.no.label}
              title={content.flow.no.title}
              description={content.flow.no.description}
            />
          </div>
        </div>
      </article>

      {/* Right: explanation */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
        aria-labelledby="heading-descend-explanation"
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              'bg-sky-100 text-sky-700 border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
            )}
          >
            <RotateCwIcon className="h-5 w-5" />
          </span>
          <h3
            id="heading-descend-explanation"
            className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep"
          >
            {content.explanation.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.explanation.items.map((item, idx) => {
            const Icon = explainIconMap[item.iconName];
            const tone =
              item.iconName === 'arrowDown'
                ? 'teal'
                : item.iconName === 'arrowUp'
                  ? 'violet'
                  : 'sky';
            return (
              <li
                key={item.text}
                className={cn(
                  'flex items-start gap-3 rounded-xl border p-sm sm:p-md',
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                  'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                    tone === 'teal' &&
                      'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
                    tone === 'violet' &&
                      'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
                    tone === 'sky' &&
                      'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    step {idx + 1}
                  </span>
                  <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
                    {item.text}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);

const SmallBranch = ({
  kind,
  labels,
  title,
  description,
}: {
  kind: 'yes' | 'no';
  labels: string[];
  title: string;
  description: string;
}) => {
  const isYes = kind === 'yes';
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-2xl border-2 p-sm sm:p-md',
        isYes
          ? 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/25'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/25',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex flex-wrap items-center gap-1.5">
        {labels.map((label, idx) => (
          <span
            key={`${label}-${idx}`}
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
            {label}
          </span>
        ))}
      </header>
      <h4
        className={cn(
          'text-xsm sm:text-sm font-bold leading-tight break-keep',
          isYes ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        {title}
      </h4>
      <p
        className={cn(
          'text-[10px] sm:text-xsm leading-snug break-keep',
          isYes
            ? 'text-teal-900/80 dark:text-teal-100/80'
            : 'text-violet-900/80 dark:text-violet-100/80',
        )}
      >
        {description}
      </p>
    </article>
  );
};
