import { cx } from '@berrypjh/react-ui';
import { Box, Database, Lightbulb, type LucideIcon, Route, Timer, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FieldId, FormActionsEventSystemContent } from '../content';

type Props = { content: FormActionsEventSystemContent['pendingState'] };

const fieldIcon: Record<FieldId, LucideIcon> = {
  pending: Timer,
  data: Database,
  method: Route,
  action: Zap,
};

export const PendingStateFields = ({ content }: Props) => (
  <section id="pending" aria-labelledby="heading-pending" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="pending"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Box className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.fields.map((field) => {
        const Icon = fieldIcon[field.id];
        return (
          <ToneCardItem
            key={field.id}
            tone={field.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={field.value}
          >
            <div className="flex min-w-0 flex-col gap-2">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[field.tone].text,
                )}
              >
                {field.title}
              </h3>
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                {field.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
