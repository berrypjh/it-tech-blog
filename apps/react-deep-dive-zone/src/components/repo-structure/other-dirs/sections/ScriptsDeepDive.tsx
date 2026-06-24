import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';
import { iconByName, InfoIcon, TerminalIcon } from '../icons';

type Props = { content: SurroundingContent['scripts'] };

const tone = toneTokens.sky;

export const ScriptsDeepDive = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-scripts" className="space-y-md">
      <SectionHeader
        id="scripts"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TerminalIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex flex-col gap-md h-full rounded-lg border p-md',
                  'bg-[var(--term-bg)] border-[var(--term-border)]',
                  'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
                  'hover:shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-md border',
                    tone.chip,
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-keep',
                    tone.text,
                  )}
                >
                  {card.name}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
                      tone.chip,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
                    />
                    {card.badge}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
