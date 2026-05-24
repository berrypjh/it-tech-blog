import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { ApiGroupCard, ReactPackageContent } from '../content';
import { reactPackageIcon, SparklesIcon } from '../icons';

type Props = { content: ReactPackageContent['groups'] };

export const ApiGroupsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-groups" className="space-y-md">
      <SectionHeader
        id="groups"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ApiGroupCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ApiGroupCardView = ({ card }: { card: ApiGroupCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = reactPackageIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums font-mono">
          {card.number}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul
        className={cn(
          'mt-auto flex flex-col gap-1 rounded-lg border px-3 py-2 font-mono',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        {card.apis.map((api) => (
          <li
            key={api}
            className={cn('flex items-center gap-1.5 text-[11px] leading-snug', tone.text)}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
            />
            <span className="truncate">{api}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
