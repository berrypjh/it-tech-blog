import { cn } from '@it-tech-blog/utils';

import type { ConceptCard, RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, HourglassIcon, PlugZapIcon, TriangleAlertIcon } from '../icons';
import type { Domain } from '../tone';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['conceptMap'] };

const conceptIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  rejected: TriangleAlertIcon,
  error: TriangleAlertIcon,
  hydration: PlugZapIcon,
  boundary: PlugZapIcon,
  server: PlugZapIcon,
  recovery: PlugZapIcon,
  navy: PlugZapIcon,
  completion: PlugZapIcon,
};

const Card = ({ card }: { card: ConceptCard }) => {
  const accent = domainAccent[card.domain];
  const Icon = conceptIcon[card.domain];
  return (
    <article
      className={cn(
        'flex flex-col gap-3 h-full rounded-2xl border-2 p-md sm:p-lg',
        accent.border,
        accent.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform motion-safe:hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            accent.iconChip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0">
          <h3 className={cn('text-md font-bold break-keep', accent.text)}>{card.title}</h3>
          <span
            className={cn('text-[11px] font-mono font-bold uppercase tracking-wider', accent.text)}
          >
            {card.arrow}
          </span>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{card.body}</p>
      <ol className="mt-auto flex flex-wrap items-center gap-1.5">
        {card.flow.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span
              className={cn(
                'inline-flex items-center rounded-lg border bg-white px-2 py-1',
                'dark:bg-[var(--term-bg)]',
                'text-[10.5px] font-mono font-bold break-keep',
                accent.border,
                accent.text,
              )}
            >
              {step}
            </span>
            {i < card.flow.length - 1 && (
              <ArrowRightIcon aria-hidden="true" className={cn('h-3 w-3 shrink-0', accent.text)} />
            )}
          </li>
        ))}
      </ol>
    </article>
  );
};

export const ConceptMapSection = ({ content }: Props) => (
  <section aria-labelledby="concept-map-heading" className="flex flex-col gap-md">
    <SectionHeader id="concept-map-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => (
        <li key={card.title}>
          <Card card={card} />
        </li>
      ))}
    </ul>
  </section>
);
