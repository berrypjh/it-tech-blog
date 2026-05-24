import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { DvcContent, PathCard } from '../content';
import { ChevronRightIcon, dvcIcon, MapIcon } from '../icons';

type Props = { content: DvcContent['path'] };

export const PathSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-path" className="space-y-md">
      <SectionHeader
        id="path"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="relative flex">
            <PathCardView card={card} />
            {index < content.cards.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:inline-flex absolute -right-2 top-1/2 -translate-y-1/2 text-[var(--term-accent)]"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

const PathCardView = ({ card }: { card: PathCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = dvcIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
        {card.subtitle}
      </span>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
