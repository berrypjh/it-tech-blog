import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { EntryRouteCard, ReactPackageContent } from '../content';
import { ChevronRightIcon, CodeIcon, ExternalLinkIcon, reactPackageIcon } from '../icons';

type Props = { content: ReactPackageContent['routes']; sectionId: string };

export const ApiEntryRoutesSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-routes" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="routes"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ChevronRightIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <EntryRouteCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const EntryRouteCardView = ({ card }: { card: EntryRouteCard }) => {
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
        <h3 className={cn('text-md font-bold font-mono tracking-tight truncate', tone.text)}>
          {card.api}
        </h3>
      </header>

      <div
        className={cn(
          'inline-flex flex-wrap items-center gap-1.5 rounded-lg border p-2 font-mono text-[11px]',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span className="text-[var(--term-muted)] truncate">{card.route.from}</span>
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          →
        </span>
        <span className={cn('font-bold truncate', tone.text)}>{card.route.to}</span>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-[11px] font-bold',
          'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
          'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        <CodeIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {card.buttonLabel}
        <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
};
