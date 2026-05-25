import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { StripFlagCommentNoiseContent, TemplateStep } from '../content';
import { ArrowRightIcon, ListChecksIcon } from '../icons';
import { getLabelClasses, LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['template'] };

export const TemplateSection = ({ content }: Props) => {
  return (
    <section id="section-template" aria-labelledby="heading-template" className="space-y-lg">
      <SectionHeader
        id="template"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      {/* Horizontal stepper on xl, vertical timeline below */}
      <ol
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2',
          'xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]',
          'gap-md xl:gap-3 items-stretch',
        )}
      >
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <Fragment key={step.number}>
              <li>
                <TemplateStepCard step={step} />
              </li>
              {!isLast && (
                <li aria-hidden="true" className="hidden xl:flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 text-cyan-500" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </section>
  );
};

const TemplateStepCard = ({ step }: { step: TemplateStep }) => {
  const t = getLabelClasses(step.label);
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-full border-2',
            t.border,
            t.chip,
            'font-mono text-xsm font-bold tabular-nums',
          )}
        >
          {step.number}
        </span>
        <LabelChip label={step.label} size="sm" />
      </div>

      <h3 className={cn('text-md font-bold leading-snug break-keep', t.text)}>{step.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
