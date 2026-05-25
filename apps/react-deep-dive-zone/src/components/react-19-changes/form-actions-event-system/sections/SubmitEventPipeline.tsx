import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { ArrowRightIcon } from '../icons';
import { pipelineTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['submitPipeline'] };

export const SubmitEventPipeline = ({ content }: Props) => (
  <section aria-labelledby="submit-pipeline-heading" className="flex flex-col">
    <SectionHeader
      id="submit-pipeline-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
      )}
    >
      {content.steps.map((step, idx) => {
        const tone = pipelineTone[step.pipeline];
        const Icon = iconRegistry[step.iconKey];
        const isLast = idx === content.steps.length - 1;
        return (
          <PipelineNode
            key={step.title}
            number={String(idx + 1).padStart(2, '0')}
            tone={tone}
            Icon={Icon}
            title={step.title}
            caption={step.caption}
            withArrow={!isLast}
          />
        );
      })}
    </ol>
  </section>
);

const PipelineNode = ({
  number,
  tone,
  Icon,
  title,
  caption,
  withArrow,
}: {
  number: string;
  tone: (typeof pipelineTone)[keyof typeof pipelineTone];
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  caption: string;
  withArrow: boolean;
}) => (
  <>
    <li>
      <article
        className={cn(
          'group flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
          'bg-white dark:bg-[var(--term-bg)]',
          tone.border,
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              tone.iconChip,
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-6 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
              tone.chip,
            )}
          >
            {number}
          </span>
        </div>
        <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>{title}</h3>
        <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
      </article>
    </li>
    {withArrow && (
      <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
        <span
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-full border',
            tone.iconChip,
          )}
        >
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </li>
    )}
  </>
);
