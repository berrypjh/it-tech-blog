import { cx } from '@berrypjh/react-ui';
import { CalendarClock, Gauge, Layers, Lightbulb, type LucideIcon } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { AxisId, PriorityAxesContent } from '../content';

type Props = { content: PriorityAxesContent['axes'] };

const axisIcon: Record<AxisId, LucideIcon> = {
  event: Gauge,
  lane: Layers,
  scheduler: CalendarClock,
};

export const ThreeAxesCards = ({ content }: Props) => (
  <section id="axes" aria-labelledby="heading-axes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="axes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Gauge className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((axis) => {
        const Icon = axisIcon[axis.id];
        return (
          <ToneCardItem
            key={axis.id}
            tone={axis.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={axis.question}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[axis.tone].text,
                )}
              >
                {axis.label}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {axis.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {axis.examples.map((name) => (
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
