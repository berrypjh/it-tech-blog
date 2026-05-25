import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { ArrowRightIcon, ExternalLinkIcon, MilestoneIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['versionTimeline'] };

const ExternalLinkIconFallback = ExternalLinkIcon;

const accents = [
  {
    chip: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    text: 'text-blue-700 dark:text-blue-200',
    border: 'border-blue-200/80 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    line: 'border-blue-300/80 dark:border-blue-700/70',
  },
  {
    chip: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    text: 'text-sky-700 dark:text-sky-200',
    border: 'border-sky-200/80 dark:border-sky-800/70',
    dot: 'bg-sky-500 dark:bg-sky-400',
    line: 'border-sky-300/80 dark:border-sky-700/70',
  },
  {
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    text: 'text-emerald-700 dark:text-emerald-200',
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    line: 'border-emerald-300/80 dark:border-emerald-700/70',
  },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

export const VersionTimelineSection = ({ content }: Props) => (
  <section aria-labelledby="version-timeline-heading" className="flex flex-col">
    <SectionHeader
      id="version-timeline-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    {/* Timeline track */}
    <div className="relative">
      {/* horizontal connector line (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-[8%] right-[8%] top-[34px] h-px border-t-2 border-dashed border-slate-300/80 dark:border-slate-700/70"
      />

      <ol className="relative grid grid-cols-1 gap-md lg:grid-cols-3 lg:gap-md">
        {content.cards.map((card, i) => {
          const accent = accents[i] ?? accents[0];
          return (
            <li key={card.version} className="relative flex flex-col gap-2">
              {/* version dot bar */}
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full border-2',
                    'bg-white dark:bg-[var(--term-bg)]',
                    accent.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <span className={cn('block h-2.5 w-2.5 rounded-full', accent.dot)} />
                </span>
                <span
                  aria-hidden="true"
                  className={cn('flex-1 h-px border-t-2 border-dashed lg:hidden', accent.line)}
                />
              </div>

              {/* card */}
              <article
                className={cn(
                  'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg overflow-hidden',
                  'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  'hover:border-blue-300 dark:hover:border-blue-700/70',
                )}
              >
                {/* head */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                        accent.chip,
                      )}
                    >
                      <MilestoneIcon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className={cn('text-md sm:text-lg font-bold break-keep', accent.text)}>
                      {card.version}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 inline-flex items-center rounded-full border px-2 py-0.5',
                      'font-mono text-[10px] font-bold tabular-nums',
                      accent.chip,
                    )}
                  >
                    {card.date}
                  </span>
                </div>

                {/* meaning */}
                <p className="text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                  {card.meaning}
                </p>

                {/* extra description */}
                {card.description && (
                  <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.description}
                  </p>
                )}

                {/* tags */}
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                        accent.chip,
                        'font-mono text-[10px] font-bold',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', accent.dot)}
                      />
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* cta */}
                {card.cta && (
                  <a
                    href={card.cta.href}
                    target={isExternal(card.cta.href) ? '_blank' : undefined}
                    rel={isExternal(card.cta.href) ? 'noreferrer' : undefined}
                    className={cn(
                      'mt-1 group inline-flex items-center gap-1.5 self-start rounded-lg border px-3 py-1.5',
                      'border-emerald-300 bg-emerald-50 text-emerald-700',
                      'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
                      'text-xxsm font-mono font-bold',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2',
                    )}
                  >
                    <span>{card.cta.label}</span>
                    {isExternal(card.cta.href) ? (
                      <ExternalLinkIconFallback
                        aria-hidden="true"
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                      />
                    ) : (
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                      />
                    )}
                  </a>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
