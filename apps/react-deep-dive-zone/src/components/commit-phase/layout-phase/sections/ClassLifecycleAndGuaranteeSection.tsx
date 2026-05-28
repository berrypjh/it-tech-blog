import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CommitToneKey } from '../../_shared/tones';
import { commitToneTokens } from '../../_shared/tones';
import type { LayoutPhaseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ComponentIcon,
  ListChecksIcon,
  StarIcon,
} from '../icons';

type Props = {
  classLifecycle: LayoutPhaseContent['classLifecycle'];
  guarantee: LayoutPhaseContent['guarantee'];
};

export const ClassLifecycleAndGuaranteeSection = ({ classLifecycle, guarantee }: Props) => (
  <section id="class-and-guarantee" className="space-y-md scroll-mt-xl">
    <h2 id="heading-class-and-guarantee" className="sr-only">
      class lifecycle and layout guarantees
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
      <ClassLifecycleCard content={classLifecycle} />
      <GuaranteeCard content={guarantee} />
    </div>
  </section>
);

const ClassLifecycleCard = ({ content }: { content: LayoutPhaseContent['classLifecycle'] }) => (
  <div className="space-y-md flex flex-col h-full">
    <SectionBadgeHeader
      id="class-lifecycle"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ComponentIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-1 flex-col gap-md rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Flow */}
      <ol className="flex flex-col sm:flex-row sm:items-stretch gap-2">
        {content.flowSteps.map((step, idx) => (
          <Fragment key={step.label}>
            <li className="flex-1 min-w-0">
              <FlowPill label={step.label} tone={step.tone} />
            </li>
            {idx < content.flowSteps.length - 1 && (
              <li
                aria-hidden="true"
                className="flex sm:items-center justify-center text-[var(--term-dim)]"
              >
                <ArrowRightIcon className="h-4 w-4 hidden sm:inline-block" />
                <ArrowDownIcon className="h-4 w-4 sm:hidden my-1" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Lifecycle names */}
      <div
        className={cn(
          'flex flex-wrap gap-2 rounded-xl border p-sm',
          'border-violet-200/70 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/25',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold w-full">
          lifecycle 이름
        </span>
        {content.lifecycleNames.map((name) => (
          <code
            key={name}
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-mono font-bold',
              'border-violet-200/80 bg-white text-violet-800',
              'dark:border-violet-700/60 dark:bg-slate-950 dark:text-violet-100',
            )}
          >
            {name}
          </code>
        ))}
      </div>

      {/* Note */}
      <aside
        className={cn(
          'mt-auto flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-amber-200/80 bg-amber-50/70',
          'dark:border-amber-800/70 dark:bg-amber-950/30',
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
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
          {content.note}
        </p>
      </aside>
    </article>
  </div>
);

const FlowPill = ({ label, tone }: { label: string; tone: CommitToneKey }) => {
  const t = commitToneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-1 rounded-2xl border-2 p-sm sm:p-md text-center',
        t.borderStrong,
        t.bg,
      )}
    >
      <code className={cn('text-xsm sm:text-sm font-mono font-bold break-all', t.textStrong)}>
        {label}
      </code>
    </article>
  );
};

const GuaranteeCard = ({ content }: { content: LayoutPhaseContent['guarantee'] }) => (
  <div className="space-y-md flex flex-col h-full">
    <SectionBadgeHeader
      id="layout-guarantee"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-1 flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
        'border-teal-200/80 bg-teal-50/50',
        'dark:border-teal-800/70 dark:bg-teal-950/25',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-2">
        {content.items.map((item) => (
          <li
            key={item.text}
            className={cn(
              'flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
              'border-teal-200/70 dark:border-teal-800/60',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
                'bg-teal-100 text-teal-700 border-teal-200/80',
                'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
              )}
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-xsm sm:text-sm leading-snug text-teal-900 dark:text-teal-100 break-keep">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  </div>
);
