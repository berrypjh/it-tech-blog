import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';

import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { WhyNotImmediateContent } from '../content';

type Props = { content: WhyNotImmediateContent['intuition'] };

export const IntuitionVsReality = ({ content }: Props) => (
  <section id="intuition" aria-labelledby="heading-intuition" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="intuition"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<XCircle className="h-5 w-5" aria-hidden="true" />}
    />

    <ContrastCard
      left={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
            tone="text-rose-600 dark:text-rose-300"
          >
            {content.wrong.label}
          </StatusPill>
          <StepList steps={content.wrong.steps} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.wrong.caption}
          </p>
        </article>
      }
      right={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            tone={toneTokens.emerald.text}
          >
            {content.real.label}
          </StatusPill>
          <StepList steps={content.real.steps} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.real.caption}
          </p>
        </article>
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const StepList = ({ steps }: { steps: string[] }) => (
  <ol className="flex flex-col gap-1.5">
    {steps.map((step, i) => (
      <li
        key={step}
        className="flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2"
      >
        <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">{step}</span>
      </li>
    ))}
  </ol>
);
