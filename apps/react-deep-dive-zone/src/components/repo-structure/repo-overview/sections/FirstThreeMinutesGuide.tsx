import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneBadge } from '../../../start/_shared/ToneBadge';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { RepoOverviewContent, TimelineStep } from '../content';
import { ListChecksIcon, stepIconByName } from '../icons';

type Props = { content: RepoOverviewContent['timeline'] };

export const FirstThreeMinutesGuide = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-timeline" className="space-y-md">
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <ol className="relative flex flex-col gap-md sm:gap-lg">
        {/* 좌측 세로 라인 — 데스크톱에서만 */}
        <span
          aria-hidden="true"
          className="hidden sm:block absolute left-[26px] top-3 bottom-3 w-px border-l border-dashed border-[var(--term-border)]"
        />
        {content.steps.map((step, idx) => (
          <li key={step.id}>
            <StepRow step={step} isLast={idx === content.steps.length - 1} />
          </li>
        ))}
      </ol>
    </section>
  );
};

type StepRowProps = { step: TimelineStep; isLast: boolean };

const StepRow = ({ step }: StepRowProps) => {
  const tone = toneTokens[step.tone];
  const Icon = stepIconByName[step.icon] ?? ListChecksIcon;

  return (
    <article
      className={cn(
        'relative flex items-start gap-md sm:gap-lg',
        'rounded-lg border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
        'p-md sm:p-lg',
      )}
    >
      {/* 좌측 원형 번호 */}
      <span
        aria-hidden="true"
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10',
          'rounded-full border-2 font-bold text-sm tabular-nums shrink-0',
          tone.chip,
          tone.border,
        )}
      >
        {step.number}
      </span>

      {/* 본문 */}
      <div className="flex flex-col gap-sm flex-1 min-w-0">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-sm">
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', tone.text)}>
            {step.title}
          </h3>
          <div className="flex items-center gap-2 sm:gap-sm shrink-0">
            <ToneBadge tone={step.tone}>{step.goal}</ToneBadge>
            <ToneIconBox tone={step.tone} size="sm">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </ToneIconBox>
          </div>
        </div>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};
