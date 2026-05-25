import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { AtomIcon, GlobeIcon, PlayCircleIcon } from '../icons';
import type { Domain } from '../tone';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['states'] };

const domainIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  dom: GlobeIcon,
  fiber: AtomIcon,
  hydrating: PlayCircleIcon,
};

export const HydrationStatesSection = ({ content }: Props) => (
  <section aria-labelledby="states-heading" className="flex flex-col gap-md">
    <SectionHeader id="states-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => {
        const accent = domainAccent[card.domain];
        const Icon = domainIcon[card.domain];
        return (
          <li key={card.name}>
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
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className={cn('text-sm font-mono font-bold break-all', accent.text)}>
                  {card.name}
                </h3>
              </header>
              <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{card.summary}</p>

              <div
                className={cn(
                  'rounded-lg border bg-white p-3 dark:bg-[var(--term-bg)]',
                  accent.border,
                )}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {card.mini.title}
                </span>
                <pre
                  className={cn(
                    'mt-1 overflow-x-auto text-[11px] font-mono leading-[1.6]',
                    accent.text,
                  )}
                >
                  <code>{card.mini.lines.join('\n')}</code>
                </pre>
              </div>

              <p className="mt-auto text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
