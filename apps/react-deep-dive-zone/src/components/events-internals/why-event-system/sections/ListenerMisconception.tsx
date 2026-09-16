import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { WhyEventSystemContent } from '../content';

type Props = { content: WhyEventSystemContent['misconception'] };

export const ListenerMisconception = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="misconception"
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
          <CodePreviewPanel code={content.wrong.code} showWindowDots={false} />
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
            {content.right.label}
          </StatusPill>
          <ol className="flex flex-col gap-1.5">
            {content.right.steps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2"
              >
                <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.right.caption}
          </p>
        </article>
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
