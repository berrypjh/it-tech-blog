import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowRight,
  Droplet,
  Flag,
  LogOut,
  Search,
  Trash2,
  Unlink,
  Workflow,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DeletionContent, PipelineIcon, PipelineStep } from '../content';

type Props = { content: DeletionContent['pipeline'] };

const iconMap: Record<PipelineIcon, typeof Flag> = {
  flag: Flag,
  search: Search,
  unlink: Unlink,
  droplet: Droplet,
  logOut: LogOut,
  trash: Trash2,
};

export const DeletionPipelineSection = ({ content }: Props) => (
  <section
    id="deletion-pipeline"
    aria-labelledby="heading-deletion-pipeline"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="deletion-pipeline"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Desktop: horizontal timeline */}
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
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="flex flex-col">
            <PipelineCard step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
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
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-1.5 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <span
          className={cx(
            'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
      </header>
      <h3 className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {step.title}
      </h3>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};
