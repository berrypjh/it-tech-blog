'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { MapDecoration } from '../components/MapDecoration';
import type { GithubReadingContent } from '../content';
import { ArrowRightIcon, CheckIcon, MissionIcon } from '../icons';

type Props = {
  content: GithubReadingContent['mission'];
  nextStep: GithubReadingContent['nextStep'];
};

export const PracticeMissionAndCTA = ({ content, nextStep }: Props) => {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="section-mission" aria-labelledby="heading-mission" className="space-y-lg">
      <SectionHeader
        id="mission"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MissionIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.items.map((m, idx) => {
          const isDone = !!done[m.id];
          return (
            <li key={m.id} className="flex">
              <button
                type="button"
                role="checkbox"
                aria-checked={isDone}
                onClick={() => toggle(m.id)}
                className={cn(
                  'group flex h-full w-full flex-col gap-sm rounded-lg border p-md sm:p-lg text-left transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  isDone
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)]'
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-[var(--term-accent)] motion-safe:hover:-translate-y-0.5',
                )}
              >
                <div className="flex items-start gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border',
                      isDone
                        ? 'border-[var(--term-accent)] bg-[var(--term-accent)] text-[var(--term-bg)]'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)]',
                    )}
                  >
                    {isDone && <CheckIcon className="h-3.5 w-3.5" />}
                  </span>
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <span
                      className="text-[10px] font-bold tabular-nums text-[var(--term-muted)]"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep [overflow-wrap:anywhere]">
                  {m.mission}
                </p>

                <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.checkLabel}
                  </span>
                  <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                    {m.check}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* 다음 페이지 CTA */}
      <Link
        href={nextStep.href}
        aria-labelledby="heading-next"
        className="group block rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <MapDecoration />

          <div className="flex min-w-0 flex-col gap-1">
            <p className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--term-accent)]"
              />
              {nextStep.eyebrow}
            </p>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {nextStep.title}
            </h2>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {nextStep.description}
            </p>
          </div>

          <span className="inline-flex items-center justify-center gap-2 self-stretch rounded-md bg-[var(--term-accent)] px-lg py-3 text-xsm font-bold text-[var(--term-bg)] transition-transform motion-safe:group-hover:translate-x-0.5 lg:self-auto">
            {nextStep.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
};
