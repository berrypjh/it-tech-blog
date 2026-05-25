import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { StartWithQuestionContent } from '../content';
import { ArrowRightIcon, FileCodeIcon, RouteIcon } from '../icons';

type Props = { content: StartWithQuestionContent['reactExamples'] };

export const ThreeReactExamplesSection = ({ content }: Props) => {
  return (
    <section
      id="section-react-examples"
      aria-labelledby="heading-react-examples"
      className="space-y-lg"
    >
      <SectionHeader
        id="react-examples"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                  'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                      t.chip,
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                    )}
                  >
                    <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', t.dot)} />
                    {card.label}
                  </span>
                </div>

                <p className="text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.question}
                </p>

                {/* Entry */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.entryLabel}
                  </span>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 self-start rounded-md border px-2 py-1',
                      t.chip,
                      'font-mono text-xsm font-bold',
                    )}
                  >
                    <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                    {card.entry}
                  </code>
                </div>

                {/* Path */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.pathLabel}
                  </span>
                  <ol className="flex flex-col gap-1">
                    {card.path.map((p, i) => (
                      <li key={p}>
                        <code
                          className={cn(
                            'flex items-center gap-1.5 rounded-md border px-2 py-1',
                            'border-[var(--term-border)] bg-[var(--term-surface)]',
                            'font-mono text-[11px] text-[var(--term-fg)]',
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              'inline-flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold tabular-nums',
                              t.chip,
                            )}
                          >
                            {i + 1}
                          </span>
                          <span className="truncate">{p}</span>
                        </code>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <Link
                    href={card.href}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xsm font-bold',
                      t.text,
                      'transition-transform motion-safe:group-hover:translate-x-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                    )}
                  >
                    <RouteIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {card.cta}
                    <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
