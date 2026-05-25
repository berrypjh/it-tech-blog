import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowRightIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['readable'] };

export const UseReadableResourcesSection = ({ content }: Props) => (
  <section aria-labelledby="readable-heading" className="flex flex-col">
    <SectionHeader
      id="readable-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 items-stretch">
      {content.cards.map((card) => {
        const tone = stateTone[card.state];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
                'bg-white dark:bg-[var(--term-bg)]',
                tone.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              {/* top accent line */}
              <span
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-1', tone.solidBg, 'opacity-80')}
              />

              <div className="flex items-start justify-between gap-2 pt-1">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-12 w-12 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-0.5',
                    'font-mono text-[10px] font-bold uppercase tracking-wider',
                    tone.chip,
                  )}
                >
                  use()
                </span>
              </div>

              <h3 className={cn('text-md sm:text-lg font-mono font-bold break-keep', tone.text)}>
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.body}
              </p>

              <div
                className={cn(
                  'mt-auto flex items-start gap-2 rounded-lg border px-3 py-2',
                  tone.chip,
                )}
              >
                <ArrowRightIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)}
                />
                <p className={cn('text-xsm font-bold break-keep leading-snug', tone.text)}>
                  {card.result.replace('→ ', '')}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
