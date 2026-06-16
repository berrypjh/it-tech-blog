'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ToneKey } from '../../../shared/tones';
import { RepoTreeCard } from '../components/RepoTreeCard';
import type { RepoOverviewContent } from '../content';
import { CheckCircleIcon, FileTextIcon, FolderIcon, LightbulbIcon, MapIcon } from '../icons';

type Props = { content: RepoOverviewContent['miniMap'] };

/** content의 tone을 amber 하우스 3색(A/B/C) 텍스트로 매핑한다. 트리 행과 동일 규칙. */
const houseTextByTone: Record<ToneKey, string> = {
  amber: 'text-[var(--term-accent)]',
  emerald: 'text-[var(--term-accent)]',
  teal: 'text-[var(--term-accent)]',
  sky: 'text-sky-600 dark:text-sky-300',
  blue: 'text-sky-600 dark:text-sky-300',
  cyan: 'text-sky-600 dark:text-sky-300',
  violet: 'text-violet-600 dark:text-violet-300',
  indigo: 'text-violet-600 dark:text-violet-300',
};

const houseMarkerByTone: Record<ToneKey, string> = {
  amber: 'bg-[var(--term-accent)]',
  emerald: 'bg-[var(--term-accent)]',
  teal: 'bg-[var(--term-accent)]',
  sky: 'bg-sky-400 dark:bg-sky-500',
  blue: 'bg-sky-400 dark:bg-sky-500',
  cyan: 'bg-sky-400 dark:bg-sky-500',
  violet: 'bg-violet-400 dark:bg-violet-500',
  indigo: 'bg-violet-400 dark:bg-violet-500',
};

export const RepoRootMiniMap = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState(content.defaultSelected);
  const detail = content.details[selectedId] ?? content.details[content.defaultSelected];
  const isDir = content.treeRows.find((r) => r.id === selectedId)?.kind === 'dir';
  const toneText = houseTextByTone[detail.tone];
  const toneMarker = houseMarkerByTone[detail.tone];

  return (
    <section aria-labelledby="heading-mini-map" className="space-y-md">
      <SectionHeader
        id="mini-map"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg items-stretch">
        <RepoTreeCard
          header={content.treeHeader}
          rows={content.treeRows}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <article
          className={cn(
            'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg transition-colors',
          )}
          aria-live="polite"
        >
          <header className="flex items-center justify-between gap-sm">
            <div className="flex items-center gap-sm min-w-0">
              <span
                aria-hidden="true"
                className="inline-flex w-11 h-11 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]"
              >
                {isDir ? (
                  <FolderIcon className={cn('h-5 w-5', toneText)} aria-hidden="true" />
                ) : (
                  <FileTextIcon className={cn('h-5 w-5', toneText)} aria-hidden="true" />
                )}
              </span>
              <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', toneText)}>
                {detail.title}
              </h3>
            </div>
            {detail.badge && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-medium text-[var(--term-muted)]">
                <span
                  aria-hidden="true"
                  className={cn('inline-block w-1 h-1 rounded-full', toneMarker)}
                />
                {detail.badge}
              </span>
            )}
          </header>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {detail.description}
          </p>

          <ul className="flex flex-col gap-2">
            {detail.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  className={cn('mt-0.5 h-4 w-4 shrink-0', toneText)}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {detail.recommendation && (
            <div
              className={cn(
                'mt-auto flex items-start gap-2 rounded-md border p-3',
                'border-dashed border-[var(--term-border)] text-xsm break-keep',
                'bg-[var(--term-surface)] text-[var(--term-fg)]',
              )}
            >
              <LightbulbIcon
                className={cn('mt-0.5 h-4 w-4 shrink-0', toneText)}
                aria-hidden="true"
              />
              <span>{detail.recommendation}</span>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};
