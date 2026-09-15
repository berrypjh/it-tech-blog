import { cx } from '@berrypjh/react-ui';
import { ArrowRight, CheckCircle2, RefreshCcw, ShieldCheck } from 'lucide-react';

import type { React19ErrorReportingContent } from '../content';
import { callbackAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ErrorReportingContent['scenarios'] };

export const LoggingScenariosSection = ({ content }: Props) => (
  <section aria-labelledby="scenarios-heading" className="flex flex-col gap-md">
    <SectionHeader id="scenarios-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2">
      {content.cards.map((card) => {
        const accent = callbackAccent[card.kind];
        const Icon = card.kind === 'caught' ? ShieldCheck : RefreshCcw;
        return (
          <article
            key={card.title}
            className={cx(
              'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
              accent.border,
              accent.bg,
              'shadow-[0_2px_0_var(--term-border)]',
              'transition-transform motion-safe:hover:-translate-y-0.5',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  accent.iconChip,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <h3 className={cx('text-md font-bold break-keep', accent.text)}>{card.title}</h3>
            </header>

            <ol className="flex flex-col gap-1.5">
              {card.steps.map((step, i) => {
                const isLast = i === card.steps.length - 1;
                return (
                  <li key={step} className="flex flex-col gap-0.5">
                    <div
                      className={cx(
                        'flex items-center gap-2 rounded-lg border bg-white px-2.5 py-1.5',
                        'dark:bg-[var(--term-bg)]',
                        accent.border,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cx(
                          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                          accent.solidBg,
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                        {step}
                      </span>
                    </div>
                    {!isLast && (
                      <ArrowRight
                        aria-hidden="true"
                        className={cx('h-3.5 w-3.5 ml-2 rotate-90', accent.text)}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            <ul className="mt-auto flex flex-col gap-1.5 pt-md border-t border-slate-200/60 dark:border-slate-700/40">
              {card.checks.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className={cx('mt-0.5 h-4 w-4 shrink-0', accent.text)}
                  />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  </section>
);
