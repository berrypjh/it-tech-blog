import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowRight,
  Clock,
  FileText,
  Lightbulb,
  type LucideIcon,
  MousePointerClick,
  Network,
  PlayCircle,
  Workflow,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type {
  PreviousChapterStep,
  PreviousChapterStepIcon,
  RenderPhaseIntroContent,
} from '../content';

const previousIconByName: Record<PreviousChapterStepIcon, LucideIcon> = {
  mousePointer: MousePointerClick,
  fileText: FileText,
  network: Network,
  clock: Clock,
  play: PlayCircle,
} as const;

type Props = { content: RenderPhaseIntroContent['previous'] };

export const PreviousChapterFlow = ({ content }: Props) => (
  <section
    id="previous-chapter"
    aria-labelledby="heading-previous-chapter"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="previous-chapter"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-stretch gap-2">
        {content.steps.map((step, idx) => (
          <Fragment key={step.title}>
            <div className="flex-1 min-w-0">
              <StepCard step={step} />
            </div>
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center text-[var(--term-accent)] px-0.5"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="my-1 flex justify-center text-[var(--term-accent)]"
              >
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />} className="mt-md">
        {content.note}
      </SectionNote>
    </article>
  </section>
);

const StepCard = ({ step }: { step: PreviousChapterStep }) => {
  const Icon = previousIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col items-center gap-2 rounded-lg border bg-[var(--term-bg)] p-sm',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-10 w-10 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cx('text-xsm font-bold leading-tight text-center break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-xxsm leading-snug text-[var(--term-muted)] text-center break-keep">
        {step.description}
      </p>
    </article>
  );
};
