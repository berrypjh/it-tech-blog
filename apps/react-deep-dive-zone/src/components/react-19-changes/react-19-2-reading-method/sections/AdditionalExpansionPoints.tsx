import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { ArrowRightIcon, ExternalLinkIcon } from '../icons';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['additional'] };

const isExternal = (href: string) => /^https?:\/\//.test(href);

export const AdditionalExpansionPoints = ({ content }: Props) => (
  <section aria-labelledby="additional-heading" className="flex flex-col">
    <SectionHeader
      id="additional-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {content.cards.map((card) => {
        const t = tone[card.tone];
        const Icon = iconRegistry[card.iconKey];
        const external = isExternal(card.buttonHref);
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
                'bg-white dark:bg-[var(--term-bg)]',
                t.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-1', t.solidBg, 'opacity-80')}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-12 w-12 items-center justify-center rounded-xl border',
                  t.iconChip,
                )}
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className={cn('text-md sm:text-lg font-bold break-keep', t.text)}>
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>

              <a
                href={card.buttonHref}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className={cn(
                  'group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
                  t.border,
                  'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                  'font-mono text-xsm font-bold',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                )}
              >
                <span>{card.buttonLabel}</span>
                {external ? (
                  <ExternalLinkIcon
                    aria-hidden="true"
                    className="h-3 w-3 opacity-70 transition-transform group-hover/btn:translate-x-0.5 motion-reduce:transform-none"
                  />
                ) : (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 motion-reduce:transform-none"
                  />
                )}
              </a>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
