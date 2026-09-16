import { cx } from '@berrypjh/react-ui';
import {
  Droplets,
  Layers,
  Lightbulb,
  type LucideIcon,
  Scissors,
  ShieldCheck,
  Timer,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RoleId, SuspenseHydrationLinkContent } from '../content';

type Props = { content: SuspenseHydrationLinkContent['roles'] };

const roleIcon: Record<RoleId, LucideIcon> = {
  boundary: Timer,
  streaming: Scissors,
  selective: Droplets,
  fallback: ShieldCheck,
};

export const BoundaryRoles = ({ content }: Props) => (
  <section id="roles" aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="roles"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.items.map((item) => {
        const Icon = roleIcon[item.id];
        return (
          <ToneCardItem
            key={item.id}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={item.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
              >
                {item.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
