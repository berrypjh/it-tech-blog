import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent } from '../content';
import {
  BoxesIcon,
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  NetworkIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['fieldGroups'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  layers: LayersIcon,
} as const;

export const FiberFieldGroups = ({ content }: Props) => (
  <section
    id="field-groups"
    aria-labelledby="heading-field-groups"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="field-groups"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
          >
            <h3
              className={cn(
                'text-sm font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <ul className="flex flex-wrap gap-1">
              {card.fields.map((field) => (
                <li
                  key={field}
                  className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
                >
                  {field}
                </li>
              ))}
            </ul>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
