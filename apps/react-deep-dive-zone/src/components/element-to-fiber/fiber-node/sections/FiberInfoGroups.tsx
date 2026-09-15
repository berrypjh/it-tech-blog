import { cx } from '@berrypjh/react-ui';
import { Boxes, Flag, Link, type LucideIcon, Network, RefreshCw } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCard, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent, InfoGroupCard } from '../content';

type Props = { content: FiberStoredInformationContent['groups'] };

const cardIcon: Record<InfoGroupCard['id'], LucideIcon> = {
  tree: Network,
  'update-state': RefreshCw,
  'work-state': Flag,
  alternate: Link,
};

export const FiberInfoGroups = ({ content }: Props) => (
  <section id="groups" aria-labelledby="heading-groups" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="groups"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Boxes className="h-5 w-5" aria-hidden="true" />}
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
  const Icon = cardIcon[card.id];
  return (
    <ToneCard tone={card.accent}>
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={card.accent}>
          <Icon className="h-6 w-6" />
        </ToneIconBox>
        <span
          className={cx(
            'inline-flex items-center rounded-full border px-2 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            toneTokens[card.accent].chip,
          )}
        >
          {card.fields.length} fields
        </span>
      </header>
      <h3
        className={cx(
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
              className={cx(
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
