import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RulesOfHooksContent } from '../content';

type Props = { content: RulesOfHooksContent['breaking'] };

export const WhereOrderBreaks = ({ content }: Props) => (
  <section id="breaking" aria-labelledby="heading-breaking" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="breaking"
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
            icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            tone={toneTokens.emerald.text}
          >
            {content.correct.label}
          </StatusPill>
          <CodePreviewPanel code={content.correct.code} showWindowDots={false} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.correct.caption}
          </p>
        </article>
      }
      right={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
            tone="text-rose-600 dark:text-rose-300"
          >
            {content.broken.label}
          </StatusPill>
          <CodePreviewPanel code={content.broken.code} showWindowDots={false} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.broken.caption}
          </p>
        </article>
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
