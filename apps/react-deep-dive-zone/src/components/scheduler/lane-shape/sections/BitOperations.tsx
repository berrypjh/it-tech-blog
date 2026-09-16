import { cx } from '@berrypjh/react-ui';
import { Binary, Lightbulb, type LucideIcon, Merge, Search, Target } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LaneShapeContent, OpId } from '../content';

type Props = { content: LaneShapeContent['operations'] };

const opIcon: Record<OpId, LucideIcon> = {
  merge: Merge,
  test: Search,
  pick: Target,
};

export const BitOperations = ({ content }: Props) => (
  <section id="operations" aria-labelledby="heading-operations" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="operations"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Binary className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((op) => {
        const Icon = opIcon[op.id];
        return (
          <ToneCardItem key={op.id} tone={op.tone} icon={<Icon className="h-5 w-5" />}>
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[op.tone].text,
                )}
              >
                {op.title}
              </h3>
              <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[11px] text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {op.expression}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {op.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
