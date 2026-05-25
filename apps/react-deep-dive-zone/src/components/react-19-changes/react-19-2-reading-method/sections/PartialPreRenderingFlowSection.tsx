import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { ArrowDownIcon, ArrowRightIcon } from '../icons';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['ppr'] };

export const PartialPreRenderingFlowSection = ({ content }: Props) => (
  <section aria-labelledby="ppr-heading" className="flex flex-col">
    <SectionHeader
      id="ppr-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-md sm:grid-cols-1',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-md items-stretch',
      )}
    >
      {content.steps.map((step, idx) => {
        const t = tone[step.tone];
        const Icon = iconRegistry[step.iconKey];
        const isLast = idx === content.steps.length - 1;
        return (
          <Fragment key={step.number}>
            <li>
              <article
                className={cn(
                  'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                  t.border,
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                )}
              >
                <header className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
                      t.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                      t.chip,
                    )}
                  >
                    {step.number}
                  </span>
                </header>

                <h3 className={cn('text-md sm:text-lg font-bold break-keep leading-snug', t.text)}>
                  {step.title}
                </h3>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>

                {/* Inline code box */}
                {step.code && (
                  <pre
                    className={cn(
                      'overflow-x-auto rounded-xl border-2 px-3 py-2',
                      'border-slate-700/80 bg-slate-950',
                      'font-mono text-[11px] leading-relaxed',
                    )}
                  >
                    <code className="block whitespace-pre text-slate-200">{step.code}</code>
                  </pre>
                )}

                {/* Pieces */}
                {step.pieces && (
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {step.pieces.map((piece) => (
                      <li
                        key={piece.label}
                        className={cn('flex flex-col rounded-lg border px-2.5 py-1.5', t.chip)}
                      >
                        <code className={cn('font-mono text-[11px] font-bold', t.text)}>
                          {piece.label}
                        </code>
                        <span className="text-[10px] text-[var(--term-muted)] break-keep">
                          {piece.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
            {!isLast && (
              <li aria-hidden="true" className="flex justify-center items-center">
                <span
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full border-2',
                    t.iconChip,
                  )}
                >
                  <span className="hidden lg:inline-flex">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                  <span className="inline-flex lg:hidden">
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </span>
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  </section>
);
