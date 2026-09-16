import { cx } from '@berrypjh/react-ui';
import { Clock, Gauge, Lightbulb, type LucideIcon, Moon, Timer, Turtle, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HostTaskRunnerContent, PriorityId } from '../content';

type Props = { content: HostTaskRunnerContent['priorities'] };

const levelIcon: Record<PriorityId, LucideIcon> = {
  immediate: Zap,
  'user-blocking': Timer,
  normal: Clock,
  low: Turtle,
  idle: Moon,
};

export const PriorityLevels = ({ content }: Props) => (
  <section id="priorities" aria-labelledby="heading-priorities" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="priorities"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Gauge className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
      {content.items.map((level) => {
        const Icon = levelIcon[level.id];
        return (
          <ToneCardItem
            key={level.id}
            tone={level.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={level.timeout}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-xsm font-bold tracking-tight break-all',
                  toneTokens[level.tone].text,
                )}
              >
                {level.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {level.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
