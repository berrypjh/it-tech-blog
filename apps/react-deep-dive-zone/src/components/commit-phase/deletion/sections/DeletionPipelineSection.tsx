import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { DeletionContent, PipelineIcon, PipelineStep } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DropletIcon,
  FlagIcon,
  LogOutIcon,
  SearchIcon,
  TrashIcon,
  UnlinkIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: DeletionContent['pipeline'] };

const iconMap: Record<PipelineIcon, typeof FlagIcon> = {
  flag: FlagIcon,
  search: SearchIcon,
  unlink: UnlinkIcon,
  droplet: DropletIcon,
  logOut: LogOutIcon,
  trash: TrashIcon,
};

export const DeletionPipelineSection = ({ content }: Props) => (
  <section
    id="deletion-pipeline"
    aria-labelledby="heading-deletion-pipeline"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="deletion-pipeline"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop: horizontal timeline (3+3 wrap on lg) */}
      <ol className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <Fragment key={step.number}>
            <li className="flex">
              <PipelineCard step={step} />
            </li>
            {idx < content.steps.length - 1 && (
              <li
                aria-hidden="true"
                className="hidden lg:flex items-center justify-center text-[var(--term-dim)] -mx-2"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Tablet: 3 columns shown above. Add arrow row note */}

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="flex flex-col">
            <PipelineCard step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const PipelineCard = ({ step }: { step: PipelineStep }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
        {step.title}
      </h3>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};
