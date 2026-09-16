import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Lightbulb,
  type LucideIcon,
  Timer,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StateId, UsePromiseSuspendContent } from '../content';

type Props = { content: UsePromiseSuspendContent['states'] };

const stateIcon: Record<StateId, LucideIcon> = {
  pending: Timer,
  fulfilled: CheckCircle2,
  rejected: AlertTriangle,
};

export const PromiseStates = ({ content }: Props) => (
  <section id="states" aria-labelledby="heading-states" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="states"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((state) => {
        const Icon = stateIcon[state.id];
        return (
          <ToneCardItem
            key={state.id}
            tone={state.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={state.decision}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[state.tone].text,
                )}
              >
                {state.label}
              </code>
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
