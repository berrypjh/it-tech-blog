import { cx } from '@berrypjh/react-ui';
import { Gauge, Lightbulb, type LucideIcon, MousePointerClick, Timer, Waves } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSelectionContent, PriorityId } from '../content';

type Props = { content: DispatchSelectionContent['grades'] };

const gradeIcon: Record<PriorityId, LucideIcon> = {
  discrete: MousePointerClick,
  continuous: Waves,
  default: Timer,
};

export const PriorityGrades = ({ content }: Props) => (
  <section id="grades" aria-labelledby="heading-grades" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="grades"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Gauge className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((grade) => {
        const Icon = gradeIcon[grade.id];
        return (
          <ToneCardItem
            key={grade.id}
            tone={grade.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={grade.wrapper}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[grade.tone].text,
                )}
              >
                {grade.label}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {grade.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {grade.events.map((name) => (
                  <li key={name}>
                    <code className="inline-block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)]">
                      {name}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
