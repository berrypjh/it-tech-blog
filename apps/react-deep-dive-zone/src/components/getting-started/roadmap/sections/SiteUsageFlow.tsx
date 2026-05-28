import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RoadmapContent } from '../content';
import { ChevronRightIcon, PencilIcon, usageIconByName } from '../icons';
import { tones } from '../tones';

type Props = { content: RoadmapContent['usage'] };

export const SiteUsageFlow = ({ content }: Props) => {
  return (
    <section id="section-usage" aria-labelledby="heading-usage" className="space-y-lg">
      <SectionHeader
        id="usage"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<PencilIcon className="h-5 w-5" />}
      />

      <article className="rounded-lg border border-[var(--term-border)] bg-gradient-to-br from-sky-50/50 via-white to-teal-50/40 dark:from-sky-950/30 dark:via-transparent dark:to-teal-950/20 p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
          {content.steps.map((step, idx) => {
            const t = tones[step.tone];
            const Icon = usageIconByName[step.icon];
            const isLast = idx === content.steps.length - 1;
            return (
              <Fragment key={step.num}>
                <li className="flex">
                  <article
                    className={cn(
                      'group relative flex flex-col items-center text-center w-full gap-sm',
                      'rounded-lg border bg-white dark:bg-slate-900 p-md transition-all',
                      'hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                      t.border,
                    )}
                  >
                    {/* num circle (dark navy 권장) */}
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-900 shadow-[0_2px_0_var(--term-border)] text-sm font-bold tabular-nums"
                    >
                      {step.num}
                    </span>

                    {/* icon */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex items-center justify-center w-9 h-9 rounded-md',
                        t.iconBg,
                        t.iconText,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight', t.text)}>
                      {step.title}
                    </h3>

                    <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                      {step.description.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </article>
                </li>
                {!isLast && (
                  <li
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center text-sky-500 dark:text-sky-400"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </article>
    </section>
  );
};
