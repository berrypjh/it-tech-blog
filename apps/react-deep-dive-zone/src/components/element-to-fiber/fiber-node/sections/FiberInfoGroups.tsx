import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCard, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent, InfoGroupCard } from '../content';
import { BoxesIcon, FlagIcon, LinkIcon, NetworkIcon, RefreshIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['groups'] };

const iconMap = {
  network: NetworkIcon,
  refresh: RefreshIcon,
  flag: FlagIcon,
  link: LinkIcon,
} as const;

export const FiberInfoGroups = ({ content }: Props) => (
  <section id="groups" aria-labelledby="heading-groups" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="groups"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: InfoGroupCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <ToneCard tone={card.accent}>
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={card.accent}>
          <Icon className="h-6 w-6" />
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            toneTokens[card.accent].chip,
          )}
        >
          {card.fields.length} fields
        </span>
      </header>
      <h3
        className={cn(
          'text-sm sm:text-md font-extrabold tracking-tight break-keep',
          toneTokens[card.accent].text,
        )}
      >
        {card.title}
      </h3>
      <ul className="flex flex-wrap gap-1.5">
        {card.fields.map((field) => (
          <li key={field}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-1',
                'font-mono text-[11px] font-bold',
                'border-[var(--term-border)] bg-[var(--term-bg)]',
                'text-[var(--term-fg)]',
              )}
            >
              {field}
            </code>
          </li>
        ))}
      </ul>
    </ToneCard>
  );
};
