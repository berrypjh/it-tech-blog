import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneBadge, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementObjectStructureContent } from '../content';
import { BoxIcon, FingerprintIcon, KeyIcon, ListChecksIcon, PanelIcon, UserIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['fields'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  box: BoxIcon,
  key: KeyIcon,
  panel: PanelIcon,
  user: UserIcon,
} as const;

export const ElementFieldCards = ({ content }: Props) => (
  <section id="fields" aria-labelledby="heading-fields" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fields"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <code
              className={cn(
                'font-mono text-md font-bold tracking-tight break-all',
                toneTokens[card.tone].text,
              )}
            >
              {card.field}
            </code>
            <h3 className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
              {card.title}
            </h3>
            <ToneBadge
              tone={card.tone}
              className="text-[10px] font-mono font-bold uppercase tracking-wider"
            >
              {card.short}
            </ToneBadge>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
