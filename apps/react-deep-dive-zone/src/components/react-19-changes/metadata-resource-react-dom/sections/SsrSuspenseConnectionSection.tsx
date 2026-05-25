import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import { CheckCircleIcon } from '../icons';
import { domainTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MetadataResourceContent['ssrSuspense'] };

export const SsrSuspenseConnectionSection = ({ content }: Props) => (
  <section aria-labelledby="ssr-suspense-heading" className="flex flex-col">
    <SectionHeader
      id="ssr-suspense-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 items-stretch">
      {content.cards.map((card) => {
        const tone = domainTone[card.domain];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                tone.borderStrong,
                tone.bg,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={cn('text-md sm:text-lg font-bold break-keep', tone.text)}>
                  {card.title}
                </h3>
              </header>

              <ul className="flex flex-col gap-1.5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                  >
                    <CheckCircleIcon
                      aria-hidden="true"
                      className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
