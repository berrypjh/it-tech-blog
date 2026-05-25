import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { BookOpenIcon, ExternalLinkIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['officialDocs'] };

export const OfficialDocsCardsSection = ({ content }: Props) => (
  <section aria-labelledby="docs-cards-heading" className="flex flex-col">
    <SectionHeader
      id="docs-cards-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
      {content.cards.map((card) => {
        const tone = stateTone[card.state];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.hookName} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'hover:border-blue-300 dark:hover:border-blue-700/70',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
                    'font-mono text-[10px] font-bold uppercase tracking-wider',
                    tone.chip,
                  )}
                >
                  <BookOpenIcon aria-hidden="true" className="h-3 w-3" />
                  Docs
                </span>
              </div>

              <h3 className={cn('text-md sm:text-lg font-mono font-bold break-all', tone.text)}>
                {card.hookName}()
              </h3>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1.5">
                  When to use
                </p>
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {card.when}
                </p>
              </div>

              <a
                href={card.cta.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'group mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
                  'border-slate-200 bg-white text-[var(--term-fg)]',
                  'dark:border-slate-700 dark:bg-[var(--term-bg)]',
                  'font-mono text-xsm font-bold',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  'hover:border-blue-400 dark:hover:border-blue-600',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                )}
              >
                <span>{card.cta.label}</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </a>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
