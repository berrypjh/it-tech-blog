'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { FollowPackageBoundaryContent } from '../content';
import { ArrowRightIcon, CompassIcon, FileCodeIcon, ScanSearchIcon } from '../icons';
import { getPackageClasses, PackageBadge } from '../PackageBadge';

type Props = { content: FollowPackageBoundaryContent['navigator'] };

export const PackageNavigatorSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.options[0].id);
  const active = content.options.find((o) => o.id === activeId) ?? content.options[0];
  const pickedT = getPackageClasses(active.pickedPackage);
  const nextT = getPackageClasses(active.nextPackage);

  return (
    <section id="section-navigator" aria-labelledby="heading-navigator" className="space-y-lg">
      <SectionHeader
        id="navigator"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<CompassIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Question list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.options.map((opt) => {
                const isActive = opt.id === activeId;
                const ot = getPackageClasses(opt.pickedPackage);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="navigator-result"
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      'group flex items-start gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      isActive
                        ? cn(ot.chip, ot.border, 'shadow-[0_2px_0_var(--term-border)]')
                        : cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                        isActive
                          ? cn(ot.border, 'bg-white dark:bg-[var(--term-bg)]')
                          : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                      )}
                    >
                      {isActive && <span className={cn('block h-2 w-2 rounded-full', ot.dot)} />}
                    </span>

                    <span className="flex flex-col gap-1 min-w-0">
                      <span
                        className={cn(
                          'text-xsm sm:text-sm font-bold leading-snug break-keep',
                          isActive ? ot.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {opt.question}
                      </span>
                      <span className="inline-flex">
                        <PackageBadge packageKey={opt.pickedPackage} size="sm">
                          {opt.pickedPackage}
                        </PackageBadge>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result */}
          <article
            id="navigator-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              pickedT.border,
              pickedT.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected question */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.question}
              </span>
              <p
                className={cn('text-md sm:text-lg font-bold leading-snug break-keep', pickedT.text)}
              >
                {active.question}
              </p>
            </div>

            {/* First package */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.firstPackage}
              </span>
              <PackageBadge packageKey={active.pickedPackage} size="md" strong>
                {active.pickedPackage}
              </PackageBadge>
            </div>

            {/* Files */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.files}
              </span>
              <ul className="flex flex-col gap-1">
                {active.files.map((file) => (
                  <li key={file}>
                    <code
                      className={cn(
                        'flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1',
                        'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                        'font-mono text-[11px] text-[var(--term-fg)]',
                      )}
                    >
                      <FileCodeIcon
                        className={cn('h-3 w-3 shrink-0', pickedT.text)}
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap">{file}</span>
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            {/* Boundary → Next package */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.nextPackage}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <PackageBadge packageKey={active.pickedPackage} size="md">
                  {active.pickedPackage}
                </PackageBadge>
                <ArrowRightIcon className={cn('h-4 w-4', nextT.text)} aria-hidden="true" />
                <PackageBadge packageKey={active.nextPackage} size="md" strong>
                  {active.nextPackage}
                </PackageBadge>
              </div>
            </div>

            {/* Reading point */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.readingPoint}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'border-amber-300 bg-amber-50 text-amber-900',
                  'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
                )}
              >
                <ScanSearchIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-xsm font-bold leading-snug break-keep">{active.readingPoint}</p>
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.keywords}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {active.keywords.map((kw) => (
                  <li key={kw}>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                        'bg-white dark:bg-[var(--term-bg)]',
                        pickedT.border,
                        pickedT.text,
                        'font-mono text-[10px] font-bold',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', pickedT.dot)}
                      />
                      {kw}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
