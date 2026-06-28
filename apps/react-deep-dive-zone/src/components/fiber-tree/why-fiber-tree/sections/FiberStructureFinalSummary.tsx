import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberCentralContent } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  ListIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberCentralContent['summary'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  list: ListIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

export const FiberStructureFinalSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <ul className="flex flex-wrap gap-1.5">
              {card.fields.map((f) => (
                <li key={f}>
                  <code
                    className={cn(
                      'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                      toneTokens[card.tone].chip,
                    )}
                  >
                    {f}
                  </code>
                </li>
              ))}
            </ul>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
