import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Layers, Lightbulb, type LucideIcon, RotateCcw, Timer } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StateId, SuspenseFallbackRetryContent } from '../content';

type Props = { content: SuspenseFallbackRetryContent['states'] };

const stateIcon: Record<StateId, LucideIcon> = {
  primary: CheckCircle2,
  fallback: Timer,
  retrying: RotateCcw,
};

export const BoundaryStates = ({ content }: Props) => (
  <section id="states" aria-labelledby="heading-states" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="states"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((state) => {
        const Icon = stateIcon[state.id];
        return (
          <ToneCardItem
            key={state.id}
            tone={state.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={state.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[state.tone].text,
                )}
              >
                {state.label}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {state.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
